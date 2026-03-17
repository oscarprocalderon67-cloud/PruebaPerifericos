import { WHATSAPP_NUMBER } from '../data/products';
import redragonImg from '../img/RedragonK552.jpg';
import ajazzImg from '../img/ajazz.logo.jpg';
import monitorImg from '../img/monitorAOC.jpg';
import mousePadImg from '../img/mousePad.jpg';
import ajazzWirelessImg from '../img/ajazzInalambrico.jpg';
import mouseRazerImg from '../img/mouseRazer.jpg';
import auricularImg from '../img/auricularLogited.jpg';
import mouseAulaImg from '../img/mouseAULA.jpg';
import mouseHyperImg from '../img/mouseHyper.webp';
import mouseHyperXImg from '../img/mouseHYPERX.jpg';
import tecladoGenericoImg from '../img/tecladoGENERICO.jpg';
import tecladoGenerico2Img from '../img/tecladoGENERICO2.webp';
import tecladoBlancoImg from '../img/tecladoBLANCO.jpg';
import tecladoNegroImg from '../img/tecladoNEGRO.jpg';
import monitor1Img from '../img/monitor1.webp';
import monitor2Img from '../img/monitor2.jpg';
import monitor3Img from '../img/monitor3.jpg';
import auricular1Img from '../img/auricular1.webp';
import auricular2Img from '../img/auricular2.jpg';
import auricular3Img from '../img/auricular3.webp';
import auricular4Img from '../img/auricular4.webp';

export default function ProductCard({ product }) {
  const imageMap = {
    9: redragonImg,
    10: ajazzImg,
    13: ajazzWirelessImg,
    19: tecladoGenericoImg,
    20: tecladoGenerico2Img,
    21: tecladoBlancoImg,
    22: tecladoNegroImg,
    12: mousePadImg,
    14: mouseRazerImg,
    16: mouseAulaImg,
    17: mouseHyperImg,
    18: mouseHyperXImg,
    15: auricularImg,
    26: auricular1Img,
    27: auricular2Img,
    28: auricular3Img,
    29: auricular4Img,
    11: monitorImg,
    23: monitor1Img,
    24: monitor2Img,
    25: monitor3Img,
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
