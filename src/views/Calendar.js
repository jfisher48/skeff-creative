import React, { Component } from "react";
import PageHeading from "../components/PageHeading.js";
import CalendarIco from "../icons/calendar_b.svg";
import Helmet from "react-helmet";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";

class Calendar extends Component {
  state = {};
  render() {
    const { auth } = this.props;
    if (!auth.uid) return <Redirect to="/signin" />;
    return (
      <div>
        <Helmet>
          <title>Calendar | Skeff Creative Services</title>
        </Helmet>
        <PageHeading headingIcon={CalendarIco}>Calendar</PageHeading>
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

export default connect(mapStateToProps)(Calendar);
