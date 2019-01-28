const styles = theme => ({
  orderContainer: {
    padding: "20px 26px",
    overflowY: "auto",
    [theme.breakpoints.down("xs")]: {
      width: "75vw",
      maxHeight: "50vh"
    },
    [theme.breakpoints.up("sm")]: {
      width: "75vw",
      maxHeight: "65vh"
    },
    [theme.breakpoints.up("lg")]: {
      width: "50vw",
      maxHeight: "75vh"
    }
  },
  cardHeader: {
    backgroundColor: "#b1adaa",
    width: "100%"
  },
  closeButton: {
    marginLeft: "1em"
  },
  orderTitle: {
    marginBottom: "15px",
    fontSize: "2.25em",
    lineHeight: "1.25",
    color: "#2a2f43",
    width: "100%",
    overflow: "hidden",
    whiteSpace: "nowrap",
    textOverflow: "ellipsis",
    [theme.breakpoints.down("xs")]: {
      fontSize: "1.75em"
    }
  },
  orderLabel: {
    color: "rgba(0,0,0,0.54)",
    lineHeight: "1"
  },
  orderInfo: {
    color: "rgba(0,0,0,0.87)",
    fontWeight: "400"
  },
  orderActions: {
    padding: "0 26px 20px 26px",
    textDecoration: "none",
    display: "block"
  },
  listItem: {
    borderBottom: 0,
    borderTop: "1px solid rgba(0, 0, 0, 0.12)"
  },
  primaryItemText: {
    display: "flex",
    lineHeight: "1.2em",
    [theme.breakpoints.down("xs")]: {
      flexDirection: "column"
    }
  },
  primaryItemGroup: {
    marginRight: "10px"
  },
  orderLink: {
    margin: 0
  },
  NavLink: {
    margin: 0
  },
  orderButton: {
    boxShadow: "none",
    fontSize: "0.75",
    margin: "0 10px 0 0",
    textDecoration: "none",
    [theme.breakpoints.down("xs")]: {
      width: "100%",
      margin: "0 0 10px 0"
    }
  }
});

export default styles;
