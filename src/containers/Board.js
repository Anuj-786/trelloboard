import React from 'react';
import BoardView from '../components/BoardView';
import { addBoard } from '../actions';
import { connect } from 'react-redux';

const mapStateToProps = state => ({
    board: state
})
  
const mapDispatchToProps = dispatch => ({
    addBoard: (title) => dispatch(addBoard(title))
})

export default connect(mapStateToProps, mapDispatchToProps)(BoardView)