import React from 'react';
import Login from './Login/Login'
import { Route, Switch } from 'react-router-dom'
import './index.scss'

function UserLayout(){
  return (
    <div className='main-login'>
        <div className="flex-main">
            <div className='logo'>
                后台管理系统
            </div>
            <Switch>
                <Route key={1} path='/user/login' component={Login}  />
            </Switch>
        </div>
    </div>
  )

}

export default UserLayout;