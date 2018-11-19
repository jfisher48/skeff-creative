import React, { Component } from "react";
//import PropTypes from 'prop-types';
import classNames from "classnames";
import { withStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { connect } from "react-redux";
import { signIn } from "../../../store/actions/authActions";
import { compose } from "redux";
import { Redirect } from "react-router-dom";
import styles from "./styleLogIn";
import { Card, CardContent, Avatar } from "@material-ui/core";
import logo from "../../../icons/creative_logo.svg";

class LogIn extends Component {
  state = {
    email: "",
    password: ""
  };
  handleChange = e => {
    this.setState({
      [e.target.id]: e.target.value
    });
  };
  handleSubmit = e => {
    e.preventDefault();
    this.props.signIn(this.state);
  };

  render() {
    const classes = this.props.classes;
    const { authError, auth } = this.props;
    if (auth.uid) return <Redirect to="/" />;
    return (
      <div>
        <Card className={classes.loginCard}>
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
              <Button
                type="submit"
                variant="contained"
                size="large"
                color="secondary"
                className={classes.button}
              >
                Login
              </Button>
              <div>{authError ? <p>{authError}</p> : null}</div>
            </form>
          </CardContent>
        </Card>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    authError: state.auth.authError,
    auth: state.firebase.auth
  };
};

const mapDispatchToProps = dispatch => {
  return {
    signIn: creds => dispatch(signIn(creds))
  };
};

const styledComponent = withStyles(styles)(LogIn);

export default compose(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )
)(styledComponent);
