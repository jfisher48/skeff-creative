import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
//import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
//import CardMedia from "@material-ui/core/CardMedia";
//import { NavLink } from "react-router-dom";
//import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
//import CategoryLink from "../components/CategoryLink";
import Moment from "react-moment";
import { Grid } from "@material-ui/core";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";
import SummaryHeader from "../SummaryHeader/SummaryHeader";
import styles from "./styleWorkOrderDetail";

class WorkOrderDetail extends Component {
  render() {
    const { workorder } = this.props;
    const classes = this.props.classes;
    if (workorder) {
      return (
        <Grid container spacing={16}>
          <Grid item xs={12}>
            <Card className={classes.orderCard}>
              <SummaryHeader
                orderNumber={this.props.match.params.id}
                dueDate={workorder.dueDate.toDate()}
              />
              <CardContent className={classes.orderContainer}>
                <Typography className={classes.orderTitle}>
                  {workorder.account}
                </Typography>
                <Typography className={classes.orderInfo}>
                  <Moment format="M.DD.YY [at] h:mm A">
                    {workorder.createdAt.toDate()}
                  </Moment>{" "}
                  by {workorder.requesterFirstName}{" "}
                  {workorder.requesterLastName}
                </Typography>
                <Typography className={classes.orderContent}>
                  {workorder.content}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      );
    } else {
      return <div>Loading...</div>;
    }
  }
}

const mapStateToProps = (state, ownProps) => {
  //console.log(state);
  const id = ownProps.match.params.id;
  const workorders = state.firestore.data.workorders;
  const workorder = workorders ? workorders[id] : null;
  return {
    workorder: workorder
  };
};

export default compose(
  withStyles(styles),
  connect(mapStateToProps),
  firestoreConnect([{ collection: "workorders" }])
)(WorkOrderDetail);
