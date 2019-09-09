import { combineReducers } from "redux";
import { createBoard } from './createBoard';
import { getasks } from './getTasks'

export default combineReducers({
    createBoard,
    getasks
})
