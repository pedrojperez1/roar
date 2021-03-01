const Sequelize = require("sequelize")
const AssignmentModel = require("./models/AssignmentModel")
const AchievementModel = require("./models/AchievementModel")
const FeedPostModel = require("./models/FeedPostModel")
const LadderModel = require("./models/LadderModel")
const UserModel = require("./models/UserModel")
const FollowsModel = require("./models/FollowsModel")

const db = process.env.NODE_ENV === 'production' ?
    new Sequelize(process.env.DATABASE_URL, { // for prod env only
        dialect: 'postgres',
        protocol: 'postgres',
        dialectOptions: {
            ssl: {
                require: true,
                rejectUnauthorized: false
            }
        }
    }) :
    new Sequelize("postgres://localhost/roar-db")

const User = db.define("users", UserModel)
const Ladder = db.define("ladders", LadderModel)
const Assignment = db.define("assignments", AssignmentModel)
const FeedPost = db.define("feedposts", FeedPostModel)
const Follows = db.define("follows", FollowsModel)
const Achievement = db.define("achievements", AchievementModel)

// Relationships

// User <one to many> Ladder
User.hasMany(Ladder)
Ladder.belongsTo(User)

// User <one to many> FeedPost
User.hasMany(FeedPost)
FeedPost.belongsTo(User)

// Assignment <one to many> Ladder
Ladder.hasMany(Assignment)
Assignment.belongsTo(Ladder)

// Follows <many to many> Users
User.belongsToMany(User, {through: Follows, as: "Following", foreignKey: "userId"})
User.belongsToMany(User, {through: Follows, as: "Followers", foreignKey: "followingId"})

// User <many to many> Achievement
User.belongsToMany(Achievement, { through: "User_Achievements"})
Achievement.belongsToMany(User, { through: "User_Achievements"})

db.sync()


module.exports = db
