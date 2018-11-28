const styles = theme => ({
  header: {
    backgroundColor: "#e7e7e7",
    width: "100%"
  },
  headerSoon: {
    backgroundColor: "rgb(236, 204, 36)",
    width: "100%"
  },
  headerLate: {
    backgroundColor: "#E1313C",
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
    color: "rgba(0,0,0,0.65)"
  },
  dueDate: {
    display: "flex",
    alignItems: "center",
    color: "rgba(0,0,0,0.65)",
    padding: ".44em"
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
