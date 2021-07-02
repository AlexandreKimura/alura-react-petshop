import React from 'react'
import './assets/css/base/base.css'
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Home from './paginas/Home';
import Sobre from './paginas/Sobre';
import Post from './paginas/Post';
import NotFound from './paginas/NotFound';
import Header from './components/Header';
import Category from './paginas/Category';

function App() {

  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>

        <Route path="/sobre">
          <Sobre />
        </Route>

        <Route path="/categoria/:id">
          <Category />
        </Route>

        <Route path="/posts/:id">
          <Post />
        </Route>

        <Route>
          <NotFound />
        </Route>
      </Switch>
    </BrowserRouter>
  )
}

export default App
