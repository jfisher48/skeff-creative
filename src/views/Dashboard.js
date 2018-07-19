import React, { Component } from 'react';
import PageHeading from '../components/PageHeading.js'
import Helmet from 'react-helmet';

class Dashboard extends Component {
  state = {}
  render() {
    return (
      <div>
        <Helmet>
            <title>Dashboard | Skeff Creative Services</title>
        </Helmet>
        <PageHeading>
          Dashboard
        </PageHeading>
      </div>
    )
  }
}

export default Dashboard;