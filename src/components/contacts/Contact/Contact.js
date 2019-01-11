import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import styles from "./styleContact";
import {
  Dialog,
  Hidden,
  withWidth,
  List,
  ListItem,
  ListItemText,
  DialogTitle,
  Typography,
  DialogActions
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
      <React.Fragment>
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
        </ListItem>
        <Dialog fullWidth open={this.state.open} onClose={this.handleClose}>
          <DialogTitle disableTypography>
            <Typography variant="h6">
              {this.props.firstName} {this.props.lastName}
            </Typography>
            <Typography variant="subtitle1">
              {this.props.position === "Account Manager"
                ? this.props.position + " Route #" + this.props.route
                : this.props.position}
            </Typography>
          </DialogTitle>
          <List>
            <ListItem divider>
              <a href={"tel:+1-217-" + this.props.cell}>{this.props.cell}</a>
            </ListItem>
            <ListItem divider>
              <a href={"mailto:" + this.props.emailAddress}>
                {this.props.emailAddress}
              </a>
            </ListItem>
          </List>
          <DialogActions>{this.props.added}</DialogActions>
        </Dialog>
      </React.Fragment>
    );
  }
}

const styledContact = withStyles(styles)(Contact);

export default withWidth()(styledContact);
