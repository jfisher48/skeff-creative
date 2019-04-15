const styles = theme => ({
  downloadButton: {
    boxShadow: "none",
    [theme.breakpoints.down("lg")]: {
      fontSize: "12px"
    }
  }
});

export default styles;
