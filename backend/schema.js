const {
    GraphQLObjectType,
    GraphQLInt,
    GraphQLString,
    GraphQLBoolean,
    GraphQLList,
    GraphQLSchema,
    GraphQLNonNull,
    GraphQLScalarType
} = require("graphql");
const db = require("./db");
const bcrypt = require("bcrypt");
const { BCRYPT_WORK_FACTOR, SECRET_KEY } = require("./config");
const jwt = require("jsonwebtoken");
const { genDueDate, getUserId } = require("./utils");

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
            email: {
                type: GraphQLString,
                resolve(person) {
                    return person.email;
                }
            },
            ladders: {
                type: new GraphQLList(Ladder),
                resolve(person) {
                    return person.getLadders();
                }
            }
        }
    }
});

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
            assignments: {
                type: new GraphQLList(Assignment),
                resolve(ladder) {
                    return ladder.getAssignments();
                }
            }
        }
    }
});

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
});

const FeedPost = new GraphQLObjectType({
    name: "FeedPost",
    description: "This represents a post to a user's feed",
    fields: () => {
        return {
            id: {
                type: GraphQLInt,
                resolve(feedpost) {
                    return feedpost.id;
                }
            },
            content: {
                type: GraphQLString,
                resolve(feedpost) {
                    return feedpost.content;
                }
            },
            type: {
                type: GraphQLString,
                resolve(feedpost) {
                    return feedpost.type;
                }
            },
            createdAt: {
                type: GraphQLString,
                resolve(feedpost) {
                    return feedpost.createdAt;
                }
            },
            user: {
                type: User,
                resolve(feedpost) {
                    return feedpost.getUser();
                }
            }
        }
    }
})

const AuthPayload = new GraphQLObjectType({
    name: "AuthPayload",
    description: "This represents an authentication payload",
    fields: () => {
        return {
            username: { type: GraphQLString },
            token: { type: GraphQLString }
        }
    }
});

const Query = new GraphQLObjectType({
    name: "Query",
    description: "This is a root query",
    fields: () => {
        return {
            users: {
                type: new GraphQLList(User),
                args: {
                    id: {
                        type: GraphQLInt
                    },
                    username: {
                        type: GraphQLString
                    },
                    email: {
                        type: GraphQLString
                    }
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
            getMyLadders : {
                type: new GraphQLList(Ladder),
                async resolve(root, args, context) {
                    const userId = getUserId(context);
                    const user = await db.models.users.findByPk(userId);
                    return await user.getLadders();
                }
            },
            getMyFeed : {
                type: new GraphQLList(FeedPost),
                async resolve(root, args, context) {
                    const userId = getUserId(context);
                    const user = await db.models.users.findByPk(userId);
                    console.log(Object.getOwnPropertyNames(user))
                    return await user.getFeedposts();
                }
            }
        }
    }
});

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
                    },
                    email: {
                        type: new GraphQLNonNull(GraphQLString)
                    }
                },
                async resolve(_, args) {
                    const hashedPw = await bcrypt.hash(args.password, BCRYPT_WORK_FACTOR);
                    const newUser = await db.models.users.create({
                        username: args.username,
                        password: hashedPw,
                        email: args.email
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
                    console.log("######## userid:", userId, "########")
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
                            newLadder.createAssignment({task: args[level], dueDate: firstDueDate.format()});
                            newLadder.createAssignment({task: args[level], dueDate: firstDueDate.add(2, "day").format()});
                            newLadder.createAssignment({task: args[level], dueDate: firstDueDate.add(4, "day").format()});
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
                    try {
                        const assignment = await db.models.assignments.findByPk(args.id);
                        assignment.completed = true;
                        await assignment.save();
                        return "success";
                    } catch {
                        return "error";
                    }
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
                    return await user.createFeedpost({
                        content: args.content,
                        type: args.type
                    });
                }
            }
        }
    }
});

const Schema = new GraphQLSchema({
    query: Query,
    mutation: Mutation
});

module.exports = Schema;