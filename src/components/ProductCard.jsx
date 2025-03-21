import React from 'react';
import { Link } from 'react-router-dom';

const ProductCard = ({ product }) => {
  return (
    <Link to={`/products/${product.id}`} className="border p-4 rounded shadow hover:scale-105 transition">
      <img src={product.image} alt={product.name} className="h-48 w-full object-cover mb-4" />
      <h2 className="text-lg font-bold">{product.name}</h2>
      <p className="text-green-600">${product.price}</p>
    </Link>
  );
};

export default ProductCard;
