import { WHATSAPP_NUMBER } from '../data/products';

export default function FloatingWhatsApp() {
  const handleClick = () => {
    const message = encodeURIComponent('Hola! Quisiera conocer más sobre vuestros productos y precios.');
    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${message}`;
    window.open(url, '_blank');
  };

  return (
    <a
      href="#"
      className="floating-whatsapp"
      onClick={(e) => {
        e.preventDefault();
        handleClick();
      }}
      title="Contacta con nosotros por WhatsApp"
    >
      💬
    </a>
  );
}
