const styles = theme => ({
  header: {
    backgroundColor: "#e7e7e7",
    width: "100%"
  },
  headerContainer: {
    padding: "16px 26px",
    overflow: "hidden",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    flexWrap: "wrap"
  },
  orderNumber: {
    flexGrow: 1
  },
  orderNumberText: {
    fontWeight: "500",
    color: "#707070"
  },
  dueDate: {
    color: "#707070",
    padding: "5px 7px",
    borderRadius: "4px",
    display: "inline-block",
    [theme.breakpoints.down("xs")]: {
      marginTop: "5px",
      paddingLeft: "0px"
    }
  },
  dueDateUrgent: {
    color: "#fff",
    backgroundColor: "#e1313c",
    padding: "5px 7px",
    borderRadius: "4px",
    display: "inline-block",
    [theme.breakpoints.down("xs")]: {
      marginTop: "7px"
    }
  },
  leftIcon: {
    position: "relative",
    top: "2px",
    fontSize: "17px",
    float: "left",
    marginRight: "5px"
  },
  dueDateText: {
    color: "inherit",
    float: "right",
    fontSize: "0.95rem",
    fontWeight: "500",
    lineHeight: "20px"
  }
});

export default styles;
