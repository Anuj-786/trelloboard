import React from 'react';

const BoardView = ({ board, addBoard }) => {
  // console.log(board.createBoard)
  let textInput = React.createRef();
  let boards = JSON.parse(localStorage.getItem("boards"))
  
  function handleAddBoard() {
    let input = textInput
    let title = input.current.value
    addBoard(title)
    input.current.value = ''
  }
  return(
    <div>
      <input 
        placeholder = "board title"
        type = "text"
        ref={textInput}
      />
      <button onClick={handleAddBoard}>create</button>

      <div>
        {
          boards && boards.map(({boardId, boardTitle}) => {
            return <div key={boardId}><h1>{boardTitle}</h1></div>
          })
        }
      </div>
    </div>
  )
    
}


export default BoardView