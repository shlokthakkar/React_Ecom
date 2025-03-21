import React from 'react';

const Filters = ({ setCategoryFilter, setPriceFilter }) => {
  return (
    <div className="mb-6">
      <label className="block mb-2">Filter by Category:</label>
      <select
        onChange={(e) => setCategoryFilter(e.target.value)}
        className="border p-2 rounded w-full mb-4"
      >
        <option value="">All</option>
        <option value="T-Shirt">T-Shirts</option>
        <option value="Jacket">Jackets</option>
        <option value="Hoodie">Hoodies</option>
      </select>

      <label className="block mb-2">Filter by Price (less than):</label>
      <input
        type="number"
        placeholder="Enter price"
        onChange={(e) => setPriceFilter(e.target.value)}
        className="border p-2 rounded w-full"
      />
    </div>
  );
};

export default Filters;
