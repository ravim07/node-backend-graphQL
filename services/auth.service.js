const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const jwtKey = 'e-comm';

// retrieve env vars

class Auth {
  constructor() {}

  static async hashPassword(pwd) {
    const saltRounds = 10;
    const salt = bcrypt.genSaltSync(saltRounds);
    return bcrypt.hashSync(pwd, salt);
  }

  static async matchPasswords(requestPwd, userPwd) {
    return bcrypt.compare(requestPwd, userPwd)
  }

  static generateJwt({ username, email, userId }) {
    return jwt.sign(
      { userId, email, username },
      jwtKey,
      { expiresIn: '30 days' },
    )
  }

  static getJwtPayload(token) {
    return jwt.verify(token, process.env.TOKEN_SECRET);
  }

  static getUserId({ req = {}, authToken = '' }) {
    if (req.request?.headers) {
      const authHeader = req.request.headers.authorization
      if (authHeader) {
        const token = authHeader.replace('Bearer ', '')
        if (!token) {
          return null
        }
        const { userId } = this.getJwtPayload(token)
        return userId;
      }
    } else if (authToken) {
      const { userId } = this.getJwtPayload(authToken)
      return userId
    }
  
    return null
  }
}

module.exports = Auth