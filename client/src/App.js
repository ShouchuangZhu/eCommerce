import React from 'react';
import './App.css';
import Home from './components/pages/home/Home';
import { Switch, Route } from 'react-router-dom';
import Shop from './components/pages/shop/Shop';
import Header from './components/header/Header';
import Sign from './components/pages/user/Sign';
function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component = {Home} />
        <Route path='/shop' component = {Shop} />
        <Route path='/signin' component = {Sign} />
      </Switch>
    </div>
  );
}

export default App;
