import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { Paper, SvgIcon, Grid } from "@material-ui/core";

const styles = theme => ({
  appBar: {
    boxShadow: "none",
    backgroundColor: "#f0f4f6",
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      minHeight: "75px"
    }
  },
  toolBar: {
    paddingLeft: theme.spacing.unit * 0,
    paddingRight: 0,
    [theme.breakpoints.up("sm")]: {
      minHeight: "75px"
    },
    display: "flex",
    alignItems: "center"
  },
  iconContainer: {
    width: "40px",
    height: "40px",
    boxShadow: "none",
    marginRight: "15px",
    [theme.breakpoints.down("xs")]: {
      marginRight: "8px",
      width: "35px"
    },
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  },
  icon: {
    color: "white",
    fontSize: "30px"
  },
  headingText: {
    flexGrow: 1,
    color: "rgb(33,36,50)",
    fontWeight: "500"
  }
});

class PageHeading extends Component {
  state = {};

  render() {
    //const { auth } = this.props;
    //console.log(auth);
    const classes = this.props.classes;
    //const links = auth.uid ? <SignedInLinks /> : <SignedOutLinks />;
    return (
      <div className={classes.root}>
        <AppBar className={classes.appBar} position="static" color="inherit">
          <Toolbar className={classes.toolBar}>
            <Grid container spacing={16}>
              <Grid
                item
                xs={12}
                sm={9}
                lg={8}
                style={{ display: "flex", alignItems: "center" }}
              >
                <Paper
                  className={classes.iconContainer}
                  style={{ backgroundColor: this.props.color }}
                >
                  <SvgIcon className={classes.icon} viewBox={this.props.view}>
                    <path d={this.props.svgPath} />
                  </SvgIcon>
                </Paper>
                <Typography className={classes.headingText} variant="h6">
                  {this.props.pageTitle}
                </Typography>
                {this.props.extraContent}
              </Grid>
              {this.props.children}
            </Grid>
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

const styledPageHeading = withStyles(styles)(PageHeading);

export default styledPageHeading;
