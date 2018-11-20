import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Components from './common';

// The Main component renders one of the three provided
// Routes (provided that one matches). Both the /roster
// and /schedule routes will match any pathname that starts
// with /roster or /schedule. The / route will only match
// when the pathname is exactly the string "/"
const Main = () => (
  <div className="right-content">
    <div className="header">
      <span>Welcome to Siddartha agro!</span>
    </div>
    <Switch>
      <Route exact path='/' component={Components.Home}/>
      <Route path='/about' component={Components.About}/>
      <Route path='/infrastructure' component={Components.Infrastructure}/>
      <Route path='/products' component={Components.Product}/>
      <Route path='/contact' component={Components.Contact}/>
    </Switch>
  </div>
)

export default Main
