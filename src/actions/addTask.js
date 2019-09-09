import { ADD_TASK } from './actionTypes';
let taskId = 0;

export const addTask = (boardId, title) => {
  let tasks =  JSON.parse(localStorage.getItem("tasks"))
  if(tasks === null) {
    localStorage.setItem('tasks',JSON.stringify([{boardId, title, taskId}]))
  }
  else { 
    taskId = tasks.length
    tasks.push({ boardId, title, taskId })
    localStorage.setItem('tasks', JSON.stringify(tasks))
  } 
  return {
      type: ADD_TASK,
      taskId: taskId++,
      boardId: boardId,
      title: title
  }
} 
