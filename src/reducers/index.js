import { combineReducers } from "redux";
import { ADD_BOARD } from '../actions/actionTypes';

export const createBoard = ( state = [], action) => {
  switch(action.type) {
    case ADD_BOARD:
      return [ 
        ...state,
        {
            boardTitle: action.boardTitle,
            id: action.boardId
        }
      ]   
    default:
      return state
  }
}

export default combineReducers({
    createBoard
})