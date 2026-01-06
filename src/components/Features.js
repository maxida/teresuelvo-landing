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
    <section id="features" className="py-20 px-6" style={{background: 'transparent'}}>
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-center mb-16" style={{color: 'var(--text-main)'}}>
          ¿Por qué elegir TeResuelvo?
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="glass-card rounded-3xl p-8 text-center">
              <div className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6" style={{background: 'rgba(59,130,246,0.12)'}}>
                {feature.icon}
              </div>
              <h3 className="text-2xl font-bold mb-4" style={{color: 'var(--text-main)'}}>
                {feature.title}
              </h3>
              <p className="text-lg leading-relaxed" style={{color: 'var(--text-muted)'}}>
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
