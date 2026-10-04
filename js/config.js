/* =========================================================
   RZ — Configuración del sitio
   Todo el contenido editable está acá. No hace falta tocar
   el HTML para cambiar datos, horarios, productos o promos.
   ========================================================= */
window.RZ_CONFIG = {
  // WhatsApp: código de país + área + número, sin espacios ni "+" (ej: 5493871234567)
  whatsapp: "5490000000000",
  whatsappMensaje: "Hola RZ! Quería hacer una consulta.",

  // Dirección: se usa para el texto, el mapa y el botón de Google Maps
  direccion: "Calle Ejemplo 123, Ciudad",

  // Horarios: "cierre" puede ser después de medianoche (ej: "03:00")
  // dia: 0 = domingo, 1 = lunes ... 6 = sábado
  horarios: [
    { dia: 1, nombre: "Lunes",     apertura: "08:00", cierre: "03:00" },
    { dia: 2, nombre: "Martes",    apertura: "08:00", cierre: "03:00" },
    { dia: 3, nombre: "Miércoles", apertura: "08:00", cierre: "03:00" },
    { dia: 4, nombre: "Jueves",    apertura: "08:00", cierre: "03:00" },
    { dia: 5, nombre: "Viernes",   apertura: "08:00", cierre: "03:00" },
    { dia: 6, nombre: "Sábado",    apertura: "08:00", cierre: "03:00" },
    { dia: 0, nombre: "Domingo",   apertura: "08:00", cierre: "03:00" }
  ],

  // Categorías de productos. "imagen" es opcional: si se pone una ruta
  // (ej: "assets/bebidas.jpg") se muestra la foto en vez del ícono.
  categorias: [
    { titulo: "Regalería",   texto: "Regalos, detalles y artículos para salir del apuro.", icono: "gift" },
    { titulo: "Bebidas",     texto: "Gaseosas, aguas, cervezas, vinos y espirituosas. Siempre frías.", icono: "bottle" },
    { titulo: "Almacén",     texto: "Lo de todos los días: fideos, lácteos, panificados y más.", icono: "basket" },
    { titulo: "Kiosco",      texto: "Golosinas, snacks, cigarrillos y cargas.", icono: "candy" },
    { titulo: "Limpieza",    texto: "Artículos de limpieza e higiene personal.", icono: "spray" },
    { titulo: "Para la previa", texto: "Hielo, vasos, snacks y todo para la juntada.", icono: "ice" }
  ],

  // Promociones. Para ocultar una sin borrarla: activa: false
  promos: [
    { titulo: "2x1 en gaseosas 1.5L", detalle: "Llevando dos de la misma marca.", etiqueta: "2x1", activa: true },
    { titulo: "Combo previa",          detalle: "Fernet + 2 cola 2.25L + hielo.",  etiqueta: "Combo", activa: true },
    { titulo: "Cervezas x6",           detalle: "Precio especial por pack de 6 latas.", etiqueta: "-15%", activa: true }
  ]
};
