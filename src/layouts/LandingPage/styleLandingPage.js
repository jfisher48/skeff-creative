const styles = theme => ({
  root: {
    height: "100%"
  },
  container: {
    height: "100%",
    position: "relative",
    display: "flex",
    flexFlow: "column",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    backgroundColor: "#212432",
    textAlign: "center"
  },
  brand: {
    padding: "5px 0",
    display: "block",
    fontFamily: "Encode Sans Condensed",
    fontSize: "4em",
    color: "#848688",
    textAlign: "left",
    fontWeight: "300",
    textDecoration: "none",
    backgroundColor: "transparent",
    [theme.breakpoints.down("xs")]: {
      fontSize: "2.5em"
    }
  },
  brandFront: {
    fontWeight: "600",
    fontSize: "1.03em",
    color: "#fff"
  }
});

export default styles;
