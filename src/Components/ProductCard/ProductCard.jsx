import React, { useState } from 'react';
import Fav from '../../assets/images/fav.png'
import FavGrey from '../../assets/images/favGrey.png'
import './ProductCard.css'

const ProductCard = ({title,price,description,images}) => {
  const [isActive, setIsActive] = useState(false)
  const handleClick = event => {
    event.preventDefault();
    setIsActive(current => !current);
  };
  return (
    <div className='show-card'>
      <div className="main-img">
      <img src={images} alt="" className='prod-img'/>
      </div>
      <div className="fav" onClick={handleClick}>
        <img src={isActive ? Fav : FavGrey} alt="" />
      </div>
      <div className="tit-pri">
        <div className="title">{title}</div>
        <div className="price">{price}$</div>
      </div>
    </div>
  );
}

export default ProductCard;