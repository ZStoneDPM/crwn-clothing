import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
    const priceForStripe = price * 100; //convert dollars to cents for stripe
    const publishableKey = 'pk_test_51IIdabFZiCHxAkE03qqKpajVMc1aBl98aT3ZjOWpxshliv9K7bgWVKGOfxXnlUrJZBSrKKDxrzYaYXBF7HqOqQF700K2uirmff';

    const onToken = token => {
        console.log(token);
        alert('Payment Successful')
    }
    return(
        <StripeCheckout 
            label="Pay Now"
            name="Crown Clothing Ltd"
            billingAddress
            shippingAddress
            image='https://sendeyo.com/up/d/f3eb2117da'
            description={`Your total is $${price}`}
            amount={priceForStripe}
            panelLabel='Pay Now'
            token={onToken}
            stripeKey={publishableKey}
        />
    )
}

export default StripeCheckoutButton;