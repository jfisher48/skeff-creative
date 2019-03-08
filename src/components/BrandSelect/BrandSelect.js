import React, { Component } from "react";
import Select from "react-select";
import { Dialog } from "@material-ui/core";

const styles = {
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
    overflow: "visible",
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
    borderColor: state.isFocused ? "#0091ea" : "rgba(0,0,0,0.23)",
    //marginTop: "-1px",
    lineHeight: "1.0",
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
  // dropdownIndicator: provided => ({
  //   ...provided,
  //   //paddingTop: "4px"
  // }),
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
    const overflow = "visible";

    return { ...provided, opacity, transition, overflow };
  }
};

class BrandSelect extends Component {
  state = {
    value: this.props.value
  };
  handleChange = (newValue: any, actionMeta: any) => {
    console.group("Value Changed");
    console.log(newValue);
    console.log(`action: ${actionMeta.action}`);
    console.groupEnd();
    this.setState({ value: newValue });
  };
  componentDidUpdate(prevProps, prevState) {
    if (this.state.value && this.state !== prevState) {
      var value = this.state.value.value;
      var label = this.state.value.label;
      this.props.onSelectBrand(value, label);
    }
  }
  render() {
    const brands = this.props.brands;
    const { value } = this.state;
    return (
      <Select
        placeholder={value}
        options={
          brands &&
          brands.map(brand => {
            return { label: brand.name, value: brand.id };
          })
        }
        onChange={this.handleChange}
        menuPortalTarget={document.body}
        styles={styles}
        value={value}
        state={this.state}
      />
    );
  }
}

export default BrandSelect;
