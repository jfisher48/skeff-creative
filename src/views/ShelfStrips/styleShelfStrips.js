const styles = theme => ({
  paper: {
    overflowX: "auto"
  },
  table: {
    display: "table",
    width: "100%",
    borderCollapse: "collapse"
  },
  //   formSelect: {
  //     width: "100%"
  //   },
  tableHead: {
    display: "table-header-group"
    //borderBottom: "1px solid black"
  },
  tableRow: {
    display: "table-row",
    width: "100%",
    backgroundColor: "rgba(229,239,247,0.15)"
  },
  tableCell: {
    display: "table-cell",
    padding: "16px 4px",
    color: "#4e5262",
    fontWeight: "bold",
    alignItems: "center",
    textAlign: "center",
    //backgroundColor: "rgba(229,239,247,1)",
    [theme.breakpoints.down("lg")]: {
      fontSize: "12px"
    }
  },
  nameCell: {
    display: "table-cell",
    padding: "16px 4px 16px 20px",
    color: "#4e5262",
    fontWeight: "bold",
    //backgroundColor: "rgba(229,239,247,1)",
    [theme.breakpoints.down("lg")]: {
      fontSize: "12px"
    }
  },
  widgetHeader: {
    padding: "16px 26px",
    lineHeight: "33.06px",
    backgroundColor: "rgba(229,239,247,1)"
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
