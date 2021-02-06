const {
    GraphQLObjectType,
    GraphQLInt,
    GraphQLString,
    GraphQLBoolean
} = require("graphql")

const Assignment = new GraphQLObjectType({
    name: "Assignment",
    description: "This represents an Assignment",
    fields: () => {
        return {
            id: {
                type: GraphQLInt,
                resolve(assignment) {
                    return assignment.id;
                }
            },
            task: {
                type: GraphQLString,
                resolve(assignment) {
                    return assignment.task;
                }
            },
            level: {
                type: GraphQLInt,
                resolve(assignment) {
                    return assignment.level;
                }
            },
            dueDate: {
                type: GraphQLString,
                resolve(assignment) {
                    return assignment.dueDate;
                }
            },
            completed: {
                type: GraphQLBoolean,
                resolve(assignment) {
                    return assignment.completed;
                }
            }
        }
    }
})

module.exports = Assignment;