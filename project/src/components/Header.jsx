export default function Header({ categories, selectedCategory, onSelectCategory }) {
  return (
    <header>
      <div className="container">
        <div className="header-content">
          <div className="logo">
            <span className="logo-icon">💻</span>
            <span>JOM TECH</span>
          </div>
        </div>
        <nav className="nav-categories">
          {categories.map(cat => (
            <button
              key={cat.id}
              className={`category-btn ${selectedCategory === cat.id ? 'active' : ''}`}
              onClick={() => onSelectCategory(cat.id)}
            >
              {cat.name}
            </button>
          ))}
        </nav>
      </div>
    </header>
  );
}
