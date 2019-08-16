import React,{ Component } from 'react';
import './App.css';
import Home from './components/pages/home/Home';
import { Switch, Route } from 'react-router-dom';
import Shop from './components/pages/shop/Shop';
import Header from './components/header/Header';
import Sign from './components/pages/user/Sign';
import { auth } from './firebase/firebaseUtils';

class App extends Component {
  constructor(){
    super();
    this.state = {
      currentUser: null
    }
  }

  unsubscribeFromAuth = null;

  componentDidMount(){
    this.unsubscribeFromAuth = auth.onAuthStateChanged(user => {
      this.setState({
        currentUser: user
      })
    })
  }

  componentWillUnmount(){
    this.unsubscribeFromAuth();
  }

  render() {
  return (
    <div>
      <Header currentUser = {this.state.currentUser} />
      <Switch>
        <Route exact path="/" component = {Home} />
        <Route path='/shop' component = {Shop} />
        <Route path='/signin' component = {Sign} />
      </Switch>
    </div>
  );
}
}

export default App;
