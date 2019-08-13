import { ADD_BOARD } from './actionTypes'

let boardId = 0

export const addBoard = boardTitle => ({
    type: ADD_BOARD,
    boardTitle,
    boardId: boardId++
})