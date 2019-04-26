import React from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';

import Home from './pages/Home';
import News from './pages/News';
import Gallery from './pages/Gallery';
import Contacts from './pages/Contacts';
import Post from './pages/Post';

import './css/normalize.css';

class App extends React.Component {
  render() {
    return (
      <HashRouter>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/news' render={props => <News {...props} />} />
          <Route exact path='/news/:id' component={Post} />
          <Route path='/gallery' component={Gallery} />
          <Route path='/contacts' component={Contacts} />
        </Switch>
      </HashRouter>
    );
  }
}

export default App;
