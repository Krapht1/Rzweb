/* =========================================================
   RZ — Configuración del sitio
   Todo el contenido editable está acá. No hace falta tocar
   el HTML para cambiar datos, horarios, productos o promos.
   ========================================================= */
window.RZ_CONFIG = {
  // WhatsApp: código de país + 9 + área + número, sin espacios ni "+"
  whatsapp: "5492995362767",
  whatsappMensaje: "Hola RZ! Quería hacer una consulta.",

  // Ubicación: las coordenadas mandan para el mapa y el botón de Google Maps.
  // "direccion" es solo el texto que se muestra.
  coordenadas: { lat: -38.96398660113617, lng: -68.05090307891784 },
  direccion: "Neuquén Capital",

  // Horarios: "cierre" puede ser después de medianoche (ej: "03:00")
  // dia: 0 = domingo, 1 = lunes ... 6 = sábado
  horarios: [
    { dia: 1, nombre: "Lunes",     apertura: "10:00", cierre: "03:00" },
    { dia: 2, nombre: "Martes",    apertura: "10:00", cierre: "03:00" },
    { dia: 3, nombre: "Miércoles", apertura: "10:00", cierre: "03:00" },
    { dia: 4, nombre: "Jueves",    apertura: "10:00", cierre: "03:00" },
    { dia: 5, nombre: "Viernes",   apertura: "10:00", cierre: "03:00" },
    { dia: 6, nombre: "Sábado",    apertura: "10:00", cierre: "03:00" },
    { dia: 0, nombre: "Domingo",   apertura: "10:00", cierre: "03:00" }
  ],

  // Categorías. Para cambiar la foto, reemplazá el archivo en assets/img/
  // con el mismo nombre (o cambiá la ruta acá). Sin "imagen" se muestra el ícono.
  categorias: [
    { titulo: "Bebidas",   texto: "Cervezas, vinos, espirituosas y gaseosas. Siempre frías.", imagen: "assets/img/bebidas.jpg",   icono: "bottle" },
    { titulo: "Kiosco",    texto: "Golosinas, snacks, cigarrillos y cargas.",                imagen: "assets/img/kiosco.jpg",    icono: "candy" },
    { titulo: "Regalería", texto: "Regalos y detalles para salir del apuro.",                 imagen: "assets/img/regaleria.jpg", icono: "gift" },
    { titulo: "Almacén",   texto: "Lo de todos los días: fideos, lácteos, panificados y más.", imagen: "assets/img/almacen.jpg",   icono: "basket" }
  ],

  // Promociones (de ejemplo). Para ocultar una sin borrarla: activa: false
  promos: [
    { titulo: "Combo Fernet",      detalle: "Fernet 750ml + 2 Coca-Cola 2.25L + hielo.", etiqueta: "Combo", imagen: "assets/img/promo-1.jpg", activa: true },
    { titulo: "Cervezas x6",       detalle: "Pack de 6 latas a precio especial.",       etiqueta: "-15%",  imagen: "assets/img/promo-2.jpg", activa: true },
    { titulo: "2x1 en vinos",      detalle: "Seleccionados, de domingo a jueves.",      etiqueta: "2x1",   imagen: "assets/img/promo-3.jpg", activa: true }
  ]
};
