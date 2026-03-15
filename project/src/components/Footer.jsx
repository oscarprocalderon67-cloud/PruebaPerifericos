import { WHATSAPP_NUMBER } from '../data/products';

export default function Footer() {
  const handleWhatsApp = () => {
    const message = encodeURIComponent('Hola! Quisiera conocer más sobre vuestros productos.');
    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${message}`;
    window.open(url, '_blank');
  };

  return (
    <footer>
      <div className="container">
        <div className="footer-content">
          <h3 style={{ marginBottom: '12px' }}>JOM TECH</h3>
          <p>Tu tienda de periféricos de confianza</p>
          <p>
            Contáctanos:{' '}
            <a
              href="#"
              className="footer-whatsapp"
              onClick={(e) => {
                e.preventDefault();
                handleWhatsApp();
              }}
            >
              +57 323 2235190
            </a>
          </p>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2026 JOM TECH. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
