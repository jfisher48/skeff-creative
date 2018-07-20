import React, { Component } from 'react';
import PageHeading from '../components/PageHeading.js'
import Helmet from 'react-helmet';

class People extends Component {
  state = {}
  render() {
    return (
      <div>
        <Helmet>
            <title>People | Skeff Creative Services</title>
        </Helmet>
        <PageHeading>
          People
        </PageHeading>
      </div>
    )
  }
}

export default People;