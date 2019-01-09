import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "recompose";
import styles from "./styleContact";
import {
  Dialog,
  Hidden,
  IconButton,
  withWidth,
  List,
  ListItem,
  ListItemText
} from "@material-ui/core";

class Contact extends Component {
  state = {
    open: false
  };

  handleClickOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  render() {
    const classes = this.props.classes;
    const { width } = this.props;

    return (
      <ListItem
        alignItems="flex-start"
        button={width !== "xs" ? false : true}
        onClick={this.handleClickOpen}
        key={this.props.id}
        className={classes.tableRow}
      >
        {width === "xs" ? (
          <ListItemText
            primary={this.props.firstName + " " + this.props.lastName}
            secondary={this.props.position}
          />
        ) : (
          ""
        )}
        <Hidden xsDown>
          <div className={classes.nameCell}>
            {this.props.firstName} {this.props.lastName}
          </div>
        </Hidden>
        <Hidden xsDown>
          <div className={classes.positionCell}>{this.props.position}</div>
        </Hidden>
        <Hidden xsDown>
          <div className={classes.tableCell}>
            {this.props.route ? this.props.route : "N/A"}
          </div>
        </Hidden>
        <Hidden xsDown>
          <div className={classes.tableCell}>
            <a href={"mailto:" + this.props.emailAddress}>
              {this.props.emailAddress}
            </a>
          </div>
        </Hidden>
        <Hidden xsDown>
          <div className={classes.tableCell}>
            {this.props.ext ? this.props.ext : "N/A"}
          </div>
        </Hidden>
        <Hidden xsDown>
          <div className={classes.tableCell}>{this.props.cell}</div>
        </Hidden>
        <Hidden xsDown>
          <div className={classes.actionCell}>{this.props.added}</div>
        </Hidden>
        <Dialog open={this.state.open} onClose={this.handleClose}>
          {this.props.firstName}
        </Dialog>
      </ListItem>
    );
  }
}

const styledComponent = withStyles(styles)(Contact);

export default withWidth()(styledComponent);
