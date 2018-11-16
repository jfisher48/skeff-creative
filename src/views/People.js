import React, { Component } from "react";
import PageHeading from "../components/PageHeading.js";
import PeopleIco from "../icons/people_b.svg";
import Helmet from "react-helmet";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";

class People extends Component {
  state = {};
  render() {
    const { auth } = this.props;
    if (!auth.uid) return <Redirect to="/login" />;
    return (
      <div>
        <Helmet>
          <title>People | Skeff Creative Services</title>
        </Helmet>
        <PageHeading headingIcon={PeopleIco}>People</PageHeading>
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

export default connect(mapStateToProps)(People);
