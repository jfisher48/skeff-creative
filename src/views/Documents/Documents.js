import React, { Component } from "react";
import PageHeading from "../../components/PageHeading.js";
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
        <PageHeading
          color="#ac9e61"
          view="0 0 38.01 38.01"
          svgPath="M3.92,31.58a.75.75,0,0,1-.84-.66.74.74,0,0,1,.08-.44l5.49-13.9a1.86,1.86,0,0,1,1.58-1.11H35.16a.76.76,0,0,1,.85.66.72.72,0,0,1-.09.45L31.08,30.42a1.88,1.88,0,0,1-1.58,1.11H3.92Z M2.41,24.34c-.24.59-.41.59-.41-.05V11.67a5.43,5.43,0,0,1,.58-2.16l1.23-2.1a2.36,2.36,0,0,1,1.75-1H15.72a3,3,0,0,1,1.93.87L18.7,8.52a2.9,2.9,0,0,0,1.92.87h10.1a.75.75,0,0,1,.76,1.11L31,11.67a1.88,1.88,0,0,1-1.58,1.11H7.84a1.76,1.76,0,0,0-1.58,1.11Z"
          pageTitle="Documents"
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

export default connect(mapStateToProps)(Documents);
