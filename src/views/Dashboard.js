import React, { Component } from 'react';
import PageHeading from '../components/PageHeading.js'
import DashboardIco from '../icons/dashboard_b.svg';
import Helmet from 'react-helmet';

class Dashboard extends Component {
  state = {}
  render() {
    return (
      <div>
        <Helmet>
            <title>Dashboard | Skeff Creative Services</title>
        </Helmet>
        <PageHeading headingIcon={DashboardIco}>
          Dashboard
        </PageHeading>
      </div>
    )
  }
}

export default Dashboard;