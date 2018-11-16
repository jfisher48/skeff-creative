import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import styles from "./styleLandingPage";
import { Typography } from "@material-ui/core";

class LandingPage extends Component {
  render() {
    const classes = this.props.classes;
    return (
      <div className={classes.container}>
        <div className={classes.brand}>
          <span className={classes.brandFront}>skeff</span>
          <span>creative</span>
        </div>
        {this.props.children}
      </div>
    );
  }
}

const styledComponent = withStyles(styles)(LandingPage);

export default styledComponent;
