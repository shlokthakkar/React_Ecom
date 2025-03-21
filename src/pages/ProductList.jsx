import React from 'react';
import ProductCard from '../components/ProductCard';
import products from '../data/products.json';

const ProductList = () => {
  return (
    <div className="p-8">
      <h2 className="text-2xl font-bold mb-6">Products</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ProductList;
