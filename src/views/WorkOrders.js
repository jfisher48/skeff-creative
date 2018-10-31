import React, { Component } from "react";
import PageHeading from "../components/PageHeading.js";
import DashboardIco from "../icons/dashboard_b.svg";
import Helmet from "react-helmet";
import CreateWorkOrder from "../components/workorders/CreateWorkOrder.js";
import { Grid } from "@material-ui/core";
import WorkOrderList from "../components/workorders/WorkOrderList.js";

class WorkOrders extends Component {
  state = {};
  render() {
    return (
      <div>
        <Helmet>
          <title>Work Orders | Skeff Creative Services</title>
        </Helmet>
        <PageHeading headingIcon={DashboardIco}>Work Orders</PageHeading>
        <Grid container spacing={16}>
          <Grid item xs={12} md={6}>
            <WorkOrderList />
          </Grid>
          <Grid item xs={12} md={6}>
            <CreateWorkOrder />
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default WorkOrders;
