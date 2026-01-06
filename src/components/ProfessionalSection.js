import React from 'react';
import { FaBriefcase, FaCalendarAlt, FaUserTie } from 'react-icons/fa';

const ProfessionalSection = () => {
  const features = [
    {
      icon: <FaBriefcase className="text-3xl" />,
      title: "Más Oportunidades",
      description: "Conecta con clientes en tu zona"
    },
    {
      icon: <FaCalendarAlt className="text-3xl" />,
      title: "Gestiona tu Agenda",
      description: "Organiza tus trabajos fácilmente"
    },
    {
      icon: <FaUserTie className="text-3xl" />,
      title: "Perfil Verificado",
      description: "Genera confianza en tus clientes"
    }
  ];

  return (
    <section id="professionals" className="py-20 bg-primary-dark text-white px-6">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            ¿Eres un Profesional?
          </h2>
          <p className="text-xl text-primary-light max-w-2xl mx-auto">
            Únete a nuestra plataforma y aumenta tus clientes. Gestiona tu trabajo de manera eficiente.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {features.map((feature, index) => (
            <div key={index} className="bg-primary-regular rounded-2xl p-6 text-center">
              <div className="text-accent-regular mb-4 flex justify-center">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
              <p className="text-primary-light">{feature.description}</p>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="bg-accent-regular text-primary-dark font-bold py-4 px-8 rounded-full text-lg hover:bg-accent-light transition">
            Únete como Profesional
          </button>
        </div>
      </div>
    </section>
  );
};

export default ProfessionalSection;
