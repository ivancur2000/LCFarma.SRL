import React from "react";
import { Route, Switch } from "react-router-dom";
import { HomePage } from "../views/HomePage";
import { AboutPage } from "../views/AboutPage";
import { CataloguePage } from "../views/CataloguePage";
import { BusinessPage } from "../views/BusinessPage";
import { LocationPage } from "../views/LocationPage";
import { NotFoundPage } from "../views/NotFoundPage";
import { Login } from "../views/Login";
import { HomeAdmin } from "../views/admin/HomePage";
import { PerfilUser } from "../views/admin/PerfilUser";
import { InfoLcfarma } from "../views/admin/InfoLcfarma";
import { Certificade } from "../views/admin/Certificade";
import { TermsAndConditions } from "../views/TermsAndConditions";

export const Routes = ({ changeLanguage }) => {
  const token = localStorage.getItem("token");

  return (
    <Switch>
      <Route path="/" exact>
        <HomePage changeLanguage={changeLanguage} />
      </Route>
      <Route path="/aboutus" exact>
        <AboutPage changeLanguage={changeLanguage} />
      </Route>
      <Route path="/catalogue" exact>
        <CataloguePage changeLanguage={changeLanguage} />
      </Route>
      <Route path="/business" exact>
        <BusinessPage changeLanguage={changeLanguage} />
      </Route>
      <Route path="/location" exact>
        <LocationPage />
      </Route>
      <Route path="/termsCon" exact>
        <TermsAndConditions changeLanguage={changeLanguage} />
      </Route>
      <Route
        path="/login"
        render={() => {
          return token ? (
            <HomeAdmin />
          ) : (
            <Login changeLanguage={changeLanguage} />
          );
        }}
        exact
      />
      <Route
        path="/home"
        render={() => {
          return token ? (
            <HomeAdmin />
          ) : (
            <HomePage changeLanguage={changeLanguage} />
          );
        }}
        exact
      />
      <Route
        path="/perfil"
        render={() => {
          return token ? (
            <PerfilUser />
          ) : (
            <HomePage changeLanguage={changeLanguage} />
          );
        }}
        exact
      />
      <Route
        path="/info"
        render={() => {
          return token ? (
            <InfoLcfarma />
          ) : (
            <HomePage changeLanguage={changeLanguage} />
          );
        }}
        exact
      />
      <Route
        path="/certificade"
        render={() => {
          return token ? (
            <Certificade />
          ) : (
            <HomePage changeLanguage={changeLanguage} />
          );
        }}
        exact
      />
      <Route path="/*">
        <NotFoundPage />
      </Route>
    </Switch>
  );
};
