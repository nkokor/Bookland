import '../../style/modals/Modal.css';
import '../../style/modals/CartModal.css';
import '../../style/modals/CheckoutModal.css';
import { useState } from "react";
import cart from "../../data/cart";
import { calculateCartTotal } from '../../helpers';
import CheckoutForm from './CheckoutForm';
import Cart from './Cart';

export default function CartModal({setOpenCartModal}) {

  const [openCheckout, setOpenCheckout] = useState(false)
  const [cartItems, setCart] = useState(cart)

  return (
    <div className='modal-bg'>
        { openCheckout ? (
            <div className='modal-content-container' id='checkout-modal'>
              <button className="modal-close" onClick={() => setOpenCartModal(false)}>
                <img src='images/icons/icons8-close-24.png'></img>
              </button>
              <CheckoutForm setViewCheckout={setOpenCheckout} setViewCartModal={setOpenCartModal} total={calculateCartTotal(cart)}/>
            </div>
        ) : (
          <div className='modal-content-container' id='cart-modal'>
            <button className="modal-close" onClick={() => setOpenCartModal(false)}>
              <img src='images/icons/icons8-close-24.png'></img>
            </button>
            <Cart cart={cartItems} setViewCheckout={setOpenCheckout}/>
          </div>
        ) 
      }        
      </div>
  )
}