import React from 'react'
import {
  Route // for later
} from 'react-router-dom';
import Components from './common';
import { Link } from 'react-router-dom'

// The Main component renders one of the three provided
// Routes (provided that one matches). Both the /roster
// and /schedule routes will match any pathname that starts
// with /roster or /schedule. The / route will only match
// when the pathname is exactly the string "/"
const Main = (props) => {
  const contextProps = props;
  return (<div className="right-content">
    <div className="top-header">
      <div className="header">
        <span>Welcome to Siddarth agro!</span>
        <div>
          <div>
            <p>
              <span><img src={require("../images/email.png")} alt="Home"/></span>
              <span><a href="mailto:sagro1970@gmail.com?Subject=Siddarth%20Agro" target="_blank" rel="noopener noreferrer">sagro1970@gmail.com</a></span>
            </p>
            <p>
              <span> <img src={require("../images/phone.png")} alt="Home"/></span><span className="ph-num">+91-9866113691</span>
            </p>
          </div>
          <div>
            <Link to="/" onClick={() => contextProps.updateMainNavId(1)}>
              <img src={require("../images/home.jpeg")} alt="Home"/>
            </Link>
            <a href="http://facebook.com/siddarth-agro" target="_blank" rel="noopener noreferrer">
              <img src={require("../images/fb-logo.png")} alt="fb"/>
            </a>
            <a href="https://twitter.com/siddarth-agro" target="_blank" rel="noopener noreferrer">
              <img src={require("../images/twitter-logo.png")} alt="twitter"/>
            </a>
          </div>
        </div>
      </div>
    </div>
    <div className="content">
      <Route exact path='/' render={() => <Components.Home selectedTabId={contextProps.selectedTabId} updateMainNavId={contextProps.updateMainNavId}/>}/>
      <Route path='/about' component={Components.About}/>
      <Route path='/infrastructure' render={(props) => <Components.Infrastructure updateMainNavId={contextProps.updateMainNavId} {...props}/>}/>
      <Route path='/products' render={(props) => <Components.Products updateMainNavId={contextProps.updateMainNavId} {...props}/>}/>
      {/* <Route path='/products' component={Topics}/> */}
      <Route path='/gallery' component={Components.Gallery}/>
      <Route path='/contact' component={Components.Contact}/>
    </div>
  </div>)
}

export default Main
