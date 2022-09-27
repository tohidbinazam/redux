import initialState from "./initialState";
import { DECREMENT, INCREMENT } from "./types";



// Counter reducer
const counterReducer = ( state = initialState, { type, payload }) => {

    switch (type) {
        case INCREMENT:
            return state + 1

        case DECREMENT:
            return state - 1
        default:
            return state
    }
}

export default counterReducer