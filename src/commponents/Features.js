import React from 'react';
import { FaComments, FaSearch, FaShieldAlt } from 'react-icons/fa';

const Features = () => {
  const features = [
    {
      icon: <FaSearch className="text-4xl text-primary-regular" />,
      title: "Encuentra al Experto Ideal",
      description: "Conecta con plomeros, electricistas, carpinteros y más. Tu solución a un toque de distancia."
    },
    {
      icon: <FaComments className="text-4xl text-primary-regular" />,
      title: "Comunicación Clara y Directa",
      description: "Envía fotos, chatea y acuerda el presupuesto directamente con el profesional. Sin intermediarios."
    },
    {
      icon: <FaShieldAlt className="text-4xl text-primary-regular" />,
      title: "Profesionales Verificados",
      description: "Todos nuestros profesionales pasan por un proceso de verificación para tu tranquilidad."
    }
  ];

  return (
    <section id="features" className="py-20 bg-neutral-lighter px-6">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-center text-primary-dark mb-16">
          ¿Por qué elegir TeResuelvo?
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-white rounded-3xl p-8 shadow-lg text-center">
              <div className="bg-primary-light/20 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                {feature.icon}
              </div>
              <h3 className="text-2xl font-bold text-primary-dark mb-4">
                {feature.title}
              </h3>
              <p className="text-neutral-regular text-lg leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;