import React, { Component } from 'react';
import PageHeading from '../components/PageHeading.js'
import Helmet from 'react-helmet';

class Documents extends Component {
  state = {}
  render() {
    return (
      <div>
        <Helmet>
            <title>Documents | Skeff Creative Services</title>
        </Helmet>
        <PageHeading>
          Documents
        </PageHeading>
      </div>
    )
  }
}

export default Documents;