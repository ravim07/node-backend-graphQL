const { gql } = require("apollo-server-express");

module.exports = gql`
  type File {
    _id: ID!
    path: String!
    filename: String!
    mimetype: String!
    encoding: String!
    count: [String]
  }
  type GetFile {
    _id: ID
    image: String!
    username: String
    count: [String]
    userId: ID
  }
  input FileInput {
    id: String!
    file: Upload!
    username: String!
    count: [String]
  }
  extend type Query {
    greetings: String
    getAllUserImage(id: ID): [GetFile]!
    getSingleUserFile(id: ID, username: String): [GetFile]!
  }
  extend type Mutation {
    singleUpload(file: FileInput!): SuccessMessage
    updateLikeDislike(userId: ID!, imageId: ID!): SuccessMessage
  }
  type SuccessMessage {
    message: String
  }
`;
