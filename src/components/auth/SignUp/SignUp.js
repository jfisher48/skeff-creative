import React, { Component } from "react";
//import PropTypes from 'prop-types';
import classNames from "classnames";
import { withStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import styles from "./styleSignUp";
import { Card, Avatar, CardContent } from "@material-ui/core";
import logo from "../../../icons/creative_logo.svg";
import { signUp } from "../../../store/actions/authActions";

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
    this.props.signUp(this.state);
  };

  render() {
    const classes = this.props.classes;
    const { auth, authError } = this.props;
    if (auth.uid) return <Redirect to="/" />;
    return (
      <div>
        <Card className={classes.signupCard}>
          <Avatar className={classes.logo}>
            <img src={logo} alt="logo" className={classes.img} />
          </Avatar>
          <CardContent>
            <form className={classes.container} onSubmit={this.handleSubmit}>
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
                color="secondary"
                className={classes.button}
              >
                Sign Up
              </Button>
              {authError ? <p>{authError}</p> : null}
            </form>
          </CardContent>
        </Card>
      </div>
    );
  }
}

const styledSignUp = withStyles(styles)(SignUp);

const mapStateToProps = state => {
  return {
    auth: state.firebase.auth,
    authError: state.auth.authError
  };
};

const mapDispatchToProps = dispatch => {
  return {
    signUp: newUser => dispatch(signUp(newUser))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(styledSignUp);
