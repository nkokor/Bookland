export default function CheckoutForm({setViewCheckout, setViewCartModal, total}) {
  return (
    <div id='checkout'>
      <div id='checkout-header'>
        <a onClick={() => setViewCheckout(false)}>Back to cart</a>
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
          <p id='total'>{`$${total}`}</p>
        </div>
        <div className="checkout-button-div">
          <button className='modal-button' onClick={() => setViewCartModal(false)}>Finish</button>
        </div>
      </div>           
    </div>
  )
}