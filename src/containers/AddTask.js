import { addTask, getTasks } from '../actions';
import CreateTask from '../components/CreateTask';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
    return {
        tasks: state.tasks,
        allTasks: state.getasks.allTasks
    }
}

const mapDispatchToProps = dispatch => ({
    addTask: (boardId, title) => dispatch(addTask(boardId, title)),
    getTasks: (data) => dispatch(getTasks(data))
}) 

export default connect(mapStateToProps, mapDispatchToProps)(CreateTask)