import React, { Component } from 'react';
import PageHeading from '../components/PageHeading.js';
import PeopleIco from '../icons/people_b.svg';
import Helmet from 'react-helmet';

class People extends Component {
  state = {}
  render() {
    return (
      <div>
        <Helmet>
            <title>People | Skeff Creative Services</title>
        </Helmet>
        <PageHeading headingIcon={PeopleIco}>
          People
        </PageHeading>
      </div>
    )
  }
}

export default People;