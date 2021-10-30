import React, { FC } from "react";
import { Redirect, Route, Switch } from "react-router";
import { privateRoutes } from "./routes";

const PrivateRouter = () => {
  return (
    <Switch>
      {privateRoutes.map(({ path, Component }) => (
        <Route path={path} component={Component} exact key={path} />
      ))}
      <Redirect to={"/home"} />
    </Switch>
  );
};

export default PrivateRouter;
