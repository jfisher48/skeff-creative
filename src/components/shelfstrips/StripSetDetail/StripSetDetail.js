import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import { withRouter, NavLink } from "react-router-dom";
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
  Avatar,
  DialogContent,
  DialogContentText,
  DialogActions,
  //Dialog,
  DialogTitle
} from "@material-ui/core";
import { ModalContainer, ModalRoute } from "react-router-modal";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "recompose";
import SummaryHeader from "../SummaryHeader/SummaryHeader";
import CloseIcon from "@material-ui/icons/Close";
import { PDFDownloadLink } from "@react-pdf/renderer";
import DownloadIcon from "@material-ui/icons/SaveAlt";
import { StripSetPDF } from "../StripSetPDF/StripSetPDF";
import styles from "./styleStripSetDetail";
import { Redirect } from "react-router-dom";
import StripSet from "../StripSet/StripSet";
//import { completeWorkorder } from "../../../store/actions/workorderActions";
//import { holdWorkorder } from "../../../store/actions/workorderActions";
//import { deleteWorkorder } from "../../../store/actions/workorderActions";

class StripSetDetail extends Component {
  // handleComplete = e => {
  //   e.preventDefault();
  //   console.log(this.props.match.params.id);
  //   this.props.completeWorkorder(
  //     this.props.workorder,
  //     this.props.match.params.id
  //   );
  //   this.props.deleteWorkorder("workorders", this.props.match.params.id);
  //   this.props.history.push("/workorders");
  // };

  // handleHold = e => {
  //   e.preventDefault();
  //   console.log(this.props.match.params.id);
  //   this.props.holdWorkorder(this.props.workorder, this.props.match.params.id);
  //   this.props.history.push("/workorders");
  // };

  render() {
    const classes = this.props.classes;
    const { stripset, auth, profile } = this.props;
    console.log(stripset);
    const stripsetPath = "/shelfstrips/" + stripset.stripsetNumber + "/pdf";
    if (!auth.uid) return <Redirect to="/login" />;
    if (stripset) {
      return (
        <Grid container spacing={16}>
          <Grid item xs={12}>
            <Card className={classes.orderCard}>
              <SummaryHeader
                orderNumber={stripset.stripsetNumber}
                dueDate={stripset.dueDate.toDate()}
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
                  {stripset.account}
                </Typography>
                <Grid container spacing={8} style={{ paddingBottom: "20px" }}>
                  <Grid item xs={12}>
                    <Typography
                      className={classes.orderLabel}
                      variant="subtitle1"
                    >
                      WO TYPE:{" "}
                      <span className={classes.orderInfo}>
                        {stripset.orderType}
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
                        {stripset.requesterFirstName}{" "}
                        {stripset.requesterLastName}
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
                          {stripset.createdAt.toDate()}
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
                        {stripset.assignedToName}
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
                          {stripset.dueDate.toDate()}
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
                  {stripset.strips &&
                    stripset.strips.map((strip, i) => {
                      return (
                        <ListItem divider className={classes.listItem} key={i}>
                          <ListItemAvatar>
                            <Avatar className={classes.quantityAvatar}>
                              {strip.quantity}
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
                                    {strip.brand}
                                  </span>{" "}
                                </Typography>
                              </React.Fragment>
                            }
                            secondary={
                              <Typography>
                                ${strip.price} {strip.package}
                              </Typography>
                            }
                          />
                          <Typography>${strip.cost}</Typography>
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
                        ${stripset.cost}
                      </span>
                    </Typography>
                  </ListItem>
                </List>
                <ModalRoute path={stripsetPath} parentPath="/shelfstrips/:id">
                  <DialogTitle disableTypography className={classes.modalTitle}>
                    <Typography variant="h6">Download PDF</Typography>
                    <IconButton
                      onClick={this.props.history.goBack}
                      className={classes.closeButton}
                      color="inherit"
                      aria-label="Close"
                    >
                      <CloseIcon />
                    </IconButton>
                  </DialogTitle>
                  <DialogContent>
                    <DialogContentText>
                      {stripset
                        ? "Your shelf strips have been generated. Click below to download a PDF of your set."
                        : "There are no strips to print. Thank You!"}
                    </DialogContentText>
                  </DialogContent>
                  <DialogActions className={classes.modalActions}>
                    {stripset ? <StripSet stripset={stripset} /> : ""}
                  </DialogActions>
                </ModalRoute>
              </CardContent>

              <CardActions className={classes.orderActions}>
                <Button
                  className={classes.downloadButton}
                  variant="contained"
                  size="large"
                  color="secondary"
                  component={NavLink}
                  to={stripsetPath}
                >
                  Create
                </Button>

                {/* <PDFDownloadLink
          document={<StripSetPDF stripset={stripset}/>}
          fileName="Shelf Strip Detail.pdf"
        >
          {({ blob, url, loading, error }) =>
            loading ? (
              "Loading document..."
            ) : (
              <Button
                className={classes.downloadButton}
                variant="contained"
                size="large"
                color="secondary"
              >
                <DownloadIcon style={{ marginRight: "8px" }} />
                Download PDF
              </Button>
            )
          }
        </PDFDownloadLink> */}
                {/* <Button
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
                  </Button> */}
              </CardActions>
            </Card>
          </Grid>
          <ModalContainer />
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
  const stripsets = state.firestore.data.stripsets;
  const stripset = stripsets ? stripsets[id] : null;
  return {
    stripset: stripset,
    auth: state.firebase.auth,
    profile: state.firebase.profile
  };
};

// const mapDispatchToProps = dispatch => {
//   return {
//     completeWorkorder: (workorder, id) =>
//       dispatch(completeWorkorder(workorder, id)),
//     deleteWorkorder: (collection, id) =>
//       dispatch(deleteWorkorder(collection, id)),
//     holdWorkorder: (workorder, id) => dispatch(holdWorkorder(workorder, id))
//   };
// };

const styledStripSetDetail = withStyles(styles)(StripSetDetail);

export default compose(
  connect(
    mapStateToProps
    // mapDispatchToProps
  ),
  firestoreConnect(props => {
    if (!props.auth.uid) return [];
    if (props.profile.role === "graphics") {
      return [
        {
          collection: "stripsets",
          where: [["assignedTo", "==", props.auth.uid]]
        }
      ];
    } else
      return [
        {
          collection: "stripsets",
          where: [["requesterId", "==", props.auth.uid]]
        }
      ];
  }),
  withRouter
)(styledStripSetDetail);
