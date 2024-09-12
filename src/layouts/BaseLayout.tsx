import { useState, type ReactNode } from 'react';
import Header from '../components/Header.astro'; // Sigue siendo un componente Astro
import Footer from '../components/Footer.astro'; // Sigue siendo un componente Astro

// Definimos el tipo para los productos
type Product = {
  name: string;
  price: string;
  image: string;
};

interface BaseLayoutProps {
  children: ReactNode; // Tipamos los children como ReactNode
}

function BaseLayout({ children }: BaseLayoutProps) {
  const [cartItems, setCartItems] = useState<Product[]>([]); // Estado del carrito, con productos tipados

  function handleAddToCart(product: Product) { // Tipamos el parámetro 'product'
    setCartItems([...cartItems, product]); // Agrega el producto al carrito
  }

  return (
    <div>
      <Header cartItems={cartItems} /> {/* Pasamos cartItems al Header */}
      <main>
        {children} {/* Pasamos handleAddToCart a los componentes hijos */}
      </main>
      <Footer />
    </div>
  );
}

export default BaseLayout;
