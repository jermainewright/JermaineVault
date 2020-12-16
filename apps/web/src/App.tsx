import React from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import { DashboardPage } from './pages/DashboardPage';

export const App: React.FC = () => (
  <HashRouter>
    <Switch>
      <Route path="/" component={DashboardPage} />
    </Switch>
  </HashRouter>
);
