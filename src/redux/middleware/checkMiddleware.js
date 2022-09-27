


const checkMiddleware = (store) => (next) => (action) => {
    
    if (store.getState().color === 'secondary' && action.type === 'DARK') {
        next(action)
    } else if (store.getState().color === 'dark' && action.type === 'SECONDARY') {
        next(action)
    } else if (action.type === 'DECREMENT') {
        next(action)
    }else{
        next({ type: 'INCREMENT' })
    }

}


export default checkMiddleware