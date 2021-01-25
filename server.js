const express = require("express");
const cors = require("cors");
const { graphqlHTTP } = require("express-graphql");
const Schema = require("./schema");

// Config
const APP_PORT = process.env.PORT || 4000;

const app = express();

app.use(cors());

if (process.env.NODE_ENV === 'production') {
  // Exprees will serve up production assets
  app.use(express.static('client/build'));

  // Express serve up index.html file if it doesn't recognize route
  const path = require('path');
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
};

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