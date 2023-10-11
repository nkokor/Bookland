import ProductFilters from "./ProductFilters";
import '../style/Products.css';
import products from "../data/products";
import ProductCard from "./ProductCard";


function Products() {
  const renderProducts = (
    <section id='products-page'>
      <p className="section-title">OUR PRODUCTS</p>
      <div id='products'>
        <ProductFilters/>
       {
        products.map((item) => (
          <ProductCard product={item}/>
        ))
       }
      </div>
    </section>
  )

  return renderProducts
}

export default Products;