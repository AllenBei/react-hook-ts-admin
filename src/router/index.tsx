import React from 'react'
import { HashRouter, Redirect, Route, Switch } from 'react-router-dom'

import BasicLayout from '../BasicLayout'
import UserLayout from '../UserLayout'

// 按照 Layout 分组路由
// UserLayout 对应的路由：/user/xxx
// BasicLayout 对应的路由：/xxx
export default () => {
  return (
    <HashRouter>
      <Switch>
        <Redirect exact from='/' to='/home' />
        <Redirect exact from='/user' to='/user/login' />
        <Route path="/user" component={UserLayout} />
        <Route path="/" component={BasicLayout} />
      </Switch>
    </HashRouter>
  )

}
