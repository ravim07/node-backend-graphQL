const { gql } = require("apollo-server-express");

const uploadTypeDefs = require("./uploadType");
const authTypeDefs = require("./authType");

const typeDefs = gql`
  scalar Upload
  type Query {
    _: String
  }
  type Mutation {
    _: String
  }
`;

module.exports = [typeDefs, uploadTypeDefs, authTypeDefs];
