import React, { Component } from 'react';

import Header from '../containers/modules/Header';
import Blog from '../components/News/Blog';

class News extends Component {
  render() {
    return (
      <>
        <Header />
        <Blog {...this.props} />
      </>
    );
  }
}

export default News;
