import React, { Component } from "react";
import PageHeading from "../../components/PageHeading.js";
import Helmet from "react-helmet";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";

class Reminders extends Component {
  state = {};
  render() {
    const { auth } = this.props;
    if (!auth.uid) return <Redirect to="/login" />;
    return (
      <div>
        <Helmet>
          <title>Reminders | Skeff Creative Services</title>
        </Helmet>
        <PageHeading
          color="#d50000"
          view="0 0 36.04 36.04"
          svgPath="M26.71,4.12H23.63l2,3H26.8V28.84H9.28V7.15h1.13l2-3H9.37A2.84,2.84,0,0,0,6.52,7V29.07a2.84,2.84,0,0,0,2.83,2.85H26.67a2.85,2.85,0,0,0,2.85-2.83V6.93A2.77,2.77,0,0,0,26.8,4.12Z M23.82,7.15l-2-3L20.64,2.44l0,.05a2.49,2.49,0,0,0-5,0l0-.05L14.44,4.12l-2,3L11.82,8l6.29.05L24.45,8ZM18.07,1.58a.86.86,0,0,1,0,1.72.85.85,0,0,1-.86-.86h0a.86.86,0,0,1,.85-.86Z M19.92,13.08a1.2,1.2,0,0,1-1.18,1.18H12.49a1.19,1.19,0,0,1-1.17-1.18V12.9a1.19,1.19,0,0,1,1.17-1.17h6.25a1.19,1.19,0,0,1,1.18,1.17Z M25,18.11a1.22,1.22,0,0,1-1.18,1.18H12.5a1.21,1.21,0,0,1-1.18-1.18v-.18a1.2,1.2,0,0,1,1.18-1.18H23.77A1.21,1.21,0,0,1,25,17.93Z M25,23.09a1.22,1.22,0,0,1-1.18,1.18H12.5a1.21,1.21,0,0,1-1.18-1.18v-.18a1.2,1.2,0,0,1,1.18-1.18H23.77A1.21,1.21,0,0,1,25,22.91Z"
          pageTitle="Reminders"
        />
      </div>
    );
  }
}

const mapStateToProps = state => {
  console.log(state);
  return {
    auth: state.firebase.auth
  };
};

export default connect(mapStateToProps)(Reminders);
