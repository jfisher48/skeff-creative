import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Moment from "react-moment";
import {
  Grid,
  IconButton,
  List,
  ListItem,
  ListItemText,
  Button
} from "@material-ui/core";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "recompose";
import SummaryHeader from "../SummaryHeader/SummaryHeader";
import CloseIcon from "@material-ui/icons/Close";
import styles from "./styleWorkOrderDetail";
import { Redirect } from "react-router-dom";
import { recreateWorkorder } from "../../../store/actions/workorderActions";

class CompletedWorkOrderDetail extends Component {
  handleRecreate = e => {
    e.preventDefault();
    this.props.recreateWorkorder(
      this.props.workorder,
      this.props.match.params.id
    );
    this.props.history.push("/workorders");
  };

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
                <List>
                  {workorder.items &&
                    workorder.items.map((item, i) => {
                      return (
                        <ListItem divider key={i}>
                          <ListItemText
                            primary={
                              <React.Fragment>
                                {item.brand} {item.signTheme}{" "}
                                {item.signTypeName} {item.signSize} Qty:{" "}
                                {item.quantity}
                              </React.Fragment>
                            }
                            secondary={
                              <Typography>
                                ${item.price} {item.package} {item.pkgSize}{" "}
                                {item.pkgType}
                              </Typography>
                            }
                          />
                        </ListItem>
                      );
                    })}
                </List>
                <Button onClick={this.handleRecreate}>Mark Incomplete</Button>
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
  const workorders = state.firestore.data.completed_workorders;
  const workorder = workorders ? workorders[id] : null;
  return {
    workorder: workorder,
    auth: state.firebase.auth,
    profile: state.firebase.profile
  };
};

const mapDispatchToProps = dispatch => {
  return {
    recreateWorkorder: (workorder, id) =>
      dispatch(recreateWorkorder(workorder, id))
  };
};

const styledComponent = withStyles(styles)(CompletedWorkOrderDetail);

export default compose(
  connect(
    mapStateToProps,
    mapDispatchToProps
  ),
  firestoreConnect(props => {
    if (!props.auth.uid) return [];
    if (props.profile.role === "graphics") {
      return [
        {
          collection: "completed_workorders",
          where: [["assignedTo", "==", props.auth.uid]]
        }
      ];
    } else
      return [
        {
          collection: "completed_workorders",
          where: [["requesterId", "==", props.auth.uid]]
        }
      ];
  })
)(styledComponent);
