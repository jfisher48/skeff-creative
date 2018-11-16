import React, { Component } from "react";
import PageHeading from "../components/PageHeading.js";
import DocumentsIco from "../icons/documents_b.svg";
import Helmet from "react-helmet";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";

class Documents extends Component {
  state = {};
  render() {
    const { auth } = this.props;
    if (!auth.uid) return <Redirect to="/login" />;
    return (
      <div>
        <Helmet>
          <title>Documents | Skeff Creative Services</title>
        </Helmet>
        <PageHeading headingIcon={DocumentsIco}>Documents</PageHeading>
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

export default connect(mapStateToProps)(Documents);
