import React, { Component } from 'react';
import PageHeading from '../components/PageHeading.js'
import Helmet from 'react-helmet';

class News extends Component {
  state = {}
  render() {
    return (
      <div>
        <Helmet>
            <title>News | Skeff Creative Services</title>
        </Helmet>
        <PageHeading>
          News
        </PageHeading>
      </div>
    )
  }
}

export default News;