import React from 'react';
import './App.css';
import Home from './components/pages/home/Home';
import { Switch, Route } from 'react-router-dom';
import Shop from './components/pages/shop/Shop';

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component = {Home} />
        <Route path='/shop' component = {Shop} />
      </Switch>
    </div>
  );
}

export default App;
