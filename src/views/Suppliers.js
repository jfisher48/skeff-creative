import React, { Component } from "react";
import PageHeading from "../components/PageHeading.js";
import Helmet from "react-helmet";
import SuppliersIco from "../icons/suppliers_b.svg";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";

class Suppliers extends Component {
  state = {};
  render() {
    const { auth } = this.props;
    if (!auth.uid) return <Redirect to="/signin" />;
    return (
      <div>
        <Helmet>
          <title>Suppliers | Skeff Creative Services</title>
        </Helmet>
        <PageHeading headingIcon={SuppliersIco}>Suppliers</PageHeading>
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

export default connect(mapStateToProps)(Suppliers);
