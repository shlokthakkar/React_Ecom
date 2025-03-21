import React from 'react';

const SearchBar = ({ setSearchTerm }) => {
  return (
    <input
      type="text"
      placeholder="Search Products..."
      className="border p-2 rounded w-full"
      onChange={(e) => setSearchTerm(e.target.value)}
    />
  );
};

export default SearchBar;
