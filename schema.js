const { GraphQLSchema } = require("graphql")
const Query = require("./graphql/Query")
const Mutation = require("./graphql/Mutation")

const Schema = new GraphQLSchema({
    query: Query,
    mutation: Mutation
});

module.exports = Schema;