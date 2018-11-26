import React from 'react';
import '../styles/App.scss';
import '../styles/facility.scss';


class Facility extends React.Component {
  componentDidMount() {
    this.props.updateActiveState('facility');
  }

  render() {
    return ( 
      <div className="facility">
        <p className="sub-heading">Facility</p>
        <p><strong>Siddarth Agro</strong> processing facility is in Chittoor, the heart of the mango-belt of Andhra Pradesh, which ensures that the fruit used for processing is the best. The facility is spread over an area of 22 acres. The facility currently has a tropical fruit puree processing plant.</p>
        <p className="sub-heading">Technology:</p>
        <p><strong>Siddarth Agro</strong> plant is equipped with state-of-the-art fruit puree processing aseptic filling line of CFT – ROSSI E CATELLI, Italy to produce natural fruit pulp. The line has a capacity to process and package 7 metric tons of ripe fruits per hour. The processing line is fully integrated and controlled by PLC.</p>
        <p className="sub-heading">Siddarth Agro’s technology initiatives:</p>
        <ul>
          <li>PLC operated equipment for better control over monitoring and operations with supervisory units.</li>
          <li>Two-stage washing of fruits to ensure HACCP quality requirement.</li>
          <li>Two-stage sterilization to retain the natural flavour and aroma.</li>
          <li>High speed advanced Mono block aseptic filling machine supplied by CFT - ROSSI E CATELLI.</li>
        </ul>
        <p className="sub-heading">Efficient Plant Layout:</p>
        <ul>
          <li>Minimal drop in power and steam transfer.</li>
          <li>Straight-line process flow design to maintain the hygiene• and control in respective areas.</li>
          <li>Special food grade self-levelling epoxy flooring to maintain optimum hygienic conditions.</li>
          <li>Curved corners and food grade epoxy painted walls to avoid dust accumulation and to facilitate easy washing.</li>
          <li>Advanced high raise insulated roofing with double layer GI Sheeting with air extractors to maintain the temperature inside the plant.</li>
          <li>Utility lines are routed outside the plant to keep the interiors free from dust accumulation.</li>
        </ul>
        <p className="sub-heading">Valuable Industrial Expertise:</p>
        <p><strong>Siddarth Agro</strong> is backed with strong support and service from its team of highly qualified technical personnel and domain experts with perceptive knowledge and skill. Powered by priceless hands-on experience these professionals are upgrading themselves continuously to identify and introduce improved and innovative product offerings that would delight customers worldwide and comply with the leading global quality standards.</p>
        <p>The entire facility is designed, planned, constructed and equipped as per International Standards. The flooring is alkali and acid-resistant, the gutters are covered with SS gratings and the walls covered up to 7 feet with glazed tiles and many other precautions are taken. The culmination of this tight-knit unit is an end product line that has the best-in-class quality and processing standard – one that gives us immense pride!</p>
        <p className="sub-heading">Raw Material Availability in Chittoor District:</p>
        <p>Chittoor district has good horticulture production base and enjoys an easy access to leading horticulture bases in Andhra Pradesh, Tamil Nadu, Karnataka and Maharashtra. Mangoes, bananas, papayas and citrus are the major fruits grown in the district. The district also grows Tomatoes in sizeable quantity. Mangoes dominate the horticulture resources of Chittoor district. Of the various varieties grown, Totapuri accounts for nearly 50 per cent, Neelam 25 per cent and other varieties 25 per cent. Further, the per hectare yield of mangoes in the district is one of the highest.</p>
      </div>
    );
  }
}

export default Facility;