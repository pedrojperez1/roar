import { ADD_LADDER, MARK_TASK_COMPLETE } from "./types";
import {v4 as uuid} from "uuid";
import genDueDate from "../helpers/genDueDate";

function addLadder(userId, newLadder) {
    // first, make an obj of 1 task per level
    let assignments = Object.keys(newLadder.levels).reduce((obj, l) => (
        {
            ...obj,
            [uuid()]: {
                task: newLadder.levels[l],
                dueDate: genDueDate(l),
                completed: false
            }
        }
    ), {});

    // second, create 2 additional tasks per level with dueDate += 2 and += 4
    Object.keys(assignments).forEach(assignmentId => {
        assignments[uuid()] = {
            task: assignments[assignmentId].task,
            dueDate: assignments[assignmentId].dueDate.add(2, "day"),
            completed: false
        };
        assignments[uuid()] = {
            task: assignments[assignmentId].task,
            dueDate: assignments[assignmentId].dueDate.add(4, "day"),
            completed: false
        };
    });
        
    const ladder = {
        userId,
        name: newLadder.name,
        levels: newLadder.levels,
        assignments
    }
    return {
        type: ADD_LADDER,
        ladderId: uuid(),
        ladder
    }
};

function markTaskComplete(ladderId, oldLadderObj, assignmentId) {
    const newLadderObj = {
        ...oldLadderObj,
        assignments: {
            ...oldLadderObj.assignments,
            [assignmentId]: {
                ...oldLadderObj.assignments[assignmentId],
                completed: true
            }
        }
    }
    return {
        type: MARK_TASK_COMPLETE,
        ladderId,
        newLadderObj
    }
}

export { addLadder, markTaskComplete };