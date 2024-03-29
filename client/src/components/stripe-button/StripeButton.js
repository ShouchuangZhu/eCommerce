import React from 'react'
import StripeCheckout from 'react-stripe-checkout';

const StripeButton = ( { price }) => {
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_nl7V8v0Hyu10Qvd9MejXHQED00rs1UZQJ1';
    const onToken = token => {
        console.log(token);
        alert('Payment Successful')
    }
    return (
        <StripeCheckout 
            label='Pay Now'
            name = 'CRWN Clothing Ltd.'
            billingAddress
            shippingAddress
            image='http://svgshare.com/i/CUz.svg'
            description={`Your total is ${price}`}
            amount = { priceForStripe }
            panelLabel = 'Pay Now'
            token = {onToken}
            stripeKey={publishableKey}
        />
    )
}

export default StripeButton
