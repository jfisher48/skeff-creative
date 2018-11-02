import React, { Component } from "react";
//import PropTypes from 'prop-types';
import classNames from "classnames";
import { withStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";
import Input from "@material-ui/core/Input";
import MenuItem from "@material-ui/core/MenuItem";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { compose } from "recompose";
import { connect } from "react-redux";
import { createWorkorder } from "../../store/actions/workorderActions";

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

const scemployees = ["Jay Fisher", "Luke Wells", "Bayleigh Harshbarger"];

class CreateWorkOrder extends Component {
  state = {
    //salesman: "",
    account: "",
    comments: ""
    //items: [],
    //scemployee: ""
  };

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };
  handleSubmit = e => {
    e.preventDefault();
    //console.log(this.state);
    this.props.createWorkorder(this.state);
  };

  render() {
    const classes = this.props;
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

const mapDispatchToProps = dispatch => {
  return {
    createWorkorder: workorder => dispatch(createWorkorder(workorder))
  };
};

export default compose(
  connect(
    null,
    mapDispatchToProps
  ),
  withStyles(styles)
)(CreateWorkOrder);
