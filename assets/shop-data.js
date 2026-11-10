/* FotoNerv · данные магазина. Правьте только JSON между маркерами — его же читает серверная функция. */
window.SHOP_DATA = /*JSON-START*/
{
  "_readme": [
    "Данные магазина. Между маркерами JSON-START и JSON-END — строгий JSON (двойные кавычки, без комментариев и висячих запятых):",
    "этот же файл читает серверная функция и по нему пересчитывает цены, поэтому цена на сайте и в оплате всегда одна.",
    "Цены в рублях. Размеры a × b — короткая и длинная сторона в см, ориентацию берём из кадра (w, h — пиксели исходника).",
    "pack — упаковка: l × w × h в см, g — вес в граммах, price — стоимость материалов в рублях (идёт в цену доставки).",
    "У работы с двумя ориентациями: pair — id второй ориентации; у неё самой pairOf — id основной, отдельной карточки в каталоге у неё нет.",
    "Триптих: triptych — id частей слева направо; у каждой части partOf и part (1–3). Части продаются как обычные отпечатки: одна, две или все три одного размера; размеры подбираются по пропорциям части.",
    "Размеры — только форматы типографии. Кадр под формат кадрируется по центру; размеры, где обрезка больше 16 %, не предлагаются.",
    "Цены: себестоимость Яркого (холст: галерейная натяжка, срок 24 ч; синтетика — влагостойкая печать; пенокартон: Durst Theta, матовая 180 г/м², 10 мм, крепление 2 шт) × k от 3 (20×30) до 2 (100×150) с учётом НПД 4 % и комиссии 3,9 %. Снято 10.11.2026.",
    "Холст: options — сочетание холста (mat: n — натуральный, s — синтетический) и подрамника; materials — подписи холстов; tableCols — столбцы таблицы цен."
  ],
  "version": "2026-11-09",
  "seller": {
    "name": "Карпович Максим Викторович",
    "status": "самозанятый, плательщик налога на профессиональный доход",
    "inn": "663210774917",
    "city": "Санкт-Петербург",
    "email": "max@fotonerv.ru",
    "phone": "+7 913 760-19-00",
    "telegram": "mconerv"
  },
  "shop": {
    "productionDays": "до 5 рабочих дней",
    "maxQty": 10
  },
  "api": {
    "_comment": "Адрес серверной функции (Yandex Cloud Functions). Пусто — оплата отключена, витрина работает в режиме просмотра.",
    "url": "https://functions.yandexcloud.net/d4ej6ac78odagvkud598"
  },
  "formhook": {
    "url": "https://app.form-hook.com/api/c1/sites/01KX3RVQVP8Z0V7GKG2EC49AQJ/submissions"
  },
  "products": {
    "canvas": {
      "title": "Холст",
      "lead": "Печать на холсте с галерейной натяжкой: изображение продолжается на торцы, рама не нужна.",
      "specs": [
        "Натуральный матовый холст (хлопок, 360 г/м²) или синтетический матовый (230 г/м²) с влагостойкой печатью",
        "Галерейная натяжка: кадр заходит на торцы, скобы — на обороте",
        "Подрамник из натурального дерева, 2 или 4 см — цена одинаковая",
        "Готов к развеске, рама не нужна"
      ],
      "note": "При галерейной натяжке края кадра уходят на торцы — по толщине подрамника с каждой стороны. Синтетический холст — до 70 × 100 см.",
      "options": [
        {
          "id": "n2",
          "mat": "n",
          "label": "Подрамник 2 см",
          "short": "2 см",
          "depth": 2
        },
        {
          "id": "n4",
          "mat": "n",
          "label": "Подрамник 4 см",
          "short": "4 см",
          "depth": 4
        },
        {
          "id": "s2",
          "mat": "s",
          "label": "Подрамник 2 см",
          "short": "2 см",
          "depth": 2
        },
        {
          "id": "s4",
          "mat": "s",
          "label": "Подрамник 4 см",
          "short": "4 см",
          "depth": 4
        }
      ],
      "sizes": [
        {
          "id": "20x30",
          "a": 20,
          "b": 30,
          "price": {
            "n2": 5900,
            "n4": 5900,
            "s2": 5500,
            "s4": 5500
          },
          "pack": {
            "n2": {
              "l": 36,
              "w": 26,
              "h": 6,
              "g": 660,
              "price": 40
            },
            "n4": {
              "l": 36,
              "w": 26,
              "h": 8,
              "g": 860,
              "price": 50
            },
            "s2": {
              "l": 36,
              "w": 26,
              "h": 6,
              "g": 660,
              "price": 40
            },
            "s4": {
              "l": 36,
              "w": 26,
              "h": 8,
              "g": 860,
              "price": 50
            }
          }
        },
        {
          "id": "30x30",
          "a": 30,
          "b": 30,
          "price": {
            "n2": 7300,
            "n4": 7300,
            "s2": 6700,
            "s4": 6700
          },
          "pack": {
            "n2": {
              "l": 36,
              "w": 36,
              "h": 6,
              "g": 760,
              "price": 50
            },
            "n4": {
              "l": 36,
              "w": 36,
              "h": 8,
              "g": 1000,
              "price": 50
            },
            "s2": {
              "l": 36,
              "w": 36,
              "h": 6,
              "g": 760,
              "price": 50
            },
            "s4": {
              "l": 36,
              "w": 36,
              "h": 8,
              "g": 1000,
              "price": 50
            }
          }
        },
        {
          "id": "30x40",
          "a": 30,
          "b": 40,
          "price": {
            "n2": 8600,
            "n4": 8600,
            "s2": 7900,
            "s4": 7900
          },
          "pack": {
            "n2": {
              "l": 46,
              "w": 36,
              "h": 6,
              "g": 870,
              "price": 60
            },
            "n4": {
              "l": 46,
              "w": 36,
              "h": 8,
              "g": 1150,
              "price": 60
            },
            "s2": {
              "l": 46,
              "w": 36,
              "h": 6,
              "g": 870,
              "price": 60
            },
            "s4": {
              "l": 46,
              "w": 36,
              "h": 8,
              "g": 1150,
              "price": 60
            }
          }
        },
        {
          "id": "30x45",
          "a": 30,
          "b": 45,
          "price": {
            "n2": 9300,
            "n4": 9300,
            "s2": 8400,
            "s4": 8400
          },
          "pack": {
            "n2": {
              "l": 51,
              "w": 36,
              "h": 6,
              "g": 920,
              "price": 60
            },
            "n4": {
              "l": 51,
              "w": 36,
              "h": 8,
              "g": 1220,
              "price": 60
            },
            "s2": {
              "l": 51,
              "w": 36,
              "h": 6,
              "g": 920,
              "price": 60
            },
            "s4": {
              "l": 51,
              "w": 36,
              "h": 8,
              "g": 1220,
              "price": 60
            }
          }
        },
        {
          "id": "40x40",
          "a": 40,
          "b": 40,
          "price": {
            "n2": 10100,
            "n4": 10100,
            "s2": 9200,
            "s4": 9200
          },
          "pack": {
            "n2": {
              "l": 46,
              "w": 46,
              "h": 6,
              "g": 990,
              "price": 60
            },
            "n4": {
              "l": 46,
              "w": 46,
              "h": 8,
              "g": 1310,
              "price": 70
            },
            "s2": {
              "l": 46,
              "w": 46,
              "h": 6,
              "g": 990,
              "price": 60
            },
            "s4": {
              "l": 46,
              "w": 46,
              "h": 8,
              "g": 1310,
              "price": 70
            }
          }
        },
        {
          "id": "40x50",
          "a": 40,
          "b": 50,
          "price": {
            "n2": 11600,
            "n4": 11600,
            "s2": 10400,
            "s4": 10400
          },
          "pack": {
            "n2": {
              "l": 56,
              "w": 46,
              "h": 6,
              "g": 1110,
              "price": 70
            },
            "n4": {
              "l": 56,
              "w": 46,
              "h": 8,
              "g": 1470,
              "price": 80
            },
            "s2": {
              "l": 56,
              "w": 46,
              "h": 6,
              "g": 1110,
              "price": 70
            },
            "s4": {
              "l": 56,
              "w": 46,
              "h": 8,
              "g": 1470,
              "price": 80
            }
          }
        },
        {
          "id": "40x60",
          "a": 40,
          "b": 60,
          "price": {
            "n2": 13000,
            "n4": 13000,
            "s2": 11700,
            "s4": 11700
          },
          "pack": {
            "n2": {
              "l": 66,
              "w": 46,
              "h": 6,
              "g": 1230,
              "price": 80
            },
            "n4": {
              "l": 66,
              "w": 46,
              "h": 8,
              "g": 1630,
              "price": 90
            },
            "s2": {
              "l": 66,
              "w": 46,
              "h": 6,
              "g": 1230,
              "price": 80
            },
            "s4": {
              "l": 66,
              "w": 46,
              "h": 8,
              "g": 1630,
              "price": 90
            }
          }
        },
        {
          "id": "50x50",
          "a": 50,
          "b": 50,
          "price": {
            "n2": 13200,
            "n4": 13200,
            "s2": 11800,
            "s4": 11800
          },
          "pack": {
            "n2": {
              "l": 56,
              "w": 56,
              "h": 6,
              "g": 1250,
              "price": 80
            },
            "n4": {
              "l": 56,
              "w": 56,
              "h": 8,
              "g": 1650,
              "price": 90
            },
            "s2": {
              "l": 56,
              "w": 56,
              "h": 6,
              "g": 1250,
              "price": 80
            },
            "s4": {
              "l": 56,
              "w": 56,
              "h": 8,
              "g": 1650,
              "price": 90
            }
          }
        },
        {
          "id": "50x60",
          "a": 50,
          "b": 60,
          "price": {
            "n2": 14800,
            "n4": 14800,
            "s2": 13100,
            "s4": 13100
          },
          "pack": {
            "n2": {
              "l": 66,
              "w": 56,
              "h": 6,
              "g": 1390,
              "price": 90
            },
            "n4": {
              "l": 66,
              "w": 56,
              "h": 8,
              "g": 1830,
              "price": 100
            },
            "s2": {
              "l": 66,
              "w": 56,
              "h": 6,
              "g": 1390,
              "price": 90
            },
            "s4": {
              "l": 66,
              "w": 56,
              "h": 8,
              "g": 1830,
              "price": 100
            }
          }
        },
        {
          "id": "50x70",
          "a": 50,
          "b": 70,
          "price": {
            "n2": 16400,
            "n4": 16400,
            "s2": 14500,
            "s4": 14500
          },
          "pack": {
            "n2": {
              "l": 76,
              "w": 56,
              "h": 6,
              "g": 1530,
              "price": 100
            },
            "n4": {
              "l": 76,
              "w": 56,
              "h": 8,
              "g": 2010,
              "price": 110
            },
            "s2": {
              "l": 76,
              "w": 56,
              "h": 6,
              "g": 1530,
              "price": 100
            },
            "s4": {
              "l": 76,
              "w": 56,
              "h": 8,
              "g": 2010,
              "price": 110
            }
          }
        },
        {
          "id": "60x60",
          "a": 60,
          "b": 60,
          "price": {
            "n2": 16600,
            "n4": 16600,
            "s2": 14600,
            "s4": 14600
          },
          "pack": {
            "n2": {
              "l": 66,
              "w": 66,
              "h": 6,
              "g": 1550,
              "price": 100
            },
            "n4": {
              "l": 66,
              "w": 66,
              "h": 8,
              "g": 2030,
              "price": 110
            },
            "s2": {
              "l": 66,
              "w": 66,
              "h": 6,
              "g": 1550,
              "price": 100
            },
            "s4": {
              "l": 66,
              "w": 66,
              "h": 8,
              "g": 2030,
              "price": 110
            }
          }
        },
        {
          "id": "60x90",
          "a": 60,
          "b": 90,
          "price": {
            "n2": 21600,
            "n4": 21600,
            "s2": 18900,
            "s4": 18900
          },
          "pack": {
            "n2": {
              "l": 96,
              "w": 66,
              "h": 6,
              "g": 2020,
              "price": 140
            },
            "n4": {
              "l": 96,
              "w": 66,
              "h": 8,
              "g": 2620,
              "price": 140
            },
            "s2": {
              "l": 96,
              "w": 66,
              "h": 6,
              "g": 2020,
              "price": 140
            },
            "s4": {
              "l": 96,
              "w": 66,
              "h": 8,
              "g": 2620,
              "price": 140
            }
          }
        },
        {
          "id": "70x100",
          "a": 70,
          "b": 100,
          "price": {
            "n2": 25600,
            "n4": 25600,
            "s2": 22100,
            "s4": 22100
          },
          "pack": {
            "n2": {
              "l": 106,
              "w": 76,
              "h": 6,
              "g": 2410,
              "price": 160
            },
            "n4": {
              "l": 106,
              "w": 76,
              "h": 8,
              "g": 3090,
              "price": 170
            },
            "s2": {
              "l": 106,
              "w": 76,
              "h": 6,
              "g": 2410,
              "price": 160
            },
            "s4": {
              "l": 106,
              "w": 76,
              "h": 8,
              "g": 3090,
              "price": 170
            }
          }
        },
        {
          "id": "100x150",
          "a": 100,
          "b": 150,
          "price": {
            "n2": 42700,
            "n4": 42700
          },
          "pack": {
            "n2": {
              "l": 156,
              "w": 106,
              "h": 6,
              "g": 4250,
              "price": 300
            },
            "n4": {
              "l": 156,
              "w": 106,
              "h": 8,
              "g": 5250,
              "price": 310
            }
          }
        }
      ],
      "materials": [
        {
          "id": "n",
          "label": "Натуральный матовый",
          "short": "натуральный холст",
          "note": "100 % хлопок, 360 г/м², выраженная фактура"
        },
        {
          "id": "s",
          "label": "Синтетический матовый",
          "short": "синтетический холст, влагостойкая печать",
          "note": "230 г/м², влагостойкая печать — подходит для кухни и ванной"
        }
      ],
      "tableCols": [
        {
          "opt": "n2",
          "label": "Натуральный холст"
        },
        {
          "opt": "s2",
          "label": "Синтетический холст"
        }
      ]
    },
    "foam": {
      "title": "Пенокартон",
      "lead": "Фотопечать с накаткой на жёсткую лёгкую основу: под раму или на подвесы.",
      "specs": [
        "Фотопечать Durst Theta на матовой фотобумаге 180 г/м²",
        "Накатка на белый пенокартон 10 мм",
        "Крепление на 2 точки в комплекте — можно сразу вешать",
        "Не для улицы и влажных помещений"
      ],
      "note": "Крупные форматы лучше оформить в раму: пенокартон может немного прогибаться.",
      "options": [
        {
          "id": "std",
          "label": "Матовая фотобумага",
          "short": "",
          "depth": 1
        }
      ],
      "sizes": [
        {
          "id": "30x30",
          "a": 30,
          "b": 30,
          "thickness": 10,
          "price": {
            "std": 3900
          },
          "pack": {
            "std": {
              "l": 36,
              "w": 36,
              "h": 4,
              "g": 330,
              "price": 50
            }
          }
        },
        {
          "id": "30x40",
          "a": 30,
          "b": 40,
          "thickness": 10,
          "price": {
            "std": 4900
          },
          "pack": {
            "std": {
              "l": 46,
              "w": 36,
              "h": 4,
              "g": 360,
              "price": 50
            }
          }
        },
        {
          "id": "30x45",
          "a": 30,
          "b": 45,
          "thickness": 10,
          "price": {
            "std": 5400
          },
          "pack": {
            "std": {
              "l": 51,
              "w": 36,
              "h": 4,
              "g": 370,
              "price": 60
            }
          }
        },
        {
          "id": "40x40",
          "a": 40,
          "b": 40,
          "thickness": 10,
          "price": {
            "std": 6200
          },
          "pack": {
            "std": {
              "l": 46,
              "w": 46,
              "h": 4,
              "g": 390,
              "price": 60
            }
          }
        },
        {
          "id": "40x50",
          "a": 40,
          "b": 50,
          "thickness": 10,
          "price": {
            "std": 7500
          },
          "pack": {
            "std": {
              "l": 56,
              "w": 46,
              "h": 4,
              "g": 430,
              "price": 70
            }
          }
        },
        {
          "id": "40x60",
          "a": 40,
          "b": 60,
          "thickness": 10,
          "price": {
            "std": 8700
          },
          "pack": {
            "std": {
              "l": 66,
              "w": 46,
              "h": 4,
              "g": 470,
              "price": 80
            }
          }
        },
        {
          "id": "50x50",
          "a": 50,
          "b": 50,
          "thickness": 10,
          "price": {
            "std": 9000
          },
          "pack": {
            "std": {
              "l": 56,
              "w": 56,
              "h": 4,
              "g": 480,
              "price": 80
            }
          }
        },
        {
          "id": "50x60",
          "a": 50,
          "b": 60,
          "thickness": 10,
          "price": {
            "std": 10500
          },
          "pack": {
            "std": {
              "l": 66,
              "w": 56,
              "h": 4,
              "g": 520,
              "price": 90
            }
          }
        },
        {
          "id": "50x70",
          "a": 50,
          "b": 70,
          "thickness": 10,
          "price": {
            "std": 12000
          },
          "pack": {
            "std": {
              "l": 76,
              "w": 56,
              "h": 4,
              "g": 560,
              "price": 90
            }
          }
        },
        {
          "id": "60x60",
          "a": 60,
          "b": 60,
          "thickness": 10,
          "price": {
            "std": 12300
          },
          "pack": {
            "std": {
              "l": 66,
              "w": 66,
              "h": 5,
              "g": 720,
              "price": 100
            }
          }
        },
        {
          "id": "60x90",
          "a": 60,
          "b": 90,
          "thickness": 10,
          "price": {
            "std": 17300
          },
          "pack": {
            "std": {
              "l": 96,
              "w": 66,
              "h": 5,
              "g": 950,
              "price": 130
            }
          }
        },
        {
          "id": "70x100",
          "a": 70,
          "b": 100,
          "thickness": 10,
          "price": {
            "std": 21600
          },
          "pack": {
            "std": {
              "l": 106,
              "w": 76,
              "h": 5,
              "g": 1160,
              "price": 160
            }
          }
        }
      ]
    },
    "postcard": {
      "hidden": true,
      "title": "Открытки",
      "lead": "Почтовые открытки с моими кадрами — по одной или набором.",
      "specs": [
        "Формат 10 × 15 см",
        "Оборот с полем для адреса и текста"
      ],
      "price": 150,
      "set": {
        "id": "set",
        "title": "Набор всех открыток",
        "price": 750
      },
      "pack": {
        "each": {
          "g": 15
        },
        "envelope": {
          "l": 23,
          "w": 17,
          "h": 2,
          "g": 40
        }
      }
    }
  },
  "works": [
    {
      "id": "misty-river",
      "title": "Река в тумане",
      "caption": "Снято на iPhone 7 Plus",
      "img": "img/shop/misty-river.webp",
      "thumb": "img/shop/thumb/misty-river.webp",
      "w": 5250,
      "h": 7000,
      "products": [
        "canvas",
        "foam"
      ],
      "tags": [
        "bw",
        "forest"
      ]
    },
    {
      "id": "isaac-night",
      "title": "Первый снег",
      "caption": "Санкт-Петербург",
      "img": "img/shop/isaac-night.webp",
      "thumb": "img/shop/thumb/isaac-night.webp",
      "w": 7000,
      "h": 4667,
      "products": [
        "canvas",
        "foam"
      ],
      "tags": [
        "bw",
        "city"
      ]
    },
    {
      "id": "slope-clouds",
      "title": "Гора Отвесная",
      "caption": "Камчатка",
      "img": "img/shop/slope-clouds.webp",
      "thumb": "img/shop/thumb/slope-clouds.webp",
      "w": 7000,
      "h": 9333,
      "products": [
        "canvas",
        "foam"
      ],
      "tags": [
        "mountains"
      ],
      "pair": "slope-clouds-h"
    },
    {
      "id": "slope-clouds-h",
      "title": "Гора Отвесная · горизонтальная",
      "caption": "Камчатка",
      "img": "img/shop/slope-clouds-h.webp",
      "thumb": "img/shop/thumb/slope-clouds-h.webp",
      "w": 7000,
      "h": 5250,
      "products": [
        "canvas",
        "foam"
      ],
      "tags": [
        "mountains"
      ],
      "pairOf": "slope-clouds"
    },
    {
      "id": "lake-panorama",
      "maxSize": [
        50,
        70
      ],
      "title": "Озеро ночью",
      "caption": "Триптих · можно по частям",
      "img": "img/shop/lake-panorama.webp",
      "thumb": "img/shop/thumb/lake-panorama.webp",
      "w": 21000,
      "h": 9115,
      "products": [
        "canvas",
        "foam"
      ],
      "tags": [
        "sky"
      ],
      "triptych": [
        "lake-panorama-1",
        "lake-panorama-2",
        "lake-panorama-3"
      ]
    },
    {
      "id": "lake-panorama-1",
      "title": "Озеро ночью · левая часть",
      "caption": "Триптих · можно по частям",
      "img": "img/shop/lake-panorama-1.webp",
      "thumb": "img/shop/thumb/lake-panorama-1.webp",
      "w": 7000,
      "h": 9115,
      "products": [
        "canvas",
        "foam"
      ],
      "tags": [
        "sky"
      ],
      "partOf": "lake-panorama",
      "part": 1
    },
    {
      "id": "lake-panorama-2",
      "title": "Озеро ночью · центральная часть",
      "caption": "Триптих · можно по частям",
      "img": "img/shop/lake-panorama-2.webp",
      "thumb": "img/shop/thumb/lake-panorama-2.webp",
      "w": 7000,
      "h": 9115,
      "products": [
        "canvas",
        "foam"
      ],
      "tags": [
        "sky"
      ],
      "partOf": "lake-panorama",
      "part": 2
    },
    {
      "id": "lake-panorama-3",
      "title": "Озеро ночью · правая часть",
      "caption": "Триптих · можно по частям",
      "img": "img/shop/lake-panorama-3.webp",
      "thumb": "img/shop/thumb/lake-panorama-3.webp",
      "w": 7000,
      "h": 9115,
      "products": [
        "canvas",
        "foam"
      ],
      "tags": [
        "sky"
      ],
      "partOf": "lake-panorama",
      "part": 3
    },
    {
      "id": "moon-path",
      "title": "Ночной туман",
      "caption": "Пейзаж",
      "img": "img/shop/moon-path.webp",
      "thumb": "img/shop/thumb/moon-path.webp",
      "w": 7000,
      "h": 4950,
      "products": [
        "canvas",
        "foam"
      ],
      "tags": [
        "sky"
      ]
    },
    {
      "id": "gate-light",
      "title": "Верхотурье",
      "caption": "Архитектура",
      "img": "img/shop/gate-light.webp",
      "thumb": "img/shop/thumb/gate-light.webp",
      "w": 3722,
      "h": 3722,
      "products": [
        "canvas",
        "foam"
      ],
      "tags": [
        "bw",
        "city"
      ]
    },
    {
      "id": "hut-field",
      "maxSize": [
        50,
        70
      ],
      "title": "Баня",
      "caption": "Пейзаж",
      "img": "img/shop/hut-field.webp",
      "thumb": "img/shop/thumb/hut-field.webp",
      "w": 7000,
      "h": 4667,
      "products": [
        "canvas",
        "foam"
      ],
      "tags": [
        "country"
      ]
    },
    {
      "id": "old-barn",
      "title": "Старый сруб",
      "caption": "Пейзаж",
      "img": "img/shop/old-barn.webp",
      "thumb": "img/shop/thumb/old-barn.webp",
      "w": 7000,
      "h": 4667,
      "products": [
        "canvas",
        "foam"
      ],
      "tags": [
        "country"
      ]
    },
    {
      "id": "snow-peak",
      "title": "Снежная вершина",
      "caption": "Камчатка",
      "img": "img/shop/snow-peak.webp",
      "thumb": "img/shop/thumb/snow-peak.webp",
      "w": 7000,
      "h": 5250,
      "products": [
        "canvas",
        "foam"
      ],
      "tags": [
        "bw",
        "mountains"
      ]
    },
    {
      "id": "snow-ridge",
      "title": "Восхождение",
      "caption": "Камчатка",
      "img": "img/shop/snow-ridge.webp",
      "thumb": "img/shop/thumb/snow-ridge.webp",
      "w": 7000,
      "h": 5250,
      "products": [
        "canvas",
        "foam"
      ],
      "tags": [
        "bw",
        "mountains"
      ]
    },
    {
      "id": "bridge-fog",
      "title": "Новосибирск",
      "caption": "Чёрно-белая фотография",
      "img": "img/shop/bridge-fog.webp",
      "thumb": "img/shop/thumb/bridge-fog.webp",
      "w": 7000,
      "h": 3938,
      "products": [
        "canvas",
        "foam"
      ],
      "tags": [
        "bw",
        "city"
      ]
    },
    {
      "id": "larch-ridge",
      "title": "Лиственницы под хребтом",
      "caption": "Зимний лес в горах",
      "img": "img/shop/larch-ridge.webp",
      "thumb": "img/shop/thumb/larch-ridge.webp",
      "w": 7008,
      "h": 4672,
      "products": [
        "canvas",
        "foam"
      ],
      "tags": [
        "bw",
        "forest",
        "mountains"
      ],
      "pair": "larch-ridge-v"
    },
    {
      "id": "larch-ridge-v",
      "title": "Лиственницы под хребтом · вертикальная",
      "caption": "Зимний лес в горах",
      "img": "img/shop/larch-ridge-v.webp",
      "thumb": "img/shop/thumb/larch-ridge-v.webp",
      "w": 4672,
      "h": 7008,
      "products": [
        "canvas",
        "foam"
      ],
      "tags": [
        "bw",
        "forest",
        "mountains"
      ],
      "pairOf": "larch-ridge"
    },
    {
      "id": "forest-line",
      "title": "Граница леса",
      "caption": "Зимний лес в горах",
      "img": "img/shop/forest-line.webp",
      "thumb": "img/shop/thumb/forest-line.webp",
      "w": 6701,
      "h": 4467,
      "products": [
        "canvas",
        "foam"
      ],
      "tags": [
        "bw",
        "forest",
        "mountains"
      ]
    },
    {
      "id": "larches",
      "title": "Лиственницы",
      "caption": "Зимний лес в горах",
      "img": "img/shop/larches.webp",
      "thumb": "img/shop/thumb/larches.webp",
      "w": 7008,
      "h": 4672,
      "products": [
        "canvas",
        "foam"
      ],
      "tags": [
        "bw",
        "forest",
        "mountains"
      ]
    },
    {
      "id": "white-valley",
      "title": "Белая долина",
      "caption": "Зимний лес в горах",
      "img": "img/shop/white-valley.webp",
      "thumb": "img/shop/thumb/white-valley.webp",
      "w": 7008,
      "h": 4672,
      "products": [
        "canvas",
        "foam"
      ],
      "tags": [
        "bw",
        "forest",
        "mountains"
      ]
    },
    {
      "id": "sparse-slope",
      "title": "Редколесье на склоне",
      "caption": "Зимний лес в горах",
      "img": "img/shop/sparse-slope.webp",
      "thumb": "img/shop/thumb/sparse-slope.webp",
      "w": 6914,
      "h": 4609,
      "products": [
        "canvas",
        "foam"
      ],
      "tags": [
        "bw",
        "forest",
        "mountains"
      ]
    },
    {
      "id": "snow-hills",
      "title": "Снежные сопки",
      "caption": "Зимний лес в горах",
      "img": "img/shop/snow-hills.webp",
      "thumb": "img/shop/thumb/snow-hills.webp",
      "w": 7008,
      "h": 4672,
      "products": [
        "canvas",
        "foam"
      ],
      "tags": [
        "bw",
        "forest",
        "mountains"
      ]
    },
    {
      "id": "valley-light",
      "title": "Свет в долине",
      "caption": "Камчатка",
      "img": "img/shop/valley-light.webp",
      "thumb": "img/shop/thumb/valley-light.webp",
      "w": 7000,
      "h": 5250,
      "products": [
        "canvas",
        "foam"
      ],
      "tags": [
        "mountains"
      ],
      "pair": "valley-light-v"
    },
    {
      "id": "valley-light-v",
      "title": "Свет в долине · вертикальная",
      "caption": "Камчатка",
      "img": "img/shop/valley-light-v.webp",
      "thumb": "img/shop/thumb/valley-light-v.webp",
      "w": 7000,
      "h": 9333,
      "products": [
        "canvas",
        "foam"
      ],
      "tags": [
        "mountains"
      ],
      "pairOf": "valley-light"
    },
    {
      "id": "river-valley",
      "title": "Река в долине",
      "caption": "Камчатка",
      "img": "img/shop/river-valley.webp",
      "thumb": "img/shop/thumb/river-valley.webp",
      "w": 7000,
      "h": 5250,
      "products": [
        "canvas",
        "foam"
      ],
      "tags": [
        "mountains"
      ],
      "pair": "river-valley-v"
    },
    {
      "id": "river-valley-v",
      "title": "Река в долине · вертикальная",
      "caption": "Камчатка",
      "img": "img/shop/river-valley-v.webp",
      "thumb": "img/shop/thumb/river-valley-v.webp",
      "w": 7000,
      "h": 9333,
      "products": [
        "canvas",
        "foam"
      ],
      "tags": [
        "mountains"
      ],
      "pairOf": "river-valley"
    },
    {
      "id": "green-valley",
      "title": "Зелёная долина",
      "caption": "Камчатка",
      "img": "img/shop/green-valley.webp",
      "thumb": "img/shop/thumb/green-valley.webp",
      "w": 7000,
      "h": 5250,
      "products": [
        "canvas",
        "foam"
      ],
      "tags": [
        "mountains"
      ]
    },
    {
      "id": "beyond-pass",
      "title": "За перевалом",
      "caption": "Камчатка",
      "img": "img/shop/beyond-pass.webp",
      "thumb": "img/shop/thumb/beyond-pass.webp",
      "w": 7000,
      "h": 5250,
      "products": [
        "canvas",
        "foam"
      ],
      "tags": [
        "mountains"
      ],
      "pair": "beyond-pass-v"
    },
    {
      "id": "beyond-pass-v",
      "title": "За перевалом · вертикальная",
      "caption": "Камчатка",
      "img": "img/shop/beyond-pass-v.webp",
      "thumb": "img/shop/thumb/beyond-pass-v.webp",
      "w": 7000,
      "h": 9333,
      "products": [
        "canvas",
        "foam"
      ],
      "tags": [
        "mountains"
      ],
      "pairOf": "beyond-pass"
    },
    {
      "id": "tundra-pattern",
      "title": "Узор тундры",
      "caption": "Камчатка",
      "img": "img/shop/tundra-pattern.webp",
      "thumb": "img/shop/thumb/tundra-pattern.webp",
      "w": 7000,
      "h": 4667,
      "products": [
        "canvas",
        "foam"
      ],
      "tags": [
        "mountains"
      ],
      "pair": "tundra-pattern-v"
    },
    {
      "id": "tundra-pattern-v",
      "title": "Узор тундры · вертикальная",
      "caption": "Камчатка",
      "img": "img/shop/tundra-pattern-v.webp",
      "thumb": "img/shop/thumb/tundra-pattern-v.webp",
      "w": 7000,
      "h": 10500,
      "products": [
        "canvas",
        "foam"
      ],
      "tags": [
        "mountains"
      ],
      "pairOf": "tundra-pattern"
    },
    {
      "id": "red-ridge",
      "title": "Красный гребень",
      "caption": "Камчатка",
      "img": "img/shop/red-ridge.webp",
      "thumb": "img/shop/thumb/red-ridge.webp",
      "w": 7000,
      "h": 9333,
      "products": [
        "canvas",
        "foam"
      ],
      "tags": [
        "mountains"
      ]
    },
    {
      "id": "cloud-slope",
      "title": "Облако на склоне",
      "caption": "Камчатка",
      "img": "img/shop/cloud-slope.webp",
      "thumb": "img/shop/thumb/cloud-slope.webp",
      "w": 7000,
      "h": 5250,
      "products": [
        "canvas",
        "foam"
      ],
      "tags": [
        "mountains",
        "sky"
      ]
    },
    {
      "id": "cloud-peak",
      "title": "Вершина под облаком",
      "caption": "Камчатка",
      "img": "img/shop/cloud-peak.webp",
      "thumb": "img/shop/thumb/cloud-peak.webp",
      "w": 7000,
      "h": 5250,
      "products": [
        "canvas",
        "foam"
      ],
      "tags": [
        "mountains",
        "sky"
      ]
    },
    {
      "id": "rocks-fog",
      "title": "Скалы в тумане",
      "caption": "Камчатка",
      "img": "img/shop/rocks-fog.webp",
      "thumb": "img/shop/thumb/rocks-fog.webp",
      "w": 5250,
      "h": 7000,
      "products": [
        "canvas",
        "foam"
      ],
      "tags": [
        "mountains"
      ]
    },
    {
      "id": "moon",
      "title": "Луна",
      "caption": "Камчатка, утро",
      "img": "img/shop/moon.webp",
      "thumb": "img/shop/thumb/moon.webp",
      "w": 7000,
      "h": 5250,
      "products": [
        "canvas",
        "foam"
      ],
      "tags": [
        "sky"
      ]
    }
  ],
  "postcards": [
    {
      "id": "pc-peaks",
      "title": "Горы в облаках",
      "img": "img/Nat_31.webp",
      "thumb": "img/thumb/Nat_31.webp",
      "w": 1280,
      "h": 853
    },
    {
      "id": "pc-neva",
      "title": "Ночная Нева",
      "img": "img/Arc_16.webp",
      "thumb": "img/thumb/Arc_16.webp",
      "w": 1280,
      "h": 853
    },
    {
      "id": "pc-winter-river",
      "title": "Река зимой",
      "img": "img/Nat_57.webp",
      "thumb": "img/thumb/Nat_57.webp",
      "w": 2048,
      "h": 1536
    },
    {
      "id": "pc-snow-trees",
      "title": "Иней",
      "img": "img/Nat_56.webp",
      "thumb": "img/thumb/Nat_56.webp",
      "w": 2048,
      "h": 1536
    },
    {
      "id": "pc-cathedral",
      "title": "Собор в снегу",
      "img": "img/Arc_30.webp",
      "thumb": "img/thumb/Arc_30.webp",
      "w": 1500,
      "h": 1000
    },
    {
      "id": "pc-sea",
      "title": "Закат над морем",
      "img": "img/Nat_10.webp",
      "thumb": "img/thumb/Nat_10.webp",
      "w": 1280,
      "h": 850
    }
  ],
  "delivery": {
    "from": {
      "city": "Сертолово",
      "postal_code": "188632",
      "country_code": "RU"
    },
    "handlingFee": 0,
    "methods": [
      {
        "id": "cdek",
        "enabled": true,
        "soon": "Скоро",
        "soonNote": "Подключаем СДЭК — пока доступны Почта России и самовывоз",
        "title": "СДЭК",
        "lead": "До пункта выдачи или постамата",
        "yandexMapsKey": "",
        "defaultLocation": "Санкт-Петербург",
        "tariffs": {
          "office": [
            136,
            234
          ],
          "pickup": [
            368
          ],
          "door": []
        }
      },
      {
        "id": "pochta",
        "enabled": true,
        "title": "Почта России",
        "lead": "До отделения или пункта выдачи на карте",
        "widgetId": 63945,
        "object": 4020,
        "maxPackSide": 100,
        "_maxNote": "Предел длинной стороны коробки, см. Крупнее — Почта не берёт: 100x150 выходит за её габариты, а для 70x100 тариф по весу сильно расходится с фактом.",
        "tooBig": "Для форматов крупнее 60×90 Почта не подходит — напишите в Telegram, отправим иначе"
      },
      {
        "id": "pickup",
        "enabled": true,
        "title": "Самовывоз",
        "lead": "Сертолово или Санкт-Петербург, по договорённости",
        "price": 0
      }
    ],
    "_packing": "Упаковка считается по размеру: pack[опция].price в рублях. Гофрокартон ~70 ₽/м², пузырьковая плёнка ~13 ₽/м², вспененный полиэтилен на уголки ~60 ₽/м², плюс 15 ₽ расходников на посылку. Пересчитать — tools/packprice.py."
  },
  "legal": {
    "offer": "oferta.html",
    "consent": "consent.html",
    "privacy": "privacy.html"
  },
  "tags": [
    [
      "bw",
      "Чёрно-белые"
    ],
    [
      "mountains",
      "Горы"
    ],
    [
      "forest",
      "Лес"
    ],
    [
      "city",
      "Город"
    ],
    [
      "sky",
      "Небо и вода"
    ],
    [
      "country",
      "Деревня"
    ]
  ]
}
/*JSON-END*/;
