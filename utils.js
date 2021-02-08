const jwt = require('jsonwebtoken')
const { SECRET_KEY } = require("./config")
const dayjs = require("dayjs")
const db = require("./db")
function getTokenPayload(token) {
  return jwt.verify(token, SECRET_KEY)
}

function getUserId(req, authToken) {
  if (req) {
    const authHeader = req.headers.authorization;
    console.log("####### authHeader:", authHeader, "#######")
    if (authHeader) {
      const token = authHeader.replace('Bearer ', '');
      if (!token) {
        throw new Error('No token found')
      }
      const { userId } = getTokenPayload(token);
      return userId
    }
  } else if (authToken) {
    const { userId } = getTokenPayload(authToken);
    return userId
  }

  throw new Error('Not authenticated')
}

function genDueDate(levelCode) {
    switch (levelCode) {
        case "level1":
            return dayjs()
        case "level2":
            return dayjs().add(1, "week")
        case "level3":
            return dayjs().add(2, "week")
        case "level4":
            return dayjs().add(3, "week")
        case "level5":
            return dayjs().add(4, "week")
        case "level6":
            return dayjs().add(5, "week")
        case "level7":
            return dayjs().add(6, "week")
        case "level8":
            return dayjs().add(7, "week")
        default:
            throw new Error('Invalid level code provided to function.')
    }
};

async function checkForAchievements(type, user) {
  console.log("Checking for achievements of type:", type, "for user:", user.username)
  const achievements = [];

  switch (type) {
    case "assignment":
      const ladders = await user.getLadders();
      const assignments = await ladders[0].getAssignments();
      const completed = assignments.filter(a => a.completed);
      
      // check if user's completed assignments array length === 1, then COMPLETED FIRST ASSIGNMENT
      if (completed.length === 1) {
        const achievement = await db.models.achievements.findOne({where: {name: "Scout"}});
        user.addAchievement(achievement);
        achievements.push(achievement);
      }
      console.log("achievements:", achievements)

      // check if user's completed assignments array length === 5, then COMPLETED FIVE ASSIGNMENTS
      if (completed.length === 5) {
        const achievement = await db.models.achievements.findOne({where: {name: "Trooper"}});
        user.addAchievement(achievement);
        achievements.push(achievement);
      }

      // check if user's completed assignments array length === 10, then COMPLETED TEN ASSIGNMENTS
      if (completed.length === 10) {
        const achievement = await db.models.achievements.findOne({where: {name: "Veteran"}});
        user.addAchievement(achievement);
        achievements.push(achievement);
      }

      // check if user has completed all assingments in 1 level, then COMPLETED FIRST LEVEL
      // TODO
      // check if user has completed all assingments in 3 levels, then COMPLETED THREE LEVELS
      // TODO
      break;

    case "ladder":
      // check if user's ladders array length === 1, then CREATED FIRST LADDER
      // TODO
      // check if user's ladder is 100% complete, then COMPLETED FIRST LADDER
      // TODO
      break;

    case "follow":
      const following = await user.getFollowing();
      
      // check if user's following === 1, then FOLLOWED FIRST USER
      if (following.length === 1) {
        const achievement = await db.models.achievements.findOne({where: {name: "Social Butterfly"}});
        user.addAchievement(achievement);
        achievements.push(achievement);
      }
      break;

    case "post":
      const posts = await user.getFeedposts();
      
      // check if user's post count === 1, then POSTED FIRST POST
      if (posts.length === 1) {
        const achievement = await db.models.achievements.findOne({where: {name: "Town Crier"}});
        user.addAchievement(achievement);
        achievements.push(achievement);
      }
      break;

    default:
      throw new Error("Incorrect achievement type provided.")

  }
  return achievements;

}

module.exports = {
  getUserId,
  genDueDate,
  checkForAchievements
};