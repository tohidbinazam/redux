import initialState from "./initialState";
import { DANGER, DARK, PRIMARY, SECONDARY, SUCCESS, WARNING } from "./types";


const colorReducer = ( state = initialState, { type, payload }) => {

    switch (type) {
        case PRIMARY:
            return 'primary'

        case SECONDARY:
            return 'secondary'
            
        case SUCCESS:
            return 'success'

        case DANGER:
            return 'danger'

        case WARNING:
            return 'warning'

        case DARK:
            return 'dark'
    
        default:
            return state
    }
}

export default colorReducer