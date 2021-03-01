const Sequelize = require("sequelize");

const UserModel = {
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
        allowNull: true,
        unique: true,
        validate: {
            isEmail: true
        }
    },
    emailNotifications: {
        type: Sequelize.BOOLEAN,
        defaultValue: false
    },
    isPublic: {
        type: Sequelize.BOOLEAN,
        defaultValue: false
    },
    profileImage: {
        type: Sequelize.STRING,
        defaultValue: "https://sunfieldfarm.org/wp-content/uploads/2014/02/profile-placeholder.png"
    },
    isNew: {
        type: Sequelize.BOOLEAN,
        defaultValue: true
    }
}

module.exports = UserModel;