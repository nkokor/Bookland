import products from "../data/products";
import '../style/Products.css';
import Rating from "./Rating";

function Products() {
  const renderProducts = (
    <section id='products-page'>
      <p className="section-title">OUR PRODUCTS</p>

      <div id='products'>
      <div id='products-filters-div'>
        <div id='category-div' className="option-picker">
          <p>Category:</p>
          <select name="Select category" id="category">
            <option value="romance">Romance</option>
            <option value="fiction">Fiction</option>
            <option value="adventure">Adventure</option>
            <option value="crime">Crime</option>
            <option value="children">Children</option>
          </select>
        </div>

        <div id='sorting-view-div'>
          <div id='sorting-div' className="option-picker">
            <p>Sort:</p>
            <select name="Sort by" id="sorting">
              <option value="price">Price</option>
              <option value="rating">Rating</option>
              <option value="author">Author</option>
            </select>
          </div>

          <div id='view-div' className="option-picker">
            <select name="View" id="view">
              <option>List view</option>
              <option>Grid view</option>
            </select>
          </div>
        </div>

      </div>
      {
      products.map((product) => (
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
              <p className="product-price">{product.price}</p>
              <Rating rating={Math.round(product.rating)} starClass='rating-star' divClass='rating-div'></Rating>
            </div>
            </div>
          </div>
         ))
        }
      </div>
    </section>
  )
  return renderProducts
}

export default Products;