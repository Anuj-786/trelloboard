import { ADD_COMMENT } from './actionTypes';
let commentId = 0;

export const addComment = (boardId, comment, taskId) => {
  let comments =  JSON.parse(localStorage.getItem("comments"))
  if(comments === null) {
    localStorage.setItem('comments',JSON.stringify([{boardId, comment, taskId, commentId}]))
  }
  else { 
    commentId = comments.length
    comments.push({ boardId, comment, taskId, commentId })
    localStorage.setItem('comments', JSON.stringify(comments))
  } 
  return {
      type: ADD_COMMENT,
      commentId: commentId++,
      boardId: boardId,
      taskId: taskId,
      comment: comment
  }
} 
