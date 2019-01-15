const styles = theme => ({
  paper: {
    overflowX: "auto"
  },
  table: {
    display: "table",
    width: "100%",
    borderCollapse: "collapse"
  },
  formSelect: {
    width: "100%"
  },
  tableHead: {
    display: "table-header-group"
  },
  tableRow: {
    display: "table-row",
    width: "100%"
  },
  tableCell: {
    display: "table-cell",
    padding: "16px 4px",
    color: "white",
    backgroundColor: "black",
    [theme.breakpoints.down("lg")]: {
      fontSize: "12px"
    }
  },
  nameCell: {
    display: "table-cell",
    padding: "16px 4px 16px 20px",
    color: "white",
    backgroundColor: "black",
    [theme.breakpoints.down("lg")]: {
      fontSize: "12px"
    }
  }
});

export default styles;
