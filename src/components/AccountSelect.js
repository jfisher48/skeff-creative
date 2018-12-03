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

  loadOptions = () => {
    // const firestore = getFirestore();
    // const firebase = getFirebase();
    console.log(this.props.accounts);

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
    if (this.state.value && this.state.value !== prevState) {
      var value = this.state.value.value;
      var label = this.state.value.label;
      console.log(this.state.value);
      console.log(this.state.options);
      this.props.onSelectAccount(value, label);
    }
  }

  render() {
    //console.log(this.state.options);
    //const classes = this.props.classes;
    const { options, value } = this.state;
    console.log(this.state.options);
    const { accounts, auth } = this.props;
    console.log(accounts);

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
  console.log(state);
  const authorId = state.firebase.auth.uid;
  var accountsById = "state.firestore.ordered_" + authorId;
  return {
    auth: state.firebase.auth,
    accounts: state.firebase.ordered_$[authorId]
  };
};

const mapDispatchToProps = dispatch => {
  return {
    //addAccountToStore: (option) => dispatch(addAccountToStore(option))
  };
};

export default compose(
  connect(
    mapStateToProps,
    mapDispatchToProps
  ),
  firestoreConnect(props => {
    return [
      { collection: "accounts_" + props.auth.uid, orderBy: ["name", "asc"] }
    ];
  })
)(styledComponent);
