import { combineReducers } from "redux";
import { createBoard } from './createBoard';
import { getasks } from './getTasks'
import { commentReducer } from './commentReducer'

export default combineReducers({
    createBoard,
    getasks,
    commentReducer
})
