import { ADD_LADDER, MARK_TASK_COMPLETE } from "../actions/types";

const INITIAL_STATE = []

function ladders(state=INITIAL_STATE, action) {
    switch (action.type) {
        case ADD_LADDER:
            return { ...state, [action.ladderId]: action.ladder}
        case MARK_TASK_COMPLETE:
            return {
                ...state,
                [action.ladderId]: action.newLadderObj
            }
        
        default:
            return state;
    }
}

export default ladders;