import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";
import ScheduleIcon from "@material-ui/icons/Schedule";
import Moment from "react-moment";

const styles = theme => ({
  header: {
    backgroundColor: "#e7e7e7",
    width: "100%"
  },
  headerContainer: {
    padding: "16px 26px",
    overflow: "hidden"
  },
  orderNumber: {
    float: "left",
    fontWeight: "500",
    color: "#707070"
  },
  dueDate: {
    float: "right",
    color: "#707070"
  },
  leftIcon: {
    lineHeight: "30px",
    fontWeight: "500",
    float: "left",
    marginRight: "3px",
    marginTop: "-1px",
    textAlign: "center",
    verticalAlign: "middle"
  },
  dueDateText: {
    color: "#707070",
    float: "right",
    fontWeight: "500",
    lineHeight: "20px"
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
          <span className={classes.dueDate}>
            <ScheduleIcon fontSize="small" className={classes.leftIcon} />
            <Typography variant="h4" className={classes.dueDateText}>
              <Moment format="MMM DD">{this.props.dueDate}</Moment>
            </Typography>
          </span>
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(SummaryHeader);
