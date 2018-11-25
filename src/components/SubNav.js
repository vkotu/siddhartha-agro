import React from 'react';
import '../styles/App.scss';
import '../styles/product.scss';
import { Link } from 'react-router-dom';


class SubNav extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeTab: props.activeTabId
    }
  }
  updateActiveState(id) {
    this.setState({
      activeTab: id
    });
  }

  componentDidUpdate(prevProps) {
    let currentId = this.props.activeTabId;
    if(currentId !== prevProps.activeTabId) {
      this.updateActiveState(currentId);
    }
  }

  render() {
    const items = this.props.menuItems.map((item, i) => {
      return <li key={i} className={item.id === this.state.activeTab ? 'active' : ''}>
        <Link to={`${this.props.url}/${item.id}`}onClick={ () => this.updateActiveState(item.id) }>{item.name}</Link>
      </li>;
    });
    return (
      <ul className="sub-nav">
         {items}
      </ul>
    );
  }
}

export default SubNav;
