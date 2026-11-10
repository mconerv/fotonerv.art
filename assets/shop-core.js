/* FotoNerv · общая логика магазина: размеры, цены, упаковка.
   Один и тот же файл работает в браузере (window.ShopCore) и в серверной функции (require).
   Если меняете его на сайте — скопируйте в shop-api/lib/shop-core.js (npm run sync). */
(function (root, factory) {
  if (typeof module === 'object' && module.exports) module.exports = factory();
  else root.ShopCore = factory();
})(typeof self !== 'undefined' ? self : this, function () {
  'use strict';

  var EXACT = 0.04; // размер подходит без обрезки, если пропорции отличаются не больше чем на 4 %
  var CROP = 0.16;  // форматы типографии фиксированы: кадр обрезается под формат, но не больше чем на 16 %

  function ratio(w, h) { return Math.max(w, h) / Math.min(w, h); }

  function fit(work, size) {
    var r = ratio(work.w, work.h), s = size.b / size.a;
    var d = Math.abs(s - r) / r;
    return d <= EXACT ? 'exact' : (d <= CROP ? 'crop' : null);
  }

  // Сколько кадра уйдёт при печати в этот формат: доля стороны и какой (long — длинной, short — короткой)
  function cut(work, size) {
    var r = ratio(work.w, work.h), s = size.b / size.a;
    if (Math.abs(s - r) / r <= EXACT) return { part: 0, side: '' };
    return s < r ? { part: 1 - s / r, side: 'long' } : { part: 1 - r / s, side: 'short' };
  }

  // ширина × высота в см с учётом ориентации кадра
  function orient(work, size) {
    return work.w >= work.h ? { w: size.b, h: size.a } : { w: size.a, h: size.b };
  }

  function byId(list, id) {
    for (var i = 0; i < (list || []).length; i++) if (list[i].id === id) return list[i];
    return null;
  }

  function sizesFor(data, work, productId) {
    var p = data.products[productId];
    if (!p || !p.sizes || !work) return [];
    var list = [];
    // Ограничение размера у работы: maxSize [короткая, длинная] в см; части триптиха берут его у целого
    var lim = work.maxSize || (work.partOf && (byId(data.works, work.partOf) || {}).maxSize);
    p.sizes.forEach(function (s) {
      if (lim && (Math.min(s.a, s.b) > lim[0] || Math.max(s.a, s.b) > lim[1])) return;
      var f = fit(work, s);
      if (f) list.push({ size: s, fit: f, cut: cut(work, s) });
    });
    return list.sort(function (x, y) { return x.size.a * x.size.b - y.size.a * y.size.b; });
  }

  function minPrice(data, work, productId) {
    var min = Infinity;
    sizesFor(data, work, productId).forEach(function (x) {
      Object.keys(x.size.price).forEach(function (k) { if (x.size.price[k] < min) min = x.size.price[k]; });
    });
    return min === Infinity ? null : min;
  }

  function dims(o) { return o.w + ' × ' + o.h + ' см'; }
  function sizeLabel(size) { return size.a + ' × ' + size.b + ' см'; }

  // Наименование для чека: буквы, цифры и простая пунктуация, не длиннее 128 символов
  function clean(s) {
    return String(s).replace(/×/g, 'x').replace(/[«»"']/g, '')
      .replace(/[^0-9A-Za-zА-Яа-яЁё .,:;()№x+\-]/g, ' ').replace(/\s+/g, ' ').trim().slice(0, 128);
  }

  function err(code, it) { return { ok: false, error: code, item: it }; }

  function key(it) { return [it.product, it.work || '', it.size || '', it.option || ''].join('|'); }

  /* Строка корзины → проверенная позиция с ценой из данных.
     it = { product: 'canvas'|'foam', work, size, option, qty }
       или { product: 'postcard', work: <id открытки>|'set', qty } */
  function line(data, it) {
    if (!it || typeof it !== 'object') return err('bad_item', it);
    var max = (data.shop && data.shop.maxQty) || 10;
    var qty = Math.floor(Number(it.qty));
    if (!(qty >= 1 && qty <= max)) return err('bad_qty', it);

    if (it.product === 'canvas' || it.product === 'foam') {
      var p = data.products[it.product];
      var w = byId(data.works, it.work);
      if (!p || !w || (w.products || []).indexOf(it.product) < 0) return err('bad_work', it);
      var hit = null;
      sizesFor(data, w, it.product).forEach(function (x) { if (x.size.id === it.size) hit = x; });
      if (!hit) return err('bad_size', it);
      var opt = byId(p.options, it.option);
      if (!opt) return err('bad_option', it);
      var price = hit.size.price[opt.id];
      if (!(price > 0)) return err('bad_price', it);
      var o = orient(w, hit.size), sz = hit.size.a + 'x' + hit.size.b + ' см';
      var canvas = it.product === 'canvas';
      var mat = canvas && opt.mat ? byId(p.materials || [], opt.mat) : null;
      var extra = canvas ? (mat ? mat.short + ', ' : '') + 'подрамник ' + opt.short : 'основа ' + (hit.size.thickness || 5) + ' мм';
      return {
        ok: true, key: key(it), kind: 'print', product: it.product, work: w.id, size: hit.size.id, option: opt.id,
        qty: qty, price: price, sum: price * qty, fit: hit.fit, w: o.w, h: o.h, depth: opt.depth,
        title: p.title + ' ' + sizeLabel(hit.size), detail: extra, workTitle: w.title, img: w.thumb, ratio: w.w / w.h,
        receiptName: clean((canvas ? 'Печать на холсте ' : 'Фотопечать на пенокартоне ') + sz + ', ' + extra + ', ' + w.title),
        pack: hit.size.pack[opt.id]
      };
    }

    if (it.product === 'postcard') {
      var pc = data.products.postcard;
      if (!pc || pc.hidden) return err('bad_work', it);
      var set = byId(pc.sets || [], it.work);
      if (set) {
        var cards = setCards(data, set);
        if (!cards.length) return err('bad_work', it);
        return {
          ok: true, key: key(it), kind: 'postcard', product: 'postcard', work: set.id, set: true, qty: qty,
          price: set.price, sum: set.price * qty, cards: cards.length * qty,
          title: 'Набор открыток', detail: set.title + ' · ' + cards.length + ' шт.', workTitle: set.title,
          img: cards[0].thumb, ratio: cards[0].w / cards[0].h, cardTitles: cards.map(function (c) { return c.title; }),
          receiptName: clean('Набор открыток «' + set.title + '», ' + cards.length + ' шт.')
        };
      }
      var card = byId(data.postcards, it.work);
      if (!card) return err('bad_work', it);
      return {
        ok: true, key: key(it), kind: 'postcard', product: 'postcard', work: card.id, qty: qty,
        price: pc.price, sum: pc.price * qty, cards: qty,
        title: 'Открытка 10 × 15 см', detail: card.title, workTitle: card.title, img: card.thumb, ratio: card.w / card.h,
        receiptName: clean('Открытка 10x15 см, ' + card.title)
      };
    }
    return err('bad_product', it);
  }

  // Открытки набора: список id или "all" — все открытки каталога
  function setCards(data, set) {
    var all = data.postcards || [];
    if (set.cards === 'all') return all.slice();
    return (set.cards || []).map(function (id) { return byId(all, id); }).filter(Boolean);
  }
  // «Любые n открыток» поштучно стоят как набор: скидка на каждые полные n штук
  function cardDiscount(data, lines) {
    var pc = data.products && data.products.postcard, any = pc && pc.anyN;
    if (!any || !(any.n > 1) || !(any.price > 0)) return { amount: 0, groups: 0 };
    var singles = 0;
    lines.forEach(function (l) { if (l.ok && l.kind === 'postcard' && !l.set) singles += l.qty; });
    var groups = Math.floor(singles / any.n), per = any.n * pc.price - any.price;
    return { amount: per > 0 ? groups * per : 0, groups: groups, n: any.n, title: any.title };
  }

  // Посылки для расчёта доставки: каждый отпечаток — своя коробка; открытки кладём в первую коробку или в конверт
  function packages(data, lines) {
    var out = [], cards = 0;
    lines.forEach(function (l) {
      if (!l.ok) return;
      if (l.kind === 'print') {
        // price — материалы на эту посылку: короб, плёнка, уголки. Входит в стоимость доставки.
        for (var i = 0; i < l.qty; i++) out.push({ length: l.pack.l, width: l.pack.w, height: l.pack.h, weight: l.pack.g, price: Number(l.pack.price) || 0 });
      } else if (l.kind === 'postcard') {
        cards += l.cards;
      }
    });
    if (cards) {
      var pc = data.products.postcard.pack, g = cards * pc.each.g;
      if (out.length) out[0].weight += g;
      else out.push({ length: pc.envelope.l, width: pc.envelope.w, height: pc.envelope.h, weight: pc.envelope.g + g, price: Number(pc.envelope.price) || 0, letter: true });
    }
    return out;
  }

  function quote(data, items) {
    var lines = (items || []).map(function (it) { return line(data, it); });
    var bad = lines.filter(function (l) { return !l.ok; });
    var goods = 0;
    lines.forEach(function (l) { if (l.ok) goods += l.sum; });
    var disc = cardDiscount(data, lines);
    return { ok: !bad.length && lines.length > 0, lines: lines, errors: bad, subtotal: goods, discount: disc.amount, discountInfo: disc,
      goods: goods - disc.amount, packages: packages(data, lines) };
  }

  // Способ доставки может не брать крупные посылки: maxPackSide в каталоге — предел
  // длинной стороны коробки в сантиметрах. Проверка общая для витрины и сервера,
  // чтобы покупателю не предлагали то, что потом отвалится на расчёте.
  // Сколько стоят материалы на всю отправку
  function packing(packages) {
    var sum = 0;
    (packages || []).forEach(function (p) { sum += Number(p.price) || 0; });
    return Math.ceil(sum);
  }

  function methodOk(m, packages) {
    if (!m || m.enabled === false || m.soon) return false;
    var max = Number(m.maxPackSide) || 0;
    if (!max) return true;
    for (var i = 0; i < (packages || []).length; i++) {
      var p = packages[i];
      if (Math.max(p.length || 0, p.width || 0, p.height || 0) > max) return false;
    }
    return true;
  }

  return {
    ratio: ratio, fit: fit, cut: cut, orient: orient, byId: byId, sizesFor: sizesFor, minPrice: minPrice,
    dims: dims, sizeLabel: sizeLabel, clean: clean, key: key, line: line, packages: packages, quote: quote,
    methodOk: methodOk, packing: packing, setCards: setCards, cardDiscount: cardDiscount
  };
});
