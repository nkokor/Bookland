import products from "../data/products";
import '../style/Products.css';

function Products() {
  const renderProducts = (
    <div id='products'>
    {
      products.map((product) => (
          <div className="product-card">
          <img className="product-image" src={product.image}></img>
          <div className='cart-div'>
            <div className="cart-button">
              <p>Add to cart</p>
              <img className='cart-icon' src='images/icons/icons8-cart-white-30.png'></img>
            </div>
            <img className='heart-icon' src='images/icons/icons8-heart-outline-50.png'></img>
          </div>
          <div className="product-info">
            <p className="product-title">{product.title}</p>
            <p className="product-author">{product.author}</p>
            <p className="product-price">{product.price}</p>
            <div>
              <img className="rating-star" src='images/icons/icons8-star-30.png'></img>
              <img className="rating-star" src='images/icons/icons8-star-30.png'></img>
              <img className="rating-star" src='images/icons/icons8-star-30.png'></img>
              <img className="rating-star" src='images/icons/icons8-star-30.png'></img>
              <img className="rating-star" src='images/icons/icons8-star-30.png'></img>
            </div>
          </div>
        </div>
      ))
    }
  </div>
  )
  return renderProducts
}

export default Products;