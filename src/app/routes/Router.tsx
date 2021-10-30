import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import { userModel } from "../../entities/user";
import { NO_USER_ID } from "../../entities/user/model";
import ContentLayout from "../../shared/ui/content-layout";
import { LOGIN_ROUTE, publicRoutes } from "./routes";

const Router = () => {
  const { currentUser } = userModel.selectors.useUser();

  return currentUser !== null ? (
    <Switch>
      <Route path="/" component={ContentLayout} />
    </Switch>
  ) : (
    <Switch>
      {publicRoutes.map(({ path, Component }, i) => {
        return <Route path={path} component={Component} exact={true} key={i} />;
      })}
      <Redirect to={LOGIN_ROUTE} />
    </Switch>
  );
};

export default Router;
