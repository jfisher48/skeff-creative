import React, { Component } from "react";
//import PropTypes from 'prop-types';
import classNames from "classnames";
import { withStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
//import FormControl from "@material-ui/core/FormControl";
//import InputLabel from "@material-ui/core/InputLabel";
//import Select from "@material-ui/core/Select";
//import Input from "@material-ui/core/Input";
//import MenuItem from "@material-ui/core/MenuItem";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { compose } from "recompose";
import { connect } from "react-redux";
import { createWorkorder } from "../../store/actions/workorderActions";
import { Checkbox } from "@material-ui/core";
import { Redirect } from "react-router-dom";

const styles = theme => ({
  container: {
    display: "flex",
    flexWrap: "wrap"
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 200
  },
  dense: {
    marginTop: 19
  }
});

//const scemployees = ["Jay Fisher", "Luke Wells", "Bayleigh Harshbarger"];

class CreateWorkOrder extends Component {
  state = {
    //salesman: "",
    account: "",
    comments: "",
    isRush: false,
    //items: [],
    dueDate: new Date(Date.now() + 172800000)
  };

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleRushToggle = () => {
    this.setState(state => ({ isRush: !state.isRush }));
    this.setState({ dueDate: setDueDate(this.state.isRush) });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.createWorkorder(this.state);
    this.props.history.push("/workorders");
  };

  render() {
    const classes = this.props.classes;
    const { auth } = this.props;
    if (!auth.uid) return <Redirect to="/login" />;
    return (
      <div>
        <form className={classes.container} onSubmit={this.handleSubmit}>
          <Typography variant="h2">Create Work Order</Typography>
          {/* <TextField
            required
            name="salesman"
            type="text"
            label="Salesman"
            className={classNames(classes.textField, classes.dense)}
            margin="normal"
            fullWidth
            onChange={this.handleChange}
          /> */}
          <Checkbox
            checked={this.state.isRush}
            onChange={this.handleRushToggle}
            value="isRush"
          />
          <TextField
            required
            name="account"
            type="text"
            label="Account"
            className={classNames(classes.textField, classes.dense)}
            margin="normal"
            fullWidth
            onChange={this.handleChange}
          />
          <TextField
            required
            name="comments"
            multiline
            rowsMax="4"
            label="Comments"
            className={classNames(classes.textField, classes.dense)}
            fullWidth
            margin="normal"
            onChange={this.handleChange}
          />
          {/* <TextField
            required
            name="items"
            type="text"
            label="Item"
            className={classNames(classes.textField, classes.dense)}
            margin="normal"
            fullWidth
            onChange={this.handleChange}
          /> */}
          {/* <FormControl fullWidth>
            <InputLabel htmlFor="scemployee">Assign To</InputLabel>
            <Select
              value={this.state.scemployee}
              onChange={this.handleChange}
              input={<Input name="scemployee" />}
            >
              {scemployees.map(name => (
                <MenuItem key={name} value={name}>
                  {name}
                </MenuItem>
              ))}
            </Select>
          </FormControl> */}

          <Button
            type="submit"
            variant="contained"
            color="primary"
            className={classes.button}
          >
            Create Order
          </Button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    auth: state.firebase.auth
  };
};

const mapDispatchToProps = dispatch => {
  return {
    createWorkorder: workorder => dispatch(createWorkorder(workorder))
  };
};

function setDueDate(check) {
  var dueDate;
  var d = new Date();
  var n = d.getDay();
  if (n === (1 || n === 2 || n === 3) && check === false) {
    dueDate = new Date(Date.now() + 172800000);
  } else if (n === 4 && check === false) {
    dueDate = new Date(Date.now() + 345600000);
  } else if (n === 5 && check === false) {
    dueDate = new Date(Date.now() + 432000000);
  } else if (n === 6 && check === false) {
    dueDate = new Date(Date.now() + 432000000);
  } else if (n === 0 && check === false) {
    dueDate = new Date(Date.now() + 345600000);
  } else {
    dueDate = new Date(Date.now() + 86400000);
  }

  return dueDate;
}

const styledComponent = withStyles(styles)(CreateWorkOrder);

export default compose(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )
)(styledComponent);
