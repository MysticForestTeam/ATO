import React from 'react';
import axios from 'axios'

import { News, ReadMore } from './Blog.styled';
import { Container } from '../../modules/content/Content.styled';
import Item from './Item';

class Blog extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      news: [],
      currentPage: 1,
      lastPage: 5
    }
  }

  componentDidMount() {
    this.getData()
  }

  getData = () => {
    const sendRequest = async () => {
      try {
        return await axios.get('http://qwerty32.herokuapp.com/news/?page=' + this.state.currentPage)
      }
      catch (error) {
        console.log(error)
      }
    }

    const getResponse = () => {
      const res = sendRequest()
      .then(response => {
        this.setState({
          news: this.state.news.concat(response.data.data),
          currentPage: this.state.currentPage + 1,
          lastPage: response.data.last_page
        })
        console.log(response)
      })
      .catch(error => {
        console.log(error)
      })
    }

    getResponse()
  }

  render() {
    const pose = this.state.currentPage === this.state.lastPage ? 'hidden' : 'init'

    console.log(this.state.currentPage)
    console.log(this.state.lastPage)

    return( 
      <Container>
        <News>
          { 
            this.state.news.map(news => (
              <Item key={news.id} {...news}/>
            ))
          }

        </News>

        <ReadMore
          pose={pose}
          onClick={this.getData}
        >
          + Читати більше
        </ReadMore>
      </Container>
    )
  }

}

export default Blog;
