import logoImg from '../img/logoJOMTECH.jpeg';

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-bg-logo">
        <img src={logoImg} alt="JOMTECH Background" />
      </div>
      <div className="container hero-container">
        <div className="hero-content">
          <h1>Periféricos de Calidad</h1>
          <p>Encuentra todo lo que necesitas para tu setup tecnológico</p>
          <a href="#products" className="hero-cta">
            Ver Catálogo
          </a>
        </div>
      </div>
    </section>
  );
}
