import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import { List, ListItem} from '@material-ui/core';
import footerStyle from '../themes/footerStyle';



class Footer extends Component {
  state={}

  render (){
    const classes = this.props.classes
    return(
      <footer className={classes.footer}>
        <div className={classes.container}>
            <div className={classes.footerLeft}>
                <List className={classes.list}>
                    <ListItem className={classes.footerItems}>
                        <a href="#home" className={classes.block}>
                            Home
                        </a>
                    </ListItem>
                    <ListItem className={classes.footerItems}>
                        <a href="http://skeffdist.com" className={classes.block}>
                            Skeffdist.com
                        </a>
                    </ListItem>
                    <ListItem className={classes.footerItems}>
                        <a href="http://www.abmarketing.com" className={classes.block}>
                            ABMarketing.com
                        </a>
                    </ListItem>
                    <ListItem className={classes.footerItems}>
                        <a href="https://51229.mobilitysellsbeer.net" className={classes.block}>
                            Mobility
                        </a>
                    </ListItem>
                </List>
            </div>            
            <p className={classes.footerRight}>
                <span className={classes.copyright}>
                    &copy; {1900 + new Date().getYear()}{" "}
                    <a href="http://www.trueborncreative.com" className={classes.a}>
                    Trueborn Creative
                    </a>, for Skeff Distributing, Inc.
                </span>
            </p>            
        </div>
      </footer>
  )
  }
}

export default withStyles(footerStyle)(Footer)