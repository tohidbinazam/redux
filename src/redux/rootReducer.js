import { combineReducers } from "redux";
import colorReducer from "./color/colorReducer";
import counterReducer from "./counter/counterReducer";

// Root reducer
const rootReducer = combineReducers({
    counter : counterReducer,
    color : colorReducer
})

export default rootReducer