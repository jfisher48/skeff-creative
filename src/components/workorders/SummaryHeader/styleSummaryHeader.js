const styles = theme => ({
  header: {
    backgroundColor: "#e7e7e7",
    width: "100%"
  },
  headerContainer: {
    padding: "1em 1.625em",
    overflow: "hidden",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    flexWrap: "wrap"
  },
  orderNumber: {
    flexGrow: 1,
    fontFamily: "Roboto",
    fontSize: "1.25em",
    fontWeight: "500",
    color: "#707070"
  },
  dueDate: {
    display: "flex",
    alignItems: "center",
    color: "#707070",
    padding: ".44em",
    borderRadius: ".25em",
    [theme.breakpoints.down("xs")]: {
      marginTop: ".3em",
      paddingLeft: 0
    }
  },
  dueDateUrgent: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    color: "#fff",
    backgroundColor: "#e1313c",
    padding: ".44em",
    borderRadius: ".25em"
  },
  leftIcon: {
    fontSize: "1em",
    marginRight: ".3em"
  },
  dueDateText: {
    color: "inherit",
    fontSize: "0.875rem",
    fontWeight: "500"
  }
});

export default styles;
