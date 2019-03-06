const styles = theme => ({
  container: () => ({
    //flexGrow: 1.5,
    //display: "inline-flex",
    //margin: "0 8px",
    //border: 0,
    padding: 0,
    position: "relative",
    width: "100%"
    //flexDirection: "row",
    //verticalAlign: "top"
  }),
  option: (provided, state) => ({
    ...provided,
    //borderBottom: "none",
    color: "rgba(0,0,0,0.87)",
    padding: 20,
    width: "100%",
    backgroundColor: state.isSelected
      ? "rgba(0,0,0,0.10)"
      : state.isFocused
        ? "rgba(0,0,0,0.05)"
        : "transparent"
  }),
  control: (provided, state) => ({
    ...provided,
    // none of react-select's styles are passed to <Control />
    //width: "400px",
    display: "inline-flex",
    //margin: "0 8px",
    //border: 0,
    borderColor: state.isFocused ? "#0091ea" : "rgba(0,0,0,0.23)",
    marginTop: "-1px",
    lineHeight: " 1.1875em",
    padding: 0,
    position: "relative",
    width: "100%",
    flexDirection: "row",
    verticalAlign: "top",
    alignItems: "center",
    "&hover": {
      borderColor: state.isFocused ? "#0091ea" : "rgba(0,0,0,0.23)"
    }
    // "&:before": {
    //   left: 0,
    //   right: 0,
    //   bottom: 0,
    //   content: '""',
    //   position: "absolute",
    //   borderBottom: "1px solid rgba(0,0,0,0.42)"
    // },
    // "&:after": {
    //   left: 0,
    //   right: 0,
    //   bottom: 0,
    //   content: '""',
    //   position: "absolute",
    //   transform: "scaleX(0)",
    //   borderBottom: "2px solid #000a12"
    // }
  }),
  valueContainer: (provided, state) => ({
    ...provided,
    padding: "14px 10px"
  }),
  dropdownIndicator: provided => ({
    ...provided,
    paddingTop: "4px"
  }),
  indicatorSeparator: provided => ({
    ...provided,
    display: "none"
  }),
  menuPortal: (provided, state) => ({
    ...provided,
    zIndex: "1400"
  }),
  singleValue: (provided, state) => {
    const opacity = state.isDisabled ? 0.5 : 1;
    const transition = "opacity 300ms";

    return { ...provided, opacity, transition };
  }
});

export default styles;
