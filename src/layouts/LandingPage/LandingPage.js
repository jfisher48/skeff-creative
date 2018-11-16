import React, { Component } from "react";

class LandingPage extends Component {
  render() {
    return <div className="classes.container">{this.props.children}</div>;
  }
}

export default LandingPage;
