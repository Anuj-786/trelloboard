import React, { Component } from 'react';

class  BoardView extends Component {
  constructor(props) {
    super(props)
    this.textInput = React.createRef();
  }
  
  componentDidMount() {
    console.log(this.props)
    let boards = JSON.parse(localStorage.getItem("boards"))
    this.props.getBoards(boards)
  }
  
  handleAddBoard = (e) => {
    e.preventDefault()
    let input = this.textInput
    let title = input.current.value
    this.props.addBoard(title)
    input.current.value = '';
    let boards = JSON.parse(localStorage.getItem("boards"))
    this.props.getBoards(boards)
  }
  render() {
    console.log(this.props)
    let boards = this.props.getBoard
    return(
      <div>
        <div style={{textAlign: 'center'}}>
          <form onSubmit={this.handleAddBoard}>
            <input 
              placeholder = "board title"
              type = "text"
              ref={this.textInput}
            />
            <button onClick={this.handleAddBoard}>create</button>
          </form>
        </div>
        <div style={{width: "100%"}}>
          {
            boards && boards.map(({boardId, boardTitle}) => {
 
              return (
                <div key={boardId} style={{width: "33%", float: "left"}}>
                  <h3>{boardTitle}</h3>
                  
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