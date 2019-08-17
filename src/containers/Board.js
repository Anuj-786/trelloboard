import React from 'react';
import BoardView from '../components/BoardView';
import { addBoard, getBoards } from '../actions';
import { connect } from 'react-redux';

const mapStateToProps = (state) => ({
    getBoard: state.createBoard.boardsData
})
  
const mapDispatchToProps = dispatch => ({
    addBoard: (title) => dispatch(addBoard(title)),
    getBoards: (data) => dispatch(getBoards(data))
})

export default connect(mapStateToProps, mapDispatchToProps)(BoardView)