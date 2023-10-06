import React from "react";

import '../../style/CartModal.css';
import '../../style/WishlistModal.css';

import { useState } from "react";

import cart from "../../data/cart";

function CartModal({setOpenCartModal}) {

  const [openCheckout, setOpenCheckout] = useState(false)

  function calculateTotal(cart) {
    let totalPrice = 0
    cart.forEach(item => {
      totalPrice += parseFloat(item.price)
    })
    return totalPrice
  }

  return (
    <div className='modal-bg'>

      <div className='modal-container' id='items-modal'>

        <button className="modal-close"
                onClick={() => setOpenCartModal(false)}>
          <img src='images/icons/icons8-close-24.png'></img>
        </button>

        { openCheckout ? ( 
            <div id='checkout'>
              <div id='checkout-header'>
                <a onClick={() => setOpenCheckout(false)}>Back to cart</a>
              </div>

              <div className='title-container'>
                <p>Checkout</p>
              </div>

              <div id='checkout-container'>

                <div className="checkout-form-container">

                  <div className='checkout-form-row'>
                    <input type="text" placeholder="First name"></input>
                    <input type="text" placeholder="Last name"></input>
                  </div>

                  <div className='checkout-form-row'>
                    <input type="text" placeholder="Phone"></input>
                    <input type="text" placeholder="Email"></input>
                  </div>

                  <div className='checkout-form-row'>
                    <input type="text" placeholder="Address"></input>
                    <input type="text" placeholder="City"></input>
                  </div>

                  <div className='checkout-form-row'>
                    <input type="text" placeholder="State"></input>
                    <input type="text" placeholder="Zip"></input>
                  </div>

                </div>

                <div id='total-div'>
                  <p>Total:</p>
                  <p id='total'>{`$${calculateTotal(cart)}`}</p>
                </div>

                <div className="checkout-button-div">
                  <button onClick={() => setOpenCheckout(false)}>Finish</button>
                </div>

              </div>
            
            </div>
        ) : (
          <div id='cart-content'>
            <div className='title-container'>
              <p>Your cart</p>
            </div>
            <div className='cart-items-container'>
              {
                cart.map((item) => (
                  <div>  
                      <div className="item">
                        
                        <div className="image-container">
                          <img src={item.image}></img>
                        </div>

                        <div className="item-info-container">
                          <p className="item-title">{item.title}</p>
                          <p className="item-author">{item.author}</p>
                          <p className="item-price">{`$${item.price}`}</p>
                        </div>

                        <div className="buttons-container">
                          <img className='trash' src='images/icons/icons8-trash-30.png'></img>
                        </div>

                      </div>

                      <hr></hr>

                    </div>
                ))
              }
            </div>
            <div className="checkout-button-div">
              <button onClick={() => setOpenCheckout(true)}>Checkout</button>
            </div>
        </div>
        ) 
      }
        
        </div>

    </div>
  )
}

export default CartModal