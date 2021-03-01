const Sequelize = require("sequelize");

const LadderModel = {
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
}

module.exports = LadderModel;