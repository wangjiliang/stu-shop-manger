import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom'
import { adminRoutes } from './routes'
import './App.less'

import Frame from './components/Frame/Index'

function App() {
  return (
    <Frame className="App">
      <Switch>
        {
          adminRoutes.map(route => {
            return(
              <Route 
                key={route.path}
                {...route}
                render={routeProps => {
                  return <route.component {...routeProps} />
                }}
              />
            )
          })
        }
        <Redirect to={adminRoutes[0].path} from='/admin' />  {/* 路由默认处理 */}
        <Redirect to='/404' />
      </Switch>
    </Frame>
  );
}

export default App;
