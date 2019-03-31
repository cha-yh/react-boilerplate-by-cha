import React, { Component } from 'react';
import './App.css';
import './App.scss';
import TestContainer from './containers/TestContainer/TestContainer';
import {Route, BrowserRouter as Router, Link} from 'react-router-dom';
const Other = () => {
  return (
    <div>hello other</div>
  )
}
class App extends Component {
  render() {
    return (
      <div className="App">
         <Router>
            <Link to="/">go to home</Link>
            <Link to="/other">go to other</Link>
            <Route exact path="/" component = {TestContainer} />
            <Route path="/other" component = {Other} />
          
        </Router>
      </div>
    );
  }
}

export default App;
