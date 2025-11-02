import React, { useState, useEffect } from 'react';
import './App.css';
import Header from './components/Header';
import Filters from './components/Filters';
import ProductGrid from './components/ProductGrid';
import Footer from './components/Footer';

function App() {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [filters, setFilters] = useState({ category: '' });
  const [sort, setSort] = useState('');
  const [ratingSort, setRatingSort] = useState('');
  const [search, setSearch] = useState('');

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(response => response.json())
      .then(data => {
        setProducts(data);
        setFilteredProducts(data);
      })
      .catch(error => console.error('Error fetching products:', error));
  }, []);

  useEffect(() => {
    let filtered = products;
    if (filters.category) {
      filtered = filtered.filter(product => product.category === filters.category);
    }
    if (search) {
      filtered = filtered.filter(product => product.title.toLowerCase().includes(search.toLowerCase()));
    }
    if (sort === 'price-low-high') {
      filtered = [...filtered].sort((a, b) => a.price - b.price);
    } else if (sort === 'price-high-low') {
      filtered = [...filtered].sort((a, b) => b.price - a.price);
    }
    if (ratingSort === 'rating-high-low') {
      filtered = [...filtered].sort((a, b) => b.rating.rate - a.rating.rate);
    } else if (ratingSort === 'rating-low-high') {
      filtered = [...filtered].sort((a, b) => a.rating.rate - b.rating.rate);
    }
    setFilteredProducts(filtered);
  }, [filters, products, sort, ratingSort, search]);

  const handleFilterChange = (type, value) => {
    setFilters(prev => ({ ...prev, [type]: value }));
  };

  const handleSortChange = (value) => {
    setSort(value);
  };

  const handleRatingSortChange = (value) => {
    setRatingSort(value);
  };

  const handleSearchChange = (value) => {
    setSearch(value);
  };

  return (
    <div className="App">
      <Header onSearchChange={handleSearchChange} />
      <div className="content">
        <h1>DISCOVER OUR PRODUCTS</h1>
        <p>Explore a wide range of high-quality products tailored to your needs. Find the perfect items with our<br/> 
         easy-to-use filter and search options.Shop with confidence and enjoy great deals on every purchase.</p>
      </div>
      <div className="main-content">
        <Filters onFilterChange={handleFilterChange} onSortChange={handleSortChange} onRatingSortChange={handleRatingSortChange} />
        <main className="products-section">
          <h2>Products</h2>
          <ProductGrid products={filteredProducts} />
        </main>
      </div>
      <Footer />
    </div>
  );
}

export default App;
