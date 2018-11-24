import React, { Component } from 'react';
import SideNav from './SideNav';
import Main from './Main';
import '../styles/App.scss';

class App extends Component {
  constructor(props) {
    super(props);
    this.state ={
      selectedTabId: 1
    }
  }
  updateNavigationState(selectedTabId) {
    this.setState({
      selectedTabId: selectedTabId
    });
  }

  render() {
    return (
      <div className="main-container">
        <SideNav selectedTabId={this.state.selectedTabId} updateMainNavId={ (id) => this.updateNavigationState(id)}/>
        <Main selectedTabId={this.state.selectedTabId}  updateMainNavId={(id) => this.updateNavigationState(id)}/>
      </div>
    );
  }
}

export default App;
