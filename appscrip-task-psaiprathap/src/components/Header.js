import React from 'react';
import LogoImg from "./logo.svg"
import { FaSearch, FaHeart, FaShoppingCart, FaUser } from 'react-icons/fa';

const Header = ({ onSearchChange }) => {
  const handleSearchInput = (e) => {
    onSearchChange(e.target.value);
  };

  return (
    <header className="header">
      <div className="logo">
        <img src={LogoImg} alt="Logo" className="logoimg" />
        <h1>mettā muse</h1>
      </div>
      <nav className="nav">
        <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#shop">Shop</a></li>
          <li><a href="#products">Products</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
      <div className="header-right">
        <div className="search">
          <input type="text" placeholder="Search products..." onChange={handleSearchInput} />
          <button className="search-btn"><FaSearch /></button>
        </div>
        <div className="header-icons">
          <button className="icon-btn"><FaHeart /></button>
          <button className="icon-btn"><FaShoppingCart /></button>
          <button className="icon-btn"><FaUser /></button>
        </div>
      </div>
    </header>
  );
};

export default Header;
