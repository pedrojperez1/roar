const {
    GraphQLObjectType,
    GraphQLInt,
    GraphQLString,
    GraphQLList
} = require("graphql")
const db = require("../db")
const User = require("./User")
const Ladder = require("./Ladder")
const Assignment = require("./Assignment")
const FeedPost = require("./FeedPost")
const Achivement = require("./Achivement")
const { getUserId } = require("../utils")

const Query = new GraphQLObjectType({
    name: "Query",
    description: "This is a root query",
    fields: () => {
        return {
            users: {
                type: new GraphQLList(User),
                args: {
                    id: { type: GraphQLInt },
                    username: { type: GraphQLString }
                },
                resolve(root, args) {
                    return db.models.users.findAll({where: args})
                }
            },
            ladders: {
                type: new GraphQLList(Ladder),
                args: {
                    id: { type: GraphQLInt }
                },
                resolve(root, args) {
                    return db.models.ladders.findAll({where: args});
                }
            },
            assignments: {
                type: new GraphQLList(Assignment),
                resolve(root, args) {
                    return db.models.assignments.findAll({where: args});
                }
            },
            getMyLadders: {
                type: new GraphQLList(Ladder),
                async resolve(_, args, context) {
                    const userId = getUserId(context);
                    const user = await db.models.users.findByPk(userId);
                    return await user.getLadders();
                }
            },
            getMyFeed: {
                type: new GraphQLList(FeedPost),
                async resolve(_, args, context) {
                    const userId = getUserId(context);
                    const user = await db.models.users.findByPk(userId);
                    return await user.getFeedposts();
                }
            },
            getUserFeed: {
                type: new GraphQLList(FeedPost),
                args: {
                    username: { type: GraphQLString }
                },
                async resolve(root, args, context) {
                    const userId = getUserId(context);
                    if (userId) {
                        const requestedUser = await db.models.users.findOne({where: args});
                        return requestedUser.getFeedposts();
                    }
                }
            },
            getMyProfile: {
                type: User,
                resolve(root, args, context) {
                    const userId = getUserId(context);
                    return db.models.users.findByPk(userId);
                }
            },
            getMyFollowers: {
                type: new GraphQLList(User),
                async resolve(root, args, context) {
                    const userId = getUserId(context);
                    const user = await db.models.users.findByPk(userId);
                    return await user.getFollowers();
                }
            },
            getMyFollowing: {
                type: new GraphQLList(User),
                async resolve(root, args, context) {
                    const userId = getUserId(context);
                    const user = await db.models.users.findByPk(userId);
                    return await user.getFollowing(); 
                }
            },
            getUserAchievements: {
                type: new GraphQLList(Achivement),
                args: { 
                    username: { type: GraphQLString }
                },
                async resolve(root, args, context) {
                    const userId = getUserId(context);
                    if (userId) {
                        const user = await db.models.users.findOne({where: args});
                        return await user.getAchievements();
                    } else {
                        throw new Error("Not authorized.")
                    }
                }
            },
            fetchProfile: {
                type: User,
                args: {
                    username: { type: GraphQLString }
                },
                resolve(root, args, context) {
                    const userId = getUserId(context);
                    if (userId) {
                        return db.models.users.findOne({where: args})
                    }
                }
            }
        }
    }
})

module.exports = Query;