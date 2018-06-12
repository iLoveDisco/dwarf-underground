import React, { Component } from 'react';

import './App.css';
import Header from './Header'
import Avatar from './Avatar';
import Main from './Main'
import Copyright from './Copyright';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Avatar />
        <Main />
        <footer className="expanded row">
          <Copyright />
        </footer>
      </div>
    );
  }
}
export default App;