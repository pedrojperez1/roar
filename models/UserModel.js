const Sequelize = require("sequelize");

const UserModel = {
    // firstName: {
    //     type: Sequelize.STRING,
    //     allowNull: false
    // },
    // lastName: {
    //     type: Sequelize.STRING
    // },
    username: {
        type: Sequelize.STRING,
        allowNull: false
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
    profileImage: {
        type: Sequelize.STRING,
        defaultValue: "https://sunfieldfarm.org/wp-content/uploads/2014/02/profile-placeholder.png"
    }
}

module.exports = UserModel;