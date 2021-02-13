const {
    GraphQLInt,
    GraphQLString,
    GraphQLInputObjectType,
    GraphQLNonNull
} = require("graphql")

const Activity = new GraphQLInputObjectType({
    name: "Activity",
    fields: {
        task: { type: new GraphQLNonNull(GraphQLString) },
        level: { type: new GraphQLNonNull(GraphQLInt) }
    }
})

module.exports = Activity