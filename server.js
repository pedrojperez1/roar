const express = require("express");
const cors = require("cors");
const { graphqlHTTP } = require("express-graphql");
const Schema = require("./schema");

// Config
const APP_PORT = process.env.PORT || 4000;

const app = express();

app.use(cors());
app.use(
    '/graphql',
    graphqlHTTP({
      schema: Schema,
      graphiql: true,
    }),
  );

app.listen(APP_PORT, () => {
    console.log(`App running on port ${APP_PORT}`);
});