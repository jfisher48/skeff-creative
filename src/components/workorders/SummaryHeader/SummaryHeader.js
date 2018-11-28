import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import ScheduleIcon from "@material-ui/icons/Schedule";
import Moment from "react-moment";
import styles from "./styleSummaryHeader";

class SummaryHeader extends Component {
  render() {
    const classes = this.props.classes;
    return (
      <div
        className={
          this.props.dueDate - Date.now() >= 43200000
            ? classes.header
            : this.props.dueDate < Date.now()
              ? classes.headerLate
              : classes.headerSoon
        }
      >
        <div className={classes.headerContainer}>
          <span className={classes.orderNumber}>{this.props.orderNumber}</span>
          <span className={classes.dueDate}>
            <ScheduleIcon fontSize="small" className={classes.leftIcon} />
            <span className={classes.dueDateText}>
              <Moment format="MMM DD">{this.props.dueDate}</Moment>
            </span>
          </span>
          {this.props.children}
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(SummaryHeader);
