import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import { withRouter } from "react-router-dom";
import PageHeading from "../../components/PageHeading.js";
import Helmet from "react-helmet";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "recompose";
import ContactList from "../../components/contacts/ContactList/ContactList";
import styles from "./stylePeople";
import {
  Grid,
  Hidden,
  Tabs,
  Tab,
  Table,
  TableRow,
  TableHead,
  TableCell,
  Paper
} from "@material-ui/core";

class People extends Component {
  state = {
    listView: "all"
  };

  handleChangeView = (e, value) => {
    e.preventDefault();
    this.setState({ listView: value });
  };

  render() {
    const classes = this.props.classes;
    const { auth, contacts, myContacts } = this.props;
    if (!auth.uid) return <Redirect to="/login" />;
    return (
      <div>
        <Helmet>
          <title>People | Skeff Creative Services</title>
        </Helmet>
        <PageHeading
          color="#ff5722"
          view="0 0 42.87 42.87"
          svgPath="M40.19,28.6c-1.61-1.13-4-.54-5.59-2.56,0,0-.6-.65.71-2.2s1.37-4,1.07-5.94a4,4,0,0,0-4-3.21,3.91,3.91,0,0,0-4,3.21c-.3,1.9-.24,4.4,1.07,5.94a3,3,0,0,1,.83,1.73A6.51,6.51,0,0,1,32,26.4c2.44,1.72,2.26,5,2.2,5.94h7.2C41.38,32.29,41.73,29.73,40.19,28.6Z M31,27.71a5.17,5.17,0,0,0-1.84-.78c-1.73-.47-3.69-.59-5.05-2.37,0,0-.72-.78.89-2.74s1.72-5,1.31-7.37a5.07,5.07,0,0,0-9.87,0c-.42,2.37-.24,5.47,1.3,7.37s.9,2.74.9,2.74c-1.37,1.78-3.27,1.9-5,2.38a7.81,7.81,0,0,0-1.9.77c-2,1.43-1.48,4.64-1.48,4.64H32.58C32.52,32.28,33,29.13,31,27.71Z M10.76,26.4a8,8,0,0,1,1.78-.89,2.78,2.78,0,0,1,.83-1.67c1.25-1.54,1.37-4,1.07-5.94a4,4,0,0,0-4-3.21,3.91,3.91,0,0,0-4,3.21c-.3,1.9-.24,4.4,1.07,5.94s.71,2.2.71,2.2c-1.54,2-4,1.43-5.59,2.56s-1.19,3.74-1.19,3.74H8.62C8.5,31.39,8.38,28.06,10.76,26.4Z"
          pageTitle="People"
          extraContent={
            <Hidden xsDown>
              <Tabs
                value={this.state.listView}
                onChange={this.handleChangeView}
                indicatorColor="secondary"
                textColor="primary"
                centered
                className={classes.viewTabs}
              >
                <Tab label="All Company" value="all" />
                <Tab label="My Contacts" value="mine" />
              </Tabs>
            </Hidden>
          }
        />
        <Grid container spacing={16}>
          <Grid item xs={12} lg={10} xl={9}>
            <Paper className={classes.paper}>
              <Table className={classes.table}>
                <TableHead>
                  <TableRow>
                    <TableCell>Name</TableCell>
                    <TableCell>Position</TableCell>
                    <TableCell>Route</TableCell>
                    <TableCell>Email</TableCell>
                    <TableCell>Ext.</TableCell>
                    <TableCell>Cell</TableCell>
                    <TableCell />
                  </TableRow>
                </TableHead>
                {this.state.listView === "mine" ? (
                  <ContactList contacts={myContacts} />
                ) : (
                  <ContactList contacts={contacts} auth={auth.uid} />
                )}
              </Table>
            </Paper>
          </Grid>
          <Grid item xs={12} lg={2} xl={3} />
        </Grid>
      </div>
    );
  }
}

const mapStateToProps = state => {
  console.log(state);

  return {
    auth: state.firebase.auth,
    contacts: state.firestore.ordered.contacts_company,
    myContacts: state.firestore.ordered.myContacts
      ? state.firestore.ordered.myContacts
      : []
  };
};

const styledComponent = withStyles(styles)(People);

export default compose(
  connect(mapStateToProps),
  firestoreConnect(props => {
    if (!props.auth.uid) return [];

    return [
      {
        collection: "contacts_company"
      },
      {
        collection: "users",
        doc: props.auth.uid,
        subcollections: [{ collection: "myContacts" }],
        storeAs: "myContacts"
      }
    ];
  }),
  withRouter
)(styledComponent);
