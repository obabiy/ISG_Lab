import React from "react";
import "./App.css";

import { Switch, Route } from "react-router-dom";
import { observer, inject} from "mobx-react";
import HomePage from "./components/HomePage/HomePage";
import SignUpPage from "./components/SignUpPage/SignUpPage";
import SignInPage from "./components/SignInPage/SignInPage";
import AdminPanelPage from "./components/AdminPanelPage/AdminPanelPage";
import PrivateRoute from './PrivateRoute'

function App(props) {
  return (
    <div className="App">
      <Route exact path="/">
        <HomePage />
      </Route>
      <Switch>
        <Route path="/signUp">
          <SignUpPage />
        </Route>
        <Route path="/signIn">
          <SignInPage />
        </Route>
          <PrivateRoute path="/admin" component={AdminPanelPage} />
      </Switch>
    </div>
  );
}

export default inject('authStore')(observer(App));
