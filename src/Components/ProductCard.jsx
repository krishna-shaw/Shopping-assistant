import React from 'react';
import './ProductCard.css';

const ProductCard = ({ title, price, image }) => {
  return (
    <div className="product-card">
      <img src={image} alt={title} className="product-image" />
      <h3 className="product-title">{title}</h3>
      <p className="product-price">${price}</p>
      <button className="buy-button">Buy Now</button>
    </div>
  );
};

export default ProductCard;
