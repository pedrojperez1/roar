const {
    GraphQLObjectType,
    GraphQLInt,
    GraphQLString,
    GraphQLNonNull
} = require("graphql")
const db = require("../db")
const Ladder = require("./Ladder")
const AuthPayload = require("./AuthPayload")
const FeedPost = require("./FeedPost")
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
                    level1: { type: GraphQLString },
                    level2: { type: GraphQLString },
                    level3: { type: GraphQLString },
                    level4: { type: GraphQLString },
                    level5: { type: GraphQLString },
                    level6: { type: GraphQLString },
                    level7: { type: GraphQLString },
                    level8: { type: GraphQLString }
                },
                async resolve(_, args, context) {
                    const userId = getUserId(context);
                    const user = await db.models.users.findByPk(userId);
                    const newLadder = await user.createLadder({
                        name: args.name,
                        level1: args.level1,
                        level2: args.level2,
                        level3: args.level3,
                        level4: args.level4,
                        level5: args.level5,
                        level6: args.level6,
                        level7: args.level7,
                        level8: args.level8
                    });
                    const levels = Object.keys(args).filter(k => k.includes("level"));
                    levels.forEach(level => {
                        if (args[level]) {
                            const firstDueDate = genDueDate(level);
                            newLadder.createAssignment(
                                {
                                    task: args[level], 
                                    level: Number(level[5]), 
                                    dueDate: firstDueDate.format()
                                }
                            );
                            newLadder.createAssignment(
                                {
                                    task: args[level], 
                                    level: Number(level[5]), 
                                    dueDate: firstDueDate.add(2, "day").format()
                                }
                            );
                            newLadder.createAssignment(
                                {
                                    task: args[level], 
                                    level: Number(level[5]), 
                                    dueDate: firstDueDate.add(4, "day").format()
                                }
                            );
                        }
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