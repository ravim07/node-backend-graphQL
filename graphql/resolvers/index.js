const uploadResolver = require("./uploadResolver");

const { GraphQLUpload } = require("graphql-upload");
const authResolver = require("./authResolver");

const customResolvers = {
  Upload: GraphQLUpload,
};

module.exports = [customResolvers, uploadResolver, authResolver];
