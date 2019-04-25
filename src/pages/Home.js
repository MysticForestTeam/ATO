import React, { Component } from 'react'

import Header from '../modules/header/Header'
import AboutBlock from '../components/Home/AboutBlock'
import NewsBlock from '../components/Home/NewsBlock'

class Home extends Component {
  render() {
    return (
      <>
        <Header />
        <AboutBlock />
        <NewsBlock />
      </>
    )
  }
}

export default Home
