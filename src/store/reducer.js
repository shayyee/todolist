const defaultStore = {
    inputValue: '123',
    list: [1,2]
}

export default (state = defaultStore, action) => {
    if(action.type === 'CHANGE_INPUT_VALUE'){
        const newState = JSON.parse(JSON.stringify(state))//深拷贝
        newState.inputValue = action.value
        return newState;
    }
    if(action.type === 'ADD_TODO_ITEM') {
        const newState = JSON.parse(JSON.stringify(state))//深拷贝
        newState.list.push(newState.inputValue)
        newState.inputValue = '';
        return newState;
    }
    return state;
}