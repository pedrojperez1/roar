const {
    GraphQLString,
    GraphQLInputObjectType,
    GraphQLNonNull
} = require("graphql")

const Activity = new GraphQLInputObjectType({
    name: "Activity",
    fields: {
        task: { type: new GraphQLNonNull(GraphQLString) }
    }
})

module.exports = Activity