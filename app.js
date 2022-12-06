// const express = require("express");
// const mongoose = require('mongoose')
// const graphqlHttp = require("express-graphql").graphqlHTTP;
// const cors = require('cors');
// const {graphqlUploadExpress} = require('graphql-upload');
// const apolloServer = require("./apollo");

// // const Auth = require('./services/auth.service')
// const graphqlSchema = require('./graphql/schema/index')
// const resolvers = require('./graphql/resolvers/index');
// const { addPath } = require("graphql/jsutils/Path");

// async function startServer() {
//   app.use(graphqlUploadExpress());
//   await apolloServer.start();
//   apolloServer.applyMiddleware({app});
//   app.use('/', (req, res) => {
//     res.send("Welcome to Graphql Upload!")
// })
// };

// const app = express()
// app.use(cors());
// // app.use(graphqlUploadExpress())
// // apolloServer.applyMiddleware({app,cors: false});
// startServer()
// app.use(
//   "/graphql",
//   graphqlHttp({
//     schema: graphqlSchema,
//     rootValue: resolvers,
//     graphiql: true,
//   })
// )
// const uri = `mongodb+srv://Ravindra:Ravindra%40123@cluster0.xpgkfac.mongodb.net/userInfo?retryWrites=true&w=majority`
// const options = { useNewUrlParser: true, useUnifiedTopology: true }
// mongoose
//   .connect(uri, options)
//   .then(() => app.listen(4000, console.log("Server is running on local host 4000")))
//   .catch(error => {
//     throw error
//   })
const express = require("express");
const cors = require("cors");
const graphqlSchema = require('./graphql/schema/index')
const resolvers = require('./graphql/resolvers/index')
const graphqlHttp = require("express-graphql").graphqlHTTP;


const app = express();

app.use(express.json());
app.use(cors());
app.use(express.static('public')); 
app.use('/Upload', express.static('Upload'));

module.exports = app