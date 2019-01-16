const styles = theme => ({
  tableBody: {
    display: "table-row-group"
  },
  tableRow: {
    display: "table-row",
    borderBottom: "1px solid rgba(0,0,0,0.12)",
    [theme.breakpoints.down("xs")]: {
      display: "flex",
      flexDirection: "column",
      justifyItems: "center"
    }
    // "&:nth-child(even)": {
    //   backgroundColor: "#eee"
    // },
  },
  tableCell: {
    display: "table-cell",
    padding: "16px 4px",
    [theme.breakpoints.down("lg")]: {
      fontSize: "12px"
    }
  },
  nameCell: {
    display: "table-cell",
    padding: "16px 4px 16px 20px",
    [theme.breakpoints.down("lg")]: {
      fontSize: "12px"
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: "18px",
      padding: "15px 4px 4px 15px"
    }
  },
  positionCell: {
    display: "table-cell",
    padding: "16px 4px",
    [theme.breakpoints.down("lg")]: {
      fontSize: "12px"
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: "14px",
      padding: "0px 4px 15px 20px"
    }
  },
  actionCell: {
    display: "block",
    padding: "0px 4px",
    textAlign: "center",
    [theme.breakpoints.down("lg")]: {
      fontSize: "12px"
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: "14px",
      padding: "0px 4px 15px 20px"
    }
  },
  addIcon: {
    fontSize: "16px",
    [theme.breakpoints.down("lg")]: {
      fontSize: "14px"
    }
  }
});

export default styles;
