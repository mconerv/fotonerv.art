/* FotoNerv · магазин: витрина, конфигуратор, корзина, оформление, доставка, переход к оплате Robokassa. */
(function () {
  'use strict';

  var D = window.SHOP_DATA, C = window.ShopCore;
  if (!D || !C) return;

  var API = ((D.api && D.api.url) || '').replace(/\/+$/, '');
  var CDEK_SRC = 'assets/vendor/cdek-widget-4.1.0.umd.js';   // своя копия: без запросов к Google Fonts
  var CART_KEY = 'fotonerv-cart-v1';
  var MAX = (D.shop && D.shop.maxQty) || 10;

  /* ---------- утилиты ---------- */
  function $(s, el) { return (el || document).querySelector(s); }
  function $$(s, el) { return Array.prototype.slice.call((el || document).querySelectorAll(s)); }
  function esc(s) {
    return String(s == null ? '' : s).replace(/[&<>"']/g, function (c) {
      return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c];
    });
  }
  function money(n) { return Math.round(n).toLocaleString('ru-RU').replace(/\s/g, ' '); }
  function rub(n) { return money(n) + '<i>₽</i>'; }          // ₽ — Arsenal: в Oranienbaum знака нет
  function rubText(n) { return money(n) + ' ₽'; }
  function plural(n, a, b, c) { n = Math.abs(n) % 100; var m = n % 10; return n > 10 && n < 20 ? c : m > 1 && m < 5 ? b : m === 1 ? a : c; }
  function byId(list, id) { return C.byId(list, id); }
  // url() внутри CSS-переменной браузер разрешает от файла стилей, поэтому отдаём абсолютный адрес
  function abs(u) { try { return new URL(u, document.baseURI).href; } catch (e) { return u; } }
  function product(id) { var p = D.products[id]; return p && !p.hidden ? p : null; }
  function work(id) { return byId(D.works, id); }
  // работа с двумя ориентациями: основная (карточка в каталоге) и её пара
  function baseOf(w) { return (w && (w.pairOf || w.partOf) && work(w.pairOf || w.partOf)) || w; }
  // триптих: части слева направо (или null)
  function partsOf(w) { var b = baseOf(w); return b && b.triptych ? b.triptych.map(work).filter(Boolean) : null; }
  var PART_SHORT = ['Левая', 'Центральная', 'Правая'];
  function variants(w) { var b = baseOf(w), p = b && b.pair && work(b.pair); return p ? [b, p] : [b]; }
  function orientName(w) { return w.w > w.h ? 'Горизонтальная' : w.h > w.w ? 'Вертикальная' : 'Квадрат'; }
  function method(id) { return (D.delivery.methods || []).filter(function (m) { return m.id === id && m.enabled; })[0] || null; }
  var store = {
    get: function (k, def) { try { var v = window.localStorage.getItem(k); return v ? JSON.parse(v) : def; } catch (e) { return def; } },
    set: function (k, v) { try { window.localStorage.setItem(k, JSON.stringify(v)); } catch (e) { /* приватный режим */ } }
  };
  var AWARD_ICON = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" aria-hidden="true"><circle cx="12" cy="9" r="5.5"/><path d="M8.6 13.4 7 21l5-2.6 5 2.6-1.6-7.6"/></svg>';

  /* ---------- шапка: как на остальных страницах ---------- */
  var yr = $('#yr'); if (yr) yr.textContent = new Date().getFullYear();
  var hdr = $('#hdr'), nerve = $('#nerve-top');
  function onScroll() {
    var st = window.scrollY || document.documentElement.scrollTop;
    var h = document.documentElement.scrollHeight - window.innerHeight;
    if (hdr) hdr.classList.toggle('scrolled', st > 20);
    if (nerve) nerve.style.width = (h > 0 ? st / h * 100 : 0) + '%';
  }
  window.addEventListener('scroll', onScroll, { passive: true }); onScroll();
  var burger = $('#burger'), menu = $('#menu');
  if (burger && menu) {
    burger.addEventListener('click', function () {
      var open = menu.classList.toggle('open'); burger.classList.toggle('open', open);
      burger.setAttribute('aria-expanded', open);
    });
    $$('a', menu).forEach(function (a) {
      a.addEventListener('click', function () { menu.classList.remove('open'); burger.classList.remove('open'); burger.setAttribute('aria-expanded', false); });
    });
  }

  /* ---------- макеты ---------- */
  // Геометрия холста: фото «накрывает» лицо и торцы (галерейная натяжка), без искажения пропорций.
  function geom(o) {
    var ar = o.wcm / o.hcm, W = o.boxW * o.fillW, H = W / ar;
    if (H > o.boxH * o.fillH) { H = o.boxH * o.fillH; W = H * ar; }
    var D = Math.max(o.depth / o.wcm * W, o.minD || 0), m = o.wrap ? D : 0;
    var tw = W + 2 * m, th = H + 2 * m, iar = o.iw / o.ih, bw, bh;
    if (iar > tw / th) { bh = th; bw = th * iar; } else { bw = tw; bh = tw / iar; }
    var ox = (bw - tw) / 2, oy = (bh - th) / 2;
    return { W: W, H: H, D: D, bw: bw, bh: bh, fx: -(m + ox), fy: -(m + oy), rx: -(m + ox + W) };
  }
  function cssVars(g, img, u) {
    u = u || 'cqw';
    function f(n) { return n.toFixed(3) + u; }
    return "--img:url('" + abs(img) + "');--W:" + f(g.W) + ';--H:' + f(g.H) + ';--D:' + f(g.D) + ';--bw:' + f(g.bw) + ';--bh:' + f(g.bh) +
      ';--fx:' + f(g.fx) + ';--fy:' + f(g.fy) + ';--rx:' + f(g.rx);
  }
  // 3D-макет в контейнере (контейнер — container-type, 100cqw = его ширина)
  function mock3d(o) {
    var foam = o.kind === 'foam';
    var g = geom({ iw: o.iw, ih: o.ih, wcm: o.wcm, hcm: o.hcm, depth: foam ? 0.5 : o.depth, wrap: !foam,
      boxW: 100, boxH: o.boxH, fillW: o.fillW || 0.62, fillH: o.fillH || 0.66, minD: foam ? 0.7 : 1.2 });
    return '<span class="mk' + (foam ? ' foam' : '') + '" style="' + cssVars(g, o.img) + '" aria-hidden="true">' +
      '<span class="mk-obj"><span class="mk-sh"></span><span class="mk-face"></span><span class="mk-r"></span></span></span>';
  }
  // Комната — рендер 420 × 300 см (assets/shop-room-*.webp): стена параллельна кадру, 1 см = 100/420 cqw.
  // Спинка дивана на 185 см от верха сцены, низ отпечатка — на 22 см выше. Кадр — в реальном масштабе по стене.
  function roomHTML(o) {
    var k = 100 / 420, cx = 210, cy = 163 - o.hcm / 2;
    if (cy - o.hcm / 2 < 6) cy = 6 + o.hcm / 2;
    var foam = o.kind === 'foam';
    var g = geom({ iw: o.iw, ih: o.ih, wcm: o.wcm, hcm: o.hcm, depth: foam ? 0.5 : o.depth, wrap: !foam,
      boxW: o.wcm * k, boxH: o.hcm * k, fillW: 1, fillH: 1 });
    var left = (cx - o.wcm / 2) * k, top = (cy - o.hcm / 2) * k, dimTop = (cy + o.hcm / 2) * k + 1.1;
    var edge = Math.max(g.D * 0.35, 0.18);
    return '<div class="room-art' + (foam ? ' foam' : '') + '" style="' + cssVars(g, o.img) + ';left:' + left.toFixed(3) + 'cqw;top:' + top.toFixed(3) +
      'cqw;width:' + g.W.toFixed(3) + 'cqw;height:' + g.H.toFixed(3) + 'cqw;--edge:' + edge.toFixed(3) + 'cqw"></div>' +
      (o.label ? '<div class="room-dim" style="left:' + (cx * k).toFixed(3) + 'cqw;top:' + dimTop.toFixed(3) + 'cqw">' + esc(o.label) + '</div>' : '') +
      (o.note ? '<div class="room-note">' + esc(o.note) + '</div>' : '');
  }
  // Триптих на стене: части одного размера с зазором; невыбранные — пунктирный контур
  var TRIP_GAP = 4;
  function roomTripHTML(o) {
    var k = 100 / 420, n = o.parts.length, total = n * o.wcm + (n - 1) * TRIP_GAP, cy = 163 - o.hcm / 2;
    if (cy - o.hcm / 2 < 6) cy = 6 + o.hcm / 2;
    var foam = o.kind === 'foam', x0 = 210 - total / 2, top = (cy - o.hcm / 2) * k, html = '';
    var g = geom({ iw: o.iw, ih: o.ih, wcm: o.wcm, hcm: o.hcm, depth: foam ? 0.5 : o.depth, wrap: !foam, boxW: o.wcm * k, boxH: o.hcm * k, fillW: 1, fillH: 1 });
    var edge = Math.max(g.D * 0.35, 0.18);
    o.parts.forEach(function (pt, i) {
      var left = (x0 + i * (o.wcm + TRIP_GAP)) * k, pos = ';left:' + left.toFixed(3) + 'cqw;top:' + top.toFixed(3) + 'cqw;width:' + g.W.toFixed(3) + 'cqw;height:' + g.H.toFixed(3) + 'cqw';
      html += pt.on ? '<div class="room-art' + (foam ? ' foam' : '') + '" style="' + cssVars(g, pt.img) + pos + ';--edge:' + edge.toFixed(3) + 'cqw"></div>'
        : '<div class="room-ghost" style="' + pos.slice(1) + '"></div>';
    });
    var dimTop = (cy + o.hcm / 2) * k + 1.1;
    return html + (o.label ? '<div class="room-dim" style="left:' + (210 * k).toFixed(3) + 'cqw;top:' + dimTop.toFixed(3) + 'cqw">' + esc(o.label) + '</div>' : '');
  }
  // Триптих крупно: три макета в ряд
  function tripMock(o) {
    return '<span class="mk-trip" aria-hidden="true">' + o.parts.map(function (pt) {
      return '<span class="mk-cell' + (pt.on ? '' : ' off') + '">' + mock3d({ kind: o.kind, img: pt.img, iw: o.iw, ih: o.ih, wcm: o.wcm, hcm: o.hcm, depth: o.depth,
        boxH: o.boxH, fillW: o.fillW || 0.86, fillH: o.fillH || 0.8 }) + '</span>';
    }).join('') + '</span>';
  }
  function postcardMock(card, set) {
    var land = card.w >= card.h, car = land ? 1.5 : 1 / 1.5, cw = land ? 52 : 36;
    var back = set ? '<span class="pc-card back"></span>' : '<span class="pc-card back"></span>';
    return '<span class="pc-mk" style="--img:url(\'' + abs(card.thumb) + '\');--cw:' + cw + 'cqw;--car:' + car + '" aria-hidden="true">' + back + '<span class="pc-card front"></span></span>';
  }
  function setMock(cards) {
    var out = '';
    cards.slice(0, 3).forEach(function (c, i) {
      var land = c.w >= c.h, car = land ? 1.5 : 1 / 1.5, cw = land ? 44 : 30;
      var t = ['rotate(-10deg) translate(-26%,-4%)', 'rotate(3deg) translate(0,-8%)', 'rotate(12deg) translate(26%,4%)'][i];
      out += '<span class="pc-card front" style="--img:url(\'' + abs(c.thumb) + '\');--cw:' + cw + 'cqw;--car:' + car + ';transform:' + t + '"></span>';
    });
    return '<span class="pc-mk" aria-hidden="true">' + out + '</span>';
  }

  /* ---------- витрина ---------- */
  function minAny(w) {
    var m = Infinity, pts = partsOf(w);
    if (pts) { (pts[0].products || []).forEach(function (pid) { var x = C.minPrice(D, pts[0], pid); if (x != null && x < m) m = x; }); return m === Infinity ? null : m; }
    variants(w).forEach(function (v) { (v.products || []).forEach(function (pid) { var x = C.minPrice(D, v, pid); if (x != null && x < m) m = x; }); });
    return m === Infinity ? null : m;
  }
  function tripCard(w, pts) {
    var pid = (w.products || [])[0], min = minAny(w), sizes = C.sizesFor(D, pts[0], pid);
    if (min == null || !sizes.length) return '';
    var ex = sizes.filter(function (x) { return x.cut.part <= 0.08; }), s = (ex.length ? ex : sizes)[0].size, o = C.orient(pts[0], s);
    var opt = product(pid).options[product(pid).options.length - 1];
    return '<button type="button" class="pcard" data-open="' + esc(w.id) + '" data-product="' + pid + '" data-tags="' + esc((w.tags || []).join(' ')) + '">' +
      '<span class="pcard-vis">' + tripMock({ kind: pid, parts: pts.map(function (p) { return { img: p.thumb, on: true }; }), iw: pts[0].w, ih: pts[0].h,
        wcm: o.w, hcm: o.h, depth: opt.depth, boxH: 266.7, fillW: 0.86, fillH: 0.6 }) +
      '<span class="pcard-go">Выбрать размер</span></span>' +
      '<span class="pcard-t">' + esc(w.title) + '</span>' +
      '<span class="pcard-m"><span>' + esc(w.caption || 'Триптих') + '</span><span>от <b>' + rub(min) + '</b> / часть</span></span></button>';
  }
  function cardFor(w) {
    var pts = partsOf(w); if (pts) return tripCard(w, pts);
    var pid = (w.products || [])[0], min = minAny(w), sizes = C.sizesFor(D, w, pid);
    if (min == null || !sizes.length) return '';
    var ex = sizes.filter(function (x) { return x.fit === 'exact'; }), pool = ex.length ? ex : sizes;
    var mid = pool[Math.min(1, pool.length - 1)].size, o = C.orient(w, mid);
    var opt = product(pid).options[product(pid).options.length - 1];
    var two = variants(w).length > 1;
    return '<button type="button" class="pcard" data-open="' + esc(w.id) + '" data-product="' + pid + '" data-tags="' + esc((w.tags || []).join(' ')) + '">' +
      '<span class="pcard-vis">' + (w.award ? '<span class="award">' + AWARD_ICON + esc(w.award.title) + '</span>' : '') +
      mock3d({ kind: pid, img: w.thumb, iw: w.w, ih: w.h, wcm: o.w, hcm: o.h, depth: opt.depth, boxH: 80 }) +
      '<span class="pcard-go">Выбрать размер</span></span>' +
      '<span class="pcard-t">' + esc(w.title) + '</span>' +
      '<span class="pcard-m"><span>' + esc(w.caption || '') + (two ? ' · 2 ориентации' : '') + '</span><span>от <b>' + rub(min) + '</b></span></span></button>';
  }
  function ratioLabel(s) {
    var r = s.b / s.a;
    return Math.abs(r - 1) < 0.03 ? '1:1' : Math.abs(r - 4 / 3) < 0.04 ? '3:4' : Math.abs(r - 1.5) < 0.04 ? '2:3' : Math.abs(r - 1.25) < 0.04 ? '4:5' : Math.abs(r - 1.2) < 0.02 ? '5:6' :
      Math.abs(r - 1.4) < 0.05 ? '5:7' : Math.abs(r - 16 / 9) < 0.05 ? '16:9' : r > 2.1 ? 'панорама' : r.toFixed(2);
  }
  function tableFor(pid) {
    var p = product(pid);
    var rows = p.sizes.slice().sort(function (x, y) { return (x.b / x.a) - (y.b / y.a) || x.a * x.b - y.a * y.b; });
    var cols = p.tableCols ? p.tableCols.map(function (c) { return { id: c.opt, label: c.label }; }) : p.options;
    var head = '<tr><th>Размер</th><th>Пропорции</th>' + cols.map(function (o) {
      return '<th>' + esc(pid === 'canvas' ? o.label : 'Цена') + '</th>';
    }).join('') + (pid === 'foam' ? '<th>Основа</th>' : '') + '</tr>';
    var body = rows.map(function (s) {
      return '<tr><td class="n">' + C.sizeLabel(s) + '</td><td>' + ratioLabel(s) + '</td>' + cols.map(function (o) {
        return '<td>' + (s.price[o.id] ? rub(s.price[o.id]) : '—') + '</td>';
      }).join('') + (pid === 'foam' ? '<td>' + (s.thickness || 5) + ' мм</td>' : '') + '</tr>';
    }).join('');
    return '<table class="ptable"><thead>' + head + '</thead><tbody>' + body + '</tbody></table>' +
      '<p class="psec-note">Форматы типографии фиксированные. Если пропорции кадра другие, он кадрируется под формат по центру — в карточке работы видно, что войдёт в отпечаток.</p>';
  }
  function renderSections() {
    ['canvas', 'foam'].forEach(function (pid) {
      var sec = $('#' + pid), p = product(pid);
      if (!sec || !p) return;
      $('[data-lead]', sec).textContent = p.lead || '';
      $('[data-specs]', sec).innerHTML = (p.specs || []).map(function (s) { return '<li>' + esc(s) + '</li>'; }).join('');
      var note = $('[data-note]', sec); if (note) { note.textContent = p.note || ''; note.hidden = !p.note; }
      $('[data-table]', sec).innerHTML = tableFor(pid);
    });
    renderWorks();
    var pc = product('postcard'), secC = $('#cards');
    if (!pc) { if (secC) secC.hidden = true; $$('a[href="#cards"]').forEach(function (a) { a.hidden = true; }); }
    if (pc && secC) {
      $('[data-lead]', secC).textContent = pc.lead || '';
      $('[data-specs]', secC).innerHTML = (pc.specs || []).map(function (s) { return '<li>' + esc(s) + '</li>'; }).join('') +
        '<li>Открытка — ' + rubText(pc.price) + (pc.set ? ', набор из ' + D.postcards.length + ' — ' + rubText(pc.set.price) : '') + '</li>';
      var html = '';
      if (pc.set && D.postcards.length) {
        html += '<div class="pcard"><span class="pcard-vis pc-vis">' + setMock(D.postcards) + '</span>' +
          '<span class="pcard-t">' + esc(pc.set.title) + '</span><span class="pcard-m"><span>' + D.postcards.length + ' ' +
          plural(D.postcards.length, 'открытка', 'открытки', 'открыток') + '</span><span><b>' + rub(pc.set.price) + '</b></span></span>' +
          '<span class="pc-actions">' + qtyHTML('set') + '<button type="button" class="btn btn-solid" data-add-card="set">В корзину</button></span></div>';
      }
      D.postcards.forEach(function (c) {
        html += '<div class="pcard"><span class="pcard-vis pc-vis">' + postcardMock(c) + '</span>' +
          '<span class="pcard-t">' + esc(c.title) + '</span><span class="pcard-m"><span>Открытка 10 × 15 см</span><span><b>' + rub(pc.price) + '</b></span></span>' +
          '<span class="pc-actions">' + qtyHTML(c.id) + '<button type="button" class="btn" data-add-card="' + esc(c.id) + '">В корзину</button></span></div>';
      });
      $('[data-grid]', secC).innerHTML = html;
    }
    var fc = $('#fromCanvas'), ff = $('#fromFoam'), fp = $('#fromCards');
    function minOf(pid) { var m = Infinity; D.works.forEach(function (w) { var v = (w.products || []).indexOf(pid) >= 0 ? C.minPrice(D, w, pid) : null; if (v != null && v < m) m = v; }); return m; }
    if (fc && minOf('canvas') < Infinity) fc.textContent = 'от ' + rubText(minOf('canvas'));
    if (ff && minOf('foam') < Infinity) ff.textContent = 'от ' + rubText(minOf('foam'));
    if (fp && pc) fp.textContent = 'от ' + rubText(pc.price);
    $$('[data-fill]').forEach(function (el) { var v = D.shop && D.shop[el.getAttribute('data-fill')]; if (v) el.textContent = v; });
  }
  // каталог: карточки и фильтр по меткам
  var filter = 'all';
  function renderWorks() {
    var grid = $('#worksGrid'), bar = $('#shopFilter'); if (!grid) return;
    var list = D.works.filter(function (w) { return !w.pairOf && !w.partOf; });
    grid.innerHTML = list.map(cardFor).join('');
    var n = $$('.pcard', grid).length, cnt = $('#worksCount');
    if (cnt) cnt.textContent = n + ' ' + plural(n, 'работа', 'работы', 'работ');
    if (!bar) return;
    var tags = (D.tags || []).filter(function (t) { return list.some(function (w) { return (w.tags || []).indexOf(t[0]) >= 0; }); });
    bar.hidden = !tags.length;
    bar.innerHTML = '<button type="button" class="chip active" data-tag="all" aria-pressed="true">Все</button>' + tags.map(function (t) {
      return '<button type="button" class="chip" data-tag="' + esc(t[0]) + '" aria-pressed="false">' + esc(t[1]) + '</button>';
    }).join('');
    bar.addEventListener('click', function (e) {
      var b = e.target.closest('[data-tag]'); if (!b) return;
      filter = b.getAttribute('data-tag');
      $$('[data-tag]', bar).forEach(function (x) { var on = x === b; x.classList.toggle('active', on); x.setAttribute('aria-pressed', on); });
      $$('.pcard', grid).forEach(function (c) { c.hidden = filter !== 'all' && (' ' + c.getAttribute('data-tags') + ' ').indexOf(' ' + filter + ' ') < 0; });
    });
  }
  function qtyHTML(id) {
    return '<span class="qty" data-qty="' + esc(id) + '"><button type="button" data-d="-1" aria-label="Меньше">−</button><output>1</output><button type="button" data-d="1" aria-label="Больше">+</button></span>';
  }
  function renderSeller() {
    var s = D.seller || {}, el = $('#seller'), fr = $('#footReq');
    var inn = s.inn ? esc(s.inn) : '<span class="todo">укажите ИНН в assets/shop-data.js</span>';
    if (el) {
      el.innerHTML = '<dt>Продавец</dt><dd>' + esc(s.name) + ', ' + esc(s.status) + '</dd>' +
        '<dt>ИНН</dt><dd>' + inn + '</dd>' +
        '<dt>Город</dt><dd>' + esc(s.city) + '</dd>' +
        '<dt>Телефон</dt><dd><a href="tel:' + esc((s.phone || '').replace(/[^+\d]/g, '')) + '">' + esc(s.phone) + '</a></dd>' +
        '<dt>Email</dt><dd><a href="mailto:' + esc(s.email) + '">' + esc(s.email) + '</a></dd>' +
        (s.telegram ? '<dt>Telegram</dt><dd><a href="https://t.me/' + esc(s.telegram) + '" target="_blank" rel="noopener">@' + esc(s.telegram) + '</a></dd>' : '');
    }
    if (fr) fr.innerHTML = 'Продавец: ' + esc(s.name) + ', ' + esc(s.status) + ' · ИНН ' + inn + ' · ' + esc(s.city) +
      ' · <a href="mailto:' + esc(s.email) + '" style="color:inherit">' + esc(s.email) + '</a> · ' + esc(s.phone);
  }
  function renderHero() {
    var w = D.works.filter(function (x) { return x.award; })[0] || D.works[0];
    if (!w) return;
    var sizes = C.sizesFor(D, w, 'canvas'); if (!sizes.length) return;
    var fitS = sizes.filter(function (x) { return x.size.b <= 90; });   // крупный формат нагляднее, но без крайностей
    var s = (fitS.length ? fitS[fitS.length - 1] : sizes[sizes.length - 1]).size, o = C.orient(w, s);
    var room = $('#heroRoom');
    room.innerHTML = roomHTML({ kind: 'canvas', img: w.thumb, iw: w.w, ih: w.h, wcm: o.w, hcm: o.h, depth: 2, label: C.sizeLabel(s) });
    $('#heroCap').innerHTML = '«' + esc(w.title) + '», холст ' + C.sizeLabel(s) + (w.award ? ' · ' + esc(w.award.title) : '');
    room.setAttribute('role', 'img'); room.setAttribute('aria-label', 'Работа «' + w.title + '» на холсте ' + C.sizeLabel(s) + ' над диваном в комнате');
    var btn = $('#heroOpen'); btn.addEventListener('click', function () { openCfg(w.id, 'canvas', s.id); });
  }

  /* ---------- корзина: хранилище ---------- */
  var cart = (store.get(CART_KEY, []) || []).filter(function (it) { return C.line(D, it).ok; });
  function saveCart() { store.set(CART_KEY, cart); badge(); }
  function badge(bump) {
    var n = cart.reduce(function (s, it) { return s + it.qty; }, 0), c = $('#cartCount');
    if (c) { c.textContent = n; c.setAttribute('data-n', n); }
    var b = $('#cartBtn'); if (b) b.setAttribute('aria-label', 'Корзина: ' + n + ' ' + plural(n, 'товар', 'товара', 'товаров'));
    if (bump && b) { b.classList.remove('bump'); void b.offsetWidth; b.classList.add('bump'); }
  }
  function addItem(it) {
    var k = C.key(it), ex = cart.filter(function (x) { return C.key(x) === k; })[0];
    if (ex) ex.qty = Math.min(MAX, ex.qty + it.qty); else cart.push(it);
    saveCart(); badge(true); resetQuotes();
  }
  var toastTimer;
  function toast(text, action, fn) {
    var t = $('#toast'); if (!t) return;
    t.innerHTML = '<span>' + esc(text) + '</span>' + (action ? '<button type="button">' + esc(action) + '</button>' : '');
    t.hidden = false;
    if (action) $('button', t).onclick = function () { t.hidden = true; fn(); };
    clearTimeout(toastTimer); toastTimer = setTimeout(function () { t.hidden = true; }, 4200);
  }

  /* ---------- открытки: количество и добавление ---------- */
  document.addEventListener('click', function (e) {
    var q = e.target.closest('.qty[data-qty] button');
    if (q) {
      var out = $('output', q.parentNode), v = Math.max(1, Math.min(MAX, (+out.textContent || 1) + (+q.getAttribute('data-d'))));
      out.textContent = v; return;
    }
    var add = e.target.closest('[data-add-card]');
    if (add) {
      var id = add.getAttribute('data-add-card'), box = add.parentNode, qn = +($('.qty output', box) || {}).textContent || 1;
      addItem({ product: 'postcard', work: id, qty: qn });
      toast(id === 'set' ? 'Набор открыток в корзине' : 'Открытка в корзине', 'Открыть корзину', openCart);
      return;
    }
    var open = e.target.closest('[data-open]');
    if (open) openCfg(open.getAttribute('data-open'), open.getAttribute('data-product'));
  });

  /* ---------- конфигуратор ---------- */
  var cfg = { work: null, product: 'canvas', size: null, option: null, qty: 1, view: 'room', wall: 'light', parts: null };
  var cfgEl = $('#cfg'), lastFocus = null;

  function openCfg(workId, pid, sizeId) {
    var w = work(workId); if (!w) return;
    var pts = partsOf(w);
    cfg.parts = pts ? pts.map(function (p) { return !w.partOf || p.id === w.id; }) : null;   // по умолчанию — весь триптих
    if (pts) w = pts[0];   // размеры и цены считаем по части
    cfg.work = w;
    cfg.product = (w.products || []).indexOf(pid) >= 0 ? pid : w.products[0];
    cfg.qty = 1; cfg.size = sizeId || null; cfg.option = null;
    pickDefaults();
    lastFocus = document.activeElement;
    cfgEl.hidden = false; document.body.classList.add('lock');
    $('#cfgAdded').hidden = true;
    renderCfg();
    $('.cfg-box', cfgEl).focus({ preventScroll: true });
    try { history.replaceState(null, '', '#' + baseOf(w).id); } catch (e) { /* file:// */ }
  }
  function closeCfg() {
    cfgEl.hidden = true; document.body.classList.remove('lock');
    try { history.replaceState(null, '', location.pathname + location.search); } catch (e) { /* file:// */ }
    if (lastFocus && lastFocus.focus) lastFocus.focus();
  }
  function pickDefaults() {
    var sizes = C.sizesFor(D, cfg.work, cfg.product);
    if (!sizes.some(function (x) { return x.size.id === cfg.size; })) {
      var ex = sizes.filter(function (x) { return x.cut.part <= 0.08; }), pool = ex.length ? ex : sizes;
      var best = pool[0], d = Infinity;   // по умолчанию — обрезка не больше 8 % и ближе к 60 см по длинной стороне
      pool.forEach(function (x) { var dd = Math.abs(x.size.b - 60); if (dd < d) { d = dd; best = x; } });
      cfg.size = best && best.size.id;
    }
    var opts = product(cfg.product).options;
    if (!byId(opts, cfg.option)) cfg.option = opts[0].id;
    fixOption();
  }
  // у варианта (например, синтетического холста) может не быть цены на этот размер — берём вариант с той же толщиной
  function fixOption() {
    var p = product(cfg.product), s = byId(p.sizes, cfg.size), o = byId(p.options, cfg.option);
    if (!s || !o || s.price[o.id] > 0) return;
    var alt = p.options.filter(function (x) { return s.price[x.id] > 0 && x.depth === o.depth; })[0] || p.options.filter(function (x) { return s.price[x.id] > 0; })[0];
    if (alt) cfg.option = alt.id;
  }
  function optPrice(size) {
    var p = product(cfg.product), o = byId(p.options, cfg.option);
    if (size.price[cfg.option] > 0 || !o) return size.price[cfg.option];
    var alt = p.options.filter(function (x) { return size.price[x.id] > 0 && x.depth === o.depth; })[0];
    return alt ? size.price[alt.id] : null;
  }
  function cfgItems() {
    var pts = partsOf(cfg.work), ids = pts ? pts.filter(function (p, i) { return cfg.parts[i]; }).map(function (p) { return p.id; }) : [cfg.work.id];
    return ids.map(function (id) { return { product: cfg.product, work: id, size: cfg.size, option: cfg.option, qty: cfg.qty }; });
  }
  // одна позиция или сумма по выбранным частям триптиха
  function cfgLine() {
    var ls = cfgItems().map(function (it) { return C.line(D, it); });
    if (!ls.length) return { ok: false, sum: 0, n: 0 };
    var l = {}; for (var k in ls[0]) l[k] = ls[0][k];
    l.ok = ls.every(function (x) { return x.ok; }); l.sum = ls.reduce(function (a, x) { return a + (x.sum || 0); }, 0); l.n = ls.length;
    return l;
  }
  function renderCfg() {
    var w = cfg.work, p = product(cfg.product), sizes = C.sizesFor(D, w, cfg.product), l = cfgLine();
    $('#cfgTitle').textContent = baseOf(w).title;
    var vs = variants(w);
    $('#cfgOrientWrap').hidden = vs.length < 2;
    $('#cfgOrient').innerHTML = vs.length < 2 ? '' : vs.map(function (v) {
      return '<button type="button" data-w="' + esc(v.id) + '" aria-pressed="' + (v.id === w.id) + '">' + orientName(v) + '</button>';
    }).join('');
    $('#cfgCap').textContent = baseOf(w).caption || w.caption || '';
    var pts = partsOf(w);
    $('#cfgPartsWrap').hidden = !pts;
    if (pts) {
      $('#cfgParts').innerHTML = pts.map(function (p, i) {
        return '<button type="button" data-part="' + i + '" aria-pressed="' + !!cfg.parts[i] + '">' + PART_SHORT[i] + '</button>';
      }).join('');
      var n = cfg.parts.filter(Boolean).length;
      $('#cfgPartsNote').textContent = n === 3 ? 'Весь триптих — три части одного размера, вешаются с зазором 3–5 см.' :
        n + ' ' + plural(n, 'часть', 'части', 'частей') + ' из трёх. Нажмите на часть, чтобы добавить или убрать её.';
    }
    var aw = $('#cfgAward');
    if (w.award) { aw.hidden = false; aw.innerHTML = AWARD_ICON + '<span><b>' + esc(w.award.title) + '</b>' + (w.award.detail ? ' · ' + esc(w.award.detail) : '') + '</span>'; }
    else aw.hidden = true;
    var prods = (w.products || []).filter(function (id) { return C.sizesFor(D, w, id).length; });
    $('#cfgProductWrap').hidden = prods.length < 2;
    $('#cfgProduct').innerHTML = prods.map(function (id) {
      return '<button type="button" data-p="' + id + '" aria-pressed="' + (id === cfg.product) + '">' + esc(product(id).title) + '</button>';
    }).join('');
    $('#cfgSizes').innerHTML = sizes.map(function (x) {
      var pr = optPrice(x.size), only = !(x.size.price[cfg.option] > 0) && pr > 0 ? ' · только натуральный' : '';
      return '<button type="button" data-s="' + x.size.id + '" aria-pressed="' + (x.size.id === cfg.size) + '"' + (x.fit === 'crop' ? ' class="cropped" title="С кадрированием"' : '') + '>' + C.sizeLabel(x.size) + '<small>' + rubText(pr) + (pts ? ' / часть' : '') + only + (x.fit === 'crop' ? ' · кадр.' : '') + '</small></button>';
    }).join('');
    var cur = sizes.filter(function (x) { return x.size.id === cfg.size; })[0];
    var fitEl = $('#cfgFit');
    fitEl.hidden = !(cur && cur.fit === 'crop');
    if (cur && cur.fit === 'crop') {
      var pc = Math.round(cur.cut.part * 100);
      fitEl.textContent = 'Формат ' + ratioLabel(cur.size) + ' не совпадает с пропорциями кадра: по ' + (((cur.cut.side === 'long') === (w.h > w.w)) ? 'высоте' : 'ширине') +
        ' уйдёт около ' + pc + ' % кадра — поровну с каждого края. На превью показан итоговый кадр.';
    }
    var curOpt = byId(p.options, cfg.option) || p.options[0];
    var mats = p.materials || [];
    $('#cfgMatWrap').hidden = mats.length < 2;
    if (mats.length > 1) {
      $('#cfgMats').innerHTML = mats.map(function (m) {
        var o = p.options.filter(function (x) { return x.mat === m.id && x.depth === curOpt.depth; })[0];
        var pr = cur && o ? cur.size.price[o.id] : 0, off = !(pr > 0);
        return '<button type="button" data-m="' + m.id + '" aria-pressed="' + (m.id === curOpt.mat) + '"' + (off ? ' disabled title="Нет в этом размере"' : '') + '>' + esc(m.label) + '<small>' + (off ? 'нет в этом размере' : rubText(pr)) + '</small></button>';
      }).join('');
      var cm = byId(mats, curOpt.mat); $('#cfgMatNote').textContent = cm && cm.note ? cm.note : '';
    }
    var shown = curOpt.mat ? p.options.filter(function (o) { return o.mat === curOpt.mat; }) : p.options;
    var many = shown.length > 1;
    $('#cfgOptWrap').hidden = !many;
    if (many) {
      $('#cfgOpts').innerHTML = shown.map(function (o) {
        var pr = cur ? cur.size.price[o.id] : 0;
        return '<button type="button" data-o="' + o.id + '" aria-pressed="' + (o.id === cfg.option) + '">' + esc(o.label) + '<small>' + rubText(pr) + '</small></button>';
      }).join('');
    }
    $('#cfgPrice').innerHTML = l.ok ? rub(l.sum) : '—';
    $('#cfgQty').textContent = cfg.qty;
    $('#cfgMinus').disabled = cfg.qty <= 1; $('#cfgPlus').disabled = cfg.qty >= MAX;
    $('#cfgAdd').disabled = !l.ok;
    $('#cfgSpecs').innerHTML = (p.specs || []).map(function (s) { return '<li>' + esc(s) + '</li>'; }).join('') +
      '<li>Изготовление — ' + esc((D.shop && D.shop.productionDays) || '') + ', доставку посчитаем при оформлении</li>';
    var note = $('#cfgNote'); note.textContent = p.note || ''; note.hidden = !p.note;
    $$('#cfgView button').forEach(function (b) { b.setAttribute('aria-pressed', b.getAttribute('data-view') === cfg.view); });
    $$('#cfgWall button').forEach(function (b) { b.setAttribute('aria-pressed', b.getAttribute('data-wall') === cfg.wall); });
    $('#cfgWall').hidden = cfg.view !== 'room';
    renderStage(l);
  }
  function renderStage(l) {
    var st = $('#cfgStage'), w = cfg.work, hint = $('#cfgHint');
    if (!l.ok) { st.innerHTML = ''; return; }
    var pts = partsOf(w);
    if (pts) {
      var parts = pts.map(function (p, i) { return { img: cfg.view === 'room' ? p.thumb : p.img, on: !!cfg.parts[i] }; });
      var lab = C.sizeLabel({ a: Math.min(l.w, l.h), b: Math.max(l.w, l.h) });
      if (cfg.view === 'room') {
        st.innerHTML = '<div class="room ' + cfg.wall + '">' + roomTripHTML({ kind: cfg.product, parts: parts, iw: w.w, ih: w.h, wcm: l.w, hcm: l.h, depth: l.depth,
          label: (l.n > 1 ? l.n + ' × ' : '') + lab + (l.n > 1 ? ', зазор ' + TRIP_GAP + ' см' : '') }) + '</div>';
        hint.textContent = 'Триптих в реальном масштабе по стене. Пунктир — части, которые не выбраны. Диван — 210 см в ширину.';
      } else {
        st.innerHTML = tripMock({ kind: cfg.product, parts: parts, iw: w.w, ih: w.h, wcm: l.w, hcm: l.h, depth: l.depth, boxH: 238.1, fillW: 0.86, fillH: 0.62 });
        hint.textContent = cfg.product === 'canvas' ? 'Галерейная натяжка: кадр каждой части продолжается на торцы подрамника ' + l.depth + ' см.'
          : 'Фотобумага на белом пенокартоне — по краю видна кромка основы.';
      }
      return;
    }
    if (cfg.view === 'room') {
      st.innerHTML = '<div class="room ' + cfg.wall + '">' + roomHTML({ kind: cfg.product, img: w.thumb, iw: w.w, ih: w.h, wcm: l.w, hcm: l.h, depth: l.depth,
        label: C.sizeLabel({ a: Math.min(l.w, l.h), b: Math.max(l.w, l.h) }) }) + '</div>';
      hint.textContent = 'Кадр показан в реальном масштабе по стене. Диван — 210 см в ширину, потолок — 270 см.';
    } else {
      st.innerHTML = mock3d({ kind: cfg.product, img: w.img, iw: w.w, ih: w.h, wcm: l.w, hcm: l.h, depth: l.depth, boxH: 71.43, fillW: 0.6, fillH: 0.72 });
      hint.textContent = cfg.product === 'canvas'
        ? 'Галерейная натяжка: кадр продолжается на торцы подрамника ' + l.depth + ' см.'
        : 'Фотобумага на белом пенокартоне — по краю видна кромка основы.';
    }
  }
  if (cfgEl) {
    cfgEl.addEventListener('click', function (e) {
      if (e.target === cfgEl) { closeCfg(); return; }
      var b;
      if ((b = e.target.closest('[data-w]'))) {
        var nw = work(b.getAttribute('data-w')); if (!nw || nw === cfg.work) return;
        cfg.work = nw; if ((nw.products || []).indexOf(cfg.product) < 0) cfg.product = nw.products[0];
        pickDefaults(); $('#cfgAdded').hidden = true; renderCfg();
        try { history.replaceState(null, '', '#' + nw.id); } catch (err) { /* file:// */ }
        return;
      }
      if ((b = e.target.closest('[data-p]'))) { cfg.product = b.getAttribute('data-p'); pickDefaults(); renderCfg(); return; }
      if ((b = e.target.closest('[data-s]'))) { cfg.size = b.getAttribute('data-s'); fixOption(); renderCfg(); return; }
      if ((b = e.target.closest('[data-m]'))) {
        if (b.disabled) return;
        var pp = product(cfg.product), co = byId(pp.options, cfg.option) || {}, mid = b.getAttribute('data-m');
        var no = pp.options.filter(function (x) { return x.mat === mid && x.depth === co.depth; })[0] || pp.options.filter(function (x) { return x.mat === mid; })[0];
        if (no) { cfg.option = no.id; renderCfg(); }
        return;
      }
      if ((b = e.target.closest('[data-o]'))) { cfg.option = b.getAttribute('data-o'); renderCfg(); return; }
      if ((b = e.target.closest('[data-part]'))) {
        var pi = +b.getAttribute('data-part');
        if (cfg.parts[pi] && cfg.parts.filter(Boolean).length === 1) return;   // хотя бы одна часть
        cfg.parts[pi] = !cfg.parts[pi]; $('#cfgAdded').hidden = true; renderCfg(); return;
      }
      if ((b = e.target.closest('[data-view]'))) { cfg.view = b.getAttribute('data-view'); renderCfg(); return; }
      if ((b = e.target.closest('[data-wall]'))) { cfg.wall = b.getAttribute('data-wall'); renderCfg(); return; }
    });
    $('#cfgClose').addEventListener('click', closeCfg);
    $('#cfgMinus').addEventListener('click', function () { cfg.qty = Math.max(1, cfg.qty - 1); renderCfg(); });
    $('#cfgPlus').addEventListener('click', function () { cfg.qty = Math.min(MAX, cfg.qty + 1); renderCfg(); });
    $('#cfgAdd').addEventListener('click', function () {
      var l = cfgLine(); if (!l.ok) return;
      cfgItems().forEach(addItem);
      $('#cfgAdded').hidden = false;
    });
    $('#cfgToCart').addEventListener('click', function () { closeCfg(); openCart(); });
  }

  /* ---------- корзина и оформление ---------- */
  var cartEl = $('#cart'), step = 'cart';
  var co = { name: '', phone: '', email: '', method: '', comment: '', offer: false, pd: false,
    cdek: null, pochta: { index: '', address: '', pvz: '', price: null, min: null, max: null, err: '', busy: false },
    pickup: { price: 0 }, busy: false, err: '' };
  var pochtaSeq = 0, cdekSeq = 0;

  // состав корзины изменился — стоимость доставки нужно пересчитать
  function resetQuotes() {
    if (co.cdek) co.cdek.price = null;
    co.pochta.price = null; co.pochta.err = '';
    if (step === 'checkout') refreshQuotes();
  }
  function refreshQuotes() {
    var m = method(co.method);
    if (!m || mOff(m)) return;
    if (co.cdek && co.cdek.price == null) confirmCdek();
    if (co.pochta.index.length === 6 && co.pochta.price == null && !co.pochta.err) quotePochta();
  }
  function openCart() {
    cartEl.hidden = false; document.body.classList.add('lock'); step = cart.length ? step : 'cart';
    renderCart(); $('#cartClose').focus();
  }
  function closeCart() { cartEl.hidden = true; if (cfgEl.hidden) document.body.classList.remove('lock'); }
  function q() { return C.quote(D, cart); }
  // Пусто — способ доступен; иначе строка с причиной
  function mOff(m) {
    if (m.soon) return m.soonNote || 'Пока недоступно';
    if (!C.methodOk(m, q().packages)) return m.tooBig || 'Не подходит для этого размера';
    return '';
  }
  function deliveryPrice() {
    var m = method(co.method);
    if (!m || mOff(m)) return null;
    if (co.method === 'pickup') return (method('pickup') || {}).price || 0;
    if (co.method === 'cdek') return co.cdek && co.cdek.price != null ? co.cdek.price : null;
    if (co.method === 'pochta') return co.pochta.price;
    return null;
  }
  function renderCart() {
    var body = $('#cartBody'), foot = $('#cartFoot'), qq = q();
    // Корзина могла измениться после выбора способа — крупный холст отменяет Почту
    if (co.method) { var cm = method(co.method); if (!cm || mOff(cm)) { co.method = ''; co.err = ''; } }
    $('#cartBack').hidden = step !== 'checkout';
    $('#cartTitle').textContent = step === 'checkout' ? 'Оформление' : 'Корзина';
    if (!cart.length) {
      step = 'cart';
      body.innerHTML = '<div class="cart-empty"><p>В корзине пока пусто.</p><a class="btn" href="#works" data-close-cart>Перейти к каталогу</a></div>';
      foot.innerHTML = ''; foot.hidden = true; return;
    }
    foot.hidden = false;
    if (step === 'cart') {
      body.innerHTML = qq.lines.map(function (l, i) {
        return '<div class="cline"><span class="cline-img" style="background-image:url(\'' + esc(l.img) + '\')"></span><div>' +
          '<div class="cline-t">' + esc(l.title) + '</div><div class="cline-d">' + esc(l.kind === 'print' ? '«' + l.workTitle + '», ' + l.detail : l.detail) + '</div>' +
          '<div class="cline-c"><span class="qty"><button type="button" data-ci="' + i + '" data-d="-1" aria-label="Меньше"' + (l.qty <= 1 ? ' disabled' : '') + '>−</button><output>' + l.qty +
          '</output><button type="button" data-ci="' + i + '" data-d="1" aria-label="Больше"' + (l.qty >= MAX ? ' disabled' : '') + '>+</button></span>' +
          '<button type="button" class="cline-rm" data-rm="' + i + '">Удалить</button></div></div>' +
          '<div class="cline-sum">' + rub(l.sum) + '</div></div>';
      }).join('');
      foot.innerHTML = '<div class="sum-row total"><span>Товары</span><b>' + rub(qq.goods) + '</b></div>' +
        '<button type="button" class="btn btn-solid" id="toCheckout">Оформить заказ</button>' +
        '<p class="foot-note">Доставку и итог посчитаем на следующем шаге.</p>';
      return;
    }
    renderCheckout(qq);
  }
  function mOpt(m) {
    // Недоступный способ не прячем: покупателю важно видеть, что он есть и почему сейчас не работает
    var off = mOff(m);
    if (off) {
      return '<div class="dopt off"><label class="dopt-h"><input type="radio" name="dm" value="' + m.id + '" disabled>' +
        '<span class="dopt-t">' + esc(m.title) + '</span><span class="dopt-p">' + esc(m.soon || '') + '</span>' +
        '<span class="dopt-l">' + esc(off) + '</span></label></div>';
    }
    var price = '';
    if (m.id === 'pickup') price = 'бесплатно';
    else if (m.id === 'cdek' && co.cdek && co.cdek.price != null) price = rub(co.cdek.price);
    else if (m.id === 'pochta' && co.pochta.price != null) price = rub(co.pochta.price);
    var more = '';
    if (m.id === 'cdek') {
      var c = co.cdek;
      more = c ? '<div class="dopt-res">' + esc(c.office.address) + '<small>' + esc(c.tariff_name || 'СДЭК') +
        (c.min ? ' · ' + c.min + (c.max && c.max !== c.min ? '–' + c.max : '') + ' дн.' : '') + '</small>' +
        (c.busy ? '<small>Проверяем стоимость…</small>' : '') + (c.err ? '<small class="err">' + esc(c.err) + '</small>' : '') + '</div>' : '';
      more += '<button type="button" class="link-btn" id="cdekPick">' + (co.cdek ? 'Изменить пункт' : 'Выбрать пункт выдачи на карте') + '</button>';
    }
    if (m.id === 'pochta') {
      // Карта отделений — удобство, а не единственный путь: поля индекса и адреса есть всегда,
      // иначе при недоступном виджете Почту нельзя было бы выбрать вообще.
      var r = co.pochta;
      more = (m.widgetId ? '<button type="button" class="link-btn" id="pochtaPick">' +
        (r.index ? 'Выбрать другое отделение на карте' : 'Выбрать отделение на карте') + '</button>' : '') +
        '<div class="row2"><div class="field"><label for="coIndex">Индекс</label><input id="coIndex" inputmode="numeric" maxlength="6" autocomplete="postal-code" value="' + esc(r.index) + '" placeholder="188650"></div>' +
        '<div class="field"><label for="coAddr">Адрес</label><input id="coAddr" autocomplete="street-address" value="' + esc(r.address) + '" placeholder="Город, улица, дом, квартира"></div></div>' +
        '<div class="dopt-res' + (r.err ? ' err' : '') + '" id="pochtaRes">' + pochtaResHTML() + '</div>';
    }
    if (m.id === 'pickup') more = '<div class="dopt-res"><small>Договоримся о месте и времени после изготовления.</small></div>';
    return '<div class="dopt"><label class="dopt-h"><input type="radio" name="dm" value="' + m.id + '"' + (co.method === m.id ? ' checked' : '') + '>' +
      '<span class="dopt-t">' + esc(m.title) + '</span><span class="dopt-p">' + price + '</span><span class="dopt-l">' + esc(m.lead || '') + '</span></label>' +
      '<div class="dopt-more"' + (co.method === m.id ? '' : ' hidden') + '>' + more + '</div></div>';
  }
  function valid(qq) {
    var dp = deliveryPrice();
    var ok = qq.ok && co.name.trim().length > 1 && /^[+\d][\d\s()\-]{9,}$/.test(co.phone.trim()) && /^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(co.email.trim()) &&
      co.method && dp != null && co.offer && co.pd && !co.busy;
    if (co.method === 'pochta') ok = ok && co.pochta.address.trim().length > 4;
    if (co.method === 'cdek') ok = ok && !!co.cdek && !co.cdek.err;
    return !!ok;
  }
  function renderCheckout(qq) {
    var body = $('#cartBody'), focusId = document.activeElement && document.activeElement.id;
    var lg = D.legal || {};
    var demo = !API ? '<div class="co-msg demo"><b>Онлайн-оплата подключается.</b> Пока заказ можно оформить в Telegram — <a href="https://t.me/' + esc(D.seller.telegram) +
      '" target="_blank" rel="noopener">@' + esc(D.seller.telegram) + '</a>. <button type="button" id="copyOrder">Скопировать состав заказа</button></div>' : '';
    body.innerHTML = '<form class="co" id="coForm" novalidate>' + demo +
      '<fieldset><legend>Получатель</legend>' +
      '<div class="field"><label for="coName">Фамилия, имя, отчество</label><input id="coName" autocomplete="name" value="' + esc(co.name) + '" required></div>' +
      '<div class="row2"><div class="field"><label for="coPhone">Телефон</label><input id="coPhone" type="tel" autocomplete="tel" value="' + esc(co.phone) + '" placeholder="+7 …" required></div>' +
      '<div class="field"><label for="coEmail">Email для чека</label><input id="coEmail" type="email" autocomplete="email" value="' + esc(co.email) + '" placeholder="вы@почта.ру" required></div></div>' +
      '</fieldset>' +
      '<fieldset><legend>Доставка</legend><div class="deliv">' + D.delivery.methods.filter(function (m) { return m.enabled; }).map(mOpt).join('') + '</div></fieldset>' +
      '<div class="field"><label for="coComment">Комментарий <span class="opt">необязательно</span></label><textarea id="coComment" placeholder="Пожелания по упаковке, удобное время связи">' + esc(co.comment) + '</textarea></div>' +
      '<div style="display:grid;gap:10px">' +
      '<label class="check"><input type="checkbox" id="coOffer"' + (co.offer ? ' checked' : '') + '><span>Принимаю условия <a href="' + esc(lg.offer) + '" target="_blank" rel="noopener">договора-оферты</a></span></label>' +
      '<label class="check"><input type="checkbox" id="coPd"' + (co.pd ? ' checked' : '') + '><span>Даю <a href="' + esc(lg.consent) + '" target="_blank" rel="noopener">согласие на обработку персональных данных</a> (<a href="' + esc(lg.privacy) + '" target="_blank" rel="noopener">политика</a>)</span></label>' +
      '</div>' + (co.err ? '<div class="co-msg err" role="alert">' + esc(co.err) + '</div>' : '') + '</form>';
    renderCheckoutFoot(qq);
    if (focusId && document.getElementById(focusId)) {
      var el = document.getElementById(focusId); el.focus();
      if (el.setSelectionRange && el.type !== 'email') { var v = el.value.length; try { el.setSelectionRange(v, v); } catch (e) { /* */ } }
    }
  }
  // Тариф перевозчика и материалы упаковки — одной строкой «Доставка», но с расшифровкой:
  // покупателю видно, что цена не выдумана
  function deliveryBreak() {
    var s = co.method === 'cdek' ? co.cdek : co.method === 'pochta' ? co.pochta : null;
    if (!s || !s.pack || s.tariff == null) return '';
    return '<small>тариф ' + rubText(s.tariff) + ' + упаковка ' + rubText(s.pack) + '</small>';
  }
  function renderCheckoutFoot(qq) {
    var foot = $('#cartFoot'), dp = deliveryPrice();
    var total = qq.goods + (dp || 0);
    foot.innerHTML = '<div class="sum-row"><span>Товары</span><b>' + rub(qq.goods) + '</b></div>' +
      '<div class="sum-row"><span>Доставка' + deliveryBreak() + '</span><b>' +
      (dp == null ? '—' : dp === 0 ? 'бесплатно' : rub(dp)) + '</b></div>' +
      '<div class="sum-row total"><span>Итого</span><b>' + (dp == null ? '—' : rub(total)) + '</b></div>' +
      '<button type="button" class="btn btn-solid" id="payBtn"' + (valid(qq) && API ? '' : ' disabled') + '>' +
      (co.busy ? 'Создаём заказ…' : !API ? 'Онлайн-оплата скоро' : dp == null ? 'Выберите доставку' : 'Перейти к оплате · ' + rubText(total)) + '</button>' +
      '<p class="foot-note">Оплата на защищённой странице Robokassa: карта, СБП, SberPay, T-Pay. Чек «Мой налог» придёт на email.</p>';
  }
  function refreshFoot() { if (step === 'checkout') renderCheckoutFoot(q()); }

  if (cartEl) {
    $('#cartBtn').addEventListener('click', openCart);
    $('#cartClose').addEventListener('click', closeCart);
    $('#cartBack').addEventListener('click', function () { step = 'cart'; renderCart(); });
    cartEl.addEventListener('click', function (e) {
      if (e.target === cartEl) { closeCart(); return; }
      var b;
      if (e.target.closest('[data-close-cart]')) { closeCart(); return; }
      if ((b = e.target.closest('[data-ci]'))) {
        var it = cart[+b.getAttribute('data-ci')]; if (!it) return;
        it.qty = Math.max(1, Math.min(MAX, it.qty + (+b.getAttribute('data-d')))); saveCart(); resetQuotes(); renderCart(); return;
      }
      if ((b = e.target.closest('[data-rm]'))) { cart.splice(+b.getAttribute('data-rm'), 1); saveCart(); resetQuotes(); renderCart(); return; }
      if (e.target.id === 'toCheckout') { step = 'checkout'; co.err = ''; renderCart(); refreshQuotes(); var f = $('#coName'); if (f && !co.name) f.focus(); return; }
      if (e.target.id === 'cdekPick') { e.preventDefault(); openCdek(); return; }
      if (e.target.id === 'pochtaPick') { e.preventDefault(); openPochta(); return; }
      if (e.target.id === 'payBtn') { pay(); return; }
      if (e.target.id === 'copyOrder') { copyOrder(); return; }
    });
    cartEl.addEventListener('input', function (e) {
      var t = e.target;
      if (t.id === 'coName') co.name = t.value;
      else if (t.id === 'coPhone') co.phone = t.value;
      else if (t.id === 'coEmail') co.email = t.value;
      else if (t.id === 'coComment') co.comment = t.value;
      else if (t.id === 'coAddr') co.pochta.address = t.value;
      else if (t.id === 'coIndex') {
        t.value = t.value.replace(/\D/g, '').slice(0, 6); co.pochta.index = t.value; co.pochta.price = null; co.pochta.err = '';
        if (t.value.length === 6) quotePochta(); else { var r = $('#pochtaRes'); if (r) { r.className = 'dopt-res'; r.innerHTML = '<small>Введите индекс — посчитаем стоимость по тарифу Почты</small>'; } }
      }
      refreshFoot();
    });
    cartEl.addEventListener('change', function (e) {
      var t = e.target;
      // Карту сами не открываем: поля индекса рядом, а виджет может быть недоступен
      if (t.name === 'dm') { co.method = t.value; co.err = ''; renderCart(); if (t.value === 'cdek' && !co.cdek) openCdek(); return; }
      if (t.id === 'coOffer') co.offer = t.checked;
      if (t.id === 'coPd') co.pd = t.checked;
      refreshFoot();
    });
  }
  document.addEventListener('keydown', function (e) {
    if (e.key !== 'Escape') return;
    if (!$('#cdekModal').hidden) { closeCdek(); return; }
    if ($('#pochtaModal') && !$('#pochtaModal').hidden) { closePochta(); return; }
    if (!cfgEl.hidden) { closeCfg(); return; }
    if (!cartEl.hidden) closeCart();
  });

  /* ---------- доставка ---------- */
  function apiCall(route, body) {
    return fetch(API + (API.indexOf('?') >= 0 ? '&' : '?') + 'route=' + route, {
      method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(body)
    }).then(function (r) { return r.json().catch(function () { return { ok: false, error: 'http_' + r.status }; }); });
  }
  function quotePochta() {
    var my = ++pochtaSeq, r = co.pochta;
    if (!API) { if (r.price == null) r.err = 'Расчёт заработает после подключения сервера'; renderCart(); return; }
    r.busy = true; r.err = ''; updatePochtaRes();
    apiCall('quote', { items: cart, delivery: { method: 'pochta', index: r.index } }).then(function (res) {
      if (my !== pochtaSeq) return;
      r.busy = false;
      if (res.ok) { r.price = res.delivery.price; r.tariff = res.delivery.tariff; r.pack = res.delivery.pack; r.min = res.delivery.min; r.max = res.delivery.max; }
      else { r.price = null; r.err = res.message || 'Не удалось посчитать доставку по этому индексу'; }
      updatePochtaRes(); refreshFoot(); updateMethodPrices();
    }).catch(function () { if (my !== pochtaSeq) return; r.busy = false; r.err = 'Сервер расчёта недоступен, попробуйте позже'; updatePochtaRes(); });
  }
  function pochtaResHTML() {
    var r = co.pochta;
    if (r.busy) return 'Считаем…';
    if (r.err) return esc(r.err);
    if (r.price != null) return 'Доставка ' + rubText(r.price) +
      (r.min ? '<small>' + r.min + (r.max && r.max !== r.min ? '–' + r.max : '') + ' дн. по нормативу Почты</small>' : '');
    return '<small>Введите индекс — посчитаем стоимость по тарифу Почты</small>';
  }
  // Обновляем строку результата на месте, а не перерисовкой корзины: иначе поле индекса
  // теряет фокус на каждом нажатии.
  function updatePochtaRes() {
    var el = $('#pochtaRes'); if (!el) return;
    el.className = 'dopt-res' + (co.pochta.err ? ' err' : '');
    el.innerHTML = pochtaResHTML();
  }
  function updateMethodPrices() {
    $$('.dopt').forEach(function (lab) {
      var inp = $('input[name=dm]', lab), p = $('.dopt-p', lab); if (!inp || !p) return;
      if (inp.value === 'pochta') p.innerHTML = co.pochta.price != null ? rub(co.pochta.price) : '';
      if (inp.value === 'cdek') p.innerHTML = co.cdek && co.cdek.price != null ? rub(co.cdek.price) : '';
    });
  }

  /* Виджет Почты России (widget.pochta.ru): карта отделений, вес и сумма — из корзины */
  var POCHTA_SRC = 'https://widget.pochta.ru/map/widget/widget.js', pochtaLoading = null;
  function closePochta() { $('#pochtaModal').hidden = true; }
  function openPochta() {
    var m = method('pochta'); if (!m || !m.widgetId) return;
    var qq = q(), g = 0;
    qq.packages.forEach(function (p) { g += p.weight; });
    $('#pochtaModal').hidden = false;
    (pochtaLoading = pochtaLoading || loadScript(POCHTA_SRC)).then(function () {
      var box = $('#pochtaMap'); box.innerHTML = '';   // виджет добавляет iframe — старый убираем
      window.ecomStartWidget({ id: m.widgetId, containerId: 'pochtaMap', weight: g || 1000, sumoc: qq.goods, callbackFunction: onPochta });
    }).catch(function () {
      pochtaLoading = null; closePochta();
      toast('Не удалось загрузить карту Почты. Проверьте соединение или выберите СДЭК');
    });
  }
  // Формат pvzData в документации не описан — берём поля по нескольким вариантам имён
  function pick(o, keys) { for (var i = 0; i < keys.length; i++) if (o && o[keys[i]] != null && o[keys[i]] !== '') return o[keys[i]]; return null; }
  function onPochta(d) {
    window.__pochtaPvz = d;
    try { console.log('[pochta] pvzData', JSON.stringify(d)); } catch (e) { /* */ }
    var idx = String(pick(d, ['indexTo', 'index', 'postalCode', 'postal_code', 'zip']) || '');
    if (!/^\d{6}$/.test(idx)) { var mm = JSON.stringify(d || {}).match(/"(\d{6})"/); idx = mm ? mm[1] : ''; }
    if (!idx) { toast('Не удалось определить индекс отделения — выберите другое'); return; }
    var adr = pick(d, ['addressTo', 'address', 'fullAddress']);
    if (adr && typeof adr === 'object') adr = [adr.city || adr.place, adr.street, adr.house].filter(Boolean).join(', ') || JSON.stringify(adr);
    var r = co.pochta;
    r.index = idx; r.address = String(adr || pick(d, ['cityTo', 'city']) || 'отделение ' + idx);
    r.pvz = String(pick(d, ['pvzType', 'type']) || '');
    var dd = pick(d, ['deliveryDescription']) || {};
    var price = pick(d, ['deliveryPrice', 'price', 'cost', 'deliverySum']);
    r.price = price != null && isFinite(+price) ? Math.round(+price) : null;   // предварительно; сервер пересчитает
    r.min = pick(dd, ['deliveryMin', 'min']) || null; r.max = pick(dd, ['deliveryMax', 'max']) || null;
    r.err = '';
    closePochta(); renderCart(); refreshFoot();
    if (API) quotePochta();
  }
  var pochtaClose = $('#pochtaClose'); if (pochtaClose) pochtaClose.addEventListener('click', closePochta);

  var cdekWidget = null, cdekLoading = null;
  function loadScript(src) {
    return new Promise(function (res, rej) {
      var s = document.createElement('script'); s.src = src; s.async = true; s.onload = res; s.onerror = rej; document.head.appendChild(s);
    });
  }
  function closeCdek() { $('#cdekModal').hidden = true; }
  function openCdek() {
    var m = method('cdek'); if (!m) return;
    if (!API) { toast('Выбор пункта СДЭК заработает после подключения сервера'); return; }
    var parcels = q().packages;
    $('#cdekModal').hidden = false;
    if (cdekWidget) { try { cdekWidget.resetParcels(); cdekWidget.addParcel(parcels); } catch (e) { /* старая версия */ } return; }
    if (cdekLoading) return;
    cdekLoading = loadScript(CDEK_SRC).then(function () {
      var opts = {
        root: 'cdekMap', servicePath: API + (API.indexOf('?') >= 0 ? '&' : '?') + 'route=cdek',
        defaultLocation: m.defaultLocation || 'Санкт-Петербург',
        from: { country_code: D.delivery.from.country_code, postal_code: D.delivery.from.postal_code, city: D.delivery.from.city },
        goods: parcels, canChoose: true, hideDeliveryOptions: { door: true, office: false },
        tariffs: { office: m.tariffs.office || [], pickup: m.tariffs.pickup || [], door: m.tariffs.door || [] },
        lang: 'rus', currency: 'RUB',
        onChoose: function (type, tariff, office) {
          if (!tariff) { toast('Для этого пункта СДЭК не рассчитал доставку — выберите другой'); return; }
          co.cdek = { tariff_code: tariff.tariff_code, tariff_name: tariff.tariff_name, price: tariff.delivery_sum,
            min: tariff.period_min, max: tariff.period_max, err: '',
            office: { code: office.code, name: office.name, address: office.address, city: office.city, city_code: office.city_code, postal_code: office.postal_code } };
          closeCdek(); renderCart(); confirmCdek();
        }
      };
      if (m.yandexMapsKey) opts.apiKey = m.yandexMapsKey;
      cdekWidget = new window.CDEKWidget(opts);
    }).catch(function () {
      cdekLoading = null; closeCdek();
      toast('Не удалось загрузить карту СДЭК. Проверьте соединение или выберите Почту России');
    });
  }
  // Цена из виджета — предварительная: сервер пересчитывает её по тому же тарифу
  function confirmCdek() {
    var c = co.cdek, my = ++cdekSeq; if (!c) return;
    c.busy = true;
    apiCall('quote', { items: cart, delivery: { method: 'cdek', tariff_code: c.tariff_code, city_code: c.office.city_code, office_code: c.office.code } })
      .then(function (res) {
        if (my !== cdekSeq || co.cdek !== c) return;
        c.busy = false;
        if (res.ok) { c.price = res.delivery.price; c.tariff = res.delivery.tariff; c.pack = res.delivery.pack; c.min = res.delivery.min || c.min; c.max = res.delivery.max || c.max; c.err = ''; }
        else { c.err = res.message || 'СДЭК не подтвердил стоимость, выберите другой пункт'; }
        renderCart();
      }).catch(function () { if (co.cdek === c) { c.busy = false; c.err = 'Сервер расчёта недоступен'; renderCart(); } });
  }
  var cdekClose = $('#cdekClose'); if (cdekClose) cdekClose.addEventListener('click', closeCdek);

  /* ---------- заказ и оплата ---------- */
  function deliveryPayload() {
    if (co.method === 'cdek') return { method: 'cdek', tariff_code: co.cdek.tariff_code, city_code: co.cdek.office.city_code, office_code: co.cdek.office.code };
    if (co.method === 'pochta') return { method: 'pochta', index: co.pochta.index };
    return { method: 'pickup' };
  }
  function deliveryText() {
    var m = method(co.method) || {};
    if (co.method === 'cdek') return 'СДЭК, ' + co.cdek.tariff_name + ' — ПВЗ ' + co.cdek.office.code + ', ' + co.cdek.office.address;
    if (co.method === 'pochta') return 'Почта России — ' + co.pochta.index + ', ' + co.pochta.address;
    return m.title + ' — ' + (m.lead || '');
  }
  function orderLines(qq) {
    return qq.lines.map(function (l) {
      return (l.kind === 'print' ? l.title + ', ' + l.detail + ' — «' + l.workTitle + '»' : l.title + ' — ' + l.detail) + ' × ' + l.qty + ' = ' + rubText(l.sum);
    }).join('\n');
  }
  function copyOrder() {
    var qq = q(), text = 'Заказ с fotonerv.art\n' + orderLines(qq) + '\nИтого товары: ' + rubText(qq.goods);
    var done = function () { toast('Состав заказа скопирован — отправьте его в Telegram'); };
    if (navigator.clipboard) navigator.clipboard.writeText(text).then(done, function () { window.prompt('Скопируйте:', text); });
    else window.prompt('Скопируйте:', text);
  }
  function sendFormhook(res, qq) {
    var url = D.formhook && D.formhook.url; if (!url) return Promise.resolve();
    var data = {
      'Тип': 'Заказ в магазине' + (res.test ? ' (тестовая оплата)' : ''),
      'Номер заказа': String(res.invId),
      'Сумма к оплате': rubText(res.outSum),
      'Товары': orderLines(qq),
      'Доставка': deliveryText() + ' — ' + (res.delivery.price ? rubText(res.delivery.price) : 'бесплатно'),
      'Получатель': co.name.trim(), 'Телефон': co.phone.trim(), 'email': co.email.trim(),
      'Комментарий': co.comment.trim() || '—',
      'Согласие с офертой': 'Да', 'Согласие на обработку ПДн': 'Да'
    };
    function once() {
      return fetch(url, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ data: data }) })
        .then(function (r) { if (!r.ok) throw new Error('http ' + r.status); return r.json(); })
        .then(function (j) { if (!j || !j.id) throw new Error('no id'); return j; });
    }
    return once().catch(function () { return once(); });
  }
  function goPay(p) {
    var f = document.createElement('form');
    f.method = 'POST'; f.action = p.action; f.acceptCharset = 'UTF-8'; f.style.display = 'none';
    Object.keys(p.fields).forEach(function (k) {
      var i = document.createElement('input'); i.type = 'hidden'; i.name = k; i.value = p.fields[k]; f.appendChild(i);
    });
    document.body.appendChild(f); f.submit();
  }
  function pay() {
    var qq = q(); if (!valid(qq) || !API) return;
    co.busy = true; co.err = ''; refreshFoot();
    var payload = { items: cart, delivery: deliveryPayload(), email: co.email.trim() };
    apiCall('order', payload).then(function (res) {
      if (!res.ok) throw new Error(res.message || 'Не удалось создать заказ');
      return sendFormhook(res, qq).then(function () { return res; }, function () {
        throw new Error('Не удалось сохранить данные заказа. Попробуйте ещё раз или напишите в Telegram @' + D.seller.telegram + '.');
      });
    }).then(function (res) {
      try { window.sessionStorage.setItem('fotonerv-last-order', JSON.stringify({ invId: res.invId, sum: res.outSum })); } catch (e) { /* */ }
      goPay(res.payment);
    }).catch(function (e) {
      co.busy = false; co.err = e.message || 'Ошибка оформления'; renderCart();
    });
  }

  /* ---------- запуск ---------- */
  renderSections();
  renderSeller();
  renderHero();
  badge();
  var h = decodeURIComponent((location.hash || '').slice(1));
  if (h && work(h)) openCfg(h);
  window.addEventListener('pageshow', function (e) { if (e.persisted) { co.busy = false; if (!cartEl.hidden) renderCart(); } });
})();
