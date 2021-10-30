import { useStore } from "effector-react";
import React from "react";
import { HOME_ROUTE, publicRoutes } from "./routes";
import { Switch, Route, Redirect } from "react-router-dom";
import { LOGIN_ROUTE } from "./routes";
import $userStore from "../../entities/user";
import ContentLayout from "../../shared/ui/content-layout";

const Router = () => {
  const { currentUser } = useStore($userStore);
  console.log(currentUser);
  return currentUser.id === "-1" ? (
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
