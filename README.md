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
    └── logo-footer.png # Logo "— RZ —" en blanco (footer)
```

## Editar contenido

Todo se cambia en `js/config.js`:

- `whatsapp`: número con código de país, sin `+` ni espacios (ej. `5493871234567`).
- `direccion`: se usa para el texto, el mapa embebido y el botón de Google Maps.
- `horarios`: apertura y cierre por día. Si el cierre es después de medianoche (ej. `03:00`), el indicador "Abierto ahora" lo calcula bien.
- `categorias`: título, texto e ícono. Se puede poner `imagen: "assets/foto.jpg"` para usar una foto.
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
