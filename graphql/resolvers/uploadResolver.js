const { readFile } = require("../middleware/file");
const { UploadFile } = require("../../models/uploadFile");

module.exports = {
  Query: {
    greetings: () => {
      return "Hello World";
    },
    getAllUserImage: async (parent, args, context, info) => {
      const userVal = await await UploadFile.find();
      const newUserVal = userVal.filter((val) => val.userId !== args.id);
      return newUserVal;
    },
    getSingleUserFile: async (parent, args, context, info) => {
      const userVal = await UploadFile.find();
      const newUserVal = userVal.filter((val) => val.userId === args.id);
      return newUserVal;
    },
  },
  Mutation: {
    singleUpload: async (_, { file }) => {
      const imageUrl = await readFile(file.file);
      const { id, username, postname, description } = file; 
      const uploadFile = new UploadFile({
        userId: id,
        image: imageUrl,
        username: username,
        postname: postname,
        description: description,
      });
      await uploadFile.save();
      return {
        message: "Single file uploaded successfully!",
      };
    },
    updateLikeDislike: async (parent, args, context, info) => {
      const userVal = await UploadFile.findById(args.imageId);
      if (userVal.count.includes(args.userId)) {
        const updatedValue = userVal.count.filter((val) => val !== args.userId);
        await userVal.updateOne({ $set: { count: updatedValue } });
        return {
          message: "Post has been disliked!",
        };
      } else {
        await userVal.updateOne({ $push: { count: args.userId } });
        return {
          message: "Post has been liked!",
        };
      }
    },
  },
};
