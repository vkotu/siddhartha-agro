import React from 'react';
import '../styles/App.scss';
import '../styles/facility.scss';


class Certification extends React.Component {
  componentDidMount() {
    this.props.updateActiveState('certifications');
  }

  render () {
    return (
      <div class="facility">
        <p className="sub-heading">Certifications</p>
        <p>Siddarth Agro’s quality and business objectives are designed to challenge the organization through continual improvement and a zeal for results.</p>
        <p>At Siddarth Agro quality determines not only the end product but processes and operations at all levels. The company's laboratory is equipped with the latest testing facilities to perform all necessary tests. Frequent & stringent quality checks are carried out for Physical, Chemical, Organoleptic & Microbial parameters and immediate corrective measures are carried out on detection of variance in parameters, assuring a high-quality end product. As a mandatory procedure, all finished products are analyzed with extreme care before clearance by Siddarth Agro’s quality assurance staff.</p>
        <h5>Our certifications include:</h5>
        <ol>
          <li>FSSC 22000</li>
          <li>HACCP</li>
          <li>ISO 9001:2008</li>
        </ol>
      </div>
    );
  }
}
export default Certification;