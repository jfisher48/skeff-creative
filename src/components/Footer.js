import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import { List, ListItem} from '@material-ui/core';

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

class Footer extends Component {
  state={}

  render (){
    const classes = this.props.classes
    return(
      <footer className={classes.pageHeading}>
        <div className={classes.container}>
            <div className={classes.left}>
                <List className={classes.list}>
                    <ListItem className={classes.inlineBlock}>
                        <a href="#home" className={classes.block}>
                            Home
                        </a>
                    </ListItem>
                    <ListItem className={classes.inlineBlock}>
                        <a href="#company" className={classes.block}>
                            Company
                        </a>
                    </ListItem>
                    <ListItem className={classes.inlineBlock}>
                        <a href="#portfolio" className={classes.block}>
                            Portfolio
                        </a>
                    </ListItem>
                    <ListItem className={classes.inlineBlock}>
                        <a href="#blog" className={classes.block}>
                            Blog
                        </a>
                    </ListItem>
                </List>
                </div>
            <div className={classes.right}>
            </div>
        </div>
      </footer>
  )
  }
}

export default withStyles(styles)(Footer)