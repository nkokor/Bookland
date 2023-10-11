import Rating from "./Rating"

function ProductCard({product}) {
  return (
    <div className="product-card">
      <img className="product-image" src={product.image}></img>
      <div className='cart-div'>
        <div className="cart-button button">
          <p>ADD TO CART</p>
          <img className='cart-icon' src='images/icons/icons8-cart-white-30.png'></img>
        </div>
        <img className='heart-icon' src='images/icons/icons8-heart-outline-50.png'></img>
      </div>
      <div className="product-info">
        <p className="product-title">{product.title}</p>
        <p className="product-author">{product.author}</p>
        <div className="product-card-footer">
          <p className="product-price">{`$${product.price}`}</p>
          <Rating rating={Math.round(product.rating)} starClass='rating-star' divClass='rating-div'></Rating>
        </div>
      </div>
    </div>
  )
}

export default ProductCard