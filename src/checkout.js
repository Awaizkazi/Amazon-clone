import React from 'react';
import './checkout.css';
import Subtotal from './Subtotal';

function Checkout() {
    return (
        <div className="checkout">

            <div className="checkout--left">
                <img className="checkout--adv" src="https://images-eu.ssl-images-amazon.com/images/G/31/img20/Events/Jupiter21P1/pay_stripe_desk.png" alt="adv" />

                <div className="checkout--title">
                    <h3>Your Shoping Details</h3>
                </div>
            </div>

            <div className="checkout--right">
                <Subtotal />

            </div>
        </div>


    );
}

export default Checkout