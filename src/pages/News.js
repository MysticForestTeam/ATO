import React, { Component } from 'react';

import Blog from '../components/News/Blog';

class News extends Component {
  render() {
    return <Blog {...this.props} />;
  }
}

export default News;
