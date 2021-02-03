const Sequelize = require("sequelize");
const bcrypt = require("bcrypt");
const AssignmentModel = require("./models/AssignmentModel");
const FeedPostModel = require("./models/FeedPostModel");
const LadderModel = require("./models/LadderModel");
const UserModel = require("./models/UserModel");
const FollowsModel = require("./models/FollowsModel");

const conn = process.env.NODE_ENV === 'production' ?
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

const User = conn.define("users", UserModel);
const Ladder = conn.define("ladders", LadderModel);
const Assignment = conn.define("assignments", AssignmentModel);
const FeedPost = conn.define("feedposts", FeedPostModel);
const Follows = conn.define("follows", FollowsModel);

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

conn.sync({force: true})
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
    })
})


module.exports = conn;
