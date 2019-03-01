const drawerWidth = 270;

const styles = theme => ({
  root: {
    flexGrow: 1,
    height: "100%",
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
    backgroundColor: "#212432",
    minHeight: "100vh",
    color: "#fff",
    width: drawerWidth,
    position: "fixed",
    [theme.breakpoints.up("lg")]: {
      position: "relative"
    },
    [theme.breakpoints.up("sm")]: {
      height: "100%"
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
    padding: "10px 15px",
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
    color: "#7b7f92",
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
    color: "#fff"
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
    color: "#fff",
    width: "auto",
    transition: "all 200ms linear",
    margin: "10px 15px 0",
    borderRadius: "3px",
    position: "relative",
    "&:hover": {
      color: "#cedodb"
    },
    //display: "block",
    padding: "13px 15px",
    backgroundColor: "transparent"
  },
  icon: {
    maxHeight: "32px",
    maxWidth: "25px",
    float: "left",
    //marginRight: "15px",
    textAlign: "center",
    verticalAlign: "middle",
    color: "#7b7f92"
  },
  itemText: {
    margin: "0",
    textTransform: "uppercase",
    lineHeight: "30px",
    fontWeight: "500",
    fontSize: "1em",
    fontFamily:
      "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Fira Sans', 'Droid Sans', 'Helvetica Neue', Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'"
  },
  content: {
    [theme.breakpoints.down("md")]: {
      marginTop: "64px"
    },
    [theme.breakpoints.up("md")]: {
      overflowY: "scroll"
    },
    height: "100%",
    flexGrow: 1,
    backgroundColor: "#f0f4f6",
    paddingLeft: theme.spacing.unit * 3,
    paddingRight: theme.spacing.unit * 3
    //paddingBottom: theme.spacing.unit * 3
  }
});

export default styles;
