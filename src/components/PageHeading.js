import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

const styles = theme => ({
  appBar: {
    boxShadow: "none",
    width:"100%",
    minHeight: "75px"    
  },
  toolBar: {
    paddingLeft: theme.spacing.unit * 1.875,
    paddingRight: theme.spacing.unit * 1.875,
    minHeight: "75px"
  }
     
})

class PageHeading extends Component {
  state={}

  render (){
    const classes = this.props.classes
    return(
      <div className={classes.root}>
        <AppBar className={classes.appBar} position="static" color="default">
          <Toolbar className={classes.toolBar}>
            <img src={this.props.headingIcon} alt={this.props.children} width="30"/>
            <Typography variant="title">
              {this.props.children}
            </Typography>
          </Toolbar>
        </AppBar>
      </div>
  );
  }
}

export default withStyles(styles)(PageHeading)