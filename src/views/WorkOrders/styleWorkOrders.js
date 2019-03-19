const styles = theme => ({
  viewTabs: {
    float: "right",
    flexGrow: 1
  },
  createButton: {
    float: "right",
    [theme.breakpoints.down("lg")]: {
      fontSize: "0.8125rem"
    }
  },
  downloadButton: {
    float: "right",
    marginLeft: "12px",
    minHeight: "48px",
    [theme.breakpoints.down("lg")]: {
      fontSize: "0.8125rem"
    }
  },
  floatingButton: {
    position: "fixed",
    bottom: "50px",
    right: "15px",
    zIndex: "1000"
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
    backgroundColor: "#295496"
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
    color: "grey",
    fontSize: "16px"
  }
});

export default styles;
