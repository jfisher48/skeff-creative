import React, { Component } from "react";
import PageHeading from "../components/PageHeading.js";
import RemindersIco from "../icons/reminders_b.svg";
import Helmet from "react-helmet";
import CreateWorkOrder from "../components/workorders/CreateWorkOrder.js";
import { Switch, Link } from "react-router-dom";
import { Grid, Button, Typography } from "@material-ui/core";
import WorkOrderList from "../components/workorders/WorkOrderList.js";
import WorkOrderDetail from "../components/workorders/WorkOrderDetail.js";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";
import { ModalContainer, ModalRoute } from "react-router-modal";
import "react-router-modal/css/react-router-modal.css";

class WorkOrders extends Component {
  render() {
    //console.log(this.props);
    const { workorders } = this.props;
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
                <Link to="workorders/create">
                  <Button
                    style={{ float: "right" }}
                    variant="outlined"
                    size="large"
                    color="secondary"
                  >
                    New Order
                  </Button>
                </Link>
              </Grid>
              <Grid item xs={12}>
                <WorkOrderList workorders={workorders} />
              </Grid>
              {/* <Switch> */}
              {/* <Route
              path="/workorders"
              render={() => <WorkOrderList workorders={workorders} />}
            /> */}
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
  //console.log(state);
  return {
    workorders: state.firestore.ordered.workorders
  };
};

export default compose(
  connect(mapStateToProps),
  firestoreConnect([{ collection: "workorders" }])
)(WorkOrders);
