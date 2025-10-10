import React from 'react';

const HowItWorks = () => {
  const steps = [
    {
      number: "01",
      title: "Busca tu servicio",
      description: "Encuentra el profesional perfecto para lo que necesites"
    },
    {
      number: "02",
      title: "Chatea directamente",
      description: "Conversa y acuerda presupuesto sin intermediarios"
    },
    {
      number: "03",
      title: "Recibe tu solución",
      description: "Tu problema resuelto por expertos verificados"
    }
  ];

  return (
    <section id="how-it-works" className="py-20 bg-white px-6">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-center text-primary-dark mb-16">
          Así de fácil funciona
        </h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {steps.map((step, index) => (
            <div key={index} className="text-center">
              <div className="bg-primary-regular text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6">
                {step.number}
              </div>
              <h3 className="text-xl font-bold text-primary-dark mb-4">
                {step.title}
              </h3>
              <p className="text-neutral-regular">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;