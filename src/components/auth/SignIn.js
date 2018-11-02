import React, { Component } from "react";
//import PropTypes from 'prop-types';
import classNames from "classnames";
import { withStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { connect } from "react-redux";
import { signIn } from "../../store/actions/authActions";
import { compose } from "redux";

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

class SignIn extends Component {
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
    const classes = this.props;
    const { authError } = this.props;
    return (
      <div>
        <form className={classes.container} onSubmit={this.handleSubmit}>
          <h5>Sign In</h5>
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
            color="primary"
            className={classes.button}
          >
            Login
          </Button>
          <div>{authError ? <p>{authError}</p> : null}</div>
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    authError: state.auth.authError
  };
};

const mapDispatchToProps = dispatch => {
  return {
    signIn: creds => dispatch(signIn(creds))
  };
};

export default compose(
  withStyles(styles),
  connect(
    mapStateToProps,
    mapDispatchToProps
  )
)(SignIn);
