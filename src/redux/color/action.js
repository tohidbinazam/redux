import { DANGER, DARK, PRIMARY, SECONDARY, SUCCESS, WARNING } from "./types";

export const bgPrimary = () =>{
    return{
        type : PRIMARY
    }
}

export const bgSecondary = () =>{
    return{
        type : SECONDARY
    }
}

export const bgSuccess = () =>{
    return{
        type : SUCCESS
    }
}

export const bgDanger = () =>{
    return{
        type : DANGER
    }
}

export const bgWarning = () =>{
    return{
        type : WARNING
    }
}

export const bgDark = () =>{
    return{
        type : DARK
    }
}