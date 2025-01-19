

import React from 'react';

const SearchBar = ({ placeholder, onChange, value }) => {
  return (
    <div className="w-full max-w-md relative">
      <input
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className="w-full px-4 py-2 pl-10 border rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
        🔍
      </span>
    </div>

  );
};

export default SearchBar;
