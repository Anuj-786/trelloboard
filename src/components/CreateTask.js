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
      <div style={{marginTop: 15}}> 
        <form
        onSubmit={this.addTask}
        style={{textAlign: 'center'}}
        >
          <input
            value={this.state.taskTitle} 
            onChange={this.onChange} 
            placeholder="create new task"
            style={{padding: 10, borderRadius: 20, border: '1px solid cornflowerblue', outline: 'none'}}
            >
          </input>
          <button  
            type="submit"
            style={{padding: 10, background: 'cornflowerblue', border: 'none', color: '#fff', fontWeight: 600, borderRadius: 20, marginLeft: 5}}
          >
          Add Task</button>
        </form>
        <div style={{height: 200, overflow: 'scroll', marginLeft: 30}}>
         { 
           this.props.allTasks && this.props.allTasks.map( data => {
              return (
                this.props.boardId == data.boardId ? 
                  <div key={data.taskId}>
                      <li style={{listStyle: 'none', marginBottom: 10}}>{data.title}</li>
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
