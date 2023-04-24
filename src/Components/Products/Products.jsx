import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import ProductCard from '../ProductCard/ProductCard';

const Products = () => {
    const [products,setProducts] =useState([]);
    useEffect(() => {
        fetch('https://dummyjson.com/products')
        .then(res => res.json())
        .then(data => setProducts(data.products));
    }, []);
    console.log(products);
    return (
    <>

        <div className="products">
       <div className="container">
       <div className="txt">
          All Products
        </div>
        <div className="prods">
          {
            products.map(product=>(
              <Link to={`/products/${product.id}`}>
                <ProductCard key={product.id} title={product.title} price ={product.price} description ={product.description} images={product.thumbnail}/>
              </Link>
            ))
          }
        </div>
       </div>
      </div>
    </>
    );
}

export default Products;
    