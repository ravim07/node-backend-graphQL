const User = require("../../models/user");
const Auth = require("../../services/auth.service");

module.exports = {
  Mutation: {
    signup: async (parent, args, context, info) => {
      const { email, username, password } = args.user;
      const user = new User({
        email,
        username,
        password,
      });
      const newUser = await user.save();
      return { ...newUser._doc, _id: newUser.id };
    },

    login: async (parent, args, context, info) => {
      try {
        const { email, password } = args.user;
        if (!email) throw new Error("Email required");
        if (!password) throw new Error("Password required");
        const userPayload = email ? { email } : { username };
        const userVal = await User.findOne(userPayload);
        if (!userVal) throw new Error("user not found", userPayload);
        if (password !== userVal.password) throw new Error("invalid password");
        return {
          jwt: Auth.generateJwt({
            userId: userVal.id,
            username: userVal.username,
            email: userVal.email,
          }),
          id: userVal.id,
          username: userVal.username,
        };
      } catch (error) {
        throw error;
      }
    },
  },
};
