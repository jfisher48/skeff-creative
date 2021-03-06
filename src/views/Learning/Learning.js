import React, { Component } from "react";
import PageHeading from "../../components/PageHeading.js";
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
        <PageHeading
          color="#009688"
          view="0 0 32.19 32.19"
          svgPath="M31.09,5.77H12.62a1.68,1.68,0,0,1,1.69-1.69h15.1A1.69,1.69,0,0,1,31.09,5.77ZM7.61,10.25h0v0l-.25,0H7.09L6.24,11.9l.43.3L6,13.35l-.26-1.89,0-.36,0-.21H5.16l0,.21,0,.36-.26,1.89L4.18,12.2l.43-.3-.85-1.66H3.64a2.55,2.55,0,0,0-2.55,2.54v5.77a.79.79,0,0,0,1.57,0V12.78A1,1,0,0,1,3.05,12V27.24a.88.88,0,0,0,1.76,0V19.87H6v7.36a.88.88,0,0,0,1.76,0V13.12l.63-1.3H14a.79.79,0,0,0,.76-.6l6.77-.61v-.38l-7.53,0H10Zm0-2.91A2.18,2.18,0,1,0,5.43,9.52,2.17,2.17,0,0,0,7.6,7.34ZM21.49,9.51h.73v1.78l-.66.06-6.37.57a1.5,1.5,0,0,1-1.23.64h-.15v5.57H29.32V6.42H13.81V9.54H14Zm9.6,9.3H12.62a1.69,1.69,0,0,0,1.69,1.69H18.8l-4.17,7.61h2l4.17-7.61H22.9l4.17,7.61h2L24.91,20.5h4.5a1.69,1.69,0,0,0,1.68-1.69Z"
          pageTitle="Learning"
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

export default connect(mapStateToProps)(Learning);
