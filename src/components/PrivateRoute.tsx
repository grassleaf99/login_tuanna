import React, { FunctionComponent, ReactElement } from "react";
import { Redirect, RouteProps, Route } from "react-router-dom";

const PrivateRoute: FunctionComponent<RouteProps> = (props): ReactElement => {
  const isLoggedIn = Boolean(localStorage.getItem("access_token"));
  if (!isLoggedIn) return <Redirect to="/login" />;
  return <Route {...props} />;
};

export default PrivateRoute;
