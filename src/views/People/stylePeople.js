const styles = theme => ({
  paper: {
    width: "100%",
    overflowX: "auto"
  },
  table: {
    width: "100%",
    [theme.breakpoints.down("lg")]: {
      fontSize: "12px"
    }
  }
});

export default styles;
