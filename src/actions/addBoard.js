import { ADD_BOARD } from './actionTypes'

let boardId = 0

export const addBoard = boardTitle => {
  let boards =  JSON.parse(localStorage.getItem('boards'))
  if(boards === null) {
    localStorage.setItem("boards", JSON.stringify([{ boardId, boardTitle }]))
  }
  else { 
    boardId = boards.length
    boards.push({ boardId, boardTitle })
    localStorage.setItem('boards', JSON.stringify(boards))
  } 
  return {
    type: ADD_BOARD,
    boardTitle: boardTitle,
    boardId: boardId  
  }
}
