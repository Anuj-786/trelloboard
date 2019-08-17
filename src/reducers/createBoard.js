import { ADD_BOARD, GET_BOARDS } from '../actions/actionTypes';

export const createBoard = ( state = [], action) => {
  switch(action.type) {
    case GET_BOARDS:
      return {
        boardsData: action.boardData
      }
    case ADD_BOARD:
      let boardTitle = action.boardTitle
      let id = action.id
      let boardData = []
      if(state.boardsData == null ) {
        boardData.push({boardTitle, id})
        state.boardsData = boardData
      }
      else {
        boardData = state.boardsData
        state.boardsData.push({boardTitle, id})
      }
      return {
        boardsData: boardData
      }

    default:
      return state
  }
}
