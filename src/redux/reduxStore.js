import { composeWithDevTools } from "@redux-devtools/extension";
import { applyMiddleware, createStore } from "redux";
import checkMiddleware from "./middleware/checkMiddleware";
import rootReducer from "./rootReducer";


// Create redux store
const store = createStore(rootReducer, composeWithDevTools( applyMiddleware( checkMiddleware ) ))

export default store