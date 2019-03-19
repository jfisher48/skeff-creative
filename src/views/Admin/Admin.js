import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import styles from "./styleAdmin";
import PageHeading from "../../components/PageHeading.js";
import Helmet from "react-helmet";
import { Redirect } from "react-router-dom";
import {
  //Switch,
  //NavLink,
  Route
} from "react-router-dom";
import { connect } from "react-redux";
import { compose } from "recompose";
import { Grid } from "@material-ui/core";
import CreateContact from "../../components/contacts/CreateContact/CreateContact";
import { withRouter } from "react-router-dom";

class Admin extends Component {
  state = {};
  render() {
    //const classes = this.props.classes;
    const { auth } = this.props;
    if (!auth.uid) return <Redirect to="/login" />;
    return (
      <div>
        <Helmet>
          <title>Admin | Skeff Creative Services</title>
        </Helmet>
        <PageHeading
          color="#607d8b"
          view="0 0 36.45 41.231"
          svgPath="M26.023,40.081l-.859-2.029a6.474,6.474,0,0,1-1.738-1.039l-2.2.206a8.206,8.206,0,0,1-1.4-2.513l1.328-1.76a6.437,6.437,0,0,1,.03-2.021l-1.276-1.8a8.19,8.19,0,0,1,1.478-2.469l2.188.27a6.448,6.448,0,0,1,1.766-.987l.918-2a8.19,8.19,0,0,1,2.877.042L30,26.009a6.494,6.494,0,0,1,1.738,1.038l2.194-.206a8.2,8.2,0,0,1,1.4,2.513L34,31.114a6.442,6.442,0,0,1-.03,2.022l1.276,1.8A8.19,8.19,0,0,1,33.772,37.4l-2.188-.27a6.425,6.425,0,0,1-1.766.987l-.919,2a8.128,8.128,0,0,1-2.876-.042Zm-2.477-8.05A4.035,4.035,0,1,0,27.581,28,4.035,4.035,0,0,0,23.546,32.03ZM10.365,27.2,8.928,23.8A10.854,10.854,0,0,1,6.02,22.065l-3.673.344A13.686,13.686,0,0,1,0,18.2l2.224-2.946a10.7,10.7,0,0,1,.05-3.385L.138,8.863A13.724,13.724,0,0,1,2.611,4.73l3.661.454A10.8,10.8,0,0,1,9.229,3.529L10.765.179A13.84,13.84,0,0,1,12.973,0a13.677,13.677,0,0,1,2.608.251l1.438,3.4a10.854,10.854,0,0,1,2.906,1.737L23.6,5.04a13.7,13.7,0,0,1,2.347,4.206l-2.224,2.946a10.764,10.764,0,0,1,.111,1.534,10.9,10.9,0,0,1-.161,1.85l2.137,3.011a13.712,13.712,0,0,1-2.474,4.133l-3.661-.452a10.831,10.831,0,0,1-2.956,1.653l-1.536,3.35a13.683,13.683,0,0,1-4.816-.072ZM6.22,13.725a6.753,6.753,0,1,0,6.753-6.754A6.753,6.753,0,0,0,6.22,13.725Z"
          pageTitle="Admin"
        />
        <Grid container spacing={16}>
          <Grid item xs={12} lg={8}>
            <Grid container spacing={16}>
              <Route
                exact
                path="/admin/create-contact"
                component={CreateContact}
              />
            </Grid>
          </Grid>
          <Grid item xs={12} lg={4} />
        </Grid>
      </div>
    );
  }
}

const styledAdmin = withStyles(styles)(Admin);

const mapStateToProps = state => {
  console.log(state);
  return {
    auth: state.firebase.auth
  };
};

export default compose(
  connect(mapStateToProps),
  withRouter
)(styledAdmin);
