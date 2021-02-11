'use strict';

const {Achievement} = require("./db")

const achievementsToSeed = [
    {
        name: "Scout",
        description: "Completed first assignment!",
        type: "assignment",
        level: 1
    },
    {
        name: "Trooper",
        description: "Completed 5 assignments!",
        type: "assignment",
        level: 2
    },
    {
        name: "Veteran",
        description: "Completed 10 assignments!",
        type: "assignment",
        level: 3
    },
    {
        name: "Social Butterfly",
        description: "Followed a user!",
        type: "follow",
        level: 1
    },
    {
        name: "Town Crier",
        description: "FIrst post to your feed!",
        type: "post",
        level: 1
    }
]

const seed = () => {
    return Achievement.bulkCreate(achievementsToSeed)
}

seed().then(() => process.exit())