const Sequelize = require("sequelize");

const FeedPostModel = {
    content: {
        type: Sequelize.STRING,
        allowNull: false
    },
    type: {
        type: Sequelize.STRING,
        allowNull: false
    }
}

module.exports = FeedPostModel;