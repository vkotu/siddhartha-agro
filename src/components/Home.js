import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/Home.scss';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import c1 from '../images/carousel-1.png';
import c2 from '../images/carousel-2.png';
import c3 from '../images/carousel-3.png';
import c4 from '../images/carousel-4.jpg';

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
                  <img src={c4}  alt="Mango Pulp"/>
              </div>
              <div>
                  <img src={c1} alt="Guava Pulp"/>
              </div>
              <div>
                  <img src={c2}  alt="Payapa Pulp"/>
              </div>
              {/* <div>
                  <img src={c3}  alt="Mango Pulp"/>
              </div> */}
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
