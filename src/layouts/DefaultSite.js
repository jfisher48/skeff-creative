import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import { NavLink, withRouter } from "react-router-dom";
import { compose } from "recompose";
import siteRoutes from "../routes/routes";
import IconButton from "@material-ui/core/IconButton";
import Hidden from "@material-ui/core/Hidden";
import MenuIcon from "@material-ui/icons/Menu";
import SvgIcon from "@material-ui/core/SvgIcon";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import logo from "../icons/creative_logo.svg";
import {
  MenuItem,
  MenuList,
  ListItemText,
  MuiThemeProvider
} from "../../node_modules/@material-ui/core";
import Footer from "../components/Footer";
import { connect } from "react-redux";

const drawerWidth = 270;

const styles = theme => ({
  root: {
    flexGrow: 1,
    height: "100vh",
    //zIndex: 1,
    //overflow: 'hidden',
    position: "relative",
    display: "flex",
    width: "100%",
    top: "0"
  },
  appBar: {
    position: "fixed",
    zIndex: "1100"
  },
  navIconHide: {
    [theme.breakpoints.up("lg")]: {
      display: "none"
    }
  },
  drawerPaper: {
    backgroundColor: "#263238",
    minHeight: "100vh",
    color: "#ffffff",
    width: drawerWidth,
    position: "fixed",
    [theme.breakpoints.up("lg")]: {
      position: "relative"
    }
  },
  navWrap: {
    height: "calc(100% - 30px)",
    width: drawerWidth,
    overflowY: "scroll",
    overflowScrolling: "touch"
  },
  drawerTitle: {
    position: "relative",
    padding: "15px 15px",
    margin: "auto",
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
  userBar: {
    position: "relative",
    padding: "15px 15px",
    margin: "auto",
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
    [theme.breakpoints.down("md")]: {
      flex: "1"
    }
  },
  brandFront: {
    fontWeight: "600",
    fontSize: "29px",
    color: "#bdbfc1"
  },
  brandImage: {
    width: "40px",
    display: "inline-block",
    maxHeight: "40px",
    marginLeft: "10px",
    marginRight: "15px"
  },
  img: {
    width: "45px",
    top: "14px",
    position: "absolute",
    verticalAlign: "middle",
    border: "0",
    [theme.breakpoints.down("md")]: {
      top: ".56rem"
    },
    [theme.breakpoints.down("sm")]: {
      top: "5px"
    }
  },
  list: {
    marginTop: "15px",
    paddingLeft: "0",
    paddingTop: "0",
    paddingBottom: "0",
    marginBottom: "0",
    listStyle: "none",
    position: "unset"
  },
  item: {
    position: "relative",
    display: "block",
    textDecoration: "none"
  },
  itemLink: {
    width: "auto",
    transition: "all 200ms linear",
    margin: "10px 15px 0",
    borderRadius: "3px",
    position: "relative",
    //display: "block",
    padding: ".81em .94em",
    backgroundColor: "transparent"
  },
  icon: {
    maxHeight: "38px",
    maxWidth: "30px",
    float: "left",
    //marginRight: "15px",
    textAlign: "center",
    verticalAlign: "middle",
    color: "#fff"
  },
  itemText: {
    color: "#ffffff",
    margin: "0",
    lineHeight: "30px",
    fontSize: "1em"
  },
  content: {
    [theme.breakpoints.down("sm")]: {
      marginTop: "56px"
    },
    [theme.breakpoints.up("md")]: {
      overflowY: "scroll"
    },
    height: "100%",
    flexGrow: 1,
    backgroundColor: "#f5f5f5",
    paddingLeft: theme.spacing.unit * 3,
    paddingRight: theme.spacing.unit * 3
    //paddingBottom: theme.spacing.unit * 3
  }
});

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
                <IconButton color="inherit" onClick={this.handleDrawerToggle}>
                  <ChevronRightIcon />
                </IconButton>
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
const styledComponent = withStyles(styles, { withTheme: true })(DefaultSite);

export default compose(
  connect(mapStateToProps),
  withRouter
)(styledComponent);
