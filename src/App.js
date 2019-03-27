import React, { Component } from 'react';
import './App.css';
import './App.scss';
import TestContainer from './containers/TestContainer/TestContainer';

class App extends Component {
  render() {
    return (
      <div className="App">
         
        <TestContainer />
      </div>
    );
  }
}

export default App;
