import React from 'react';
import { Route, Switch } from 'react-router-dom'
import routes from '../../router/routes'
import './index.scss'

export function MainRoutes(){
  
    
  return (
    <div className='main'>
        <Switch>
        {routes.map(
            (route, index) => 
            // console.log(route)
            //@ts-ignore
            <Route key={index} {...route} />
        )}
        </Switch>
    </div>
  )
}

export default MainRoutes;