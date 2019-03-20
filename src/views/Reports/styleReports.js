const styles = theme => ({
  modalTitle: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center"
  },
  modalActions: {
    padding: "0 20px 20px 20px",
    justifyContent: "center"
  },
  closeButton: {
    marginRight: "-15px"
  },
  downloadButton: {
    boxShadow: "none",
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
    backgroundColor: "rgba(229, 239, 247, 1)"
  },
  widgetContent: {
    padding: "24px 26px"
  },
  widgetTitle: {
    fontSize: "1.5em",
    fontWeight: "500",
    lineHeight: "33.06px",
    color: "#4e5262"
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
