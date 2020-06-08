import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter as Router, Switch, Route, Redirect } from 'react-router-dom'

import App from './App'

import { mainRoutes } from './routes'


ReactDOM.render(
  <Router>
    <Switch>
      <Route path="/admin" render={ routeProps => <App {...routeProps} />} />
      {
        mainRoutes.map( route => <Route key={route.path} {...route} />)
      }
       <Redirect to='/admin' from='/' />  {/* 路由默认处理 */}
      <Redirect to='/404'/>
    </Switch>
  </Router>  ,
  document.getElementById('root')
);

