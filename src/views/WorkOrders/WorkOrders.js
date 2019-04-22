import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import PageHeading from "../../components/PageHeading.js";
import Helmet from "react-helmet";
import CreateWorkOrder from "../../components/workorders/CreateWorkOrder.js";
//import WorkOrderReports from "../../components/workorders/WorkOrderReports/WorkOrderReports.js";
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
          svgPath="M8.242,90A8.251,8.251,0,0,1,0,81.758V22.107a8.25,8.25,0,0,1,8.242-8.241H18.46V18.84a7.584,7.584,0,0,0,7.574,7.574H50.982a7.582,7.582,0,0,0,7.574-7.574V13.865H68.774a8.25,8.25,0,0,1,8.242,8.241V38.285L68.774,48.39V34.836H8.242V81.758H68.774V69.392l8.242-10.1V81.758A8.251,8.251,0,0,1,68.774,90ZM20.808,76.584a2.238,2.238,0,0,1-2.237-2.237V63.693a2.238,2.238,0,0,1,2.237-2.237H31.29a2.237,2.237,0,0,1,2.237,2.237V74.347a2.236,2.236,0,0,1-2.237,2.237Zm2.238-4.475h6.007V65.93H23.046Zm35.059-1.2L42.971,53.665l6.106-5.36L61.045,61.94l7.729-9.475,8.242-10.1,2.973-3.643,6.295,5.134L77.017,55.213l-8.242,10.1-4.468,5.477a4.062,4.062,0,0,1-3.073,1.494h-.075A4.059,4.059,0,0,1,58.106,70.906ZM20.808,56.1a2.238,2.238,0,0,1-2.237-2.237V43.205a2.237,2.237,0,0,1,2.237-2.237H31.29a2.236,2.236,0,0,1,2.237,2.237V53.859A2.237,2.237,0,0,1,31.29,56.1Zm2.238-4.475h6.007V45.442H23.046Zm2.988-27.436a5.346,5.346,0,0,1-5.346-5.346V12.406a1.782,1.782,0,0,1,1.782-1.783h6.482C29.064,4.44,33.3,0,38.508,0s9.445,4.44,9.555,10.623h6.483a1.782,1.782,0,0,1,1.782,1.783V18.84a5.346,5.346,0,0,1-5.346,5.346ZM34.721,8.947A3.787,3.787,0,1,0,38.508,5.16,3.788,3.788,0,0,0,34.721,8.947Z"
          color="#14598e"
          view="0 0 78 91"
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
        { collection: "notifications", limit: 6, orderBy: ["time", "desc"] }
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
        { collection: "notifications", limit: 6, orderBy: ["time", "desc"] }
      ];
  }),
  withRouter
)(styledWorkOrders);
