import React, { Component, Suspense, lazy } from 'react';
import { BrowserRouter, HashRouter, Route, Switch } from 'react-router-dom';
import Header from './modules/header/Header';

const Home = lazy(() => import('./pages/Home'))
const News = lazy(() => import('./pages/News'))
const Gallery = lazy(() => import('./pages/Gallery'))
const Contacts = lazy(() => import('./pages/Contacts'))
const Post = lazy(() => import('./pages/Post'))

import './css/normalize.css';

class App extends Component {
  render() {
    return (
      <HashRouter>
        <Suspense fallback={<div>Loading...</div>}>
          <Header />
          <Switch>
            <Route exact path='/' render={() => <Home />} />
            <Route exact path='/news' render={props => <News {...props} />} />
            <Route
              exact
              path='/news/:id'
              render={params => <Post {...params} />}
            />
            <Route path='/gallery' render={() => <Gallery />} />
            <Route path='/contacts' render={() => <Contacts />} />
          </Switch>
        </Suspense>
      </HashRouter>
    );
  }
}

export default App;
