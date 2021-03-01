const {
    GraphQLObjectType,
    GraphQLInt,
    GraphQLString,
    GraphQLList,
    GraphQLBoolean
} = require("graphql")
const Ladder = require("./Ladder")

const User = new GraphQLObjectType({
    name: "User",
    description: "This represents a User",
    fields: () => {
        return {
            id: {
                type: GraphQLInt,
                resolve(user) {
                    return user.id;
                }
            },
            username: {
                type: GraphQLString,
                resolve(user) {
                    return user.username;
                }
            },
            password: {
                type: GraphQLString,
                resolve(user) {
                    return user.password;
                }
            },
            profileImage: {
                type: GraphQLString,
                resolve(user) {
                    return user.profileImage;
                }
            },
            emailNotifications: {
                type: GraphQLBoolean,
                resolve(user) {
                    return user.emailNotifications
                }
            },
            email: {
                type: GraphQLString,
                resolve(user) {
                    return user.email
                }
            },
            isPublic: {
                type: GraphQLBoolean,
                resolve(user) {
                    return user.isPublic
                }
            },
            isNew: {
                type: GraphQLBoolean,
                resolve(user) {
                    return user.isNew
                }
            },
            createdAt: {
                type: GraphQLString,
                resolve(user) {
                    return user.createdAt;
                }
            },
            ladders: {
                type: new GraphQLList(Ladder),
                resolve(user) {
                    return user.getLadders();
                }
            },
            following: {
                type: new GraphQLList(User),
                resolve(user) {
                    return user.getFollowing();
                }
            },
            followers: {
                type: new GraphQLList(User),
                resolve(user) {
                    return user.getFollowers();
                }
            }
        }
    }
})

module.exports = User;