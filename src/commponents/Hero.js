import React from 'react';

const Hero = () => {
  return (
    <section className="bg-gradient-to-br from-primary-dark to-primary-regular text-white py-20 px-6">
      <div className="container mx-auto text-center">
        <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
          Soluciones para<br />
          <span className="text-accent-regular">tu Hogar y tu Empresa</span>
        </h1>
        <p className="text-xl md:text-2xl mb-8 text-primary-light max-w-3xl mx-auto leading-relaxed">
          Accede a un profesional de confianza para cada necesidad cuando lo necesites
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <button className="bg-accent-regular text-primary-dark font-bold py-4 px-8 rounded-full text-lg hover:bg-accent-light transition transform hover:scale-105">
            Descargar la App
          </button>
          <button className="border-2 border-white text-white font-bold py-4 px-8 rounded-full text-lg hover:bg-white hover:text-primary-dark transition">
            Ver Demo
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;