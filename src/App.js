import React, { Component } from 'react';
import AddBoard from './components/AddBoard'

class App extends Component {
   
  render() {
    return (
      <div>
        <div>Welcome to trello board</div>
        <AddBoard />
      </div>
    )
  }
}


export default App;
