interface initState {
    number: number
}

const init = {
    number: 0
}

interface actionType {
    type: string,
    count: number
}

const user = (
    state: initState = init,
    action: actionType
) => {
    switch (action.type) {
        case 'addCount':
            return { ...state, number: action.count + 1 }
        case 'reduceCount':
            return { ...state, number: action.count - 1 }
        default:
            return state
    }
}

export { user }