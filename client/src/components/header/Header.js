import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from '../../assets/crown.svg';
import './header.scss';
import { auth } from '../../firebase/firebaseUtils'
import CartIcon from '../cart-icon/CartIcon'
import CartDrop from '../cart-dropdown/CartDrop'
import { createStructuredSelector } from 'reselect'

import { selectCartHidden } from '../../redux/cart/cartSelector';
import { selectCurrentUser } from '../../redux/user/userSelector';

const Header = ({ currentUser, hidden }) => (
  <div className='header'>
    <Link className='logo-container' to='/'>
      <Logo className='logo' />
    </Link>
    <div className='options'>
      <Link className='option' to='/shop'>
        SHOP
      </Link>
      <Link className='option' to='/shop'>
        CONTACT
      </Link>
      {
        currentUser ?
        <div className='option' onClick={()=> auth.signOut()}>SIGN OUT</div>
        :
        <Link className='option' to='/signin' > SIGN IN</Link>
      }
      <CartIcon />
    </div>
    { hidden ? null :<CartDrop />}
  </div>
);

const mapStateToProps =  createStructuredSelector ({
  currentUser: selectCurrentUser,
  hidden: selectCartHidden
})

export default connect(mapStateToProps)(Header);