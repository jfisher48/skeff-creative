const styles = theme => ({
  orderContainer: {
    padding: "20px 26px",
    overflowY: "auto",
    [theme.breakpoints.down("sm")]: {
      width: "65vw",
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
    "& a": {
      color: "#2a2f43",
      textDecoration: "none",
      "&:hover": {
        color: theme.palette.secondary.main
      }
    }
  },
  orderInfo: {
    color: "#7f828f",
    fontSize: "0.75em",
    fontWeight: "700",
    "& a": {
      color: "rgb(0,145,234)",
      textDecoration: "none",
      "&:hover": {
        color: "#0064b7"
      }
    }
  },
  orderContent: {
    color: "#7f828f",
    marginTop: "25px",
    fontSize: "1em",
    lineHeight: "24px"
  },
  orderActions: {
    paddingBottom: "40px",
    paddingLeft: "40px",
    padddingRight: "40px",
    textDecoration: "none"
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
    margin: 0,
    textDecoration: "none"
  },
  media: {
    minHeight: "200px",
    objectFit: "cover"
  }
});

export default styles;
