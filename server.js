const express = require('express');
const graphqlHTTP = require('express-graphql');
const schema = require('./lib/schema');

const app = express();

app.use('/graphql', graphqlHTTP({
  schema,
  graphiql: true,
}));

app.listen(5000);
