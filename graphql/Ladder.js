const {
    GraphQLObjectType,
    GraphQLInt,
    GraphQLString,
    GraphQLList
} = require("graphql")
const Assignment = require("./Assignment")

const Ladder = new GraphQLObjectType({
    name: "Ladder",
    description: "This represents a Ladder",
    fields: () => {
        return {
            id: {
                type: GraphQLInt,
                resolve(ladder) {
                    return ladder.id;
                }
            },
            name: {
                type: GraphQLString,
                resolve(ladder) {
                    return ladder.name;
                }
            },
            level1: {
                type: GraphQLString,
                resolve(ladder) {
                    return ladder.level1
                }
            },
            level2: {
                type: GraphQLString,
                resolve(ladder) {
                    return ladder.level2
                }
            },
            level3: {
                type: GraphQLString,
                resolve(ladder) {
                    return ladder.level3
                }
            },
            level4: {
                type: GraphQLString,
                resolve(ladder) {
                    return ladder.level4
                }
            },
            level5: {
                type: GraphQLString,
                resolve(ladder) {
                    return ladder.level5
                }
            },
            level6: {
                type: GraphQLString,
                resolve(ladder) {
                    return ladder.level6
                }
            },
            level7: {
                type: GraphQLString,
                resolve(ladder) {
                    return ladder.level7
                }
            },
            level8: {
                type: GraphQLString,
                resolve(ladder) {
                    return ladder.level8
                }
            },
            createdAt: {
                type: GraphQLString,
                resolve(ladder) {
                    return ladder.createdAt
                }
            },
            assignments: {
                type: new GraphQLList(Assignment),
                resolve(ladder) {
                    return ladder.getAssignments();
                }
            }
        }
    }
})

module.exports = Ladder;