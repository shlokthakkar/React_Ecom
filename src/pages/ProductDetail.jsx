import React from 'react';
import { useParams } from 'react-router-dom';
import products from '../data/products.json';

const ProductDetail = () => {
  const { id } = useParams();
  const product = products.find((p) => p.id === parseInt(id));

  if (!product) return <div className="p-8">Product Not Found</div>;

  return (
    <div className="p-8">
      <img src={product.image} alt={product.name} className="w-full h-96 object-cover mb-6" />
      <h2 className="text-2xl font-bold mb-4">{product.name}</h2>
      <p className="mb-4">${product.price}</p>
      <p>{product.description}</p>
      <button className="bg-green-600 text-white px-6 py-2 mt-4 rounded">Add to Cart</button>
    </div>
  );
};

export default ProductDetail;
