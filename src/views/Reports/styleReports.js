const styles = theme => ({
  downloadButton: {
    float: "right",
    marginLeft: "12px",
    minHeight: "48px",
    [theme.breakpoints.down("lg")]: {
      fontSize: "0.8125rem"
    }
  },
  widgetHeader: {
    padding: "16px 26px",
    lineHeight: "33.06px",
    backgroundColor: "#355675"
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
  quickAction: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
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
