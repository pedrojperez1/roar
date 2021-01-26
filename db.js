const Sequelize = require("sequelize");
const bcrypt = require("bcrypt");

// const conn = new Sequelize(process.env.DATABASE_URL || "postgres://localhost/roar-db");
const conn = new Sequelize("postgres://cueqsaphiwtssd:74c9ee6f902be9026e1ae7660a26c9d73f399b70f6ae49f8a324c149713c8b52@ec2-34-192-72-159.compute-1.amazonaws.com:5432/dde1m2fm3cn2hs",
    {
        dialect: 'postgres',
        protocol: 'postgres',
        dialectOptions: {
            ssl: true
        }
    }
);

const User = conn.define("users", {
    username: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true
    },
    password: {
        type: Sequelize.STRING,
        allowNull: false
    },
    email: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
        validate: {
            isEmail: true
        }
    }
});

const Ladder = conn.define("ladders", {
    name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    level1: {type: Sequelize.STRING},
    level2: {type: Sequelize.STRING},
    level3: {type: Sequelize.STRING},
    level4: {type: Sequelize.STRING},
    level5: {type: Sequelize.STRING},
    level6: {type: Sequelize.STRING},
    level7: {type: Sequelize.STRING},
    level8: {type: Sequelize.STRING}
});

const Assignment = conn.define("assignments", {
    task: {
        type: Sequelize.STRING,
        allowNull: false
    },
    dueDate: {
        type: Sequelize.STRING,
        allowNull: false
    },
    completed: {
        type: Sequelize.BOOLEAN,
        defaultValue: false
    }
});

const FeedPost = conn.define("feedposts", {
    content: {
        type: Sequelize.STRING,
        allowNull: false
    },
    type: {
        type: Sequelize.STRING,
        allowNull: false
    }
});
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

conn.sync({force: true})
    .then(async () => {
        const password = await bcrypt.hash("test", 12);
        return User.create({
            username: "test", 
            password: password, 
            email: "test@test.com"
        }).then((user) => {
        return user.createLadder({
                name: "My Test Ladder",
                level1: "Sample level 1 fear",
                level2: "Sample level 2 fear",
                level3: "Sample level 3 fear",
                level4: "Sample level 4 fear",
                level5: "Sample level 5 fear",
                level6: "Sample level 6 fear",
                level7: "Sample level 7 fear",
                level8: "Sample level 8 fear",
        }).then((ladder) => {
            return ladder.createAssignment({
                task: "Sample level 1 fear",
                dueDate: "2021-02-01"
            })
        })
    })
});

module.exports = conn;
