import React, { Component } from "react";
import PageHeading from "../../components/PageHeading.js";
import Helmet from "react-helmet";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";

class Dashboard extends Component {
  state = {};
  render() {
    const { auth } = this.props;
    if (!auth.uid) return <Redirect to="/login" />;
    return (
      <div>
        <Helmet>
          <title>Dashboard | Skeff Creative Services</title>
        </Helmet>
        <PageHeading
          color="#9e9e9e"
          view="0 0 39.37 39.37"
          svgPath="M26.82,17.6c-.44-.4-8.71,6.69-8.71,6.69h0a2,2,0,0,0,3,2.7h0S27.25,18,26.82,17.6Z M19.7,5.92A18.53,18.53,0,0,0,1.19,24.43a18.15,18.15,0,0,0,2,8.39,1.14,1.14,0,0,0,1,.63H35.15a1.23,1.23,0,0,0,1-.63A18.53,18.53,0,0,0,19.7,5.92ZM34.42,31.14H5a15.28,15.28,0,0,1-1.39-5.55H5.81a1.16,1.16,0,0,0,0-2.32H3.56a16.34,16.34,0,0,1,1.56-5.93l2,1.13a1,1,0,0,0,.57.18,1.17,1.17,0,0,0,1.17-1.16,1.12,1.12,0,0,0-.59-1l-2-1.13A16.15,16.15,0,0,1,10.62,11l1.12,2a1.19,1.19,0,0,0,1,.58,1.3,1.3,0,0,0,.58-.14,1.18,1.18,0,0,0,.4-1.59l-1.13-2a16.29,16.29,0,0,1,5.93-1.56v2.26a1.16,1.16,0,0,0,2.32,0V8.29a16.24,16.24,0,0,1,5.9,1.56l-1.13,2A1.17,1.17,0,0,0,26,13.41a1.59,1.59,0,0,0,.57.14,1.14,1.14,0,0,0,1-.58l1.13-2a16.11,16.11,0,0,1,4.33,4.34l-2,1.12a1.16,1.16,0,0,0-.44,1.58,1.14,1.14,0,0,0,1.6.42l2-1.13a16.33,16.33,0,0,1,1.59,5.93H33.56a1.16,1.16,0,0,0,0,2.32h2.29A16.18,16.18,0,0,1,34.42,31.14Z"
          pageTitle="Dashboard"
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

export default connect(mapStateToProps)(Dashboard);
