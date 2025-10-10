import React from 'react';

const Header = () => {
  return (
    <header className="bg-primary-dark text-white py-4 px-6">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <div className="w-10 h-10 bg-accent-regular rounded-full flex items-center justify-center mr-3">
            <span className="text-primary-dark font-bold text-lg">TR</span>
          </div>
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