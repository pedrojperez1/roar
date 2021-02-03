const Sequelize = require("sequelize");

const AssignmentModel = {
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
}

module.exports = AssignmentModel;