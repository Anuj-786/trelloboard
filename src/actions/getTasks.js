import { GET_TASKS } from './actionTypes'

export const getTasks = (tasks) => {
	return {
		type: GET_TASKS,
		tasks: tasks
	}
}