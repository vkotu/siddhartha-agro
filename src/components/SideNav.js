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

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.navItems = [
      { id: 1, name: 'Home', link: '' },
      { id: 2, name: 'About us', link: 'about' },
      { id: 3, name: 'Products', link: 'products' },
      { id: 4, name: 'Infrastructure', link: 'infrastructure' },
      { id: 5, name: 'Contact Us', link: 'contact' }
    ];
    this.state = {
      selectedTabId: 1
    }
  }

  isActive (id) {
    return this.state.selectedTabId === id;
  }

  setActiveTab(selectedTabId) {
    this.setState({ selectedTabId });
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
        <div className="logo">
          <picture>
            <img src={require("../images/logo.png")} alt=""/>
          </picture>
        </div>
        <nav>
          <ul>
            {/* <li className="selected"><Link to='/'>Home</Link></li>
            <li><Link to='/about'>About us</Link></li>
            <li><Link to='/products'>Products</Link></li>
            <li><Link to='/infrastructure'>Infrastructure</Link></li>
            <li><Link to='/contact'>Contact Us</Link></li> */}
            { tabs } 
          </ul>
        </nav>
      </div>
    )
    
  }
}

export default Header