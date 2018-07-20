import React, { Component } from 'react';
import PageHeading from '../components/PageHeading.js'
import Helmet from 'react-helmet';

class Reminders extends Component {
  state = {}
  render() {
    return (
      <div>
        <Helmet>
            <title>Reminders | Skeff Creative Services</title>
        </Helmet>
        <PageHeading>
          Reminders
        </PageHeading>
      </div>
    )
  }
}

export default Reminders;