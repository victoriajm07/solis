# 🌐 Proyecto Web - Espacio Ambiental Hoya del Caballo 🌿

Este es un proyecto de página web estática desarrollado para el Espacio Ambiental Hoya del Caballo. Incluye características como una galería interactiva de localizaciones, un carrito funcional y un formulario de contacto. Todo diseñado para ofrecer una experiencia moderna y amigable.

---

## 🛠️ Tecnologías Utilizadas

- **Astro**: Framework para crear páginas web rápidas y optimizadas.
- **HTML5 & CSS3**: Lenguajes base para la estructura y el diseño de la web.
- **JavaScript**: Para funcionalidades interactivas como el giro de tarjetas y el carrito.
- **FormSubmit**: Servicio de terceros para gestionar el formulario de contacto.
- **Flexbox & CSS Grid**: Para un diseño responsivo y adaptado a diferentes tamaños de pantalla.

---

## 🚀 Características

### **Localizaciones Interactivas**
- Tarjetas que giran al hacer clic en "Más información" para mostrar detalles adicionales.
- Totalmente responsivo y adaptado a diferentes dispositivos.
- Diseño limpio y moderno con sombras y bordes redondeados.

### **Carrito de Compras**
- Funcionalidad para añadir productos al carrito.
- Vista detallada del carrito con listado de productos.
- Persistencia del carrito durante la sesión.

### **Formulario de Contacto**
- Permite a los usuarios enviar mensajes directamente desde la página.
- Protegido contra spam con un honeypot y reCAPTCHA deshabilitado.
- Redirige al usuario tras el envío con un mensaje de confirmación.
- Configurado con **FormSubmit** para enviar correos sin necesidad de un backend.

---

## 📂 Estructura del Proyecto

```plaintext
📁 src
├── 📁 components
│   ├── BuyButton.astro         # Botón para añadir al carrito
│   ├── Card.astro              # Tarjetas genéricas
│   ├── Carousel.astro          # Galería interactiva
│   ├── Footer.astro            # Pie de página
│   ├── Header.astro            # Cabecera con navegación
│   ├── ProductCard.astro       # Tarjetas de productos
│
├── 📁 layouts
|   ├── BaseLayout.tsx          # Funcionalidad del carrito (no terminado)
│   ├── BaseLayout.astro        # Layout principal
│   ├── Layout.astro            # Layout secundario
│
├── 📁 pages
│   ├── index.astro             # Página principal
│   ├── productos.astro         # Listado de productos
│   ├── localizaciones.astro    # Localizaciones interactivas
│   ├── carrito.astro           # Página del carrito
│   ├── contacto.astro          # Formulario de contacto
|   ├── historia.astro          # Página de historia
│
📁 public
├── 📁 fonts                    # Fuentes para textos
├── 📁 imagenes                 # Recursos gráficos
├── 📁 styles
│   └── global.css              # Estilos globales
```
--- 
## 📦 Instalación y Uso

Sigue estos pasos para configurar el proyecto localmente:

### 1. **Clonar el repositorio**
Copia el repositorio desde GitHub a tu máquina local:
```bash
git clone https://github.com/tu-usuario/tu-repo.git
```
### 2. **Instalar dependencias**
```bash
npm install
```
### 3. **Iniciar el proyecto en desarrollo**
```bash
npm run dev
```
---
## 🌍 Despliegue en Vercel
Proyecto disponible en https://solis-victoria-jimenez-martins-projects.vercel.app/ o https://solis.vercel.app/
