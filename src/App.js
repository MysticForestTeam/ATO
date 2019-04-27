import React, { Component } from 'react';
import { BrowserRouter, HashRouter, Route, Switch } from 'react-router-dom';
import Header from './modules/header/Header';

import Home from './pages/Home';
import News from './pages/News';
import Gallery from './pages/Gallery';
import Contacts from './pages/Contacts';
import Post from './pages/Post';

import './css/normalize.css';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Header />
        <Switch>
          <Route exact path='/' render={() => <Home />} />
          <Route exact path='/news' render={props => <News {...props} />} />
          <Route exact path='/news/:id' render={() => <Post />} />
          <Route path='/gallery' render={() => <Gallery />} />
          <Route path='/contacts' render={() => <Contacts />} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
