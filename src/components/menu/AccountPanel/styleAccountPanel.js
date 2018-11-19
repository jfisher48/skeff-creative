const styles = theme => ({
  container: {
    backgroundColor: "transparent",
    boxShadow: "none"
  },
  accountSummary: {
    padding: "0 0 0 10px",
    flexDirection: "row",
    alignItems: "center",
    content: {
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between"
    }
  },
  userName: {
    color: "#fff",
    //display: "inline-flex",
    marginLeft: "20px",
    lineHeight: "40px"
  },
  expand: {
    color: "#fff"
  },
  panelDetails: {
    padding: "0"
  },
  logoutButton: {
    width: "100%",
    textAlign: "left",
    margin: "0",
    padding: "0",
    fontSize: "1em",
    display: "flex",
    justifyContent: "stretch"
  },
  buttonText: {
    flexGrow: "1",
    color: "#fff",
    textTransform: "none",
    lineHeight: "30px",
    padding: "10px 0 10px 60px",
    fontWeight: "400"
  }
});

export default styles;
