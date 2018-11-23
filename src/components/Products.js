import React from 'react';
import '../styles/App.scss';
import '../styles/product.scss';
import ProductSpecs from './ProductSpecs';
import { Route, Link } from 'react-router-dom';
import Product from './Product';

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
  render() {
    const {match} = this.props;
    const products = ProductSpecs.map((item, i) => {
      return <li key={i} className={item.id === this.state.activeTab ? 'active' : ''}>
        <Link to={`${match.url}/${item.id}`}>{item.name}</Link>
      </li>;
    });
    return (
      <div>
        <ul className="sub-nav">
          {products}
        </ul>
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
