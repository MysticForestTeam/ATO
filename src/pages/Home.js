import React, { Component } from 'react'

import Header from '../containers/modules/Header'
import AboutBlock from '../components/Home/AboutBlock'
import NewsBlock from '../components/Home/NewsBlock'
import Gallery from '../components/Home/Gallery'
import Team from '../components/Home/Team'
import Footer from '../modules/footer/Footer'

class Home extends Component {
  render() {
    return (
      <>
        <Header />
        <AboutBlock />
        <NewsBlock />
        <Gallery />
        <Team />
        <Footer />
      </>
    )
  }
}

export default Home
