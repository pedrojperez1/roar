const Sequelize = require("sequelize");
const bcrypt = require("bcrypt")
const AssignmentModel = require("./models/AssignmentModel");
const AchievementModel = require("./models/AchievementModel");
const FeedPostModel = require("./models/FeedPostModel");
const LadderModel = require("./models/LadderModel");
const UserModel = require("./models/UserModel");
const FollowsModel = require("./models/FollowsModel");

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

const User = db.define("users", UserModel);
const Ladder = db.define("ladders", LadderModel);
const Assignment = db.define("assignments", AssignmentModel);
const FeedPost = db.define("feedposts", FeedPostModel);
const Follows = db.define("follows", FollowsModel);
const Achievement = db.define("achievements", AchievementModel);

// Relationships

// User <one to many> Ladder
User.hasMany(Ladder);
Ladder.belongsTo(User);

// User <one to many> FeedPost
User.hasMany(FeedPost);
FeedPost.belongsTo(User)

// Assignment <one to many> Ladder
Ladder.hasMany(Assignment);
Assignment.belongsTo(Ladder);

// Follows <many to many> Users
User.belongsToMany(User, {through: Follows, as: "Following", foreignKey: "userId"});
User.belongsToMany(User, {through: Follows, as: "Followers", foreignKey: "followingId"});

// User <many to many> Achievement
User.belongsToMany(Achievement, { through: "User_Achievements"});
Achievement.belongsToMany(User, { through: "User_Achievements"});




db.sync({force: true})
.then(async () => {
    const password = await bcrypt.hash("test", 12);
    User.create({
        username: "test",
        password: password
    })
    .then(async (u1) => {
        const password = await bcrypt.hash("test", 12);
        User.create({
            username: "rando",
            password: password
        })
        .then(u2 => {
            u2.addFollowing(u1)
        })
        .then(() => (
            Achievement.bulkCreate([
                {
                    name: "Scout",
                    description: "Completed first assignment!",
                    type: "assignment",
                    level: 1
                },
                {
                    name: "Trooper",
                    description: "Completed 5 assignments!",
                    type: "assignment",
                    level: 2
                },
                {
                    name: "Veteran",
                    description: "Completed 10 assignments!",
                    type: "assignment",
                    level: 3
                },
                {
                    name: "Social Butterfly",
                    description: "Followed a user!",
                    type: "follow",
                    level: 1
                },
                {
                    name: "Town Crier",
                    description: "First post to your feed!",
                    type: "post",
                    level: 1
                }
            ])
        ))
    })
})


module.exports = db;
