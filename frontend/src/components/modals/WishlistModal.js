import '../../style/modals/Modal.css';
import '../../style/modals/WishlistModal.css';
import wishlist from "../../data/wishlist.js";
import WishlistItem from './WishlistItem';

export default function WishlistModal({setOpenWishlistModal}) {
  return (
    <div className='modal-bg'>
      <div className='modal-content-container' id='wishlist-modal'>
        <button className="modal-close" onClick={() => setOpenWishlistModal(false)}>
          <img src='images/icons/icons8-close-24.png'></img>
        </button>
        <div className='title-container'>
          <p>Wishlist</p>
        </div>
        <div className='wishlist-items-container'>
          {
            wishlist.map((item) => (
              <WishlistItem item={item} />
            ))
          }
        </div>
      </div>
    </div>
  )
}