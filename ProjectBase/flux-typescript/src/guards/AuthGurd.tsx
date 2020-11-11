import React from "react";
import { Route, Redirect, RouteProps } from "react-router-dom";
import { AuthUtil } from "../utils/AuthUtil";

const AuthGurd: React.FC<RouteProps> = ({ component: Component, ...rest }) => {
  if (!Component) return null;
  return (
    <Route
      {...rest}
      render={(props) =>
        AuthUtil.isLoggedIn === true ? (
          <Component {...props} />
        ) : (
          <Redirect to="/login" />
        )
      }
    />
  );
};

export default AuthGurd;
