import React, { Component } from 'react';
import axios from 'axios'

import Header from '../modules/header/Header';
import Content from '../components/Post/Post';
import { assertExportSpecifier } from 'babel-types';

class Post extends Component {
  constructor(props) {
    super(props)
    
    this.state = {
      data: [],
      id: 0
    }
  }

  componentDidMount() {
    const {
      match: { params }
    } = this.props;
    // Api req for post with same id

    this.getData()
  }

  getNewsId() {
    let url = window.location.hash

    url = url.split('').reverse().join('')
    url = url.slice(0, url.indexOf('/'))
    url = url.split('').reverse().join('')
    
    return url;
  }

  getData = () => {
    const sendRequest = async () => {
      try {
        return await axios.get('http://qwerty32.herokuapp.com/news/' + this.getNewsId())
      }
      catch (error) {
        console.log(error)
      }
    }

    const getResponse = () => {
      const res = sendRequest()
      .then(response => {
        this.setState({
          data: response.data
        })
      })
      .catch(error => {
        console.log(error)
      })
    }

    getResponse()
  }

  render() {
    return (
      <Content
        images={this.state.data.image}
        title={this.state.data.title}
        text={this.state.data.text}
        author={this.state.data.author}
        date={this.state.data.updated_at}
      /> 
    );
  }
}

export default Post;
