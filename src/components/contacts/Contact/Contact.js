import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import styles from "./styleContact";
import {
  Dialog,
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
        {width === "xs" ? (
          <React.Fragment>
            <ListItem
              alignItems="flex-start"
              button
              onClick={this.handleClickOpen}
              key={this.props.id}
              className={classes.tableRow}
            >
              <ListItemText
                primary={this.props.firstName + " " + this.props.lastName}
                secondary={
                  this.props.route && this.props.route.length > 0
                    ? this.props.position + " Route #" + this.props.route
                    : this.props.position
                }
              />
            </ListItem>
            <Dialog fullWidth open={this.state.open} onClose={this.handleClose}>
              <DialogTitle disableTypography>
                <Typography variant="h6">
                  {this.props.firstName} {this.props.lastName}
                </Typography>
                <Typography variant="subtitle1">
                  {this.props.route && this.props.route.length > 0
                    ? this.props.position + " Route #" + this.props.route
                    : this.props.position}
                </Typography>
              </DialogTitle>
              <List>
                <ListItem divider>
                  <a href={"tel:+1-217-" + this.props.cell}>
                    {this.props.cell}
                  </a>
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
        ) : (
          <React.Fragment>
            <ListItem
              alignItems="flex-start"
              key={this.props.id}
              className={classes.tableRow}
            >
              <div className={classes.nameCell}>
                {this.props.firstName} {this.props.lastName}
              </div>
              <div className={classes.positionCell}>{this.props.position}</div>
              <div className={classes.tableCell}>
                {this.props.route ? this.props.route : ""}
              </div>
              <div className={classes.tableCell}>
                <a href={"mailto:" + this.props.emailAddress}>
                  {this.props.emailAddress}
                </a>
              </div>
              <div className={classes.tableCell}>{this.props.cell}</div>
              <div className={classes.tableCell}>
                {this.props.ext ? this.props.ext : ""}
              </div>
              <div className={classes.actionCell}>{this.props.added}</div>
            </ListItem>
          </React.Fragment>
        )}
      </React.Fragment>
    );
  }
}

const styledContact = withStyles(styles)(Contact);

export default withWidth()(styledContact);
