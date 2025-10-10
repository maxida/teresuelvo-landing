import React from 'react';
import './App.css';

function App() {
  return (
    <div className="app">
      {/* Header */}
      <header className="header">
        <div className="header-content">
          <div className="logo-container">
            <div className="logo">
              <span className="logo-text">TR</span>
            </div>
            <h1 className="title">TeResuelvo</h1>
          </div>
          <nav className="nav">
            <a href="#features" className="nav-link">Servicios</a>
            <a href="#how-it-works" className="nav-link">Cómo Funciona</a>
            <a href="#professionals" className="nav-link">Para Profesionales</a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1 className="hero-title">
            Soluciones para<br />
            <span className="hero-highlight">tu Hogar y tu Empresa</span>
          </h1>
          <p className="hero-subtitle">
            Accede a un profesional de confianza para cada necesidad cuando lo necesites
          </p>
          <div className="button-container">
            <button className="primary-button">
              📲 Descargar la App
            </button>
            <button className="secondary-button">
              👀 Ver Demo
            </button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="features">
        <div className="features-content">
          <h2 className="features-title">¿Por qué elegir TeResuelvo?</h2>
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">🔍</div>
              <h3 className="feature-title">Encuentra al Experto Ideal</h3>
              <p className="feature-description">
                Conecta con plomeros, electricistas, carpinteros y más. Tu solución a un toque de distancia.
              </p>
            </div>
            
            <div className="feature-card">
              <div className="feature-icon">💬</div>
              <h3 className="feature-title">Comunicación Clara y Directa</h3>
              <p className="feature-description">
                Envía fotos, chatea y acuerda el presupuesto directamente con el profesional. Sin intermediarios.
              </p>
            </div>
            
            <div className="feature-card">
              <div className="feature-icon">🛡️</div>
              <h3 className="feature-title">Profesionales Verificados</h3>
              <p className="feature-description">
                Todos nuestros profesionales pasan por verificación para tu tranquilidad y seguridad.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="how-it-works">
        <div className="how-it-works-content">
          <h2 className="how-it-works-title">Así de fácil funciona</h2>
          <div className="steps-container">
            <div className="step">
              <div className="step-number">1</div>
              <h3 className="step-title">Busca tu servicio</h3>
              <p className="step-description">Encuentra el profesional perfecto</p>
            </div>
            <div className="step">
              <div className="step-number">2</div>
              <h3 className="step-title">Chatea directamente</h3>
              <p className="step-description">Acuerda presupuesto sin intermediarios</p>
            </div>
            <div className="step">
              <div className="step-number">3</div>
              <h3 className="step-title">Recibe tu solución</h3>
              <p className="step-description">Tu problema resuelto por expertos</p>
            </div>
          </div>
        </div>
      </section>

      {/* Professional Section */}
      <section className="professional-section">
        <div className="professional-content">
          <h2 className="professional-title">¿Eres un Profesional?</h2>
          <p className="professional-subtitle">
            Únete a nuestra plataforma y aumenta tus clientes. Gestiona tu trabajo de manera eficiente.
          </p>
          <button className="professional-button">
            🛠️ Únete como Profesional
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-content">
          <div className="footer-logo-container">
            <div className="logo-small">
              <span className="logo-text">TR</span>
            </div>
            <h3 className="footer-title">TeResuelvo</h3>
          </div>
          <p className="footer-text">
            &copy; 2024 TeResuelvo. Tu solución confiable a un toque de distancia.
          </p>
          <div className="download-buttons">
            <button className="store-button">App Store</button>
            <button className="store-button primary">Google Play</button>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;