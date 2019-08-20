import React from 'react'
import CustomButton from '../custom-button/Custom-button'
import './cardDrop.scss'
import CartItem from '../cart-item/CartItem'
import { connect } from 'react-redux'
const CartDrop = ( { cartItems }) => {
    return (
        <div className='cart-dropdown'>
            <div className='cart-items'>
            {
                cartItems.map(cartItem => <CartItem key= {cartItem.id} item = {cartItem} />)
            }
            </div>
            <CustomButton>GO TO CHECKOUT</CustomButton>
        </div>
    )
}
const mapStateToProps = ({cart: {cartItems}}) => ({
    cartItems
})
export default connect(mapStateToProps)(CartDrop);
