import React, { Component } from 'react';
import AddTask from '../containers/AddTask';

class  BoardView extends Component {
  constructor(props) {
    super(props)
    this.state = {
      title: ''
    }
  }
  
  componentDidMount() {
    let boards = JSON.parse(localStorage.getItem("boards"))
    if(boards) {
      this.props.getBoards(boards)
    }
    else {
      this.props.getBoards([])
    }
  }
  
  handleChange = (e) => {
    this.setState({ title: e.target.value})
  }

  handleAddBoard = (e) => {
    e.preventDefault()
    let title = this.state.title
    this.props.addBoard(title)
    this.setState({ title: '' })
  }
  
  render() {
    let boards = this.props.getBoard
    return(
      <div>
        <div style={{ textAlign: 'center', marginBottom: '15px' }}>
          <form onSubmit={this.handleAddBoard}>
            <input 
              placeholder = "board title"
              type = "text"
              value={this.state.title}
              onChange={this.handleChange}
            />
            <button disabled={this.state.title ? false : true } type='submit'>create</button>
          </form>
        </div>
        <div style={{ width: "100%" }}>
          {
            boards && boards.map(({ boardId, boardTitle }) => {
              
              return (
                <div key={boardId} style={{ boxShadow: '0px 0px 8px 0px', width: "47%", margin: "1%", float: "left", border: '1px solid grey' }}>
                  <h3 style={{ margin: '0', background: "cornflowerblue", color: '#fff', padding: "8px" }}>{boardTitle}</h3>
                  <AddTask boardId={boardId}/>
                </div>
              )
            })
          }
        </div>
      </div>
    )
  }
    
}
export default BoardView
