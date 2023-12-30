import ProductFilters from "./ProductFilters";
import '../style/Products.css';
import products from "../data/products";
import ProductCard from "./ProductCard";
import React, { useState, useEffect } from 'react';

function Products() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('http://localhost:8000/BooklandAPI/products');
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };
    fetchProducts();
  }, []); 

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