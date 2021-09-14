import React from "react";
import { Route, Switch } from "react-router-dom";
import { HomePage } from "../views/HomePage";
import { AboutPage } from "../views/AboutPage";
import { CataloguePage } from "../views/CataloguePage";
import { BusinessPage } from "../views/BusinessPage";
import { LocationPage } from "../views/LocationPage";
import { NotFoundPage } from "../views/NotFoundPage";
import { HomeAdmin } from "../views/admin/HomePage";

export const Routes = ({ changeLanguage }) => {
  return (
    <Switch>
      <Route exact path="/">
        <HomePage changeLanguage={changeLanguage} />
      </Route>
      <Route path="/aboutus">
        <AboutPage changeLanguage={changeLanguage} />
      </Route>
      <Route path="/catalogue">
        <CataloguePage changeLanguage={changeLanguage} />
      </Route>
      <Route path="/business">
        <BusinessPage />
      </Route>
      <Route path="/location">
        <LocationPage />
      </Route>
      <Route path="/home">
        <HomeAdmin />
      </Route>
      <Route path="/*">
        <NotFoundPage />
      </Route>
    </Switch>
  );
};
