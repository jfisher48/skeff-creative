const styles = theme => ({
  widgetHeader: {
    padding: "16px 26px",
    lineHeight: "33.06px",
    backgroundColor: "rgba(229, 239, 247, 1)"
  },
  widgetTitle: {
    fontSize: "1.5em",
    fontWeight: "500",
    lineHeight: "33.06px",
    color: "#4e5262"
  },
  widgetContent: {
    display: "flex",
    padding: "24px 26px",
    justifyContent: "space-between"
  },
  totalWrap: {},
  totalNumber: {
    fontSize: "5em",
    lineHeight: ".90",
    [theme.breakpoints.down("xs")]: {
      fontSize: "4.5em",
      lineHeight: "1"
    }
  },
  totalLink: {
    padding: 0,
    backgroundColor: "transparent",
    border: 0,
    cursor: "pointer",
    fontSize: "5em",
    lineHeight: ".90",
    [theme.breakpoints.down("xs")]: {
      fontSize: "4.5em",
      lineHeight: "1"
    },
    color: "rgb(42,47,67)",
    "&:visited": {
      color: "inherit"
    },
    "&:hover": {
      color: "#0091ea"
    },
    "&:focus": {
      outline: 0
    }
  },
  totalText: {
    fontSize: "1em",
    fontWeight: "500",
    lineHeight: "1.2",
    color: "rgba(0,0,0,0.54)",
    [theme.breakpoints.down("xs")]: {
      fontSize: ".9em"
    }
  }
});

export default styles;
