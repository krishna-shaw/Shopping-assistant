import React from 'react';
import ProductCard from './ProductCard';

const products = [
  { id: 1, title: 'Product 1', price: 20, image: 'https://via.placeholder.com/150' },
  { id: 2, title: 'Product 2', price: 35, image: 'https://via.placeholder.com/150' },
  { id: 3, title: 'Product 3', price: 50, image: 'https://via.placeholder.com/150' },
  { id: 4, title: 'Product 4', price: 45, image: 'https://via.placeholder.com/150' },
  { id: 5, title: 'Product 5', price: 60, image: 'https://via.placeholder.com/150' },
  { id: 6, title: 'Product 6', price: 25, image: 'https://via.placeholder.com/150' },
  { id: 7, title: 'Product 7', price: 30, image: 'https://via.placeholder.com/150' },
  { id: 8, title: 'Product 8', price: 40, image: 'https://via.placeholder.com/150' },
  { id: 9, title: 'Product 9', price: 55, image: 'https://via.placeholder.com/150' },
  { id: 10, title: 'Product 10', price: 70, image: 'https://via.placeholder.com/150' },
  { id: 11, title: 'Product 11', price: 80, image: 'https://via.placeholder.com/150' },
  { id: 12, title: 'Product 12', price: 90, image: 'https://via.placeholder.com/150' },
];

const MainContent = () => {
  return (
    <div className="main-content">
      {products.map(product => (
        <ProductCard key={product.id} {...product} />
      ))}
    </div>
  );
};

export default MainContent;
