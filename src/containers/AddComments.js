import Comments from '../components/Comments'
import { addComment, getComments } from '../actions'
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
    return {
        comments: state.commentReducer
    }
}

const mapDispatchToProps = dispatch => ({
    addComment: (boardId, comment, taskId) => dispatch(addComment(boardId, comment, taskId)),
    getComments: (comments) => dispatch(getComments(comments))
}) 

export default connect(mapStateToProps, mapDispatchToProps)(Comments)