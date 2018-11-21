import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import PageHeading from "../../components/PageHeading.js";
import RemindersIco from "../../icons/reminders_b.svg";
import Helmet from "react-helmet";
import CreateWorkOrder from "../../components/workorders/CreateWorkOrder.js";
import { Switch, NavLink } from "react-router-dom";
import {
  Grid,
  Button,
  Card,
  CardContent,
  Typography,
  List,
  ListItem,
  Hidden,
  IconButton
} from "@material-ui/core";
import WorkOrderList from "../../components/workorders/WorkOrderList.js";
import WorkOrderDetail from "../../components/workorders/WorkOrderDetail/WorkOrderDetail.js";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "recompose";
import { ModalContainer, ModalRoute } from "react-router-modal";
import AddIcon from "@material-ui/icons/Add";
import "react-router-modal/css/react-router-modal.css";
import styles from "./styleWorkOrders.js";
import { Redirect } from "react-router-dom";
import Moment from "react-moment";

class WorkOrders extends Component {
  render() {
    //console.log(this.props);
    const classes = this.props.classes;
    const { workorders, auth, notifications } = this.props;
    if (!auth.uid) return <Redirect to="/login" />;

    return (
      <div>
        <Helmet>
          <title>Work Orders | Skeff Creative Services</title>
        </Helmet>
        <PageHeading headingIcon={RemindersIco} pageTitle="Work Orders">
          <Hidden xsDown>
            <NavLink to="workorders/create">
              <Button
                className={classes.createButton}
                variant="outlined"
                size="large"
                color="secondary"
              >
                <AddIcon className={classes.createIcon} />
                New Order
              </Button>
            </NavLink>
          </Hidden>
          <Hidden smUp>
            <NavLink to="workorders/create">
              <IconButton
                className={classes.createButton}
                variant="outlined"
                size="large"
                color="secondary"
              >
                <AddIcon className={classes.createIcon} />
              </IconButton>
            </NavLink>
          </Hidden>
        </PageHeading>
        <Grid container spacing={16}>
          <Grid item xs={12} lg={8}>
            <Grid container spacing={16}>
              <Grid item xs={12}>
                <WorkOrderList workorders={workorders} />
              </Grid>
              <Switch>
                <ModalRoute
                  path="/workorders/create"
                  parentPath="/workorders"
                  component={CreateWorkOrder}
                />
                <ModalRoute
                  path="/workorders/:id"
                  parentPath="/workorders"
                  component={WorkOrderDetail}
                />
              </Switch>
            </Grid>
          </Grid>
          <Grid item xs={12} lg={4}>
            {/* when i move this to its own component, remember to pass props down */}
            <Card className={classes.card}>
              <CardContent className={classes.widgetContent}>
                <Typography
                  className={classes.widgetTitle}
                  color="textSecondary"
                >
                  Notifications
                </Typography>
                <List className={classes.widgetList}>
                  {notifications &&
                    notifications.map(item => {
                      return (
                        <ListItem
                          className={classes.widgetListItem}
                          key={item.id}
                        >
                          <Typography>
                            <span className={classes.notificationUser}>
                              {item.user}{" "}
                            </span>
                            <span className={classes.notificationContent}>
                              {item.content}{" "}
                            </span>
                          </Typography>
                          <div className={classes.notificationTime}>
                            <Moment fromNow>{item.time.toDate()}</Moment>
                          </div>
                        </ListItem>
                      );
                    })}
                </List>
              </CardContent>
            </Card>
          </Grid>
          <ModalContainer />
        </Grid>
      </div>
    );
  }
}

const mapStateToProps = state => {
  console.log(state);
  return {
    workorders: state.firestore.ordered.workorders,
    auth: state.firebase.auth,
    notifications: state.firestore.ordered.notifications
  };
};

const styledComponent = withStyles(styles)(WorkOrders);

export default compose(
  connect(mapStateToProps),
  firestoreConnect([
    { collection: "workorders", orderBy: ["dueDate", "asc"] },
    { collection: "notifications", limit: 5, orderBy: ["time", "desc"] }
  ])
)(styledComponent);
