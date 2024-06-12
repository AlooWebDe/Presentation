import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import CakeIcon from '../../assets/cake.png';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="bg-[#FFF5F5] z-[50] px-4 lg:px-6 h-16 flex items-center justify-between fixed top-0 left-0 right-0 z-10 shadow-md">
      <div className="container mx-auto flex items-center justify-between">
        <Link to="/" className="flex items-center">
          <img src={CakeIcon} className="h-10 w-10 mr-2 text-[#FF6B6B]" alt="Cake Icon" />
          <span className="text-[#FF6B6B] font-bold text-lg lg:text-2xl">Cakery</span>
        </Link>
        <nav className="md:hidden">
          <button onClick={toggleMenu} className="text-[#FF6B6B] hover:text-red-600 focus:outline-none">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          </button>
        </nav>
        <nav className={`md:flex justify-center gap-6 ${isOpen ? 'flex-col absolute top-full left-0 right-0 mt-2 bg-[#FFF5F5] px-4 py-2 rounded-md shadow-md animate-fadeInDown' : 'hidden'}`}>
          <Link to="/" className="text-center text-sm font-medium text-[#FF6B6B] hover:text-[#FF6B6B] transition-colors duration-300 block py-2">
            Home
          </Link>
          <Link to="/products" className="text-center text-sm font-medium text-[#FF6B6B] hover:text-[#FF6B6B] transition-colors duration-300 block py-2">
            Products
          </Link>
          <Link to="/about" className="text-center text-sm font-medium text-[#FF6B6B] hover:text-[#FF6B6B] transition-colors duration-300 block py-2">
            About
          </Link>
          <Link to="/contact" className="text-center text-sm font-medium text-[#FF6B6B] hover:text-[#FF6B6B] transition-colors duration-300 block py-2">
            Contact
          </Link>
          <Link to="/contact" className="text-center text-sm font-medium text-[#FF6B6B] hover:text-[#FF6B6B] transition-colors duration-300 block py-2">
            Blog
          </Link>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
