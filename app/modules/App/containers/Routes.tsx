import React from 'react';
import { Switch, Route } from 'react-router-dom';
import App from '@modules/App/containers/App';
import HomePage from '@modules/Home/containers/HomePage';
import { PrivateRoutes, PublicRoutes } from '@constants/routes.constants';

const Routes = () => {
  return (
    <App>
      <Switch>
        <Route path={PrivateRoutes.Home} component={HomePage} />
      </Switch>
    </App>
  );
};

export default Routes;
