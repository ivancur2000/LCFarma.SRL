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
        <BusinessPage />
      </Route>
      <Route path="/location" exact>
        <LocationPage />
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
          return token ? <HomeAdmin /> : <HomePage changeLanguage={changeLanguage} />;
        }}
        exact
      />
      <Route
        path="/perfil"
        render={() => {
          return token ? <PerfilUser /> : <HomePage />;
        }}
        exact
      />
      <Route path="/*">
        <NotFoundPage />
      </Route>
    </Switch>
  );
};
