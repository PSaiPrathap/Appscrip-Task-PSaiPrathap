import React from 'react';

const Filters = ({ onFilterChange, onSortChange, onRatingSortChange }) => {
  return (
    <aside className="filters">
      <h2>Filters</h2>
      <div className="filter-group">
        <label>Category:</label>
        <select onChange={(e) => onFilterChange('category', e.target.value)}>
          <option value="">All</option>
          <option value="electronics">Electronics</option>
          <option value="jewelery">Jewelery</option>
          <option value="men's clothing">Men's Clothing</option>
          <option value="women's clothing">Women's Clothing</option>
        </select>
      </div>

      <div className="filter-group">
        <label>Sort by Price:</label>
        <select onChange={(e) => onSortChange(e.target.value)}>
          <option value="">Default</option>
          <option value="price-low-high">Low to High</option>
          <option value="price-high-low">High to Low</option>
        </select>

      </div>

      <div className="filter-group">
        <label>Sort by Rating:</label>
        <select onChange={(e) => onRatingSortChange(e.target.value)}>
          <option value="">Default</option>
          <option value="rating-high-low">High to Low</option>
          <option value="rating-low-high">Low to High</option>
        </select>

      </div>
    </aside>
  );
};

export default Filters;
