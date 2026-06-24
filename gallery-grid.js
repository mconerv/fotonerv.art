/* ============================================================
   FotoNerv — gallery-grid.js
   На десктопе (≥992px) строит masonry-грид из изображений карусели
   категории и добавляет лайтбокс. На <992px карусель работает штатно
   (грид скрыт через CSS). Без зависимостей.
   ============================================================ */
(function () {
  "use strict";

  var lb, lbPic, lbImg, lbSource, lbCounter, current = [], idx = 0, lastFocus = null;

  function noContext(e) { e.preventDefault(); }

  function buildLightbox() {
    lb = document.createElement("div");
    lb.className = "fn-lb";
    lb.setAttribute("role", "dialog");
    lb.setAttribute("aria-modal", "true");
    lb.setAttribute("aria-label", "Просмотр фотографии");
    lb.innerHTML =
      '<button class="fn-lb-prev" type="button" aria-label="Предыдущее фото">\u2039</button>' +
      '<picture><source type="image/webp"><img alt="" draggable="false"></picture>' +
      '<button class="fn-lb-next" type="button" aria-label="Следующее фото">\u203A</button>' +
      '<button class="fn-lb-close" type="button" aria-label="Закрыть">\u00D7</button>' +
      '<div class="fn-lb-counter"></div>';
    lbPic = lb.querySelector("picture");
    lbSource = lb.querySelector("source");
    lbImg = lb.querySelector("img");
    lbCounter = lb.querySelector(".fn-lb-counter");

    lb.querySelector(".fn-lb-close").addEventListener("click", close);
    lb.querySelector(".fn-lb-prev").addEventListener("click", function () { step(-1); });
    lb.querySelector(".fn-lb-next").addEventListener("click", function () { step(1); });
    lb.addEventListener("click", function (e) { if (e.target === lb) close(); });
    lbImg.addEventListener("contextmenu", noContext);

    var sx = 0;
    lb.addEventListener("touchstart", function (e) { sx = e.changedTouches[0].clientX; }, { passive: true });
    lb.addEventListener("touchend", function (e) {
      var dx = e.changedTouches[0].clientX - sx;
      if (Math.abs(dx) > 45) step(dx < 0 ? 1 : -1);
    }, { passive: true });

    document.body.appendChild(lb);
  }

  function render() {
    var s = current[idx];
    if (s.webp) { lbSource.setAttribute("srcset", s.webp); }
    else { lbSource.removeAttribute("srcset"); }
    lbImg.src = s.jpeg;
    lbImg.alt = s.alt || "";
    lbCounter.textContent = (idx + 1) + " / " + current.length;
  }

  function step(d) {
    idx = (idx + d + current.length) % current.length;
    render();
  }

  function open(slides, i) {
    if (!lb) buildLightbox();
    current = slides; idx = i;
    lastFocus = document.activeElement;
    render();
    lb.classList.add("open");
    document.body.style.overflow = "hidden";
    lb.querySelector(".fn-lb-close").focus();
    document.addEventListener("keydown", onKey);
  }

  function close() {
    lb.classList.remove("open");
    document.body.style.overflow = "";
    document.removeEventListener("keydown", onKey);
    if (lastFocus && lastFocus.focus) lastFocus.focus();
  }

  function onKey(e) {
    if (e.key === "Escape") close();
    else if (e.key === "ArrowRight") step(1);
    else if (e.key === "ArrowLeft") step(-1);
  }

  function collect(carousel) {
    var slides = [];
    var items = carousel.querySelectorAll(".carousel-item");
    items.forEach(function (it) {
      var pic = it.querySelector("picture");
      if (!pic) return;
      var img = pic.querySelector("img");
      var src = pic.querySelector('source[type="image/webp"]');
      if (!img) return;
      var jpeg = img.getAttribute("data-src") || img.getAttribute("src") || "";
      var webp = src ? (src.getAttribute("data-srcset") || src.getAttribute("srcset") || "") : "";
      if (jpeg.indexOf("lazyload-ph") > -1) jpeg = img.getAttribute("data-src") || "";
      if (webp.indexOf("lazyload-ph") > -1) webp = src ? (src.getAttribute("data-srcset") || "") : "";
      if (jpeg) slides.push({ jpeg: jpeg, webp: webp, alt: img.getAttribute("alt") || "" });
    });
    return slides;
  }

  function enhance(carousel) {
    var slides = collect(carousel);
    if (slides.length < 3) return;

    var grid = document.createElement("div");
    grid.className = "fn-grid";

    slides.forEach(function (s, i) {
      var btn = document.createElement("button");
      btn.type = "button";
      btn.className = "fn-grid-item";
      btn.setAttribute("aria-label", "Открыть фото " + (i + 1) + " из " + slides.length);

      var pic = document.createElement("picture");
      if (s.webp) {
        var so = document.createElement("source");
        so.type = "image/webp";
        so.srcset = s.webp;
        pic.appendChild(so);
      }
      var im = document.createElement("img");
      im.src = s.jpeg;
      im.alt = s.alt;
      im.loading = "lazy";
      im.decoding = "async";
      im.draggable = false;
      im.className = "img-protected";
      im.addEventListener("contextmenu", noContext);
      pic.appendChild(im);
      btn.appendChild(pic);

      btn.addEventListener("click", function () { open(slides, i); });
      grid.appendChild(btn);
    });

    carousel.insertAdjacentElement("afterend", grid);
    var col = carousel.parentElement;
    if (col) col.classList.add("fn-gallery-enhanced");
  }

  function init() {
    document.querySelectorAll(".carousel").forEach(enhance);
  }

  if (document.readyState !== "loading") init();
  else document.addEventListener("DOMContentLoaded", init);
})();
