import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { Hidden } from "@material-ui/core";
import SignedInLinks from "./SignedInLinks/SignedInLinks";
import { connect } from "react-redux";
import { compose } from "recompose";

const styles = theme => ({
  appBar: {
    boxShadow: "none",
    width: "100%",
    minHeight: "75px"
  },
  toolBar: {
    paddingLeft: theme.spacing.unit * 0,
    paddingRight: theme.spacing.unit * 1.875,
    minHeight: "75px",
    display: "flex",
    alignItems: "center"
  },
  headingIcon: {
    width: "40px",
    marginRight: "15px",
    [theme.breakpoints.down("xs")]: {
      marginRight: "8px",
      width: "35px"
    }
  },
  headingText: {
    flexGrow: 1
  }
});

class PageHeading extends Component {
  state = {};

  render() {
    const { auth } = this.props;
    const classes = this.props.classes;
    return (
      <div className={classes.root}>
        <AppBar className={classes.appBar} position="static" color="default">
          <Toolbar className={classes.toolBar}>
            <img
              src={this.props.headingIcon}
              className={classes.headingIcon}
              alt={this.props.children}
            />
            <Typography className={classes.headingText} variant="subtitle1">
              {this.props.children}
            </Typography>
            <Hidden xsDown>
              <SignedInLinks />
              {/* <SignedOutLinks /> */}
            </Hidden>
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

const styledComponent = withStyles(styles)(PageHeading);

const mapStateToProps = state => {
  return {
    auth: state.firebase.auth
  };
};

export default connect(mapStateToProps)(styledComponent);
