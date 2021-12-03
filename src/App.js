import React from 'react'
import { Switch, Route } from 'react-router';

import NavBar from './Components/NavBar/NavBar';
import Home from './Components/Home/Home'
import About from './Components/About/About'
import Products from './Components/Products/Products'
import Product from './Components/Product/Product';
import Error from './Components/Error/Error'

import './App.css';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/products" component={Products} />
        <Route path="/about" component={About} />
        <Route path="/product/:id" component={Product} />
        <Route path="/*" component={Error} />
      </Switch>
    </div>
  );
}

export default App;
