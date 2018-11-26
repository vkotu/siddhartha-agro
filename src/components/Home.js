import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/Home.scss';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import c1 from '../images/c1.jpg';
import c2 from '../images/c2.jpg';
import c3 from '../images/c3.jpg';
// import c4 from '../images/c4.jpg';
import c5 from '../images/c5.jpg';
// import c6 from '../images/c6.jpg';
import c7 from '../images/c7.jpg';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.aboutUsTabId = 2;
    this.productsTabId = 3;
  }

  setActiveTab(id) {
    this.props.updateMainNavId(id);
  }

  render() {
    return (
      <div className="home">
        <div className="carousel-container">
          <Carousel autoPlay showArrows={false} infiniteLoop={true} showStatus={false} centerMode={false} showThumbs={false}>
              <div>
                  <img className="c-img" src={c1} alt="Guava Pulp"/>
              </div>
              <div>
                  <img className="c-img" src={c3}  alt="Mango Pulp"/>
              </div>
              {/* <div>
                  <img className="c-img" src={c4}  alt="Mango Pulp"/>
              </div> */}
              <div>
                  <img className="c-img" src={c7}  alt="Mango Pulp"/>
              </div>
              <div>
                  <img className="c-img" src={c2}  alt="Payapa Pulp"/>
              </div>
              <div>
                  <img className="c-img" src={c5}  alt="Mango Pulp"/>
              </div>
              {/* <div>
                  <img className="c-img" src={c6}  alt="Mango Pulp"/>
              </div> */}
          </Carousel>
        </div>
        <div className="product-links">
          <div>
            Pulp / Puree
          </div>
          <div className="thumbnails" onClick={ () => this.setActiveTab(this.productsTabId) }>
            <Link to="/products/mango">
              <div>
                <p>Mango Pulp</p>
                <div>
                  <img className="c-img" src={require("../images/mango.jpg")}  alt="Mango Pulp"/>
                </div>
              </div>
            </Link>
            <Link to="/products/papaya">
              <div>
                <p>Papaya Pulp</p>
                <div>
                  <img className="c-img" src={require("../images/papaya-1.jpg")}  alt="Papaya Pulp"/>
                </div>
              </div>
            </Link>
            <Link to="/products/guava">
              <div>
                <p>Guava Pulp</p>
                <div>
                  <img className="c-img" src={c5}  alt="Guava Pulp"/>
                </div>
              </div>
            </Link>
          </div>
        </div>
        <article>
          <p><strong>Siddarth Agro</strong> is a dynamic and exponentially growing company primarily engaged in the manufacturing and export of processed food products and Agro commodities business. Siddarth Agro is poised to cater to the world market with the best of nature’s nutritious fruit puree. The company aims to be a leading reliable supplier of processed food products from India.</p>
          <p>The management team possesses over three decades of expertise and deep knowledge in mango cultivation, procurement and pulp processing and has been instrumental in mobilizing the right technology and human assets for the strategic development of the company. Siddarth Agro is located in Chittoor, the heart of the mango belt of India. <Link to='/about' onClick={ () => this.setActiveTab(this.aboutUsTabId) }>Read more..</Link></p>
        </article>
      </div>
    )
  }
}

export default Home
