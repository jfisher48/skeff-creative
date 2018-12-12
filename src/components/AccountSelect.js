import React, { Component } from "react";
//import classNames from "classnames";
import { withStyles } from "@material-ui/core/styles";
import CreatableSelect from "react-select/lib/Creatable";
//import { compose } from "recompose";
//import { connect } from "react-redux";
//import { getFirebase, firestoreConnect } from "react-redux-firebase";
//import { getFirestore } from "redux-firestore";

//const firebase = getFirebase;
//const firestore = getFirestore;

const styles = {
  container: () => ({
    //flexGrow: 1.5,
    //display: "inline-flex",
    //margin: "0 8px",
    border: 0,
    padding: 0,
    position: "relative",
    width: "100%"
    //flexDirection: "row",
    //verticalAlign: "top"
  }),
  option: (provided, state) => ({
    ...provided,
    borderBottom: "none",
    //color: state.isSelected ? "red" : "blue",
    padding: 20,
    width: "100%"
  }),
  control: () => ({
    // none of react-select's styles are passed to <Control />
    //width: "400px",
    display: "inline-flex",
    //margin: "0 8px",
    border: 0,
    marginTop: "16px",
    lineHeight: " 1.1875em",
    padding: 0,
    position: "relative",
    width: "100%",
    flexDirection: "row",
    verticalAlign: "top",
    alignItems: "center",
    "&:before": {
      left: 0,
      right: 0,
      bottom: 0,
      content: '""',
      position: "absolute",
      borderBottom: "1px solid rgba(0,0,0,0.42)"
    },
    "&:after": {
      left: 0,
      right: 0,
      bottom: 0,
      content: '""',
      position: "absolute",
      transform: "scaleX(0)",
      borderBottom: "2px solid #000a12"
    }
  }),
  valueContainer: (provided, state) => ({
    ...provided
    //padding: 0
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
};

type State = {
  options: [{ [string]: string }],
  value: string | void
};

const createOption = (label: string) => ({
  label,
  value: label.toLowerCase().replace(/\W/g, "")
});

class AccountSelect extends Component<*, State> {
  state = {
    accounts: this.props.accounts,
    //isLoading: false,
    options: [],
    value: undefined
  };

  handleChange = (newValue: any, actionMeta: any) => {
    console.group("Value Changed");
    console.log(newValue);
    console.log(`action: ${actionMeta.action}`);
    console.groupEnd();
    this.setState({ value: newValue });
  };
  handleCreate = (inputValue: any) => {
    //this.setState({ isLoading: true });
    console.group("Option created");
    console.log("Wait a moment...");

    const { options } = this.state;
    const newOption = createOption(inputValue);
    console.log(newOption);
    console.groupEnd();
    this.setState({
      //isLoading: false,
      options: [options, newOption],
      value: newOption
    });
  };

  componentDidUpdate(prevProps, prevState) {
    if (this.state.value && this.state !== prevState) {
      var value = this.state.value.value;
      var label = this.state.value.label;
      this.props.onSelectAccount(value, label);
    }
  }

  render() {
    //const classes = this.props.classes;
    const { value } = this.state;
    const accounts = this.props.accounts;

    return (
      <CreatableSelect
        autoFocus
        isClearable
        menuPortalTarget={document.body}
        //isDisabled={isLoading}
        //isLoading={isLoading}
        onChange={this.handleChange}
        onCreateOption={this.handleCreate}
        options={
          accounts &&
          accounts.map(account => {
            return { label: account.name, value: account.id };
          })
        }
        value={value}
        name="account"
        state={this.state}
        styles={styles}
      />
    );
  }
}
const styledComponent = withStyles(styles)(AccountSelect);

export default styledComponent;
