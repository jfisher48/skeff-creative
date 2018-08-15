import React, { Component } from 'react';
import PageHeading from '../components/PageHeading.js'
import Helmet from 'react-helmet';
import SuppliersIco from '../icons/suppliers_b.svg';

class Suppliers extends Component {
  state = {}
  render() {
    return (
      <div>
        <Helmet>
            <title>Suppliers | Skeff Creative Services</title>
        </Helmet>
        <PageHeading headingIcon={SuppliersIco}>
          Suppliers
        </PageHeading>
      </div>
    )
  }
}

export default Suppliers;