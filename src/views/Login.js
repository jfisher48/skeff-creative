import React, { Component } from "react";
import PageHeading from "../components/PageHeading.js";
import DashboardIco from "../icons/dashboard_b.svg";
import Helmet from "react-helmet";
import SignIn from "../components/auth/SignIn.js";

class Login extends Component {
  state = {};
  render() {
    return (
      <div>
        <Helmet>
          <title>Login | Skeff Creative Services</title>
        </Helmet>
        <PageHeading headingIcon={DashboardIco}>Login</PageHeading>
        <SignIn />
      </div>
    );
  }
}

export default Login;
