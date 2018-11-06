import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";
import Moment from "react-moment";

const styles = theme => ({
  header: {
    backgroundColor: "#0091ea",
    width: "100%"
  },
  headerContainer: {
    padding: "16px 26px",
    overflow: "hidden"
  },
  orderNumber: {
    float: "left",
    fontWeight: "500",
    color: "white"
  },
  dueDate: {
    float: "right",
    fontWeight: "500",
    lineHeight: "1.2168",
    color: "white"
  }
});

class SummaryHeader extends Component {
  render() {
    const classes = this.props.classes;
    return (
      <div className={classes.header}>
        <div className={classes.headerContainer}>
          <Typography variant="h3" className={classes.orderNumber}>
            {this.props.orderNumber}
          </Typography>
          <Typography variant="h4" className={classes.dueDate}>
            <Moment format="M.DD.YY">{this.props.dueDate}</Moment>
          </Typography>
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(SummaryHeader);
