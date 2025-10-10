import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-neutral-dark text-white py-12 px-6">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <div className="flex items-center">
              <div className="w-8 h-8 bg-accent-regular rounded-full flex items-center justify-center mr-3">
                <span className="text-primary-dark font-bold">TR</span>
              </div>
              <h3 className="text-2xl font-bold">TeResuelvo</h3>
            </div>
            <p className="text-neutral-regular mt-2">
              Tu solución confiable a un toque de distancia
            </p>
          </div>
          
          <div className="text-center md:text-right">
            <h4 className="text-lg font-bold mb-4">Descarga la App</h4>
            <div className="flex flex-col sm:flex-row gap-3">
              <button className="bg-primary-regular py-3 px-6 rounded-lg font-semibold hover:bg-primary-light transition">
                App Store
              </button>
              <button className="bg-accent-regular text-primary-dark py-3 px-6 rounded-lg font-semibold hover:bg-accent-light transition">
                Google Play
              </button>
            </div>
          </div>
        </div>
        
        <div className="border-t border-neutral-regular mt-8 pt-8 text-center">
          <p className="text-neutral-regular">
            &copy; 2024 TeResuelvo. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;