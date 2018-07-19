import React, { Component } from 'react';
import PageHeading from '../components/PageHeading.js'
import Helmet from 'react-helmet';

class Calendar extends Component {
  state = {}
  render() {
    return (
      <div>
        <Helmet>
            <title>Calendar | Skeff Creative Services</title>
        </Helmet>
        <PageHeading>
          Calendar
        </PageHeading>
      </div>
    )
  }
}

export default Calendar;