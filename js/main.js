(function () {
  "use strict";
  var C = window.RZ_CONFIG || {};

  /* ---------- Íconos (trazo blanco/negro, heredan currentColor) ---------- */
  var ICONS = {
    gift:   '<path d="M4 11h16v9H4zM3 7h18v4H3zM12 7v13M12 7c-1.5-3-5-3-5-1s3 1 5 1zm0 0c1.5-3 5-3 5-1s-3 1-5 1z"/>',
    bottle: '<path d="M10 2h4v4l2 3v12a1 1 0 0 1-1 1H9a1 1 0 0 1-1-1V9l2-3zM8 13h8"/>',
    basket: '<path d="M3 10h18l-2 10H5zM7 10l4-6M17 10l-4-6M9 14v3M12 14v3M15 14v3"/>',
    candy:  '<circle cx="12" cy="12" r="4"/><path d="M8.5 9.5 4 7l1 4-1 3 4.5-1.5M15.5 14.5 20 17l-1-4 1-3-4.5 1.5"/>',
    spray:  '<path d="M9 9h6v12H9zM10 9V6h4v3M14 6h3M18 3v1M20 5h1M18 7v1"/>',
    ice:    '<path d="M4 8l8-4 8 4-8 4zM4 8v8l8 4 8-4V8M12 12v8"/>'
  };
  function icon(name) {
    return '<svg viewBox="0 0 24 24" width="40" height="40" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">' + (ICONS[name] || ICONS.basket) + '</svg>';
  }
  function esc(s) {
    return String(s == null ? "" : s).replace(/[&<>"']/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c];
    });
  }
  function $all(sel) { return Array.prototype.slice.call(document.querySelectorAll(sel)); }

  /* ---------- WhatsApp ---------- */
  var waUrl = "https://wa.me/" + encodeURIComponent(C.whatsapp || "") +
              "?text=" + encodeURIComponent(C.whatsappMensaje || "");
  $all("[data-whatsapp]").forEach(function (a) {
    a.href = waUrl; a.target = "_blank"; a.rel = "noopener";
  });

  /* ---------- Dirección y mapa ---------- */
  var dir = C.direccion || "";
  var q = C.coordenadas ? (C.coordenadas.lat + "," + C.coordenadas.lng) : dir;
  $all("[data-address]").forEach(function (el) { el.textContent = dir; });
  $all("[data-maps]").forEach(function (a) {
    a.href = "https://www.google.com/maps/search/?api=1&query=" + encodeURIComponent(q);
  });
  $all("[data-map-embed]").forEach(function (f) {
    f.src = "https://www.google.com/maps?q=" + encodeURIComponent(q) + "&z=16&output=embed";
  });

  /* ---------- Categorías ---------- */
  var catBox = document.querySelector("[data-categories]");
  if (catBox) {
    catBox.innerHTML = (C.categorias || []).map(function (c, i) {
      var media = c.imagen
        ? '<img src="' + esc(c.imagen) + '" alt="' + esc(c.titulo) + '" loading="lazy">'
        : icon(c.icono);
      return '<article class="cat' + (c.imagen ? ' cat--photo' : '') + '">' +
               '<span class="cat__num">' + String(i + 1).padStart(2, "0") + '</span>' +
               '<div class="cat__media">' + media + '</div>' +
               '<h3 class="cat__title">' + esc(c.titulo) + '</h3>' +
               '<p class="cat__text">' + esc(c.texto) + '</p>' +
             '</article>';
    }).join("");
  }

  /* ---------- Promos ---------- */
  var promoBox = document.querySelector("[data-promos]");
  if (promoBox) {
    var activas = (C.promos || []).filter(function (p) { return p.activa !== false; });
    promoBox.innerHTML = activas.length ? activas.map(function (p) {
      var img = p.imagen
        ? '<div class="promo__media"><img src="' + esc(p.imagen) + '" alt="' + esc(p.titulo) + '" loading="lazy"></div>'
        : "";
      return '<article class="promo">' + img +
               '<span class="promo__tag">' + esc(p.etiqueta) + '</span>' +
               '<h3 class="promo__title">' + esc(p.titulo) + '</h3>' +
               '<p class="promo__text">' + esc(p.detalle) + '</p>' +
               '<a class="promo__link" href="' + waUrl + '" target="_blank" rel="noopener">Consultar →</a>' +
             '</article>';
    }).join("") : '<p class="fineprint">No hay promociones activas en este momento.</p>';
  }

  /* ---------- Horarios + estado abierto/cerrado ---------- */
  function toMin(hhmm) { var p = hhmm.split(":"); return (+p[0]) * 60 + (+p[1]); }
  var horarios = C.horarios || [];
  function byDay(d) { return horarios.filter(function (h) { return h.dia === d; })[0]; }

  function isOpen(now) {
    var d = now.getDay(), m = now.getHours() * 60 + now.getMinutes();
    var hoy = byDay(d), ayer = byDay((d + 6) % 7);
    if (hoy) {
      var a = toMin(hoy.apertura), c = toMin(hoy.cierre);
      if (c > a ? (m >= a && m < c) : (m >= a)) return true;
    }
    // Turno de ayer que cruza la medianoche (ej: 08:00 → 03:00)
    if (ayer) {
      var a2 = toMin(ayer.apertura), c2 = toMin(ayer.cierre);
      if (c2 <= a2 && m < c2) return true;
    }
    return false;
  }

  var table = document.querySelector("[data-hours]");
  if (table) {
    var today = new Date().getDay();
    var rows = horarios.map(function (h) {
      var cls = h.dia === today ? ' class="is-today"' : "";
      return "<tr" + cls + "><th scope=\"row\">" + esc(h.nombre) + "</th><td>" +
             esc(h.apertura) + " – " + esc(h.cierre) + "</td></tr>";
    }).join("");
    table.insertAdjacentHTML("beforeend", "<tbody>" + rows + "</tbody>");
  }

  function updateStatus() {
    var open = isOpen(new Date());
    $all("[data-status]").forEach(function (el) {
      el.classList.toggle("is-open", open);
      el.classList.toggle("is-closed", !open);
    });
    $all("[data-status-text]").forEach(function (el) {
      el.textContent = open ? "Abierto ahora" : "Cerrado";
    });
  }
  updateStatus();
  setInterval(updateStatus, 60000);

  /* ---------- Año del footer ---------- */
  $all("[data-year]").forEach(function (el) { el.textContent = new Date().getFullYear(); });
})();
