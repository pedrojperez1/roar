const {
    GraphQLObjectType,
    GraphQLInt,
    GraphQLString,
    GraphQLNonNull,
    GraphQLList
} = require("graphql")
const db = require("../db")
const Ladder = require("./Ladder")
const AuthPayload = require("./AuthPayload")
const FeedPost = require("./FeedPost")
const Activity = require("./Activity")
const bcrypt = require("bcrypt")
const { BCRYPT_WORK_FACTOR, SECRET_KEY } = require("../config")
const jwt = require("jsonwebtoken")
const { genDueDate, getUserId, checkForAchievements } = require("../utils")


const Mutation = new GraphQLObjectType({
    name: "Mutation",
    description: "This provides functions to create objects in db",
    fields: () => {
        return {
            addUser: {
                type: AuthPayload,
                args: {
                    username: {
                        type: new GraphQLNonNull(GraphQLString)
                    },
                    password: {
                        type: new GraphQLNonNull(GraphQLString)
                    }
                },
                async resolve(_, args) {
                    const hashedPw = await bcrypt.hash(args.password, BCRYPT_WORK_FACTOR);
                    const newUser = await db.models.users.create({
                        username: args.username,
                        password: hashedPw
                    });
                    return {
                        username: newUser.username,
                        token: jwt.sign({ userId: newUser.id }, SECRET_KEY)
                    }
                }
            },
            login: {
                type: AuthPayload,
                args: {
                    username: {
                        type: new GraphQLNonNull(GraphQLString)
                    },
                    password: {
                        type: new GraphQLNonNull(GraphQLString)
                    }
                },
                async resolve(_, args) {
                    const user = await db.models.users.findOne({where: {username: args.username}});
                    if (user) {
                        const isValid = await bcrypt.compare(args.password, user.password);
                        if (isValid) {
                            return {
                                username: user.username,
                                token: jwt.sign({ userId: user.id }, SECRET_KEY)
                            }
                        }
                    }
                    return {
                        error: "Invalid username/password"
                    }
                }
            },
            addLadder: {
                type: Ladder,
                args: {
                    name: { type: new GraphQLNonNull(GraphQLString) },
                    activities: { type: new GraphQLNonNull(GraphQLList(Activity)) },
                    summit: { type: GraphQLNonNull(GraphQLString) }
                },
                async resolve(_, args, context) {
                    const ladderData = {}
                    ladderData.name = args.name
                    args.activities.forEach(a => ladderData[`level${a.level}`] = a.task)
                    const userId = getUserId(context); // get user
                    const user = await db.models.users.findByPk(userId)
                    const newLadder = await user.createLadder(ladderData) // create ladder for user
                    args.activities.forEach((activity, idx) => { // create 3 assignments per activity
                        const firstDueDate = genDueDate(idx)
                        newLadder.createAssignment(
                            {
                                task: activity.task, 
                                level: activity.level, 
                                dueDate: firstDueDate.format()
                            }
                        );
                        newLadder.createAssignment(
                            {
                                task: activity.task, 
                                level: activity.level,
                                dueDate: firstDueDate.add(2, "day").format()
                            }
                        );
                        newLadder.createAssignment(
                            {
                                task: activity.task, 
                                level: activity.level, 
                                dueDate: firstDueDate.add(4, "day").format()
                            }
                        );
                        
                    });
                    return newLadder
                }
            },
            completeAssignment: {
                type: GraphQLString,
                args: {
                    id: { type: GraphQLInt }
                },
                async resolve(_, args) {
                    const assignment = await db.models.assignments.findByPk(args.id);
                    assignment.completed = true;
                    await assignment.save();
                    const ladder = await assignment.getLadder();
                    const user = await ladder.getUser();
                    checkForAchievements("assignment", user);
                    return 'success';
                }
            },
            addFeedPost: {
                type: FeedPost,
                args: {
                    content: { type: new GraphQLNonNull(GraphQLString) },
                    type: { type: new GraphQLNonNull(GraphQLString) }
                },
                async resolve(_, args, context) {
                    const userId = getUserId(context);
                    const user = await db.models.users.findByPk(userId);
                    const feedpost = await user.createFeedpost({
                        content: args.content,
                        type: args.type
                    });
                    checkForAchievements("post", user);
                    return feedpost;
                }
            },
            followUser: {
                type: GraphQLString,
                args: {
                    username: { type: GraphQLString }
                },
                async resolve(_, args, context) {
                    const userId = getUserId(context);
                    const user = await db.models.users.findByPk(userId);
                    const userToFollow = await db.models.users.findOne({where: args});
                    const following = await user.addFollowing(userToFollow);
                    checkForAchievements("follow", user);
                    return following ? "success" : "error"
                }
            },
            unfollowUser: {
                type: GraphQLString,
                args: {
                    username: { type: GraphQLString }
                },
                async resolve(_, args, context) {
                    const userId = getUserId(context);
                    const user = await db.models.users.findByPk(userId);
                    const userToUnfollow = await db.models.users.findOne({where: args});
                    const following = await user.removeFollowing(userToUnfollow);
                    return following ? "success" : "error"
                }
            }
        }
    }
})

module.exports = Mutation;