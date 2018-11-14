import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";
import ScheduleIcon from "@material-ui/icons/Schedule";
import Moment from "react-moment";
import styles from "./styleSummaryHeader";

class SummaryHeader extends Component {
  render() {
    const classes = this.props.classes;
    return (
      <div className={classes.header}>
        <div className={classes.headerContainer}>
          <span className={classes.orderNumber}>
            <Typography variant="h3" className={classes.orderNumberText}>
              {this.props.orderNumber}
            </Typography>
          </span>
          <span
            className={
              this.props.dueDate - Date.now() >= 86400000
                ? classes.dueDate
                : classes.dueDateUrgent
            }
          >
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
