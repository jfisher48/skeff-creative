import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import PageHeading from "../../components/PageHeading.js";
import { Switch, NavLink, Route } from "react-router-dom";
import CreateStripSet from "../../components/shelfstrips/CreateStripSet/CreateStripSet";
import Helmet from "react-helmet";
import styles from "./styleShelfStrips";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "recompose";
//import { ModalContainer, ModalRoute } from "react-router-modal";
import Button from "@material-ui/core/Button";
//import DownloadIcon from "@material-ui/icons/SaveAlt";
//import { PDFDownloadLink } from "@react-pdf/renderer";
import { Redirect } from "react-router-dom";
//import { StripSetPDF } from "../../components/shelfstrips/StripSetPDF/StripSetPDF.js";
import {
  Hidden,
  Grid,
  Paper,
  Card,
  CardHeader,
  CardContent,
  Typography,
  List,
  ListItem
} from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import { withRouter } from "react-router-dom";
import StripSetList from "../../components/shelfstrips/StripSetList.js";
import StripSetDetail from "../../components/shelfstrips/StripSetDetail/StripSetDetail.js";
import Moment from "react-moment";

class ShelfStrips extends Component {
  state = {};
  render() {
    const classes = this.props.classes;
    const { auth, stripsets, notifications, profile } = this.props;
    const role = profile.role;
    if (!auth.uid) return <Redirect to="/login" />;
    return (
      <div>
        <Helmet>
          <title>Shelf Strips | Skeff Creative Services</title>
        </Helmet>
        <PageHeading
          color="#457385"
          view="0 0 36.838 33.608"
          svgPath="M32.194,32.608H3a3,3,0,0,1-3-3V22.4a3,3,0,0,1,3-3h29.2a3,3,0,0,1,3,3v7.205A3,3,0,0,1,32.194,32.608ZM3,21.816a.589.589,0,0,0-.589.588v7.205A.589.589,0,0,0,3,30.2h9.265V21.816Zm32.411-2.559,0,0A4.464,4.464,0,0,0,32.194,17.9H8.67L30.66,12.5a3,3,0,0,1,3.627,2.194l1.12,4.559ZM7.465,16.645h0L27.524,6.158a3,3,0,0,1,4.047,1.269l2.174,4.162a.167.167,0,0,1-.02-.015.086.086,0,0,0-.017-.014,4.506,4.506,0,0,0-2.329-.653,4.561,4.561,0,0,0-1.078.13L7.466,16.644Zm-1.478-.927h0L22.964.749a3,3,0,0,1,4.234.265l3.1,3.521-.008,0-.006,0a.115.115,0,0,0-.028-.01,4.509,4.509,0,0,0-1.356-.21,4.434,4.434,0,0,0-2.078.515L5.989,15.717Z"
          pageTitle="Shelf Strips"
        >
          {this.props.location.pathname !== "/shelfstrips/create" ? (
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
                  to="shelfstrips/create"
                  variant="outlined"
                  size="large"
                  color="secondary"
                >
                  <AddIcon className={classes.createIcon} />
                  New Order
                </Button>
              </Grid>
            </Hidden>
          ) : (
            ""
          )}
        </PageHeading>
        <Grid container spacing={16}>
          <Grid item xs={12} lg={8}>
            <Grid container spacing={16}>
              {this.props.location.pathname !== "/shelfstrips/create" ? (
                <Grid item xs={12}>
                  <Paper className={classes.paper}>
                    <div className={classes.table}>
                      <Hidden xsDown className={classes.tableHead}>
                        <div className={classes.tableRow}>
                          <div className={classes.nameCell}>Project</div>
                          <div className={classes.tableCell}>
                            {profile.role !== "sales"
                              ? "Created By"
                              : "Assigned To"}
                          </div>
                          <div className={classes.tableCell}>Strips</div>

                          <div className={classes.tableCell}>Ordered</div>

                          <div className={classes.tableCell}>Due</div>

                          <div className={classes.tableCell} />
                        </div>
                      </Hidden>
                      <StripSetList stripsets={stripsets} role={role} />
                    </div>
                  </Paper>
                </Grid>
              ) : (
                ""
              )}
              <Switch>
                <Route
                  exact
                  path="/shelfstrips/create"
                  component={CreateStripSet}
                />
                <Route
                  path="/shelfstrips/orders/:id"
                  //parentPath="/shelfstrips"
                  component={StripSetDetail}
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
              </Switch>
            </Grid>
          </Grid>
          <Grid item xs={12} lg={4}>
            <Grid container spacing={16}>
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

        {/* <PDFDownloadLink
          document={<StripSetPDF />}
          fileName="Shelf Strip Detail.pdf"
        >
          {({ blob, url, loading, error }) =>
            loading ? (
              "Loading document..."
            ) : (
              <Button
                className={classes.downloadButton}
                variant="contained"
                size="large"
                color="secondary"
              >
                <DownloadIcon style={{ marginRight: "8px" }} />
                Download PDF
              </Button>
            )
          }
        </PDFDownloadLink> */}
        {/* <ModalContainer /> */}
      </div>
    );
  }
}

const mapStateToProps = state => {
  //console.log(state);
  return {
    stripsets: state.firestore.ordered.stripsets,
    //completedWorkorders: state.firestore.ordered.completed_workorders,
    //heldWorkorders: state.firestore.ordered.held_workorders,
    auth: state.firebase.auth,
    notifications: state.firestore.ordered.notifications,
    profile: state.firebase.profile
  };
};

const styledShelfStrips = withStyles(styles)(ShelfStrips);

export default compose(
  connect(mapStateToProps),
  firestoreConnect(props => {
    if (!props.auth.uid) return [];
    if (props.profile.role === "graphics") {
      return [
        {
          collection: "stripsets",
          where: [["assignedTo", "==", props.auth.uid]]
        },
        // {
        //   collection: "completed_workorders",
        //   where: [["assignedTo", "==", props.auth.uid]]
        // },
        // {
        //   collection: "held_workorders",
        //   where: [["assignedTo", "==", props.auth.uid]]
        // },
        { collection: "notifications", limit: 3, orderBy: ["time", "desc"] }
      ];
    } else
      return [
        {
          collection: "stripsets",
          where: [["requesterId", "==", props.auth.uid]]
        },
        // {
        //   collection: "completed_workorders",
        //   where: [["requesterId", "==", props.auth.uid]]
        // },
        // {
        //   collection: "held_workorders",
        //   where: [["requesterId", "==", props.auth.uid]]
        // },
        { collection: "notifications", limit: 3, orderBy: ["time", "desc"] }
      ];
  }),
  withRouter
)(styledShelfStrips);
