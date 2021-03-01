const Sequelize = require("sequelize")

const AchievementModel = {
    name: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true
    },
    description: {
        type: Sequelize.STRING,
        allowNull: false
    },
    type: {
        type: Sequelize.STRING,
        allowNull: false
    },
    level: {
        type: Sequelize.INTEGER,
        allowNull: false
    }
}

module.exports = AchievementModel;