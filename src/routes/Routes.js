import React from 'react'
import {Route, Switch} from 'react-router-dom';
import {HomePage} from '../views/HomePage';

export const Routes = ({changeLanguage}) => {
  return (
    <Switch>
      <Route exact path='/' >
        <HomePage changeLanguage={changeLanguage} />
      </Route>
    </Switch>
  );
}
