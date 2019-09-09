import { ADD_BOARD, GET_BOARDS } from '../actions/actionTypes';

export const createBoard = ( state = [], action ) => {
  switch(action.type) {
    case GET_BOARDS:
      return {
        boardsData: action.boardData
      }
    case ADD_BOARD:
      let boardTitle = action.boardTitle
      let boardId = action.boardId
      state.boardsData.push({boardId, boardTitle})
      return {
        boardsData: state.boardsData
      }

    default:
      return state
  }
}
