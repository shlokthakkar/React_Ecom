import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-6">Welcome to E-Shop</h1>
      <p className="mb-4">Discover the latest clothing trends at affordable prices.</p>
      <Link to="/products" className="bg-blue-600 text-white px-6 py-2 rounded">Shop Now</Link>
    </div>
  );
};

export default Home;
