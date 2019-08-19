import React,{ Component } from 'react';
import './App.css';
import Home from './components/pages/home/Home';
import { Switch, Route } from 'react-router-dom';
import Shop from './components/pages/shop/Shop';
import Header from './components/header/Header';
import Sign from './components/pages/user/Sign';
import { auth, createUserProfileDocument } from './firebase/firebaseUtils';
import { connect } from 'react-redux';
import { setCurrentUser } from './redux/action/userAction'
class App extends Component {
  
  unsubscribeFromAuth = null;

  componentDidMount(){
    const {setCurrentUser} = this.props;

    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
     if(userAuth){
       const userRef = await createUserProfileDocument(userAuth);
       userRef.onSnapshot(snapShot => {
         setCurrentUser({ 
             id: snapShot.id,
             ...snapShot.data()
         })
       })
     } else {
       setCurrentUser(userAuth);
     }
    })
  }

  componentWillUnmount(){
    this.unsubscribeFromAuth();
  }

render() {
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
}

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
})

export default connect(null, mapDispatchToProps)(App);
