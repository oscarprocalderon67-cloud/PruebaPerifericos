import { WHATSAPP_NUMBER } from '../data/products';
import redragonImg from '../img/RedragonK552.jpg';
import ajazzImg from '../img/ajazz.logo.jpg';
import monitorImg from '../img/monitorAOC.jpg';
import mousePadImg from '../img/mousePad.jpg';
import ajazzWirelessImg from '../img/ajazzInalambrico.jpg';
import mouseRazerImg from '../img/mouseRazer.jpg';
import auricularImg from '../img/auricularLogited.jpg';

export default function ProductCard({ product }) {
  const imageMap = {
    9: redragonImg,
    10: ajazzImg,
    11: monitorImg,
    12: mousePadImg,
    13: ajazzWirelessImg,
    14: mouseRazerImg,
    15: auricularImg,
  };

  const handleWhatsApp = () => {
    const message = encodeURIComponent(
      `Hola! Me interesa el producto: ${product.name}\nPrecio: $${product.price.toLocaleString('es-CO')}`
    );
    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${message}`;
    window.open(url, '_blank');
  };

  return (
    <div className="product-card">
      <div className="product-image">
        {imageMap[product.id] ? <img src={imageMap[product.id]} alt={product.name} /> : product.icon}
      </div>
      <div className="product-content">
        <span className="product-category">{product.category}</span>
        <h3 className="product-name">{product.name}</h3>
        <p className="product-description">{product.description}</p>
        <div className="product-price">
          ${product.price.toLocaleString('es-CO')}
        </div>
        <button className="buy-btn" onClick={handleWhatsApp}>
          <span className="whatsapp-icon">📱</span>
          Comprar por WhatsApp
        </button>
      </div>
    </div>
  );
}
