import React from 'react'
import { HashRouter, Redirect, Route, Switch } from 'react-router-dom'


import BasicLayout from '../BasicLayout'

export default () => {
  return (
    <HashRouter>
      <Switch>
        <Redirect exact from='/' to='/home' />
        {/* <Route path="/user" component={UserLayout} /> */}
        <Route path="/" component={BasicLayout} />
      </Switch>
    </HashRouter>
  )

}
