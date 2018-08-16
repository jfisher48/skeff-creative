import React, { Component } from "react";
import PageHeading from "../components/PageHeading.js";
import LearningIco from "../icons/learning_b.svg";
import Helmet from "react-helmet";

class Learning extends Component {
  state = {};
  render() {
    return (
      <div>
        <Helmet>
          <title>Learning | Skeff Creative Services</title>
        </Helmet>
        <PageHeading headingIcon={LearningIco}>Learning</PageHeading>
      </div>
    );
  }
}

export default Learning;
