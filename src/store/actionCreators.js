import {CHANGE_INPUT_VALUE, ADD_TODO_ITEM, DELETE_TODO_ITEM, INIT_LIST} from './actionTypes'
import axios from 'axios'

export const getInputChangeAction = (value) => ({
    type: CHANGE_INPUT_VALUE,
    value
})

export const getAddItemAction = () => ({
    type: ADD_TODO_ITEM
})

export const getDeleteItemAction = (index) => ({
    type: DELETE_TODO_ITEM,
    index
})
export const initListAction = (list) => ({
    type: INIT_LIST,
    list
})

export const getTodoList = () => {
    return (dispatch) => {
        axios.get('/api/todolist').then((res) => {
            const data = res.data;
            const action = initListAction(data)
            dispatch(action)
          })
    }
}