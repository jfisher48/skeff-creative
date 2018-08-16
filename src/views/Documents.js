import React, { Component } from "react";
import PageHeading from "../components/PageHeading.js";
import DocumentsIco from "../icons/documents_b.svg";
import Helmet from "react-helmet";

class Documents extends Component {
  state = {};
  render() {
    return (
      <div>
        <Helmet>
          <title>Documents | Skeff Creative Services</title>
        </Helmet>
        <PageHeading headingIcon={DocumentsIco}>Documents</PageHeading>
      </div>
    );
  }
}

export default Documents;
