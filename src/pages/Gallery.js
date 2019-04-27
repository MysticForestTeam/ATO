import React, { Component } from 'react';

import Header from '../modules/header/Header';
import Content from '../components/Gallery/Images';

class Gallery extends Component {
  render() {
    return (
      <>
        <Header />
        <Content />
      </>
    );
  }
}

export default Gallery;
