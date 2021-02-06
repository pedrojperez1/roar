const {
    GraphQLObjectType,
    GraphQLString
} = require("graphql")

const AuthPayload = new GraphQLObjectType({
    name: "AuthPayload",
    description: "This represents an authentication payload",
    fields: () => {
        return {
            username: { type: GraphQLString },
            token: { type: GraphQLString }
        }
    }
})

module.exports = AuthPayload;