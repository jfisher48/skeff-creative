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
  Button,
  CardActions
} from "@material-ui/core";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "recompose";
import SummaryHeader from "../SummaryHeader/SummaryHeader";
import CloseIcon from "@material-ui/icons/Close";
import styles from "./styleWorkOrderDetail";
import { Redirect } from "react-router-dom";
import { restoreWorkorder } from "../../../store/actions/workorderActions";
import { deleteWorkorder } from "../../../store/actions/workorderActions";

class HeldWorkOrderDetail extends Component {
  handleRestore = e => {
    e.preventDefault();
    this.props.restoreWorkorder(
      this.props.workorder,
      this.props.match.params.id
    );
    this.props.history.push("/workorders");
  };
  handleDelete = e => {
    e.preventDefault();
    this.props.deleteWorkorder("held_workorders", this.props.match.params.id);
    this.props.history.push("/workorders");
  };

  render() {
    const classes = this.props.classes;
    const { workorder, auth, profile } = this.props;
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
                <Grid container spacing={8} style={{ paddingBottom: "20px" }}>
                  <Grid item xs={12}>
                    <Typography
                      className={classes.orderLabel}
                      variant="subtitle1"
                    >
                      WO TYPE:{" "}
                      <span className={classes.orderInfo}>
                        {workorder.orderType}
                      </span>
                    </Typography>
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <Typography
                      className={classes.orderLabel}
                      variant="subtitle1"
                    >
                      CREATED BY:{" "}
                      <span className={classes.orderInfo}>
                        {workorder.requesterFirstName}{" "}
                        {workorder.requesterLastName}
                      </span>
                    </Typography>
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <Typography
                      className={classes.orderLabel}
                      variant="subtitle1"
                    >
                      CREATED ON:{" "}
                      <span className={classes.orderInfo}>
                        <Moment format="M.DD.YY [at] h:mm A">
                          {workorder.createdAt.toDate()}
                        </Moment>
                      </span>
                    </Typography>
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <Typography
                      className={classes.orderLabel}
                      variant="subtitle1"
                    >
                      ASSIGNED TO:{" "}
                      <span className={classes.orderInfo}>
                        {workorder.assignedToName}
                      </span>
                    </Typography>
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <Typography
                      className={classes.orderLabel}
                      variant="subtitle1"
                    >
                      DUE ON:{" "}
                      <span className={classes.orderInfo}>
                        <Moment format="M.DD.YY [at] h:mm A">
                          {workorder.dueDate.toDate()}
                        </Moment>
                      </span>
                    </Typography>
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <Typography
                      className={classes.orderLabel}
                      variant="subtitle1"
                    >
                      STATUS: <span className={classes.orderInfo}>On Hold</span>
                    </Typography>
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <Typography
                      className={classes.orderLabel}
                      variant="subtitle1"
                    >
                      HELD ON:{" "}
                      <span className={classes.orderInfo}>
                        <Moment format="M.DD.YY [at] h:mm A">
                          {workorder.heldAt.toDate()}
                        </Moment>
                      </span>
                    </Typography>
                  </Grid>
                </Grid>
                <List>
                  {workorder.items &&
                    workorder.items.map((item, i) => {
                      return (
                        <ListItem divider className={classes.listItem} key={i}>
                          <ListItemText
                            primary={
                              <React.Fragment>
                                <Typography
                                  type="subtitle2"
                                  className={classes.primaryItemText}
                                >
                                  <span className={classes.primaryItemGroup}>
                                    {item.brand} {item.signTheme}
                                  </span>{" "}
                                  <span className={classes.primaryItemGroup}>
                                    {item.signSize} {item.signTypeName}{" "}
                                  </span>
                                  <span className={classes.primaryItemGroup}>
                                    Qty: {item.quantity}
                                  </span>
                                </Typography>
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
              </CardContent>
              {profile.role === "graphics" ? (
                <CardActions className={classes.orderActions}>
                  <Button
                    variant="contained"
                    color="secondary"
                    onClick={this.handleRestore}
                    className={classes.orderButton}
                  >
                    Restore
                  </Button>
                  <Button
                    variant="contained"
                    color="inherit"
                    onClick={this.handleDelete}
                    className={classes.orderButton}
                    style={{ color: "#fff", backgroundColor: "#f44336" }}
                  >
                    Delete
                  </Button>
                </CardActions>
              ) : (
                ""
              )}
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
  const workorders = state.firestore.data.held_workorders;
  const workorder = workorders ? workorders[id] : null;
  return {
    workorder: workorder,
    auth: state.firebase.auth,
    profile: state.firebase.profile
  };
};

const mapDispatchToProps = dispatch => {
  return {
    restoreWorkorder: (workorder, id) =>
      dispatch(restoreWorkorder(workorder, id)),
    deleteWorkorder: (collection, id) =>
      dispatch(deleteWorkorder(collection, id))
  };
};

const styledHeldWorkOrderDetail = withStyles(styles)(HeldWorkOrderDetail);

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
          collection: "held_workorders",
          where: [["assignedTo", "==", props.auth.uid]]
        }
      ];
    } else
      return [
        {
          collection: "held_workorders",
          where: [["requesterId", "==", props.auth.uid]]
        }
      ];
  })
)(styledHeldWorkOrderDetail);
