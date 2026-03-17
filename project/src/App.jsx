import { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Products from './components/Products';
import FloatingWhatsApp from './components/FloatingWhatsApp';
import Footer from './components/Footer';
import { products } from './data/products';

export default function App() {
  const [selectedCategory, setSelectedCategory] = useState('todos');

  const categories = [
    { id: 'todos', name: 'Todos los productos' },
    { id: 'teclados', name: 'Teclados' },
    { id: 'mouse', name: 'Mouse' },
    { id: 'auriculares', name: 'Auriculares' },
    { id: 'monitores', name: 'Monitores' },
  ];

  const filteredProducts = selectedCategory === 'todos'
    ? products
    : products.filter(p => p.category === selectedCategory);

  return (
    <div>
      <Header
        categories={categories}
        selectedCategory={selectedCategory}
        onSelectCategory={setSelectedCategory}
      />
      <Hero />
      <Products products={filteredProducts} />
      <FloatingWhatsApp />
      <Footer />
    </div>
  );
}
