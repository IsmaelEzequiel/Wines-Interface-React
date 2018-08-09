import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import App from './App';
import WineDetail from './components/Structure/WineDetail';
import NotFound from './components/NotFound';

const AppRouter = () => {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path='/' component={ App } />
          <Route path='/:id' component={ WineDetail } />
          <Route component={ NotFound } />
        </Switch>
      </div>
    </Router>
  )
}

export default AppRouter;
