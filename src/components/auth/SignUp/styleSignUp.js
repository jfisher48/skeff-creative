const styles = theme => ({
  signupCard: {
    //maxHeight: "80vh",
    maxWidth: "75vw",
    marginTop: "100px",
    position: "relative",
    display: "flex",
    flexDirection: "column",
    overflow: "visible",
    alignItems: "center"
  },
  // header: {
  //     display: "block",
  //     textAlign: "center",
  //     position: "relative",
  //     marginTop: "80px"
  // },
  logo: {
    marginTop: "-100px",
    height: "200px",
    width: "200px",
    backgroundColor: "#263238"
    //display: "block",
    //flex: "none"
  },
  img: {
    width: "180px"
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: "80%"
  },
  dense: {
    //marginTop: 19
  },
  button: {
    boxShadow: "none",
    fontSize: "0.75",
    margin: "40px 0",
    width: "60%"
  }
});

export default styles;
