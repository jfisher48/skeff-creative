const footerStyle = theme => ({
  block: {
    color: "#4e5262",
    padding: "15px",
    textTransform: "uppercase",
    borderRadius: "3px",
    textDecoration: "none",
    position: "relative",
    display: "block",
    fontSize: "0.875rem",
    "&:hover": {
      color: "#212432"
    },
    [theme.breakpoints.down("sm")]: {
      padding: "5px 15px"
    }
  },
  footerLeft: {
    display: "block",
    [theme.breakpoints.up("lg")]: {
      float: "left!important"
    }
  },
  footerRight: {
    color: "#4e5262",
    padding: "5px 0",
    margin: "0",
    fontSize: "0.875rem",
    [theme.breakpoints.up("lg")]: {
      float: "right!important",
      padding: "15px 0"
    }
  },
  footer: {
    bottom: "0",
    marginTop: "35px",
    borderTop: "1px solid #e7e7e7",
    padding: "15px 0",
    //fontFamily: "Roboto",
    [theme.breakpoints.down("md")]: {
      textAlign: "center"
    }
  },
  a: {
    textDecoration: "none",
    backgroundColor: "transparent",
    color: "#0091ea"
  },
  list: {
    marginBottom: "0",
    padding: "0",
    marginTop: "0"
    //textAlign: "center"
  },
  footerItems: {
    display: "inline-block",
    paddingTop: "0px",
    paddingLeft: "0px",
    width: "auto",
    [theme.breakpoints.down("md")]: {
      padding: "0 12px;"
    }
  },
  copyright: {
    color: "#4e5262",
    [theme.breakpoints.up("lg")]: {
      paddingRight: "15px"
    }
  }
});
export default footerStyle;
