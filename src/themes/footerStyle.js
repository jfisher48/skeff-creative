import { createMuiTheme } from "../../node_modules/@material-ui/core";

const footerStyle = theme => ({
    block: {
      color: "inherit",
      padding: "15px",
      textTransform: "uppercase",
      borderRadius: "3px",
      textDecoration: "none",
      position: "relative",
      display: "block",      
      fontWeight: "500",
      fontSize: "0.875rem",
      [theme.breakpoints.down('sm')]: {
        padding: "5px 15px"
        },
    },
    footerLeft: {
      display: "block",      
      [theme.breakpoints.up('lg')]: {
        float: "left!important"
        },      
    },
    footerRight: {
      padding: "5px 0",
      margin: "0",
      fontSize: "0.875rem",      
      [theme.breakpoints.up('lg')]: {
        float: "right!important",
        padding: "15px 0"
        },
    },
    footer: {
      bottom: "0",
      marginTop: "35px",
      borderTop: "1px solid #e7e7e7",
      padding: "15px 0",
      fontFamily: "Roboto",
      [theme.breakpoints.down('md')]: {
          textAlign: "center"
      }      
    },    
    a: {      
      textDecoration: "none",
      backgroundColor: "transparent"
    },
    list: {
      marginBottom: "0",
      padding: "0",
      marginTop: "0",
    //   textAlign: "center"
    },
    footerItems: {
      display: "inline-block",
      paddingTop: "0px",
      paddingLeft: "0px",
      width: "auto",
      color: "rgb(85,85,85)",
      [theme.breakpoints.down('md')]: {
        padding:"0 12px;"
        },
    },
    copyright: {
        color: "rgb(85,85,85)",
        [theme.breakpoints.up('lg')]: {
            paddingRight: "15px"
            }
    }
  });
  export default footerStyle;