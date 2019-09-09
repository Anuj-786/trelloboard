import React, { Component } from 'react';
import Board from './containers/Board'

class App extends Component {
   
  render() {
    return (
      <div>
        <div style={{textAlign:"center"}}><h3>Welcome to trello board</h3></div>
        <Board />
      </div>
    )
  }
}


export default App;
