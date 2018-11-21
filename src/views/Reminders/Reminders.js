import React, { Component } from "react";
import PageHeading from "../../components/PageHeading.js";
import RemindersIco from "../../icons/reminders_b.svg";
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
        <PageHeading headingIcon={RemindersIco} pageTitle="Reminders" />
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
