import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import { NavLink, withRouter } from "react-router-dom";
import { compose } from "recompose";
import siteRoutes from "../../routes/routes";
import IconButton from "@material-ui/core/IconButton";
import Hidden from "@material-ui/core/Hidden";
import MenuIcon from "@material-ui/icons/Menu";
import SvgIcon from "@material-ui/core/SvgIcon";
import logo from "../../icons/creative_logo.svg";
import {
  MenuItem,
  MenuList,
  ListItemText,
  MuiThemeProvider
} from "@material-ui/core";
import AccountPanel from "../../components/menu/AccountPanel/AccountPanel";
import Footer from "../../components/Footer";
import { connect } from "react-redux";
import styles from "./styleDefaultSite";

class DefaultSite extends React.Component {
  state = {
    mobileOpen: false
  };

  handleDrawerToggle = () => {
    this.setState(state => ({ mobileOpen: !state.mobileOpen }));
  };

  render() {
    const {
      classes,
      location: { pathname }
    } = this.props;

    const nav = siteRoutes.map((prop, key) => {
      var isSelected = false;
      if (prop.redirect) return null;
      if (prop.path === pathname || pathname.match(prop.path + "/"))
        isSelected = true;
      return (
        <NavLink
          to={prop.path}
          key={key}
          activeClassName={classes.current}
          className={classes.item}
        >
          <MuiThemeProvider theme={prop.btn}>
            <MenuItem
              selected={isSelected}
              className={classes.itemLink}
              button
              onClick={this.handleDrawerToggle}
            >
              {/* <img
                src={prop.icon}
                alt={prop.sidebarName}
                className={classes.icon}
              /> */}
              <SvgIcon
                className={classes.icon}
                viewBox={prop.svgbox}
                fontSize="large"
              >
                <path d={prop.svgpath} />
              </SvgIcon>
              <ListItemText
                className={classes.itemText}
                primary={prop.sidebarName}
                disableTypography={true}
              />
            </MenuItem>
          </MuiThemeProvider>
        </NavLink>
      );
    });

    return (
      <div className={classes.root}>
        <Hidden lgUp>
          <AppBar className={classes.appBar} position="fixed">
            <Toolbar>
              <div className={classes.brand}>
                <div className={classes.brandImage}>
                  <img src={logo} alt="logo" className={classes.img} />
                </div>
                <span className={classes.brandFront}>skeff</span>
                <span>creative</span>
              </div>
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
        <Hidden lgUp>
          <Drawer
            variant="temporary"
            anchor="right"
            open={this.state.mobileOpen}
            onClose={this.handleDrawerToggle}
            classes={{
              paper: classes.drawerPaper
            }}
            ModalProps={{
              keepMounted: true // Better open performance on mobile.
            }}
          >
            <div className={classes.navWrap}>
              <div className={classes.userBar}>
                <AccountPanel />
              </div>
              <MenuList className={classes.list}>{nav}</MenuList>
            </div>
          </Drawer>
        </Hidden>
        <Hidden mdDown implementation="css">
          <Drawer
            variant="permanent"
            open
            classes={{
              paper: classes.drawerPaper
            }}
          >
            <div>
              <div className={classes.drawerTitle}>
                <div className={classes.brand}>
                  <div className={classes.brandImage}>
                    <img src={logo} alt="logo" className={classes.img} />
                  </div>
                  <span className={classes.brandFront}>skeff</span>
                  <span>creative</span>
                </div>
              </div>
              <div className={classes.userBar}>
                <AccountPanel />
              </div>
              <MenuList className={classes.list}>{nav}</MenuList>
            </div>
          </Drawer>
        </Hidden>
        <main className={classes.content}>
          {this.props.children}
          <Footer />
        </main>
      </div>
    );
  }
}

DefaultSite.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired
};

const mapStateToProps = state => {
  //console.log(state);
  return {};
};
const styledDefaultSite = withStyles(styles, { withTheme: true })(DefaultSite);

export default compose(
  connect(mapStateToProps),
  withRouter
)(styledDefaultSite);
