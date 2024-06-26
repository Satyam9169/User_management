import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

const Login = () => {
  const { loginWithRedirect, isAuthenticated } = useAuth0();

  return (
    !isAuthenticated && <button className="btn btn-primary" onClick={() => loginWithRedirect()}>Sign In</button>
  );
};

export default Login;
