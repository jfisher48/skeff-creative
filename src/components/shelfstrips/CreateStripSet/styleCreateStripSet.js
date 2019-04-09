const styles = theme => ({
  formCard: {
    display: "flex",
    position: "relative",
    overflowY: "auto",
    flexDirection: "column"
  },
  formHeader: {
    flex: "0 0 auto",
    padding: "16px 26px",
    lineHeight: "33.06px",
    backgroundColor: "rgba(229,239,247,1)"
  },
  formTitle: {
    fontSize: "1.5em",
    fontWeight: "500",
    lineHeight: "33.06px",
    color: "#4e5262"
  },
  addButton: {
    paddingTop: "12px",
    paddingBottom: "12px",
    boxShadow: "none",
    [theme.breakpoints.down("sm")]: {
      width: "100%",
      marginTop: "10px"
    }
  },
  addIcon: {
    fontSize: 15,
    marginRight: "5px",
    fontWeight: "bolder",
    [theme.breakpoints.down("xs")]: {
      fontSize: "12px",
      margin: "0",
      fontWeight: "500"
    }
  },
  stripsContainer: {
    width: "100%",
    overflowX: "auto",
    fontSize: "16px"
  },
  table: {
    minWidth: 700,
    fontSize: "16px"
  },
  container: {
    margin: 10
  },
  headingText: {
    marginBottom: "20px"
  },
  rushCheck: {
    float: "right",
    marginRight: "0"
  },
  textField: {
    width: "100%",
    justifyContent: "stretch"
  },
  formSelect: {
    width: "100%"
  },
  createButton: {
    paddingTop: "12px",
    paddingBottom: "12px",
    boxShadow: "none",
    [theme.breakpoints.down("sm")]: {
      width: "100%",
      marginTop: "10px"
    },
    [theme.breakpoints.up("md")]: {
      float: "right",
      marginLeft: "10px"
    }
  },
  dense: {
    marginTop: 19
  }
});

export default styles;
