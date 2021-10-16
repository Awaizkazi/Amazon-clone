import React from 'react'

function checkout() {
    return (
        <div  className="checkout">
      <div className="checkout--left">
          <img className="checkout--adv" src="https://images-eu.ssl-images-amazon.com/images/G/31/img20/Events/Jupiter21P1/pay_stripe_desk.png" alt="Adv" />
          <h3 className="checkout--title">Your Shopping Details
          </h3>
          {/* Cart itrm Here */}
          {/* Cart Item Here */}
      </div>
      <div className="checkout--right">
          <h3>SubTotal (2 items): </h3>

      </div>
            
        </div>
    )
}

export default checkout
