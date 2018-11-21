import React, { Component } from 'react';
import SideNav from './SideNav';
import Main from './Main';
import '../styles/App.scss';

class App extends Component {
  render() {
    return (
      <div className="main-container">
        <SideNav />
        <Main />
      </div>
    );
  }
}

export default App;
