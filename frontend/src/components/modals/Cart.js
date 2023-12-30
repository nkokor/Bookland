import CartItem from "./CartItem"

export default function Cart({cart, setViewCheckout}) {
  return (
    <div id='cart'>
    <div className='title-container'>
      <p>Your cart</p>
    </div>
    { cart.length != 0 ? (
        <div className='cart-items-container'>
          <div id='cart-and-button'>
            <div id='cart-scrollable'>
              {
                cart.map((item) => (  
                  <CartItem item={item}/>
                ))
              }
            </div>
              <div className="checkout-button-div">
                <button className='modal-button' onClick={() => setViewCheckout(true)}>Checkout</button>
              </div>
          </div>
        </div>
    ) : (
      <div id='empty-cart-div'>
        <p>Your cart is empty.</p>
      </div>
    )
  }           
  </div>
  )
}