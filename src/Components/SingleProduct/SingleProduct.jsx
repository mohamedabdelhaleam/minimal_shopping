import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './SingleProduct.css'
const SingleProduct = () => {
  const {id} = useParams();
  const [product , setProduct] = useState({})
  const [isActive, setIsActive] = useState(false);
  useEffect(()=>{
    fetch(`https://dummyjson.com/products/${id}`)
    .then(res => res.json())
    .then(data => setProduct(data));
  },[id])

  const handleClick = event => {
    setIsActive(current => !current);
  };

  return (
    <>
        <div className="all-data">
          <div className="container">
            <div className="main-single">
              <img src={product.thumbnail} alt=""/>
            </div>
            <div className="desc-img">
              <div className="stat">
                New!
              </div>
              <div className="product-name">{product.title}</div>
              <div className="product-price">${product.price}</div>
              <div className="product-brand">Brand: {product.brand}</div>
              <div className="product-description">{product.description}</div>
              <div className="product-stock">Stock & Availability: {product.stock}</div>
              <div className="product-size">Size</div>
              <div className="product-stock-size">
                <div className='one active'>XS</div>
                <div className='two'>S</div>
                <div className='three'>M</div>
                <div className='four'>L</div>
              </div>
              <div className="add-to-cart" onClick={handleClick}>Add to Cart</div>
              <div className={isActive ? "added close":"added"}>Added to Cart</div>
            </div>
          </div>
        </div>
    </>
  );
}

export default SingleProduct;
