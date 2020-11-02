import React from "react";

import { Link, Redirect, useHistory } from "react-router-dom";
import { inject, observer } from "mobx-react";

function HomePage(props) {
  const isAuthenticated = props.authStore.isAuthenticated;

  const history = useHistory();
  return (
    <div className="container">
      <h1>Home Page</h1>

      {isAuthenticated ? (
        <button onClick={() => history.push("/admin")}>Admin panel</button>
      ) : (
        <>
          <Link to="/signIn">
            <button>Sign In</button>
          </Link>
          <Link to="/signUp">
            <button>Sign Up</button>
          </Link>
        </>
      )}
    </div>
  );
}

export default inject("authStore")(observer(HomePage));
