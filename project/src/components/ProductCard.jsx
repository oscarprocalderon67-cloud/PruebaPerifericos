import { WHATSAPP_NUMBER } from '../data/products';

export default function ProductCard({ product }) {
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
        {product.icon}
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
