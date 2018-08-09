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
  },

  pageHeading: {
    //width: '100%',
    position: 'relative',    
    paddingTop: theme.spacing.unit * 3,
    paddingBottom: theme.spacing.unit * 3,
    paddingLeft: theme.spacing.unit * 1.875,
    paddingRight: theme.spacing.unit * 1.875    
  },  
})

class PageHeading extends Component {
  state={}

  render (){
    const classes = this.props.classes
    return(
      <div className={classes.root}>
        <AppBar className={classes.appBar} position="static" color="default">
          <Toolbar className={classes.toolBar}>
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