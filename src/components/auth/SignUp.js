import React, { Component } from "react";
//import PropTypes from 'prop-types';
import classNames from "classnames";
import { withStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";

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

class SignUp extends Component {
  state = {
    email: "",
    password: "",
    firstName: "",
    lastName: ""
  };
  handleChange = e => {
    this.setState({
      [e.target.id]: e.target.value
    });
  };
  handleSubmit = e => {
    e.preventDefault();
    console.log(this.state);
  };

  render() {
    const classes = this.props.classes;
    const { auth } = this.props;
    if (auth.uid) return <Redirect to="/" />;
    return (
      <div>
        <form className={classes.container} onSubmit={this.handleSubmit}>
          <h5>Sign Up</h5>
          <TextField
            required
            id="email"
            type="email"
            label="Email"
            className={classNames(classes.textField, classes.dense)}
            margin="normal"
            fullWidth
            onChange={this.handleChange}
          />
          <TextField
            required
            id="password"
            type="password"
            label="Password"
            className={classNames(classes.textField, classes.dense)}
            autoComplete="current-password"
            fullWidth
            margin="normal"
            onChange={this.handleChange}
          />
          <TextField
            required
            id="firstName"
            type="text"
            label="First Name"
            className={classNames(classes.textField, classes.dense)}
            fullWidth
            margin="normal"
            onChange={this.handleChange}
          />
          <TextField
            required
            id="lastName"
            type="text"
            label="Last Name"
            className={classNames(classes.textField, classes.dense)}
            fullWidth
            margin="normal"
            onChange={this.handleChange}
          />

          <Button
            type="submit"
            variant="contained"
            color="primary"
            className={classes.button}
          >
            Sign Up
          </Button>
        </form>
      </div>
    );
  }
}

const styledComponent = withStyles(styles)(SignUp);

const mapStateToProps = state => {
  return {
    auth: state.firebase.auth
  };
};

export default connect(mapStateToProps)(styledComponent);
