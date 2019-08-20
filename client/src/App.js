import React,{ Component } from 'react';
import './App.css';
import Home from './components/pages/home/Home';
import { Switch, Route, Redirect } from 'react-router-dom';
import Shop from './components/pages/shop/Shop';
import Header from './components/header/Header';
import Sign from './components/pages/user/Sign';
import { auth, createUserProfileDocument } from './firebase/firebaseUtils';
import { connect } from 'react-redux';
import { setCurrentUser } from './redux/action/userAction'
import { createStructuredSelector } from 'reselect'
import Checkout from './components/pages/checkout/Checkout';

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
        <Route exact path='/checkout' component = {Checkout} />
        <Route exact path='/signin' 
        render={() =>
          this.props.currentUser ? (
            <Redirect to='/' />
          ) : (
            <Sign />
          )
        }
          />
      </Switch>
    </div>
  );
}
}

const mapStateToProps = createStructuredSelector ({
  currentUser: setCurrentUser
});

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
