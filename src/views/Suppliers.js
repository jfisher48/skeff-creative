import React, { Component } from 'react';
import PageHeading from '../components/PageHeading.js'
import Helmet from 'react-helmet';

class Suppliers extends Component {
  state = {}
  render() {
    return (
      <div>
        <Helmet>
            <title>Suppliers | Skeff Creative Services</title>
        </Helmet>
        <PageHeading>
          Suppliers
        </PageHeading>
      </div>
    )
  }
}

export default Suppliers;