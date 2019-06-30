import React, { Component } from 'react';

import Blog from '../components/News/Blog';
import Footer from '../modules/footer/Footer'

class News extends Component {
  render() {
    return (
      <>
        <Blog {...this.props} />
        <Footer />
      </>
    );
  }
}

export default News;
