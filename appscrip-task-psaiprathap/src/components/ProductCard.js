import React, { useState } from 'react';
import { FaHeart } from 'react-icons/fa';

const ProductCard = ({ product }) => {
  const [liked, setLiked] = useState(false);

  const handleLike = () => {
    setLiked(!liked);
  };

  return (
    <div className="product-card">
      <button className={`like-btn ${liked ? 'liked' : ''}`} onClick={handleLike}>
        <FaHeart />
      </button>
      <img src={product.image} alt={product.title} />
      <h3>{product.title}</h3>
      <p>${product.price}</p>
      <div className="rating">
        Rating: {product.rating.rate} ({product.rating.count} reviews)
      </div>
    </div>
  );
};

export default ProductCard;
