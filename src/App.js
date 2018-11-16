import React, { Component } from "react";
//import PropTypes from 'prop-types'
import "./styles/App.css";
import Authenticated from "./components/auth/Authenticated";
import UnAuthenticated from "./components/auth/UnAuthenticated";
import { connect } from "react-redux";

class App extends Component {
  render() {
    const { auth } = this.props;
    const layout = auth.uid ? <Authenticated /> : <UnAuthenticated />;
    return <div>{layout}</div>;
  }
}

// App.propTypes = {
//   classes: PropTypes.object.isRequired
// };
const mapStateToProps = state => {
  return {
    auth: state.firebase.auth
  };
};

export default connect(mapStateToProps)(App);
