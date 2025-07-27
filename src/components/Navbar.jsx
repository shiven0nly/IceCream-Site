import React, { useState, useEffect } from 'react';
import { Menu, X, ShoppingCart, Heart } from 'lucide-react';
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`navbar ${scrolled ? 'navbar-scrolled' : 'navbar-transparent'}`}>
      <div className="navbar-container">
        <div className="navbar-content">
          {/* Logo */}
          <div className="navbar-logo">
            <h1 className="navbar-logo-text">
              ICES
            </h1>
          </div>

          {/* Desktop Navigation */}
          <div className="navbar-desktop-menu">
            <div className="navbar-desktop-links">
              <a href="#home" className="navbar-link">
                Home
              </a>
              <a href="#flavors" className="navbar-link">
                Flavors
              </a>
              <a href="#about" className="navbar-link">
                About
              </a>
              <a href="contact.html" className="navbar-link">
                Contact
              </a>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="navbar-action-buttons">
            <button className="navbar-action-button">
              <Heart size={20} />
            </button>
            <button className="navbar-action-button">
              <ShoppingCart size={20} />
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="navbar-mobile-toggle">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="navbar-mobile-button"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="navbar-mobile-menu">
          <div className="navbar-mobile-links">
            <a href="#home" className="navbar-mobile-link">
              Home
            </a>
            <a href="#flavors" className="navbar-mobile-link">
              Flavors
            </a>
            <a href="#about" className="navbar-mobile-link">
              About
            </a>
            <a href="#contact" className="navbar-mobile-link">
              Contact
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;