import {CHANGE_INPUT_VALUE, ADD_TODO_ITEM, DELETE_TODO_ITEM, INIT_LIST} from './actionTypes'
const defaultStore = {
    inputValue: '',
    list: []
}

export default (state = defaultStore, action) => {
    if(action.type === INIT_LIST){
        const newState = JSON.parse(JSON.stringify(state))//深拷贝
        newState.list = action.list;
        return newState;
    }
    if(action.type === CHANGE_INPUT_VALUE){
        const newState = JSON.parse(JSON.stringify(state))//深拷贝
        newState.inputValue = action.value
        return newState;
    }
    if(action.type === ADD_TODO_ITEM) {
        const newState = JSON.parse(JSON.stringify(state))//深拷贝
        newState.list.push(newState.inputValue)
        newState.inputValue = '';
        return newState;
    }
    if(action.type === DELETE_TODO_ITEM) {
        const newState = JSON.parse(JSON.stringify(state))//深拷贝
        newState.list.splice(action.index, 1);
        return newState;
    }
    return state;
}