const Sequelize = require("sequelize");

const FollowsModel = {
    userId: {
        type: Sequelize.INTEGER,
        references: {
            model: 'Users',
            key: "id"
        }
    },
    followingId: {
        type: Sequelize.INTEGER,
        references: {
            model: 'Users',
            key: "id"
        }
    }
}

module.exports = FollowsModel;