import React, { useEffect, useState } from 'react';
import './Home.css'
import RightPerson from '../../assets/images/image 1.png'
import LeftPerson from '../../assets/images/image 2.png'
import ProductCard from '../ProductCard/ProductCard';
import { Link } from 'react-router-dom';

const Home = () => {
    const [product,setProduct] =useState([]);
    useEffect(() => {
        fetch('https://dummyjson.com/products?limit=8')
        .then(res => res.json())
        .then(data => setProduct(data.products));
    }, []);
    console.log(product);
  return (
    <>
      <div className='main-home'>
        <img src={LeftPerson} alt="" srcset="" className='left-person'/>
        <div>
        Get 50%  Off on 
        <br />
        Selected categories
        </div>
        <img src={RightPerson} alt="" srcset="" className='right-person'/>
      </div>
      <div className="products">
       <div className="container">
       <div className="txt">
          Products
        </div>
        <div className="prods">
          {
            product.map(product=>(
              <Link to={`/products/${product.id}`}>
                <ProductCard key={product.id} title={product.title} price ={product.price} description ={product.description} images={product.thumbnail}/>
              </Link>
            ))
          }
        </div>
       </div>
      </div>
      <Link to='/products'>
          <div className="see-more"> See More </div>
      </Link>
    </>
  );
}

export default Home;
