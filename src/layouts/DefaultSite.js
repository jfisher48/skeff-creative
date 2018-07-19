import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import { NavLink} from 'react-router-dom';
//import SideNavItem from '../components/SideNavItem';
//import map from 'lodash/map';
import siteRoutes from '../routes/routes';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import Hidden from '@material-ui/core/Hidden';
import Divider from '@material-ui/core/Divider';
import MenuIcon from '@material-ui/icons/Menu';
import { ListItem, ListItemText } from '../../node_modules/@material-ui/core';
//import { mailFolderListItems, otherMailFolderListItems } from './tileData';*

const drawerWidth = 260;

const styles = theme => ({
  root: {
    flexGrow: 1,
    height: "100vh",
    zIndex: 1,
    overflow: 'hidden',
    position: 'relative',
    display: 'flex',
    width: '100%',
  },
  appBar: {
    position: 'absolute',
    marginLeft: drawerWidth,
    [theme.breakpoints.up('md')]: {
      width: `calc(100% - ${drawerWidth}px)`,
    },
  },
  navIconHide: {
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    backgroundColor: '#3b3b3b',
    color: '#ffffff',
    width: drawerWidth,
    [theme.breakpoints.up('md')]: {
      position: 'relative',
    },
  },
  drawerTitle: {
    position: 'relative',
    padding: '15px 15px',
    margin: 'auto'
  },  
  content: {
    height: '100%',
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing.unit * 3,
  },
});

class DefaultSite extends React.Component {
  state = {
    mobileOpen: false,
  };

  handleDrawerToggle = () => {
    this.setState(state => ({ mobileOpen: !state.mobileOpen }));
  };

  render() {
    const { classes, theme } = this.props;

    const nav = (        
        siteRoutes.map((prop, key) => {
            return (
            <NavLink
                to={prop.path}
                key={key}
            >
                <ListItem button>
                    <ListItemText
                        primary={prop.sidebarName}
                        disableTypography={true}
                    />
                </ListItem>
            </NavLink>
            )
        })         
    );

    return (
      <div className={classes.root}>
        <Hidden mdUp>
        <AppBar className={classes.appBar}>
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="Open drawer"
              onClick={this.handleDrawerToggle}
              className={classes.navIconHide}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="title" color="inherit" noWrap>
              Skeff Creative
            </Typography>
          </Toolbar>
        </AppBar>
        </Hidden>
        <Hidden mdUp>
          <Drawer
            variant="temporary"
            anchor={theme.direction === 'rtl' ? 'right' : 'left'}
            open={this.state.mobileOpen}
            onClose={this.handleDrawerToggle}
            classes={{
              paper: classes.drawerPaper,
            }}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
          >
            <div>
                <div className={classes.toolbar}>
                    Menu
                </div>
                <Divider />
                {nav}
            </div>
          </Drawer>
        </Hidden>
        <Hidden smDown implementation="css">
          <Drawer
            variant="permanent"
            open
            classes={{
              paper: classes.drawerPaper,
            }}
          >
            <div>                
                <div className={classes.drawerTitle}>
                    <Typography variant="title" color="inherit" noWrap>
                        Skeff Creative
                    </Typography>
                </div>                
                <Divider />
                {nav}
            </div>
          </Drawer>
        </Hidden>
        <main className={classes.content}>
            {this.props.children}          
        </main>
      </div>
    );
  }
}

DefaultSite.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true })(DefaultSite);