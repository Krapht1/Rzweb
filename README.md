# RZWeb

Landing page de **RZ**: regalería, bebidas, almacén y kiosco, abierto hasta las 3 AM.

Sitio estático (HTML + CSS + JS, sin dependencias ni build), listo para GitHub Pages.

## Estructura

```
RZWeb/
├── index.html        # Estructura de la página
├── css/styles.css    # Estilos (paleta blanco y negro)
├── js/config.js      # ← TODO el contenido editable
├── js/main.js        # Lógica: render, WhatsApp, mapa, abierto/cerrado
└── assets/
    ├── logo-badge.svg  # Insignia circular (nav y favicon)
    ├── logo-footer.png # Logo "— RZ —" en blanco (footer)
    └── img/            # Fotos de categorías y promos (placeholders)
```

## Editar contenido

Todo se cambia en `js/config.js`:

- `whatsapp`: número con código de país, sin `+` ni espacios (ej. `5493871234567`).
- `coordenadas`: lat/lng para el mapa y el botón de Google Maps. `direccion` es solo el texto visible.
- `horarios`: apertura y cierre por día. Si el cierre es después de medianoche (ej. `03:00`), el indicador "Abierto ahora" lo calcula bien.
- `categorias` y `promos`: título, texto e imagen. Para cambiar una foto, reemplazá el archivo en `assets/img/` con el mismo nombre (bebidas, kiosco, regaleria, almacen, promo-1..3 `.jpg`). Formato sugerido: 800×600 categorías, 800×500 promos.
- `promos`: con `activa: false` se oculta una promo sin borrarla.

El lema o nombre completo del local va en el `<h2 class="hero__tagline">` de `index.html`.

## Publicar en GitHub Pages

1. Crear el repo `RZWeb` en GitHub y subir estos archivos a la rama `main`.
2. En el repo: **Settings → Pages → Build and deployment → Source: Deploy from a branch**, rama `main`, carpeta `/ (root)`.
3. En un par de minutos queda en `https://<usuario>.github.io/RZWeb/`.

## Ver localmente

Abrir `index.html` en el navegador, o:

```
python3 -m http.server 8000
```
