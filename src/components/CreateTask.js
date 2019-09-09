import React, {Component} from 'react'
import AddComments from '../containers/AddComments'

class CreateTask extends Component {
  constructor(props) {
    super(props)
    this.state = { 
      taskTitle: '',
      boardId: null
    }
  }
  addTask = (e) => {
    e.preventDefault()
    this.props.addTask(this.state.boardId, this.state.taskTitle)
    this.setState({ taskTitle: '' })
  }
  onChange = (e) => {
    this.setState({ taskTitle: e.target.value, boardId: this.props.boardId })
  }
  componentDidMount() {
    let tasks = JSON.parse(localStorage.getItem('tasks'))
    if(tasks) {
      this.props.getTasks(tasks)
    }
    else {
      this.props.getTasks([])
    }
  }
  render () {
    return (
      <div> 
        <form
        onSubmit={this.addTask}
        >
          <input value={this.state.taskTitle} onChange={this.onChange} placeholder="create new task"></input>
          <button  type="submit">Add Task</button>
        </form>
        <div style={{height: 200, overflow: 'scroll'}}>
         { 
           this.props.allTasks && this.props.allTasks.map( data => {
              return (
                this.props.boardId == data.boardId ? 
                  <div key={data.taskId}>
                      <li style={{listStyle: 'none'}}>{data.title}</li>
                      <AddComments taskId={data.taskId} boardId={data.boardId} />                     
                  </div>
                  : ''
              )
            })
          }
        </div>
      </div>
    )
  }
}

export default CreateTask
