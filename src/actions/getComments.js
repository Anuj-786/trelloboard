import { GET_COMMENTS } from './actionTypes'

export const getComments = (comments) => {
	return {
		type: GET_COMMENTS,
		comments: comments
	}
}