import React, { Component } from 'react';

class Board extends Component {

    render() {
        return (
            <div style={{width: "100%"}}>
                {
                   this.props.board.board.createBoard && 
                    this.props.board.board.createBoard.map(({boardTitle}) => {
                        return <div style={{width: "33%", float: "left"}}>{boardTitle}</div>
                    }) 
                }
            </div>
        )
    }
}

export default Board 