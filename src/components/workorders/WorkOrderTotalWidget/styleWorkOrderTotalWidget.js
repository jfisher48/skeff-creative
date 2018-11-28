const styles = theme => ({
  widgetHeader: {
    padding: "16px 26px",
    lineHeight: "33.06px",
    backgroundColor: "#a94e93"
  },
  widgetTitle: {
    fontSize: "1.5em",
    fontWeight: "500",
    lineHeight: "33.06px",
    color: "rgba(0,0,0,0.65)"
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
