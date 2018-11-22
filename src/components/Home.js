import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/Home.scss';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import c1 from '../images/c1.jpg';
import c2 from '../images/c2.jpg';
import c3 from '../images/c3.jpg';
import c4 from '../images/c4.jpg';
import c5 from '../images/c5.jpg';
// import c6 from '../images/c6.jpg';
import c7 from '../images/c7.jpg';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
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
                  <img className="c-img" src={c2}  alt="Payapa Pulp"/>
              </div>
              <div>
                  <img className="c-img" src={c4}  alt="Mango Pulp"/>
              </div>
              <div>
                  <img className="c-img" src={c3}  alt="Mango Pulp"/>
              </div>
              <div>
                  <img className="c-img" src={c5}  alt="Mango Pulp"/>
              </div>
              {/* <div>
                  <img className="c-img" src={c6}  alt="Mango Pulp"/>
              </div> */}
              <div>
                  <img className="c-img" src={c7}  alt="Mango Pulp"/>
              </div>
          </Carousel>
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
