import { GET_BOARDS } from './actionTypes'

export const getBoards = (boardData) => {
    return {
        type: GET_BOARDS,
        boardData: boardData
    }
}