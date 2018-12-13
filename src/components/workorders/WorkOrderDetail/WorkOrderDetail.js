import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Moment from "react-moment";
import { Grid, IconButton } from "@material-ui/core";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "recompose";
import SummaryHeader from "../SummaryHeader/SummaryHeader";
import CloseIcon from "@material-ui/icons/Close";
import styles from "./styleWorkOrderDetail";
import { Redirect } from "react-router-dom";

class WorkOrderDetail extends Component {
  render() {
    const classes = this.props.classes;
    const { workorder, auth } = this.props;
    if (!auth.uid) return <Redirect to="/login" />;
    if (workorder) {
      return (
        <Grid container spacing={16}>
          <Grid item xs={12}>
            <Card className={classes.orderCard}>
              <SummaryHeader
                orderNumber={workorder.workorderNumber}
                dueDate={workorder.dueDate.toDate()}
              >
                <IconButton
                  onClick={this.props.history.goBack}
                  className={classes.closeButton}
                  color="inherit"
                  aria-label="Close"
                >
                  <CloseIcon />
                </IconButton>
              </SummaryHeader>
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
                {workorder.items &&
                  workorder.items.map((item, i) => {
                    return (
                      <div key={i}>
                        <Typography className={classes.orderContent}>
                          <span>{item.brand} </span>
                          <span>{item.signTheme} </span>
                          <span>{item.signTypeName} </span>
                          <span>{item.signSize}</span>
                        </Typography>
                      </div>
                    );
                  })}
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
    workorder: workorder,
    auth: state.firebase.auth,
    profile: state.firebase.profile
  };
};

const styledComponent = withStyles(styles)(WorkOrderDetail);

export default compose(
  connect(mapStateToProps),
  firestoreConnect(props => {
    if (!props.auth.uid) return [];
    if (props.profile.role === "graphics") {
      return [
        {
          collection: "workorders",
          where: [["assignedTo", "==", props.auth.uid]]
        }
      ];
    } else
      return [
        {
          collection: "workorders",
          where: [["requesterId", "==", props.auth.uid]]
        }
      ];
  })
)(styledComponent);
