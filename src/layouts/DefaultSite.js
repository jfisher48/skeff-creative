import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import { NavLink} from 'react-router-dom';
import siteRoutes from '../routes/routes';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import Hidden from '@material-ui/core/Hidden';
import Divider from '@material-ui/core/Divider';
import MenuIcon from '@material-ui/icons/Menu';
import logo from '../creative_logo.svg';
import { List, ListItem, ListItemText } from '../../node_modules/@material-ui/core';


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
    // marginLeft: drawerWidth,
    // [theme.breakpoints.up('md')]: {
    //   width: `calc(100% - ${drawerWidth}px)`,
    //},
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
    margin: 'auto',
    "&:after": {
        content: '""',
        position: "absolute",
        bottom: "0",
  
        height: "1px",
        right: "15px",
        width: "calc(100% - 30px)",
        backgroundColor: "rgba(180, 180, 180, 0.3)"
    }
  },
  brand: {
    padding: "5px 0",
    display: "block",
    fontFamily: "Encode Sans Condensed",
    fontSize: "28px",
    color: "#848688",    
    textAlign: "left",
    fontWeight: "300",
    lineHeight: "32px",
    textDecoration: "none",
    backgroundColor: "transparent",
    // "&,&:hover": {
    //   color: "#ffffff"
    // }
  },
  brandFront: {
      fontWeight: "600",
      fontSize: "29px",
      color: "#bdbfc1"
  },
  brandImage: {
    width: '40px',
    display: 'inline-block',    
    maxHeight: '40px',
    marginLeft: '10px',
    marginRight: '15px'
  },  
  img: {
      width: '45px',
      top: '14px',
      position: 'absolute',
      verticalAlign: 'middle',
      border: '0'            
  },
  content: {
    [theme.breakpoints.down('md')]: {
        marginTop: '56px'
    },
    height: '100%',
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    paddingLeft: theme.spacing.unit * 3,
    paddingRight: theme.spacing.unit * 3,
    paddingBottom: theme.spacing.unit * 3
  }  
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
            if (prop.redirect) return null;
            return (
            <NavLink
                to={prop.path}
                key={key}
            >
                <ListItem button onClick={this.handleDrawerToggle}>
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
            <Typography variant="title" color="inherit"  style={{flex:1}}>
                Skeff Creative
            </Typography>
            <IconButton
              color="inherit"
              aria-label="Open drawer"
              onClick={this.handleDrawerToggle}
              className={classes.navIconHide}
            >
              <MenuIcon />
            </IconButton>
            
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
                    <div className={classes.brand}>                    
                        <div className={classes.brandImage}>
                        <img src={logo} alt="logo" className={classes.img} />
                        </div>
                        <span className={classes.brandFront}>skeff</span><span>creative</span>                                        
                    </div>
                </div>                
                <List>
                {nav}
                </List>
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