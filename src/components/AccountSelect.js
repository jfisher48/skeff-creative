import React, { Component } from "react";
//import classNames from "classnames";
import { withStyles } from "@material-ui/core/styles";
import CreatableSelect from "react-select/lib/Creatable";
import { getFirestore } from "redux-firestore";
import { getFirebase } from "react-redux-firebase";
import { connect } from "react-redux";
import { addAccountToStore } from "../store/actions/workorderActions";

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

const defaultOptions = [
  createOption("Caseys Paris"),
  createOption("Caseys Penn St"),
  createOption("Brazas Liquor")
];

class AccountSelect extends Component<*, State> {
  state = {
    //isLoading: false,
    options: defaultOptions,
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
      options: [...options, newOption],
      value: newOption
    });
  };

  componentDidUpdate(prevProps, prevState) {
    if (this.state.value && this.state.value !== prevState) {
      var value = this.state.value.value;
      var label = this.state.value.label;
      console.log(this.state.value);
      console.log(this.state.options);
      this.props.onSelectAccount(value, label);
    }
  }

  render() {
    //console.log(this.state);
    //const classes = this.props.classes;
    const { options, value } = this.state;
    const { auth } = this.props;
    return (
      <CreatableSelect
        isClearable
        //isDisabled={isLoading}
        //isLoading={isLoading}
        onChange={this.handleChange}
        onCreateOption={this.handleCreate}
        options={options}
        value={value}
        name="account"
        state={this.state}
        styles={styles}
      />
    );
  }
}
const styledComponent = withStyles(styles)(AccountSelect);

const mapStateToProps = state => {
  return {
    auth: state.firebase.auth,
    users: state.firestore.ordered.users
  };
};

const mapDispatchToProps = dispatch => {
  return {
    //addAccountToStore: (option) => dispatch(addAccountToStore(option))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(styledComponent);
