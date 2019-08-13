import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addBoard } from '../actions/';
import Board from './Board';

class createBoard extends Component {
    state = {
        value: ''
    }

    handleInput = event => {
        this.setState({
            value: event.target.value
        })
    }

    addBoard = id => {
        let boardTitle = this.state.value
        this.props.addBoard(boardTitle)
    }

    render() {
        console.log(this.props)
        let board =  this.props
        return(
            <div>
                <input onChange={this.handleInput} placeholder="board title"></input>
                <button onClick={this.addBoard}>create</button>
                {
                    board && 
                        <Board board={board} />
                }
            </div>
        )
    }
}
const mapStateToProps = state => ({
    board: state
})
  
const mapDispatchToProps = dispatch => ({
    addBoard: id => dispatch(addBoard(id))
})

export default connect(mapStateToProps, mapDispatchToProps)(createBoard)