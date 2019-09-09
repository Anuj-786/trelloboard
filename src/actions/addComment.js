import { ADD_COMMENT } from './actionTypes';
let commentId = 0;

export const addComment = (boardId, comment, taskId, time) => {
  console.log(time)
  let comments =  JSON.parse(localStorage.getItem("comments"))
  if(comments === null) {
    localStorage.setItem('comments',JSON.stringify([{boardId, comment, taskId, commentId, time}]))
  }
  else { 
    commentId = comments.length
    comments.push({ boardId, comment, taskId, commentId, time })
    localStorage.setItem('comments', JSON.stringify(comments))
  } 
  return {
      type: ADD_COMMENT,
      commentId: commentId++,
      boardId: boardId,
      taskId: taskId,
      comment: comment,
      time: time
  }
} 
