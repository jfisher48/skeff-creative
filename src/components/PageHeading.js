import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

const styles = theme => ({
  pageHeading: {
    //width: '100%',
    position: 'relative',
    //padding: '15px 30px',
    //backgroundColor: '#fff',
    //borderBottom: '1px solid #fff',
    margin: '-1px -24px 24px',
    paddingTop: theme.spacing.unit * 2.5,
    paddingBottom: theme.spacing.unit * 2.5,
    paddingLeft: theme.spacing.unit * 3.0,
    paddingRight: theme.spacing.unit * 3.0,
    color: '#202020',
    //marginBottom: theme.spacing.unit * 2
  }


})

class PageHeading extends Component {
  state={}

  render (){
    const classes = this.props.classes
    return(
      <section className={classes.pageHeading}>
        <Typography type='title' component='h3' color='inherit'>
          {this.props.children}
        </Typography>
      </section>
  )
  }
}

export default withStyles(styles)(PageHeading)