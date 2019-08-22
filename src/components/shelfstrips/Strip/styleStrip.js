const styles = theme => ({
  formSelect: {
    width: "100%",
    marginTop: "16px",
    marginBottom: "8px"
  },
  formTitle: {
    fontSize: "1.5em",
    fontWeight: "500",
    lineHeight: "33.06px",
    color: "#4e5262"
  },
  stripButton: {
    paddingTop: "12px",
    paddingBottom: "12px",
    boxShadow: "none",
    [theme.breakpoints.down("sm")]: {
      width: "100%",
      marginTop: "10px"
    },
    [theme.breakpoints.up("md")]: {
      float: "right",
      marginLeft: "10px"
    }
  },
  yellowCheck: {
    float: "right",
    marginRight: "0"
  }
});

export default styles;
