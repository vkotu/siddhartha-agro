import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/Home.scss';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="home">
        <div>
          <picture>
            <source srcSet={require("../images/bg.jpeg")} media="(min-width: 1200px)"/>
            <source srcSet={require("../images/bg-500.jpeg")} media="(min-width: 800px)"/>
            <img src={require("../images/bg-300.jpeg")} alt=""/>
            {/* <img src={require("../images/bg-150.jpeg")} alt=""/> */}
          </picture>
          <div>
            Feel the real taste of Mango
          </div>
        </div>
        <article>
          Siddharth Agro is a dynamic and exponentially growing company primarily engaged in the manufacturing and export of processed food products and Agro commodities business. 
          <Link to='/about'>Read more..</Link>
        </article>
      </div>
    )
  }
}

export default Home
