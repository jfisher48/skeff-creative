const styles = theme => ({
  orderContainer: {
    padding: "20px 26px",
    overflowY: "auto",
    [theme.breakpoints.down("xs")]: {
      width: "75vw",
      maxHeight: "55vh"
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
    paddingBottom: "40px",
    paddingLeft: "40px",
    padddingRight: "40px",
    textDecoration: "none"
  },
  primaryItemText: {
    lineHeight: "1.2em"
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
      margin: "10px 0 0 0"
    }
  },
  media: {
    minHeight: "200px",
    objectFit: "cover"
  }
});

export default styles;
