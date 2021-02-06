const {
    GraphQLObjectType,
    GraphQLInt,
    GraphQLString,
    GraphQLList
} = require("graphql")
const Ladder = require("./Ladder")

const User = new GraphQLObjectType({
    name: "User",
    description: "This represents a User",
    fields: () => {
        return {
            id: {
                type: GraphQLInt,
                resolve(person) {
                    return person.id;
                }
            },
            username: {
                type: GraphQLString,
                resolve(person) {
                    return person.username;
                }
            },
            password: {
                type: GraphQLString,
                resolve(person) {
                    return person.password;
                }
            },
            profileImage: {
                type: GraphQLString,
                resolve(person) {
                    return person.profileImage;
                }
            },
            createdAt: {
                type: GraphQLString,
                resolve(person) {
                    return person.createdAt;
                }
            },
            ladders: {
                type: new GraphQLList(Ladder),
                resolve(person) {
                    return person.getLadders();
                }
            },
            following: {
                type: new GraphQLList(User),
                resolve(person) {
                    return person.getFollowing();
                }
            },
            followers: {
                type: new GraphQLList(User),
                resolve(person) {
                    return person.getFollowers();
                }
            }
        }
    }
})

module.exports = User;