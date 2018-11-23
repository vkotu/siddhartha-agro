import React from 'react'
import {
  Route // for later
} from 'react-router-dom';
import Components from './common';

// The Main component renders one of the three provided
// Routes (provided that one matches). Both the /roster
// and /schedule routes will match any pathname that starts
// with /roster or /schedule. The / route will only match
// when the pathname is exactly the string "/"
const Main = (props) => (
  <div className="right-content">
    <div className="top-header">
      <div className="header">
        <span>Welcome to Siddarth agro!</span>
        <span><span>email:</span> sagro1970@gmail.com<br/><span>Phone:</span> +91-9866113691</span>
      </div>
    </div>
    <div className="content">
      <Route exact path='/' render={() => <Components.Home selectedTabId={props.selectedTabId} updateState={props.updateState}/>}/>
      <Route path='/about' component={Components.About}/>
      <Route path='/infrastructure' component={Components.Infrastructure}/>
      <Route path='/products' component={Components.Products}/>
      {/* <Route path='/products' component={Topics}/> */}
      <Route path='/gallery' component={Components.Gallery}/>
      <Route path='/contact' component={Components.Contact}/>
    </div>
  </div>
)

export default Main
