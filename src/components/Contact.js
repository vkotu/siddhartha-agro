import React from 'react';
import '../styles/App.scss';
import '../styles/contact.scss';

class Contact extends React.Component {
  render() {
    return (
      <div className="contact">
        <h4 className="sub-heading">Contact us</h4>
        <div className="cards">
          <div className="card m10">
            <div>SALES & MARKETING</div>
            <div><img src={require('../images/logo-2.png')} alt=""/></div>
            <div>4-2040, VELLORE ROAD,</div>
            <div>GREAMSPET, CHITTOOR</div>
            <div>ANDHRA PRADESH</div>
            <div>PHONE: +91-9866113691</div>
            <div>EMAIL: sagro1970@gmail.com</div>
          </div>
          <div className="card m10">
            <div>FACTORY</div>
            <div><img src={require('../images/logo-2.png')} alt=""/></div>
            <div>SY.NO 4/1, ECHINERI VILLAGE,</div>
            <div>THAVANAMPALLI MANDAL,</div>
            <div>CHITTOOR DISTRICT,</div>
            <div>ANDHRA PRADESH</div>
            <div>PHONE: +91-9866113691</div>
            <div>EMAIL: sagro1970@gmail.com</div>
          </div>
        </div>
      </div>
    );
  }
}

export default Contact;
