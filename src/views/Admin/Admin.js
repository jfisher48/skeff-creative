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
          color="#e91e63"
          view="0 0 33.67 33.67"
          svgPath="M15.53,24.16v.37a.86.86,0,0,1,0,.23.2.2,0,0,1-.09.14.16.16,0,0,1-.14.05H9.94a.5.5,0,0,1-.27-.05.22.22,0,0,1-.19-.09.33.33,0,0,1-.09-.23c0-.1-.05-.24-.05-.42v-.42a.47.47,0,0,1,.09-.28l.14-.28a1.27,1.27,0,0,1,.24-.28l1.58-1.72c.32-.33.56-.65.79-.93s.33-.51.46-.74a6.44,6.44,0,0,0,.24-.61,2.09,2.09,0,0,0,0-.56,1.45,1.45,0,0,0-.09-.46,1,1,0,0,0-.6-.6,1.84,1.84,0,0,0-.52-.1,3.66,3.66,0,0,0-.74.1,3.88,3.88,0,0,0-.56.23,2.82,2.82,0,0,1-.42.23.35.35,0,0,1-.28.1s-.09,0-.09-.05,0-.09-.09-.14,0-.14,0-.28v-.7c0-.09,0-.14,0-.18s0-.1,0-.14,0-.1.14-.14A3.43,3.43,0,0,1,10,16a4.22,4.22,0,0,1,.61-.28c.23-.09.51-.14.79-.23a2.59,2.59,0,0,1,.88-.09,3.6,3.6,0,0,1,1.26.18,2.31,2.31,0,0,1,.88.52,1.67,1.67,0,0,1,.51.79,2.16,2.16,0,0,1,.19,1,6.54,6.54,0,0,1-.09.89,2.9,2.9,0,0,1-.38.93A10.32,10.32,0,0,1,14,20.77a11.47,11.47,0,0,1-1.3,1.4l-1.07,1.11h3.63a.19.19,0,0,1,.14,0c.05.05.09.09.09.14a.32.32,0,0,1,.05.23A2.38,2.38,0,0,1,15.53,24.16Z M24.74,24.2v.33a1.85,1.85,0,0,1,0,.23c-.05,0-.05.09-.1.14a.13.13,0,0,1-.09.05H19.44c-.05,0-.1,0-.1-.05a.42.42,0,0,1-.09-.14.37.37,0,0,1-.05-.23v-.65c0-.08,0-.16.05-.24s.05-.09.09-.14a.18.18,0,0,1,.1,0h1.72v-6l-1.49.83a.56.56,0,0,1-.28.1.29.29,0,0,1-.18-.05c-.05-.05-.05-.09-.1-.23v-.7c0-.1,0-.14.05-.19s.05-.09.09-.14.1,0,.14-.09l2-1.3c.05,0,.05,0,.1,0a.16.16,0,0,0,.14-.05h1a.37.37,0,0,1,.23.05.19.19,0,0,1,.1,0s0,0,0,.09v7.63h1.49a.19.19,0,0,1,.14.05.31.31,0,0,1,.09.14.32.32,0,0,1,.05.23A1.18,1.18,0,0,0,24.74,24.2Z M25.91,3.91v.56a2.69,2.69,0,0,1-.37,1.35c-.1.14-.19.23-.28.37a2.51,2.51,0,0,1-2,.88A2.59,2.59,0,0,1,21.21,6a1,1,0,0,1-.28-.51,2.41,2.41,0,0,1-.23-1V3.63H13.11v.84a2.41,2.41,0,0,1-.23,1c-.09.18-.18.35-.28.51a2.54,2.54,0,0,1-2.1,1.07,2.47,2.47,0,0,1-1.95-.88,2.4,2.4,0,0,1-.28-.37A2.69,2.69,0,0,1,7.9,4.47V3.91A6.3,6.3,0,0,0,3.34,10V24.39a6.28,6.28,0,0,0,6.28,6.28H24.05a6.28,6.28,0,0,0,6.28-6.28V10A6,6,0,0,0,25.91,3.91Zm2.14,20.48a3.94,3.94,0,0,1-3.91,3.91H9.71A4,4,0,0,1,5.8,24.39V12.89H28.1v11.5Z M22.51,6.05a1.56,1.56,0,0,0,.79.18,1.84,1.84,0,0,0,1.35-.6,2,2,0,0,0,.42-1.11V1.82a1.77,1.77,0,1,0-3.54,0V4.56a1.91,1.91,0,0,0,.33,1C22.07,5.75,22.29,5.9,22.51,6.05Z M9.71,6.05a1.56,1.56,0,0,0,.79.19,2.35,2.35,0,0,0,.79-.19,2,2,0,0,0,.61-.51,1.58,1.58,0,0,0,.32-1V1.77a1.77,1.77,0,1,0-3.53,0v2.7a1.61,1.61,0,0,0,.42,1.12A4.54,4.54,0,0,0,9.71,6.05Z"
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
