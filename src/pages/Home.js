import React, { Component } from 'react'

import Header from '../modules/header/Header'
import AboutBlock from '../components/Home/AboutBlock'
import NewsBlock from '../components/Home/NewsBlock'
import Gallery from '../components/Home/Gallery'
import Team from '../components/Home/Team'

class Home extends Component {
  render() {
    return (
      <>
        <Header />
        <AboutBlock />
        <NewsBlock />
        <Gallery />
        <Team />
      </>
    )
  }
}

export default Home
