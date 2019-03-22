import React, { Component } from "react";
import PageHeading from "../../components/PageHeading.js";
import Helmet from "react-helmet";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";

class Resources extends Component {
  state = {};
  render() {
    const { auth, profile } = this.props;
    if (!auth.uid) return <Redirect to="/login" />;
    if (profile.role !== "graphics") return <Redirect to="/" />;
    return (
      <div>
        <Helmet>
          <title>Resources | Skeff Creative Services</title>
        </Helmet>
        <PageHeading
          color="#893959"
          view="0 0 39.511 39.322"
          svgPath="M12.959,37.576.747,25.364a2.566,2.566,0,0,1,0-3.619l2.326-2.326a1.237,1.237,0,0,1,.882-.364,1.188,1.188,0,0,1,1.009.545,12.646,12.646,0,0,1,.647,1.188A6.546,6.546,0,0,0,6.73,22.552a1.819,1.819,0,0,0,1.31.585,2.9,2.9,0,0,0,1.947-.948,3.173,3.173,0,0,0,.91-1.579,1.788,1.788,0,0,0-.549-1.678A6.671,6.671,0,0,0,8.561,17.8c-.37-.185-.751-.375-1.108-.6a1.249,1.249,0,0,1-.587-.923,1.216,1.216,0,0,1,.351-1.006l2.2-2.2a2.544,2.544,0,0,1,3.6,0l4.045,4.045a.9.9,0,0,0,1.4-.127c.637-1,.675-1.872,1.489-2.687,1.237-1.237,2.767-.58,3.709.362s1.6,2.471.362,3.709c-.8.8-1.659.85-2.633,1.456a.919.919,0,0,0-.179,1.431L25.252,25.3a2.543,2.543,0,0,1,0,3.6l-2.206,2.206a1.238,1.238,0,0,1-.882.365,1.188,1.188,0,0,1-1.009-.545,12.577,12.577,0,0,1-.647-1.187,6.549,6.549,0,0,0-1.119-1.766,1.822,1.822,0,0,0-1.31-.585,2.9,2.9,0,0,0-1.946.947,3.18,3.18,0,0,0-.911,1.579,1.789,1.789,0,0,0,.549,1.678,6.67,6.67,0,0,0,1.788,1.132c.37.185.751.376,1.108.6a1.252,1.252,0,0,1,.587.922,1.219,1.219,0,0,1-.351,1.007l-2.325,2.325a2.565,2.565,0,0,1-3.618,0ZM26.172,34.42V31.705a.959.959,0,0,1,1.919,0V34.42a.959.959,0,0,1-1.919,0Zm5.4-1.442-2.262-2.261a.959.959,0,0,1,1.357-1.356l2.261,2.262a.959.959,0,1,1-1.356,1.356Zm.083-4.836a.959.959,0,0,1,0-1.919h2.714a.959.959,0,1,1,0,1.919Zm-5.1-3.256L35.938,15.5a1.605,1.605,0,0,0,0-2.261L32.583,9.885c-.136.326-.268.641-.406.975A5.162,5.162,0,0,1,31.053,12.7a3.073,3.073,0,0,1-2.827.9,4.467,4.467,0,0,1-2.239-1.261A4.463,4.463,0,0,1,24.725,10.1a3.075,3.075,0,0,1,.9-2.827,5.174,5.174,0,0,1,1.837-1.125,6.5,6.5,0,0,0,.944-.453L25.082,2.384a1.645,1.645,0,0,0-2.261,0l-9.378,9.378a3.786,3.786,0,0,0-2.007-.706L21.464,1.027a3.527,3.527,0,0,1,4.976,0L29.8,4.383a1.878,1.878,0,0,1,.54,1.537,1.816,1.816,0,0,1-.829,1.345,7.922,7.922,0,0,1-1.309.651,3.351,3.351,0,0,0-1.216.709,1.152,1.152,0,0,0-.373,1.1,2.58,2.58,0,0,0,.735,1.249,2.579,2.579,0,0,0,1.249.735,1.159,1.159,0,0,0,1.1-.373,3.359,3.359,0,0,0,.709-1.216,8.224,8.224,0,0,1,.61-1.246,1.886,1.886,0,0,1,1.393-.884,1.85,1.85,0,0,1,1.532.534l3.355,3.355a3.523,3.523,0,0,1,0,4.975L27.256,26.9A3.793,3.793,0,0,0,26.554,24.885ZM3.9,12.15a.959.959,0,1,1,0-1.919H6.617a.959.959,0,1,1,0,1.919Zm3.7-3.136L5.344,6.752A.959.959,0,1,1,6.7,5.394L8.963,7.656A.959.959,0,0,1,7.606,9.013ZM10.18,6.667V3.953a.96.96,0,1,1,1.919,0V6.667a.96.96,0,1,1-1.919,0Z"
          pageTitle="Resources"
        />
      </div>
    );
  }
}

const mapStateToProps = state => {
  console.log(state);
  return {
    auth: state.firebase.auth,
    profile: state.firebase.profile
  };
};

export default connect(mapStateToProps)(Resources);
