import React, { Component } from 'react';
import Board from './containers/Board'

class App extends Component {
   
  render() {
    return (
      <div>
        <div>Welcome to trello board</div>
        <Board />
      </div>
    )
  }
}


export default App;
