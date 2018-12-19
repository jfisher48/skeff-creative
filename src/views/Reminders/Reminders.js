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
          view="0 0 30.333 30.336"
          svgPath="M8.867,21.684c-.313-.313-.609-.635-.9-.962L.4,29.419a.507.507,0,0,0,.717.717l8.7-7.576C9.491,22.279,9.174,21.99,8.867,21.684ZM17.8,5.988l-3.88,2.755c-.926.926.087,3.438,2.26,5.611s4.688,3.188,5.613,2.261l2.74-3.858a9.878,9.878,0,0,1-4.209-2.545A9.784,9.784,0,0,1,17.8,5.988Zm-2.336,9.084c-2.219-2.219-3.7-5.217-2.429-6.844a7.109,7.109,0,0,0-6.813,1.7c-2.117,2.12-.61,7.062,3.366,11.04s8.923,5.484,11.04,3.366a7.122,7.122,0,0,0,1.692-6.84C20.453,18.958,17.191,16.8,15.459,15.071ZM28.3,7.886c-.39.391-1.973-.56-3.535-2.121s-2.512-3.145-2.121-3.535,1.973.559,3.535,2.121S28.692,7.5,28.3,7.886Zm-1.259-4.4C24.271.715,21.22-.731,20.23.26a5.883,5.883,0,0,0-1.6,4.784,8.189,8.189,0,0,0,2.407,4.451,8.259,8.259,0,0,0,4.451,2.436A5.884,5.884,0,0,0,30.271,10.3C31.262,9.31,29.816,6.26,27.043,3.488Z"
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
