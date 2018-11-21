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
  widgetContent: {
    padding: "30px"
  },
  widgetTitle: {
    fontSize: "1.5em",
    fontWeight: "500",
    marginBottom: "20px",
    lineHeight: "1"
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
