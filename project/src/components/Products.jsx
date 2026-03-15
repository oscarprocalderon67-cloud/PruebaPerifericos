import ProductCard from './ProductCard';

export default function Products({ products }) {
  return (
    <section id="products" className="products-section">
      <div className="container">
        <h2 className="section-title">Nuestros Productos</h2>
        <div className="products-grid">
          {products.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}
