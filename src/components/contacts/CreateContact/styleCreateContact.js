const styles = theme => ({
  formCard: {
    display: "flex",
    position: "relative",
    overflowY: "auto",
    flexDirection: "column"
  },
  formHeader: {
    flex: "0 0 auto",
    padding: "16px 26px",
    lineHeight: "33.06px",
    backgroundColor: "#e7e7e7"
  },
  formTitle: {
    fontSize: "1.5em",
    fontWeight: "500",
    lineHeight: "33.06px",
    color: "rgba(0,0,0,0.65)"
  },
  container: {
    margin: 10
  },
  textField: {
    width: "100%",
    justifyContent: "stretch"
  },
  createButton: {
    boxShadow: "none",
    [theme.breakpoints.down("sm")]: {
      width: "100%",
      marginTop: "10px"
    },
    [theme.breakpoints.up("md")]: {
      float: "right",
      marginLeft: "10px"
    }
  }
});

export default styles;
