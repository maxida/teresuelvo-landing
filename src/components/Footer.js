import React from 'react';
import logo from '../assets/teresuelvo-logo.png';

const currentYear = new Date().getFullYear();

const Footer = () => {
  return (
    <footer className="bg-neutral-dark text-white py-12 px-6" aria-label="Pie de página de TeResuelvo">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0 max-w-md">
            <div className="flex items-center">
              <img
                src={logo}
                alt="Logo TeResuelvo"
                className="w-8 h-8 rounded-xl mr-3 object-cover shadow-lg"
              />
              <h3 className="text-2xl font-bold">TeResuelvo</h3>
            </div>
            <p className="text-neutral-regular mt-2">
              Tu solución confiable a un toque de distancia
            </p>
          </div>
          
          <div className="text-center md:text-right">
            <h4 className="text-lg font-bold mb-4">Descarga la App</h4>
            <div className="flex flex-col sm:flex-row gap-3">
              <button
                type="button"
                className="bg-primary-regular py-3 px-6 rounded-lg font-semibold hover:bg-primary-light transition focus:outline-none focus:ring-2 focus:ring-primary-light focus:ring-offset-2 focus:ring-offset-neutral-dark"
              >
                App Store
              </button>
              <button
                type="button"
                className="bg-accent-regular text-primary-dark py-3 px-6 rounded-lg font-semibold hover:bg-accent-light transition focus:outline-none focus:ring-2 focus:ring-accent-light focus:ring-offset-2 focus:ring-offset-neutral-dark"
              >
                Google Play
              </button>
            </div>
          </div>
        </div>
        
        <div className="border-t border-neutral-regular mt-8 pt-8 text-center">
          <p className="text-neutral-regular">
            &copy; {currentYear} TeResuelvo. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
