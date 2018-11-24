import React from 'react';
import { Link } from 'react-router-dom';

// The Header creates links that can be used to navigate
// between routes.

function Tab (props) {
  return (
    <li
      className = { props.isActive ? 'selected' : '' }
      onClick = { props.onActiveTab }>
      <Link to={"/" + props.link }>{props.value}</Link>
    </li>
  )
}

class SideNav extends React.Component {
  constructor(props) {
    super(props);
    this.navItems = [
      { id: 1, name: 'Home', link: '' },
      { id: 2, name: 'About us', link: 'about' },
      { id: 3, name: 'Products', link: 'products/mango' },
      { id: 4, name: 'Infrastructure', link: 'infrastructure' },
      { id: 5, name: 'Gallery', link: 'gallery' },
      { id: 6, name: 'Contact Us', link: 'contact' }
    ];
    this.state = {
      selectedTabId: props.selectedTabId
    }
  }

  componentDidUpdate(prevProps) {
    if(this.props.selectedTabId !== prevProps.selectedTabId) {
      this.setState({
        selectedTabId: this.props.selectedTabId
      });
    }
  }
  
  isActive (id) {
    return this.state.selectedTabId === id;
  }

  setActiveTab(selectedTabId) {
    this.props.updateMainNavId(selectedTabId);
  }

  render() {
    const tabs = this.navItems.map((item, i) => {
      return <Tab 
        key={i}
        isActive={this.isActive(item.id)}
        onActiveTab={() => this.setActiveTab(item.id)}
        value={item.name}
        link={item.link}
      />
    });
    return (
      <div className="side-nav">
        <Link to="/">
          <div className="logo">
            <picture>
              <img src={require("../images/logo.png")} alt=""/>
            </picture>
          </div>
        </Link>
        <nav>
          <ul>
            { tabs } 
          </ul>
        </nav>
        <div className="copy-right">
          <img src={require("../images/copyright.png")} alt=""/> <span> Siddarth Agro 2018</span>
        </div>
      </div>
    )
    
  }
}

export default SideNav
