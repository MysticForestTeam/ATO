import React, { Component } from 'react';

import Header from '../modules/header/Header';
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
