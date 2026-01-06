import React from 'react';

const HowItWorks = () => {
  const steps = [
    {
      number: '01',
      title: 'Busca tu servicio',
      description: 'Encuentra el profesional perfecto para lo que necesites'
    },
    {
      number: '02',
      title: 'Chatea directamente',
      description: 'Conversa y acuerda presupuesto sin intermediarios'
    },
    {
      number: '03',
      title: 'Recibe tu solución',
      description: 'Tu problema resuelto por expertos verificados'
    }
  ];

  return (
    <section id="how-it-works" className="py-20 px-6" style={{ background: 'transparent' }}>
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold text-center mb-16" style={{ color: 'var(--text-main)' }}>
          Así de fácil funciona
        </h2>

        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {steps.map((step, index) => (
            <div key={index} className="text-center">
              <div
                className="w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6"
                style={{ background: 'rgba(59,130,246,0.18)', border: '1px solid rgba(59,130,246,0.35)', color: 'var(--text-main)' }}
              >
                {step.number}
              </div>

              <h3 className="text-xl font-bold mb-4" style={{ color: 'var(--text-main)' }}>
                {step.title}
              </h3>

              <p style={{ color: 'var(--text-muted)' }}>{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
