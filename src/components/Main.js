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
          <Link to="/" onClick={() => props.updateState(1) }>
            <img src={require("../images/home.jpeg")} alt="Home"/>
          </Link>
          <span>
            <span>Email:</span>
            <span><a href="mailto:sagro1970@gmail.com?Subject=Siddarth%20Agro" target="_blank" rel="noopener noreferrer">sagro1970@gmail.com</a></span>
            <span>Phone:</span><span>+91-9866113691</span>
          </span>
        </div>
      </div>
    </div>
    <div className="content">
      <Route exact path='/' render={() => <Components.Home selectedTabId={contextProps.selectedTabId} updateMainNavId={contextProps.updateMainNavId}/>}/>
      <Route path='/about' component={Components.About}/>
      <Route path='/infrastructure' component={Components.Infrastructure}/>
      <Route path='/products' render={(props) => <Components.Products updateMainNavId={contextProps.updateMainNavId} {...props}/>}/>
      {/* <Route path='/products' component={Topics}/> */}
      <Route path='/gallery' component={Components.Gallery}/>
      <Route path='/contact' component={Components.Contact}/>
    </div>
  </div>)
}

export default Main
