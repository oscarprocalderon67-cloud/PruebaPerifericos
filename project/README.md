# JOM TECH - Catálogo de Periféricos

Catálogo profesional de periféricos de computador para JOM TECH con integración directa a WhatsApp.

## Características

✅ Diseño moderno y responsivo (mobile-first)
✅ 9 productos de ejemplo distribuidos en 7 categorías
✅ Integración directa con WhatsApp
✅ Botón flotante de WhatsApp
✅ Filtrado por categorías
✅ Precios en pesos colombianos (COP)
✅ Interfaz intuitiva y profesional
✅ Animaciones y transiciones suaves

## Estructura del Proyecto

```
jom-tech/
├── src/
│   ├── components/
│   │   ├── Header.jsx          # Encabezado y navegación
│   │   ├── Hero.jsx            # Sección principal
│   │   ├── Products.jsx        # Grid de productos
│   │   ├── ProductCard.jsx     # Tarjeta individual
│   │   ├── FloatingWhatsApp.jsx # Botón flotante
│   │   └── Footer.jsx          # Pie de página
│   ├── data/
│   │   └── products.js         # Datos de productos
│   ├── App.jsx                 # Componente principal
│   ├── main.jsx                # Punto de entrada React
│   └── index.css               # Estilos globales
├── index.html                  # HTML principal
├── vite.config.js              # Configuración de Vite
└── package.json                # Dependencias
```

## Instalación

```bash
npm install
```

## Desarrollo

```bash
npm run dev
```

Esto abrirá la página en tu navegador (puerto 5173).

## Compilar para Producción

```bash
npm run build
```

Los archivos compilados estarán en la carpeta `dist/`.

## Configuración de WhatsApp

Para configurar tu número de WhatsApp:

1. Abre el archivo `src/data/products.js`
2. Busca la línea con `WHATSAPP_NUMBER`
3. Reemplaza `'573001234567'` con tu número en formato: `57` + tu número sin símbolos

Ejemplo:
```javascript
// Tu número: +57 300 123 4567
export const WHATSAPP_NUMBER = '573001234567';
```

## Agregar Productos

Para agregar nuevos productos, edita `src/data/products.js`:

```javascript
{
  id: 10,
  name: 'Nombre del Producto',
  category: 'teclados', // teclados, mouse, auriculares, webcams, monitores, cables
  price: 150000,
  description: 'Descripción corta del producto',
  icon: '⌨️', // Emoji del producto
}
```

### Categorías disponibles:
- `teclados` - Teclados
- `mouse` - Mouse
- `auriculares` - Auriculares
- `webcams` - Webcams
- `monitores` - Monitores
- `cables` - Cables y Adaptadores

## Personalización

### Colores
Los colores principales están definidos en `src/index.css` bajo las variables CSS:

```css
:root {
  --primary: #25D366;        /* Verde WhatsApp */
  --primary-dark: #1EA853;   /* Verde oscuro */
  --secondary: #1F2937;      /* Gris oscuro */
  --text-dark: #111827;      /* Texto principal */
  --text-light: #6B7280;     /* Texto secundario */
  --bg-light: #F9FAFB;       /* Fondo claro */
  --border: #E5E7EB;         /* Bordes */
}
```

### Nombre de la Empresa
Cambia "JOM TECH" en:
- `src/components/Header.jsx` - En el logo
- `src/components/Footer.jsx` - En la información de contacto

## Despliegue

### Vercel (Recomendado)
1. Push tu proyecto a GitHub
2. Conecta tu repositorio en [vercel.com](https://vercel.com)
3. Vercel detectará automáticamente que es un proyecto Vite
4. Tu sitio estará disponible en línea

### Netlify
1. Push tu proyecto a GitHub
2. Conecta tu repositorio en [netlify.com](https://netlify.com)
3. Establece el comando de build: `npm run build`
4. Tu sitio estará disponible en línea

## Navegador Compatible

- Chrome/Edge (recomendado)
- Firefox
- Safari
- Opera
- Todos los navegadores modernos

## Requisitos

- Node.js 14+
- npm o yarn

## Licencia

Propietario - JOM TECH
