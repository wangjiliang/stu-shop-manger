import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { HashRouter as Router, Switch, Route, Redirect } from 'react-router-dom'

import App from './App'
import { mainRoutes } from './routes'
import store from './store'


ReactDOM.render(
  <Provider store={store}>
    <Router>
      <Switch>
        {
          mainRoutes.map(route => <Route key={route.path} {...route} />)
        }
        <Route path="/admin" render={routeProps => <App {...routeProps} />} />
        <Redirect to='/admin' from='/' />
        <Redirect to='/404' />
      </Switch>
    </Router>
  </Provider>,
  document.getElementById('root')
);

