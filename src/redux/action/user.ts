export const add = (num: number) => {
    return (dispatch: any) => {
        dispatch({ type: 'addCount', count: num })
    }
}