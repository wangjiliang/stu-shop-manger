import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter as Router, Switch, Route, Redirect } from 'react-router-dom'

import App from './App'
import { mainRoutes } from './routes'


ReactDOM.render(
  <Router>
    <Switch>
      {
        mainRoutes.map( route => <Route key={route.path} {...route} />)
      }
      <Route path="/admin" render={ routeProps => <App {...routeProps} />} />
      <Redirect to='/admin' from='/' />  
      <Redirect to='/404'/>
    </Switch>
  </Router>  ,
  document.getElementById('root')
);

