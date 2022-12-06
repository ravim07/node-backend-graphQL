const { gql } = require("apollo-server-express");

module.exports = gql`
  type User {
    id: ID!
    email: String!
    username: String!
    password: String!
  }
  input UserInput {
    email: String!
    username: String!
    password: String!
  }
  input LoginInput {
    email: String!
    password: String!
  }
  type Token {
    jwt: ID!
    id: ID!
    username: String!
  }
  extend type Mutation {
    signup(user: UserInput!): User!
    login(user: LoginInput): Token!
  }
`;
