import React from "react";
import { inject, observer } from "mobx-react";
import { Redirect, Route, useLocation } from "react-router-dom";

const PrivateRoute = inject("authStore")(observer(({ component: Component, authStore, ...rest }) => {
  const location = useLocation();
  const { isAuthenticated } = authStore;

  return (
    <Route {...rest}>
      {isAuthenticated ?
        <Component />
      :
        <Redirect to={{ pathname: "/signIn", state: { from: location } }} />
      }
    </Route>
  );
}));

export default PrivateRoute;
