import products from "../data/products";
import '../style/Products.css';

function Products() {
  const renderProducts = (
    <div id='shop'>
      <div id='products-header'>

        <div id='category-div'>
          <p>Category:</p>
          <select name="Select category" id="category">
            <option value="romance">Romance</option>
            <option value="fiction">Fiction</option>
            <option value="adventure">Adventure</option>
            <option value="crime">Crime</option>
            <option value="children">Children</option>
          </select>
        </div>

        <div id='sorting-div'>
          <p>Sort:</p>
          <select name="Sort by" id="sorting">
            <option value="price">Price</option>
            <option value="rating">Rating</option>
            <option value="author">Author</option>
          </select>
        </div>

        <div id='view-div'>
          <select name="View" id="view">
            <option>List view</option>
            <option>Grid view</option>
          </select>
        </div>

      </div>
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
    </div>
  )
  return renderProducts
}

export default Products;