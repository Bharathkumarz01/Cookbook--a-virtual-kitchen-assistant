import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaSearch, FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/search?q=${encodeURIComponent(searchQuery)}`);
      setSearchQuery('');
      setIsMenuOpen(false);
    }
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar">
      <Link to="/" className="navbar-brand">CookBook</Link>
      <button className="hamburger" onClick={toggleMenu}>
        {isMenuOpen ? <FaTimes /> : <FaBars />}
      </button>
      <div className={`navbar-links ${isMenuOpen ? 'open' : ''}`}>
        <Link to="/" onClick={toggleMenu}>Home</Link>
        <Link to="/category/indian" onClick={toggleMenu}>Indian</Link>
        <Link to="/category/continental" onClick={toggleMenu}>Continental</Link>
        <Link to="/favorites" onClick={toggleMenu}>Favorites</Link>
        <form className="search-form" onSubmit={handleSearch}>
          <input
            type="text"
            placeholder="Search recipes..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="search-input"
          />
          <button type="submit" className="search-btn">
            <FaSearch />
          </button>
        </form>
      </div>
    </nav>
  );
};

export default Navbar;