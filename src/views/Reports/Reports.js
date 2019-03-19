import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import { withRouter, NavLink } from "react-router-dom";
import PageHeading from "../../components/PageHeading.js";
import Helmet from "react-helmet";
import Moment from "react-moment";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "recompose";
import styles from "./styleReports.js";
import { ModalContainer, ModalRoute } from "react-router-modal";
import CloseIcon from "@material-ui/icons/Close";
import WorkOrderReports from "../../components/workorders/WorkOrderReports/WorkOrderReports";
import {
  Grid,
  Card,
  CardHeader,
  CardContent,
  Typography,
  IconButton,
  List,
  ListItem,
  ListItemText,
  Button,
  DialogContent,
  DialogContentText,
  DialogActions,
  //Dialog,
  DialogTitle
} from "@material-ui/core";

class Reports extends Component {
  state = {
    open: false
  };

  handleClickOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  render() {
    const classes = this.props.classes;
    const {
      workorders,
      completedWorkorders,
      heldWorkorders,
      auth,
      notifications,
      profile
    } = this.props;
    if (!auth.uid) return <Redirect to="/login" />;
    return (
      <div>
        <Helmet>
          <title>Reports | Skeff Creative Services</title>
        </Helmet>
        <PageHeading
          color="#cc3640"
          view="0 0 24 24"
          svgPath="M18 17H6v-2h12v2zm0-4H6v-2h12v2zm0-4H6V7h12v2zM3 22l1.5-1.5L6 22l1.5-1.5L9 22l1.5-1.5L12 22l1.5-1.5L15 22l1.5-1.5L18 22l1.5-1.5L21 22V2l-1.5 1.5L18 2l-1.5 1.5L15 2l-1.5 1.5L12 2l-1.5 1.5L9 2 7.5 3.5 6 2 4.5 3.5 3 2v20z"
          pageTitle="Reports"
        >
          <Button
            className={classes.downloadButton}
            component={NavLink}
            to="/workorders"
            variant="outlined"
            size="large"
            color="secondary"
          >
            View WorkOrders
          </Button>
        </PageHeading>
        <Grid container spacing={16}>
          <Grid item xs={12} lg={8}>
            Report Generator
            <ModalRoute path="/reports/open" parentPath="/reports">
              <DialogTitle disableTypography className={classes.modalTitle}>
                <Typography variant="h6">Download Report</Typography>
                <IconButton
                  onClick={this.props.history.goBack}
                  className={classes.closeButton}
                  color="inherit"
                  aria-label="Close"
                >
                  <CloseIcon />
                </IconButton>
              </DialogTitle>
              <DialogContent>
                <DialogContentText>
                  {workorders && workorders.length > 0
                    ? "Your report has been generated. Click below to download a PDF of your report."
                    : "There are no items to report at this time. Thank You!"}
                </DialogContentText>
              </DialogContent>
              <DialogActions className={classes.modalActions}>
                {workorders && workorders.length > 0 ? (
                  <WorkOrderReports workorders={workorders} />
                ) : (
                  ""
                )}
              </DialogActions>
            </ModalRoute>
            <ModalRoute path="/reports/completed" parentPath="/reports">
              <DialogTitle disableTypography className={classes.modalTitle}>
                <Typography variant="h6">Download Report</Typography>
                <IconButton
                  onClick={this.props.history.goBack}
                  className={classes.closeButton}
                  color="inherit"
                  aria-label="Close"
                >
                  <CloseIcon />
                </IconButton>
              </DialogTitle>
              <DialogContent>
                <DialogContentText>
                  {completedWorkorders && completedWorkorders.length > 0
                    ? "Your report has been generated. Click below to download a PDF of your report."
                    : "There are no items to report at this time. Thank You!"}
                </DialogContentText>
              </DialogContent>
              <DialogActions className={classes.modalActions}>
                {completedWorkorders && completedWorkorders.length > 0 ? (
                  <WorkOrderReports workorders={completedWorkorders} />
                ) : (
                  ""
                )}
              </DialogActions>
            </ModalRoute>
            <ModalRoute path="/reports/held" parentPath="/reports">
              <DialogTitle disableTypography className={classes.modalTitle}>
                <Typography variant="h6">Download Report</Typography>
                <IconButton
                  onClick={this.props.history.goBack}
                  className={classes.closeButton}
                  color="inherit"
                  aria-label="Close"
                >
                  <CloseIcon />
                </IconButton>
              </DialogTitle>
              <DialogContent>
                <DialogContentText>
                  {heldWorkorders && heldWorkorders.length > 0
                    ? "Your report has been generated. Click below to download a PDF of your report."
                    : "There are no items to report at this time. Thank You!"}
                </DialogContentText>
              </DialogContent>
              <DialogActions className={classes.modalActions}>
                {heldWorkorders && heldWorkorders.length > 0 ? (
                  <WorkOrderReports workorders={heldWorkorders} />
                ) : (
                  ""
                )}
              </DialogActions>
            </ModalRoute>
          </Grid>
          <Grid item xs={12} lg={4}>
            <Grid container spacing={16}>
              <Grid item xs={12} sm={6} lg={12}>
                <Card>
                  <CardHeader
                    className={classes.widgetHeader}
                    disableTypography
                    title={
                      <Typography
                        color="textSecondary"
                        className={classes.widgetTitle}
                      >
                        Quick Reports
                      </Typography>
                    }
                  />
                  <CardContent className={classes.widgetContent}>
                    <List>
                      <ListItem divider>
                        <Grid container spacing={8}>
                          <Grid item xs={9}>
                            <ListItemText
                              primary={profile.firstName + "'s Open Orders"}
                              secondary="Create work order detail sheets for all of your currently open orders."
                            />
                          </Grid>
                          <Grid item xs={3} className={classes.quickAction}>
                            <Button
                              className={classes.downloadButton}
                              variant="contained"
                              size="large"
                              color="secondary"
                              component={NavLink}
                              to="/reports/open"
                            >
                              Create
                            </Button>
                          </Grid>
                        </Grid>
                      </ListItem>
                      <ListItem divider>
                        <Grid container spacing={8}>
                          <Grid item xs={9}>
                            <ListItemText
                              primary={
                                profile.firstName + "'s Completed Orders"
                              }
                              secondary="Create work order detail sheets for all of your completed orders."
                            />
                          </Grid>
                          <Grid item xs={3} className={classes.quickAction}>
                            <Button
                              className={classes.downloadButton}
                              variant="contained"
                              size="large"
                              color="secondary"
                              component={NavLink}
                              to="/reports/completed"
                            >
                              Create
                            </Button>
                          </Grid>
                        </Grid>
                      </ListItem>
                      <ListItem divider>
                        <Grid container spacing={8}>
                          <Grid item xs={9}>
                            <ListItemText
                              primary={profile.firstName + "'s Held Orders"}
                              secondary="Create work order detail sheets for all of your orders that are currently on hold."
                            />
                          </Grid>
                          <Grid item xs={3} className={classes.quickAction}>
                            <Button
                              className={classes.downloadButton}
                              variant="contained"
                              size="large"
                              color="secondary"
                              component={NavLink}
                              to="/reports/held"
                            >
                              Create
                            </Button>
                          </Grid>
                        </Grid>
                      </ListItem>
                    </List>
                  </CardContent>
                </Card>
              </Grid>
              <Grid item xs={12} sm={6} lg={12}>
                {/* when i move this to its own component, remember to pass props down */}
                <Card className={classes.card}>
                  <CardHeader
                    className={classes.widgetHeader}
                    disableTypography
                    title={
                      <Typography
                        color="textSecondary"
                        className={classes.widgetTitle}
                      >
                        Notifications
                      </Typography>
                    }
                  />
                  <CardContent className={classes.widgetContent}>
                    <List className={classes.widgetList}>
                      {notifications &&
                        notifications.map(item => {
                          return (
                            <ListItem
                              className={classes.widgetListItem}
                              key={item.id}
                            >
                              <Typography variant="subtitle2">
                                <span className={classes.notificationUser}>
                                  {item.user}{" "}
                                </span>
                                <span className={classes.notificationContent}>
                                  {item.content}{" "}
                                </span>
                              </Typography>
                              <div className={classes.notificationTime}>
                                <Typography variant="body2">
                                  <Moment fromNow>{item.time.toDate()}</Moment>
                                </Typography>
                              </div>
                            </ListItem>
                          );
                        })}
                    </List>
                  </CardContent>
                </Card>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        {/* <Dialog fullWidth open={this.state.open} onClose={this.handleClose}>
              <DialogTitle disableTypography>
                <Typography variant="h6">
                  Download Report
                </Typography>                
              </DialogTitle>
              <DialogContent>
                <DialogContentText>
                  Your report has been generated. Click below to download a PDF of your report.
                </DialogContentText>
              </DialogContent>                            
              <DialogActions className={classes.contactActions}>
                <WorkOrderReports workorders={workorders} />
              </DialogActions>
            </Dialog> */}
        <ModalContainer />
      </div>
    );
  }
}

const mapStateToProps = state => {
  // console.log(state);
  return {
    workorders: state.firestore.ordered.workorders,
    completedWorkorders: state.firestore.ordered.completed_workorders,
    heldWorkorders: state.firestore.ordered.held_workorders,
    auth: state.firebase.auth,
    notifications: state.firestore.ordered.notifications,
    profile: state.firebase.profile
  };
};

const styledReports = withStyles(styles)(Reports);

export default compose(
  connect(mapStateToProps),
  firestoreConnect(props => {
    if (!props.auth.uid) return [];
    if (props.profile.role === "graphics") {
      return [
        {
          collection: "workorders",
          where: [["assignedTo", "==", props.auth.uid]]
        },
        {
          collection: "completed_workorders",
          where: [["assignedTo", "==", props.auth.uid]]
        },
        {
          collection: "held_workorders",
          where: [["assignedTo", "==", props.auth.uid]]
        },
        { collection: "notifications", limit: 3, orderBy: ["time", "desc"] }
      ];
    } else
      return [
        {
          collection: "workorders",
          where: [["requesterId", "==", props.auth.uid]]
        },
        {
          collection: "completed_workorders",
          where: [["requesterId", "==", props.auth.uid]]
        },
        {
          collection: "held_workorders",
          where: [["requesterId", "==", props.auth.uid]]
        },
        { collection: "notifications", limit: 3, orderBy: ["time", "desc"] }
      ];
  }),
  withRouter
)(styledReports);
