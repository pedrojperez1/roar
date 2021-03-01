const db = require("../db")
const bcrypt = require("bcrypt")
const achievements  = require("./seedAchievements")

const wipeTables = async () => {
  Object.keys(db.models).forEach(async (model) => {
    console.log(`WIPING TABLE "${model}"`)
    await db.query(`DELETE FROM "${model}"`)
  })
}

const seedUsers = async () => {
  const password = await bcrypt.hash("test", 12);
  await db.models.users.bulkCreate([
    {
      username: "rey_the_pup_test",
      password: password,
      isPublic: true
    },
    {
      username: "rando_test",
      password: password,
      isPublic: true
    },
    {
      username: "pedro_test",
      password: password,
      isPublic: true
    },
    {
      username: "user_test",
      password: password,
      isPublic: true
    },
    {
      username: "yet_another",
      password: password,
      isPublic: true
    }
  ])
}

const seedAchievements = async () => {
  await db.models.achievements.bulkCreate(achievements)
}

wipeTables()
.then(() => seedUsers())
.then(() => seedAchievements())
