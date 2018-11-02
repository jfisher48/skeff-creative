import React, { Component } from "react";
import PageHeading from "../components/PageHeading.js";
import DashboardIco from "../icons/dashboard_b.svg";
import Helmet from "react-helmet";
import CreateWorkOrder from "../components/workorders/CreateWorkOrder.js";
import { Route, Switch } from "react-router-dom";
import { Grid } from "@material-ui/core";
import WorkOrderList from "../components/workorders/WorkOrderList.js";
import WorkOrderDetail from "../components/workorders/WorkOrderDetail.js";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";

class WorkOrders extends Component {
  render() {
    //console.log(this.props);
    const { workorders } = this.props;
    return (
      <div>
        <Helmet>
          <title>Work Orders | Skeff Creative Services</title>
        </Helmet>
        <PageHeading headingIcon={DashboardIco}>Work Orders</PageHeading>
        <Grid container spacing={16}>
          <Grid item xs={12} md={7}>
            <Switch>
              <Route
                exact
                path="/workorders"
                render={() => <WorkOrderList workorders={workorders} />}
              />
              <Route
                exact
                path="/workorders/create"
                component={CreateWorkOrder}
              />
              <Route path="/workorders/:id" component={WorkOrderDetail} />
            </Switch>
          </Grid>
          <Grid item xs={12} md={5} />
        </Grid>
      </div>
    );
  }
}

const mapStateToProps = state => {
  console.log(state);
  return {
    workorders: state.firestore.ordered.workorders
  };
};

export default compose(
  connect(mapStateToProps),
  firestoreConnect([{ collection: "workorders" }])
)(WorkOrders);
