import React from "react";
import { NavLink } from "react-router-dom";
import { Avatar, Button, IconButton } from "@material-ui/core";
import { connect } from "react-redux";
import { signOut } from "../../store/actions/authActions";

const SignedInLinks = props => {
  return (
    <div>
      <Button size="large" onClick={props.signOut}>
        Log Out
      </Button>
      <NavLink to="/">
        <IconButton>
          <Avatar>JF</Avatar>
        </IconButton>
      </NavLink>
    </div>
  );
};

const mapDispatchToProps = dispatch => {
  return {
    signOut: () => dispatch(signOut())
  };
};

export default connect(
  null,
  mapDispatchToProps
)(SignedInLinks);
