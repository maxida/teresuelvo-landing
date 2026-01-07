import React from 'react';
import logo from '../assets/teresuelvo-logo.png';

const Header = () => {
  return (
    <header className="bg-primary-dark text-white py-4 px-6">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <img
            src={logo}
            alt="Logo TeResuelvo"
            className="w-10 h-10 rounded-xl mr-3 object-cover shadow-lg"
          />
          <h1 className="text-2xl font-bold">TeResuelvo</h1>
        </div>
        <nav className="hidden md:flex space-x-6">
          <a href="#features" className="hover:text-accent-regular transition">Servicios</a>
          <a href="#how-it-works" className="hover:text-accent-regular transition">Cómo Funciona</a>
          <a href="#professionals" className="hover:text-accent-regular transition">Para Profesionales</a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
