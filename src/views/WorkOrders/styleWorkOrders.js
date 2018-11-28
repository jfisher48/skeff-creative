const styles = theme => ({
  createButton: {
    float: "right"
  },
  createIcon: {
    fontSize: 15,
    marginRight: "5px",
    fontWeight: "bolder",
    [theme.breakpoints.down("xs")]: {
      fontSize: "24px",
      margin: "0",
      fontWeight: "500"
    }
  },
  widgetHeader: {
    padding: "16px 26px",
    lineHeight: "33.06px",
    backgroundColor: "#a94e93"
  },
  widgetContent: {
    padding: "24px 26px"
  },
  widgetTitle: {
    fontSize: "1.5em",
    fontWeight: "500",
    lineHeight: "33.06px",
    color: "rgba(0,0,0,0.65)"
  },
  widgetList: {
    padding: "0"
  },
  widgetListItem: {
    padding: "0",
    marginBottom: "10px",
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start"
  },
  notificationUser: {
    fontWeight: "500"
  },
  notificationTime: {
    paddingLeft: "10px",
    color: "grey"
  }
});

export default styles;
