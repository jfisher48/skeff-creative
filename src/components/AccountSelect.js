import React, { Component } from "react";
//import classNames from "classnames";
import { withStyles } from "@material-ui/core/styles";
import CreatableSelect from "react-select/lib/Creatable";
import { compose } from "recompose";
import { connect } from "react-redux";
import { getFirebase, firestoreConnect } from "react-redux-firebase";
import { getFirestore } from "redux-firestore";

const firebase = getFirebase;
const firestore = getFirestore;

const styles = {
  container: () => ({
    //flexGrow: 1.5,
    //display: "inline-flex",
    margin: "0 8px",
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
    color: state.isSelected ? "red" : "blue",
    padding: 20,
    width: "100%"
  }),
  control: () => ({
    // none of react-select's styles are passed to <Control />
    //width: "400px",
    display: "inline-flex",
    margin: "0 8px",
    border: 0,
    padding: 0,
    position: "relative",
    width: "100%",
    flexDirection: "row",
    verticalAlign: "top"
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

  loadOptions = () => {
    // const firestore = getFirestore();
    // const firebase = getFirebase();
    //console.log(options);
    // const authorId = this.props.auth;
    // firestore
    //   .collection("accounts_" + authorId)
    //   .orderBy("id")
    //   .get()
    //   .then(results => {
    //     var options = results.data();
    //     console.log(options);
    //     var loadedOptions = [options];
    //     console.log(loadedOptions);
    //     this.setState({ options: loadedOptions });
    //   });
  };

  componentDidMount() {
    this.loadOptions();
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state && this.state !== prevState) {
      var value = this.state.value.value;
      var label = this.state.value.label;
      console.log(this.state.value);
      console.log(this.state.options);
      this.props.onSelectAccount(value, label);
    }
  }

  render() {
    console.log(this.state.accounts);
    //const classes = this.props.classes;
    const { options, value } = this.state;
    console.log(this.state.options);

    const accounts = this.props.accounts;
    console.log(accounts);

    return (
      <CreatableSelect
        isClearable
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
