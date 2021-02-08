const {
    GraphQLObjectType,
    GraphQLInt,
    GraphQLString
} = require("graphql")

const Achievement = new GraphQLObjectType({
    name: "Achievement",
    description: "This represents an Achievement",
    fields: () => {
        return {
            id: {
                type: GraphQLInt,
                resolve(achievement) {
                    return achievement.id;
                }
            },
            name: {
                type: GraphQLString,
                resolve(achievement) {
                    return achievement.name;
                }
            },
            description: {
                type: GraphQLString,
                resolve(achievement) {
                    return achievement.description;
                }
            },
            type: {
                type: GraphQLString,
                resolve(achievement) {
                    return achievement.type;
                }
            },
            level: {
                type: GraphQLInt,
                resolve(achievement) {
                    return achievement.level;
                }
            }
        }
    }
})

module.exports = Achievement;