const jwt = require('jsonwebtoken');
const { APP_SECRET } = require("./config");
const dayjs = require("dayjs");

function getTokenPayload(token) {
  return jwt.verify(token, APP_SECRET);
}

function getUserId(req, authToken) {
  if (req) {
    const authHeader = req.headers.authorization;
    if (authHeader) {
      const token = authHeader.replace('Bearer ', '');
      if (!token) {
        throw new Error('No token found');
      }
      const { userId } = getTokenPayload(token);
      return userId;
    }
  } else if (authToken) {
    const { userId } = getTokenPayload(authToken);
    return userId;
  }

  throw new Error('Not authenticated');
}

function genDueDate(levelCode) {
    switch (levelCode) {
        case "level1":
            return dayjs();
        case "level2":
            return dayjs().add(1, "week");
        case "level3":
            return dayjs().add(2, "week");
        case "level4":
            return dayjs().add(3, "week");
        case "level5":
            return dayjs().add(4, "week");
        case "level6":
            return dayjs().add(5, "week");
        case "level7":
            return dayjs().add(6, "week");
        case "level8":
            return dayjs().add(7, "week");
        default:
            throw new Error('Invalid level code provided to function.');
    }
};

module.exports = {
  getUserId,
  genDueDate
};