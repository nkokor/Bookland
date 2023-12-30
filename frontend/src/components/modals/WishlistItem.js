export default function WishlistItem({item}) {
  return (
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
          <img className='cart' src='images/icons/icons8-cart-30.png'></img>
          <img className='trash' src='images/icons/icons8-trash-30.png'></img>
        </div>
      </div>
      <hr></hr> 
    </div>
  )
}