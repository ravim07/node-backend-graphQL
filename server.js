require("dotenv/config");
const mongoose = require("mongoose");
const { graphqlUploadExpress } = require("graphql-upload");

const app = require("./app");
const apolloServer = require("./apollo");

async function startServer() {
  app.use(graphqlUploadExpress());
  await apolloServer.start();
  apolloServer.applyMiddleware({ app });
  // app.use('/', (req, res) => {
  //     res.send("Welcome to Graphql Upload!")
  // })
}

startServer();
const port = process.env.PORT | 4000;
const options = { useNewUrlParser: true, useUnifiedTopology: true };
mongoose
  .connect(`mongodb+srv://Ravindra:Ravindra%40123@cluster0.xpgkfac.mongodb.net/userInfo`, options)
  .then(() => console.log("MongoDB Connected Successfully!"))
  .catch((err) => console.log("MongoDB Connection Failed!"));
app.listen(port, () => {
  console.log(`App is running on port ${port}`);
  console.log(`Graphql EndPoint Path: ${apolloServer.graphqlPath}`);
});
