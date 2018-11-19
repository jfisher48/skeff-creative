const styles = theme => ({
  container: {
    backgroundColor: "transparent",
    boxShadow: "none"
  },
  accountSummary: {
    padding: "0",
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
  }
});

export default styles;
