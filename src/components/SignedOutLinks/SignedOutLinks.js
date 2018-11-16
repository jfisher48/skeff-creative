import React from "react";
import { NavLink } from "react-router-dom";
import { Button } from "@material-ui/core";

const SignedOutLinks = () => {
  return (
    <div>
      <NavLink to="/login">
        <Button size="large">Log In</Button>
      </NavLink>
    </div>
  );
};

export default SignedOutLinks;
