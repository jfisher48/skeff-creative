import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import PageHeading from "../../components/PageHeading.js";
import RemindersIco from "../../icons/reminders_b.svg";
import Helmet from "react-helmet";
import CreateWorkOrder from "../../components/workorders/CreateWorkOrder.js";
import { Switch, NavLink } from "react-router-dom";
import { Grid, Button } from "@material-ui/core";
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

class WorkOrders extends Component {
  render() {
    //console.log(this.props);
    const classes = this.props.classes;
    const { workorders, auth } = this.props;
    if (!auth.uid) return <Redirect to="/signin" />;

    return (
      <div>
        <Helmet>
          <title>Work Orders | Skeff Creative Services</title>
        </Helmet>
        <PageHeading headingIcon={RemindersIco}>Work Orders</PageHeading>
        <Grid container spacing={16}>
          <Grid item xs={12} lg={8}>
            <Grid container spacing={16}>
              <Grid item xs={12}>
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
              </Grid>
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
          <Grid item xs={12} lg={4} />
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
    auth: state.firebase.auth
  };
};

const styledComponent = withStyles(styles)(WorkOrders);

export default compose(
  connect(mapStateToProps),
  firestoreConnect([{ collection: "workorders" }])
)(styledComponent);
