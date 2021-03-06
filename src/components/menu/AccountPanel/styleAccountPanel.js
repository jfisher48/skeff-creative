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
    backgroundColor: "#7b7f92",
    width: "32px",
    height: "32px"
  },
  userName: {
    color: "#c7cde8",
    display: "inline-flex",
    padding: "0 16px",
    lineHeight: "32px",
    fontWeight: "500",
    fontSize: "0.875rem",
    textTransform: "uppercase"
  },
  expand: {
    color: "#0091ea"
  },
  panelDetails: {
    padding: "0"
  },
  logoutButton: {
    width: "100%",
    textAlign: "left",
    margin: "0",
    padding: "0",
    fontSize: "0.875em",
    display: "flex",
    justifyContent: "stretch"
  },
  buttonText: {
    flexGrow: "1",
    color: "#fff",
    textTransform: "uppercase",
    lineHeight: "30px",
    padding: "10px 0 10px 60px",
    fontWeight: "500"
  }
});

export default styles;
