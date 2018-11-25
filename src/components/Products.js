import React from 'react';
import '../styles/App.scss';
import '../styles/product.scss';
import ProductSpecs from './ProductSpecs';
import { Route } from 'react-router-dom';
import Product from './Product';
import SubNav from './SubNav';

class Products extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeTab: 'mango'
    }
  }
  updateActiveState(id) {
    this.setState({
      activeTab: id
    });
  }

  componentDidMount () {
    this.props.updateMainNavId(3);//products id
  }

  render() {
    const {match} = this.props;
    return (
      <div>
        <SubNav activeTabId={this.state.activeTab} url={match.url} menuItems={ProductSpecs}/>
        <Route path={`${match.path}/:productId`} render={
          (props) => { 
            return (<Product updateActiveState={this.updateActiveState.bind(this)} {...props} />) ;
          }
        }/>
      </div>
    );
  }
}

export default Products;
