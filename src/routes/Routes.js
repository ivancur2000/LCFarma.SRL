import React from 'react'
import {Route, Switch} from 'react-router-dom';
import {HomePage} from '../views/HomePage';

export const Routes = () => {
  return (
    <Switch>
      <Route exact path='/' >
        <HomePage />
      </Route>
    </Switch>
  );
}
