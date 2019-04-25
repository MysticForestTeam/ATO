import React from 'react';
import { BrowserRouter, HashRouter, Route, Switch } from 'react-router-dom';

import Home from './components/Home';
import News from './components/News';
import Gallery from './components/Gallery';
import Contacts from './components/Contacts';

import './css/normalize.css';

class App extends React.Component {
  render() {
    return (
      <HashRouter>
        <Switch>
          <Route path='/' component={Home} exact />
          <Route path='/news' component={News} />
          <Route path='/gallery' component={Gallery} />
          <Route path='/contacts' component={Contacts} />
        </Switch>
      </HashRouter>
    );
  }
}

export default App;
