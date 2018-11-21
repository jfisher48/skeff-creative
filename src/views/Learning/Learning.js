import React, { Component } from "react";
import PageHeading from "../../components/PageHeading.js";
import LearningIco from "../../icons/learning_b.svg";
import Helmet from "react-helmet";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";

class Learning extends Component {
  state = {};
  render() {
    const { auth } = this.props;
    if (!auth.uid) return <Redirect to="/login" />;
    return (
      <div>
        <Helmet>
          <title>Learning | Skeff Creative Services</title>
        </Helmet>
        <PageHeading headingIcon={LearningIco} pageTitle="Learning" />
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

export default connect(mapStateToProps)(Learning);
