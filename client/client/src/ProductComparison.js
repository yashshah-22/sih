import React, { useState } from 'react';
import './ProductComparison.css';
import eaushadi from './components/eaushadi.jpeg';
import img2 from './components/img2.jpg';
import img3 from './components/img3.jpg';
import img4 from './components/img4.jpg';
// Mock data for product prices from different websites
const productData = [
  {
    id: 1,
    website: 'Amazon',
    price: 'Rs.599',
    rating: '4.5',
    delivery: '2 days',
    image: eaushadi,
  },
  {
    id: 2,
    website: 'Flipkart',
    price: 'Rs.489',
    rating: '4.2',
    delivery: '3 days',
    image: img2,
  },
  {
    id: 3,
    website: 'Kerala Ayurveda',
    price: 'Rs.649',
    rating: '4.7',
    delivery: '1 day',
    image:img3,
  },
  {
    id: 4,
    website: 'Ayurveda Store',
    price: 'Rs.589',
    rating: '4.3',
    delivery: '2 days',
    image: img4,
  },
];

const ProductComparison = () => {
  const [sortBy, setSortBy] = useState('price'); // Default sorting by price

  const sortData = () => {
    // Sort productData based on the selected sorting option
    const sortedData = [...productData];
    switch (sortBy) {
      case 'price':
        sortedData.sort((a, b) => {
          const priceA = parseFloat(a.price.replace('Rs.', ''));
          const priceB = parseFloat(b.price.replace('Rs.', ''));
          return priceA - priceB;
        });
        break;
      case 'rating':
        sortedData.sort((a, b) => parseFloat(b.rating) - parseFloat(a.rating));
        break;
      case 'delivery':
        sortedData.sort((a, b) => {
          const aDays = parseInt(a.delivery.split(' ')[0]);
          const bDays = parseInt(b.delivery.split(' ')[0]);
          return aDays - bDays;
        });
        break;
      default:
        break;
    }
    return sortedData;
  };

  const sortedProductData = sortData();

  return (
    <div className="product-comparison-container">
      <div className="sorting-options">
        <label>Sort by:</label>
        <select onChange={(e) => setSortBy(e.target.value)}>
          <option value="price">Price</option>
          <option value="rating">Rating</option>
          <option value="delivery">Expected Delivery</option>
        </select>
      </div>
      <div className="product-list">
        {sortedProductData.map((product) => (
          <div key={product.id} className="product-item">
            <div className="product-image">
              <img src={product.image} alt="Product" />
            </div>
            <div className="product-details">
              <h2>{product.website}</h2>
              <p>Rating: {product.rating}</p>
              <p>Price: {product.price}</p>
              <p>Expected Delivery: {product.delivery}</p>
              <button className="order-now-button">Order Now</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductComparison;
