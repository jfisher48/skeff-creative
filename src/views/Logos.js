import React, { Component } from 'react';
import PageHeading from '../components/PageHeading.js'
import Helmet from 'react-helmet';

class Logos extends Component {
  state = {}
  render() {
    return (
      <div>
        <Helmet>
            <title>Logos | Skeff Creative Services</title>
        </Helmet>
        <PageHeading>
          Logos
        </PageHeading>
      </div>
    )
  }
}

export default Logos;