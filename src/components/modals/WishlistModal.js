import React from "react";

import '../../style/WishlistModal.css';

import wishlist from "../../data/wishlist";

function WishlistModal({setOpenWishlistModal}) {
  return (
    <div className='modal-bg'>
      <div className='modal-container' id='wishlist-modal'>
        <button className="modal-close"
                onClick={() => setOpenWishlistModal(false)}
        >
          <img src='images/icons/icons8-close-24.png'></img>
        </button>
        <div className='title-container'>
          <p>Wishlist</p>
        </div>
        <div id='items-container'>
          {
            wishlist.map((item) => (
          <div>  
              <div className="wishlist-item">
                <div className="image-container">
                  <img src={item.image}></img>
                </div>
                <div className="item-info-container">
                  <p className="item-title">{item.title}</p>
                  <p className="item-author">{item.author}</p>
                  <p className="item-price">{item.price}</p>
                </div>
                <div className="buttons-container">
                  <img src='images/icons/icons8-cart-30.png'></img>
                  <img src='images/icons/icons8-trash-30.png'></img>
                </div>
              </div>
              <hr></hr> 
              </div>
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default WishlistModal