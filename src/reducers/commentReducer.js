import { GET_COMMENTS, ADD_COMMENT } from '../actions/actionTypes';

export const commentReducer = ( state = [], action ) => {
  switch(action.type) {
    case GET_COMMENTS:
      return {
        allComments: action.comments
      }
    case ADD_COMMENT:
      let commentId = action.commentId
      let taskId = action.taskId
      let boardId = action.boardId
      let comment = action.comment
      let time = action.time
      state.allComments.push({commentId, taskId, boardId, comment, time})
      return {
        allComments: state.allComments
      }
    default:
      return state
  }
}
