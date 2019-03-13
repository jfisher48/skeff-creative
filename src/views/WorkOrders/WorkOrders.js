import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import PageHeading from "../../components/PageHeading.js";
import Helmet from "react-helmet";
import CreateWorkOrder from "../../components/workorders/CreateWorkOrder.js";
import WorkOrderReports from "../../components/workorders/WorkOrderReports/WorkOrderReports.js";
import { Switch, NavLink, Route } from "react-router-dom";
import {
  Grid,
  Button,
  Card,
  CardHeader,
  CardContent,
  Typography,
  List,
  ListItem,
  Hidden,
  Tabs,
  Tab,
  Fab
} from "@material-ui/core";
//import WorkOrderList from "../../components/workorders/WorkOrderList.js";
import WorkOrderDetail from "../../components/workorders/WorkOrderDetail/WorkOrderDetail.js";
import CompletedWorkOrderDetail from "../../components/workorders/WorkOrderDetail/CompletedWorkOrderDetail.js";
import HeldWorkOrderDetail from "../../components/workorders/WorkOrderDetail/HeldWorkOrderDetail.js";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "recompose";
import { ModalContainer, ModalRoute } from "react-router-modal";
import AddIcon from "@material-ui/icons/Add";
import "react-router-modal/css/react-router-modal.css";
import styles from "./styleWorkOrders.js";
import { Redirect } from "react-router-dom";
import Moment from "react-moment";
import WorkOrderTotalWidget from "../../components/workorders/WorkOrderTotalWidget/WorkOrderTotalWidget.js";
import WorkOrderList from "../../components/workorders/WorkOrderList.js";
import { withRouter } from "react-router-dom";
//import { WorkOrderPDF } from "../../components/workorders/WorkOrderPDF/WorkOrderPDF.js";
//import { PDFDownloadLink } from "@react-pdf/renderer";

class WorkOrders extends Component {
  state = {
    listView: "open"
  };

  handleChangeView = (e, value) => {
    e.preventDefault();
    this.setState({ listView: value });
  };

  handleOpenView = e => {
    e.preventDefault();
    this.setState({ listView: "open" });
  };

  handleCompletedView = e => {
    e.preventDefault();
    this.setState({ listView: "completed" });
  };

  handleHeldView = e => {
    e.preventDefault();
    this.setState({ listView: "held" });
  };

  render() {
    const classes = this.props.classes;
    const {
      workorders,
      completedWorkorders,
      heldWorkorders,
      auth,
      notifications
    } = this.props;

    if (!auth.uid) return <Redirect to="/login" />;

    return (
      <div>
        <Helmet>
          <title>Work Orders | Skeff Creative Services</title>
        </Helmet>
        <PageHeading
          svgPath="M26.71,4.12H23.63l2,3H26.8V28.84H9.28V7.15h1.13l2-3H9.37A2.84,2.84,0,0,0,6.52,7V29.07a2.84,2.84,0,0,0,2.83,2.85H26.67a2.85,2.85,0,0,0,2.85-2.83V6.93A2.77,2.77,0,0,0,26.8,4.12Z M23.82,7.15l-2-3L20.64,2.44l0,.05a2.49,2.49,0,0,0-5,0l0-.05L14.44,4.12l-2,3L11.82,8l6.29.05L24.45,8ZM18.07,1.58a.86.86,0,0,1,0,1.72.85.85,0,0,1-.86-.86h0a.86.86,0,0,1,.85-.86Z M19.92,13.08a1.2,1.2,0,0,1-1.18,1.18H12.49a1.19,1.19,0,0,1-1.17-1.18V12.9a1.19,1.19,0,0,1,1.17-1.17h6.25a1.19,1.19,0,0,1,1.18,1.17Z M25,18.11a1.22,1.22,0,0,1-1.18,1.18H12.5a1.21,1.21,0,0,1-1.18-1.18v-.18a1.2,1.2,0,0,1,1.18-1.18H23.77A1.21,1.21,0,0,1,25,17.93Z M25,23.09a1.22,1.22,0,0,1-1.18,1.18H12.5a1.21,1.21,0,0,1-1.18-1.18v-.18a1.2,1.2,0,0,1,1.18-1.18H23.77A1.21,1.21,0,0,1,25,22.91Z"
          color="#355675"
          view="0 0 36.04 36.04"
          pageTitle="Work Orders"
          extraContent={
            this.props.location.pathname !== "/workorders/create" ? (
              <Hidden xsDown>
                <Tabs
                  value={this.state.listView}
                  onChange={this.handleChangeView}
                  indicatorColor="secondary"
                  textColor="primary"
                  centered
                  className={classes.viewTabs}
                >
                  <Tab label="Open" value="open" />
                  <Tab label="Completed" value="completed" />
                  <Tab label="Held" value="held" />
                </Tabs>
              </Hidden>
            ) : (
              ""
            )
          }
        >
          {this.props.location.pathname !== "/workorders/create" ? (
            <Hidden xsDown>
              <Grid
                item
                xs={12}
                sm={3}
                lg={4}
                style={{
                  display: "flex",
                  alignItems: "stretch",
                  justifyContent: "flex-end"
                }}
              >
                <Button
                  className={classes.createButton}
                  component={NavLink}
                  to="workorders/create"
                  variant="outlined"
                  size="large"
                  color="secondary"
                >
                  <AddIcon className={classes.createIcon} />
                  New Order
                </Button>
                <Button
                  className={classes.downloadButton}
                  component={NavLink}
                  to="/reports"
                  variant="outlined"
                  size="large"
                  color="secondary"
                >
                  Print Reports
                </Button>
                {/* <Hidden mdDown>
                  <PDFDownloadLink
                    document={<WorkOrderPDF workorders={workorders} />}
                    fileName="Work Order Details.pdf"
                  >
                    {({ blob, url, loading, error }) =>
                      loading ? (
                        "Loading document..."
                      ) : (
                        <Button
                          className={classes.downloadButton}
                          variant="outlined"
                          size="large"
                          color="secondary"
                        >
                          Download PDF
                        </Button>
                      )
                    }
                  </PDFDownloadLink>
                </Hidden> */}
              </Grid>
            </Hidden>
          ) : (
            ""
          )}
          {this.props.location.pathname !== "/workorders/create" ? (
            <Hidden smUp>
              <Fab
                component={NavLink}
                to="workorders/create"
                className={classes.floatingButton}
                color="secondary"
              >
                <AddIcon className={classes.createIcon} />
              </Fab>
            </Hidden>
          ) : (
            ""
          )}
        </PageHeading>
        <Grid container spacing={16}>
          {this.props.location.pathname !== "/workorders/create" ? (
            <Hidden smUp>
              <Grid item xs={12}>
                <Tabs
                  value={this.state.listView}
                  onChange={this.handleChangeView}
                  indicatorColor="secondary"
                  textColor="primary"
                  fullWidth
                >
                  <Tab label="Open" value="open" />
                  <Tab label="Completed" value="completed" />
                  <Tab label="Held" value="held" />
                </Tabs>
              </Grid>
            </Hidden>
          ) : (
            ""
          )}
          <Grid item xs={12} lg={8}>
            <Grid container spacing={16}>
              {this.props.location.pathname !== "/workorders/create" ? (
                <Grid item xs={12}>
                  {this.state.listView === "open" ? (
                    <WorkOrderList workorders={workorders} />
                  ) : this.state.listView === "completed" ? (
                    <WorkOrderList workorders={completedWorkorders} />
                  ) : (
                    <WorkOrderList workorders={heldWorkorders} />
                  )}
                </Grid>
              ) : (
                ""
              )}
              <Switch>
                <Route
                  exact
                  path="/workorders/create"
                  component={CreateWorkOrder}
                />
                {/* <Route
                  exact
                  path="/workorders/view"
                  render={() => (
                    <WorkOrderPDF
                      style={{ width: "100%" }}
                      workorders={workorders}
                    />
                  )}
                /> */}

                <ModalRoute
                  path="/workorders/:id"
                  parentPath="/workorders"
                  component={
                    this.state.listView === "open"
                      ? WorkOrderDetail
                      : this.state.listView === "completed"
                        ? CompletedWorkOrderDetail
                        : HeldWorkOrderDetail
                  }
                />
              </Switch>
            </Grid>
          </Grid>
          <Grid item xs={12} lg={4}>
            <Grid container spacing={16}>
              <WorkOrderTotalWidget
                totalOpen={workorders && workorders.length}
                totalComplete={
                  completedWorkorders && completedWorkorders.length
                }
                totalHeld={heldWorkorders && heldWorkorders.length}
                handleCompletedView={this.handleCompletedView}
                handleOpenView={this.handleOpenView}
                handleHeldView={this.handleHeldView}
              />
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

const styledWorkOrders = withStyles(styles)(WorkOrders);

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
)(styledWorkOrders);
