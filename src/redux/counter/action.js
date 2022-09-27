import { DECREMENT, INCREMENT } from "./types";

// Increment action
export const plusCounter = () => {

    return {
        type : INCREMENT
    }
}

// Decrement action
export const minusCounter = () => {

    return {
        type : DECREMENT
    }
}