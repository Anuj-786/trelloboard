import { GET_TASKS, ADD_TASK } from '../actions/actionTypes';

export const getasks = ( state = [], action ) => {
  switch(action.type) {
    case GET_TASKS:
      return {
        allTasks: action.tasks
      }
    case ADD_TASK:
      let boardId = action.boardId
      let taskId = action.taskId
      let title = action.title
      state.allTasks.push({boardId, taskId, title})
      return {
        allTasks: state.allTasks
      }
    default:
      return state
  }
}
