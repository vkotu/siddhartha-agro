import React from 'react';
import '../styles/App.scss';
import ProductSpecs from './ProductSpecs';

class Product extends React.Component {

  componentDidMount() {
    this.props.updateActiveState(this.props.match.params.productId);
  }
  
  componentDidUpdate(prevProps) {
    console.log('hi');
    let currentId = this.props.match.params.productId;
    if(currentId !== prevProps.match.params.productId) {
      this.props.updateActiveState(currentId);
    }
  }
  render() {
    const productId = this.props.match.params.productId;
    const productInfo = ProductSpecs.find((p) => productId === p.id);
    return (
      <div className="product">
        <div className="p10 sub-heading">{productInfo.name}</div>
        <div className="images">
          <ul>
            <li>
              <figure>
                <img src={require(`../images/${productId}-1.jpg`)} alt="Mango Plup."/>
              </figure>
            </li>
            {/* <li>
              <figure>
                <img src={require(`../images/${productId}-2.jpg`)} alt="Mango Plup."/>
              </figure>
            </li> */}
          </ul>
        </div>
        <div className="description p10" dangerouslySetInnerHTML={{__html: productInfo.description}}></div>
        <div className="specs p10">
          <div className="sub-heading">Specifications</div>
          <img src={require(`../images/${productId}-spec.png`)} alt="Spec"/>
        </div>
        <div className="packing-storage p10" dangerouslySetInnerHTML={{__html: productInfo.packingStorage}}></div>
      </div>
    );
  }
}

export default Product;
