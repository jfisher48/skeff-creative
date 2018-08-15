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
    paddingLeft: theme.spacing.unit * 0,
    paddingRight: theme.spacing.unit * 1.875,
    minHeight: "75px"
  },
  headingIcon: {
    width: "40px", 
    marginRight: "15px",
    [theme.breakpoints.down('xs')]: {
      marginRight: '8px',
      width: "35px"
  },
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
            <img src={this.props.headingIcon} className={classes.headingIcon} alt={this.props.children}/>
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