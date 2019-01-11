const styles = theme => ({
  container: {
    backgroundColor: "transparent",
    boxShadow: "none"
  },
  accountSummary: {
    padding: "0 0 0 15px",
    flexDirection: "row",
    alignItems: "center",
    content: {
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between"
    }
  },
  userAvatar: {
    width: "32px",
    height: "32px"
  },
  userName: {
    color: "#bdbfc1",
    display: "inline-flex",
    padding: "0 16px",
    lineHeight: "32px",
    fontWeight: "500",
    fontSize: "1rem"
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
    fontWeight: "500"
  }
});

export default styles;
