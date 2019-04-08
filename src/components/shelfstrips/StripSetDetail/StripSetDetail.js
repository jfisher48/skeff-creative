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
  CardActions,
  ListItemAvatar,
  Avatar
} from "@material-ui/core";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "recompose";
import SummaryHeader from "../SummaryHeader/SummaryHeader";
import CloseIcon from "@material-ui/icons/Close";
import styles from "./styleStripSetDetail";
import { Redirect } from "react-router-dom";
import { completeWorkorder } from "../../../store/actions/workorderActions";
import { holdWorkorder } from "../../../store/actions/workorderActions";
import { deleteWorkorder } from "../../../store/actions/workorderActions";

class StripSetDetail extends Component {
  handleComplete = e => {
    e.preventDefault();
    console.log(this.props.match.params.id);
    this.props.completeWorkorder(
      this.props.workorder,
      this.props.match.params.id
    );
    this.props.deleteWorkorder("workorders", this.props.match.params.id);
    this.props.history.push("/workorders");
  };

  handleHold = e => {
    e.preventDefault();
    console.log(this.props.match.params.id);
    this.props.holdWorkorder(this.props.workorder, this.props.match.params.id);
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
                      STATUS:{" "}
                      <span className={classes.orderInfo}>Assigned</span>
                    </Typography>
                  </Grid>
                  {/* <Grid item xs={12} sm={6}>
                    <Typography className={classes.orderLabel} variant="h4">
                      DUE ON:{" "}
                      <span className={classes.orderInfo}>
                        <Moment format="M.DD.YY [at] h:mm A">
                          {workorder.dueDate.toDate()}
                        </Moment>
                      </span>
                    </Typography>
                  </Grid> */}
                </Grid>
                <List>
                  {workorder.items &&
                    workorder.items.map((item, i) => {
                      return (
                        <ListItem divider className={classes.listItem} key={i}>
                          <ListItemAvatar>
                            <Avatar className={classes.quantityAvatar}>
                              {item.quantity}
                            </Avatar>
                          </ListItemAvatar>
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
                                    {item.signDimensions} {item.signTypeName}{" "}
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
                          <Typography>${item.cost}</Typography>
                        </ListItem>
                      );
                    })}
                  <ListItem divider className={classes.listItem}>
                    <ListItemText />
                    <Typography
                      variant="subtitle1"
                      className={classes.totalText}
                    >
                      {" "}
                      TOTAL:{" "}
                      <span className={classes.totalAmount}>
                        ${workorder.cost}
                      </span>
                    </Typography>
                  </ListItem>
                </List>
              </CardContent>
              {profile.role === "graphics" ? (
                <CardActions className={classes.orderActions}>
                  <Button
                    variant="contained"
                    color="secondary"
                    onClick={this.handleComplete}
                    className={classes.orderButton}
                  >
                    Complete
                  </Button>
                  <Button
                    variant="outlined"
                    onClick={this.handleHold}
                    className={classes.orderButton}
                    style={{ paddingTop: "7px", paddingBottom: "7px" }}
                  >
                    Hold
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
  const workorders = state.firestore.data.workorders;
  const workorder = workorders ? workorders[id] : null;
  return {
    workorder: workorder,
    auth: state.firebase.auth,
    profile: state.firebase.profile
  };
};

const mapDispatchToProps = dispatch => {
  return {
    completeWorkorder: (workorder, id) =>
      dispatch(completeWorkorder(workorder, id)),
    deleteWorkorder: (collection, id) =>
      dispatch(deleteWorkorder(collection, id)),
    holdWorkorder: (workorder, id) => dispatch(holdWorkorder(workorder, id))
  };
};

const styledStripSetDetail = withStyles(styles)(StripSetDetail);

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
)(styledStripSetDetail);
