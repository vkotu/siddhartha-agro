import React from 'react';
import '../styles/App.scss';
import { Route } from 'react-router-dom';
import Components from './common';
import SubNav from './SubNav';

class Infrastructure extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeTab: 'facility'
    }
    this.menuItems = [
      {
        id: 'facility',
        name: 'Facility'
      },
      {
        id: 'certifications',
        name: 'Certifications'
      }
    ]
  }
  updateActiveState(id) {
    this.setState({
      activeTab: id
    });
  }

  componentDidMount () {
    this.props.updateMainNavId(4);//products id
  }

  render() {
    const {match} = this.props;
    console.log(this.state.activeTab);
    return (
      <div>
        <SubNav activeTabId={this.state.activeTab} url={match.url} menuItems={this.menuItems}/>
        
        <Route path={`${match.path}/facility`} render={
          (props) => { 
            return (<Components.Facility updateActiveState={this.updateActiveState.bind(this)} {...props} />) ;
          }
        }/>
        <Route path={`${match.path}/certifications`} render={
          (props) => { 
            return (<Components.Certification updateActiveState={this.updateActiveState.bind(this)} {...props} />) ;
          }
        }/>
      </div>
    );
  }
}

export default Infrastructure;
