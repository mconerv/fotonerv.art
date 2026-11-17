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
    "Цены: себестоимость Яркого × 2 с учётом НПД 4 % и комиссии 3,9 % (до 17.11.2026 было ×3…×2). Пересчитано из прежних цен, где k шёл от 3 (20×30) до 2 (100×150) по логарифму площади. Форматы — до 60×90.",
    "Холст: options — сочетание холста (mat: n — натуральный, s — синтетический) и подрамника; materials — подписи холстов; tableCols — столбцы таблицы цен.",
    "Пенокартон: materials — основа (w — белый, b — чёрный, 5 мм; edge — цвет кромки на превью), options — основа × бумага (v: gl — глянцевая, mt — матовая, sk — шёлк). Печать — Durst Theta 76, «мокрая».",
    "Открытки: postcards — по работам каталога; products.postcard.sets — наборы (cards: id открыток или \"all\"), anyN — любые n открыток поштучно стоят как набор (скидка считается в quote). Только открытки — Почта шлёт заказным письмом (до 100 г) или заказной бандеролью."
  ],
  "version": "2026-11-17",
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
      "note": "При галерейной натяжке края кадра уходят на торцы — по толщине подрамника с каждой стороны.",
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
            "n2": 4000,
            "n4": 4000,
            "s2": 3700,
            "s4": 3700
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
            "n2": 5100,
            "n4": 5100,
            "s2": 4700,
            "s4": 4700
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
            "n2": 6200,
            "n4": 6200,
            "s2": 5700,
            "s4": 5700
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
            "n2": 6800,
            "n4": 6800,
            "s2": 6200,
            "s4": 6200
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
            "n2": 7500,
            "n4": 7500,
            "s2": 6900,
            "s4": 6900
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
            "n2": 8900,
            "n4": 8900,
            "s2": 8000,
            "s4": 8000
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
            "n2": 10200,
            "n4": 10200,
            "s2": 9200,
            "s4": 9200
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
            "n2": 10400,
            "n4": 10400,
            "s2": 9300,
            "s4": 9300
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
            "n2": 11900,
            "n4": 11900,
            "s2": 10500,
            "s4": 10500
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
            "n2": 13400,
            "n4": 13400,
            "s2": 11900,
            "s4": 11900
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
            "n2": 13600,
            "n4": 13600,
            "s2": 12000,
            "s4": 12000
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
            "n2": 18700,
            "n4": 18700,
            "s2": 16400,
            "s4": 16400
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
      ],
      "matLabel": "Тип холста",
      "optLabel": "Подрамник"
    },
    "foam": {
      "title": "Пенокартон",
      "lead": "Фотопечать с накаткой на жёсткую лёгкую основу: под раму или на подвесы.",
      "specs": [
        "Классическая «мокрая» фотопечать Durst Theta 76 в фотолаборатории",
        "Бумага на выбор: глянцевая, матовая или шёлк",
        "Накатка на белый или чёрный пенокартон 5 мм",
        "Крепление на 2 точки в комплекте — можно сразу вешать",
        "Не для улицы и влажных помещений"
      ],
      "note": "Пенокартон 5 мм лёгкий, но на крупных форматах может немного прогибаться — 60 × 60 и 60 × 90 лучше оформить в раму.",
      "options": [
        {
          "id": "w-gl",
          "mat": "w",
          "v": "gl",
          "label": "Глянцевая",
          "short": "глянцевая бумага",
          "depth": 0.5
        },
        {
          "id": "w-mt",
          "mat": "w",
          "v": "mt",
          "label": "Матовая",
          "short": "матовая бумага",
          "depth": 0.5
        },
        {
          "id": "w-sk",
          "mat": "w",
          "v": "sk",
          "label": "Шёлк",
          "short": "бумага шёлк",
          "depth": 0.5
        },
        {
          "id": "b-gl",
          "mat": "b",
          "v": "gl",
          "label": "Глянцевая",
          "short": "глянцевая бумага",
          "depth": 0.5
        },
        {
          "id": "b-mt",
          "mat": "b",
          "v": "mt",
          "label": "Матовая",
          "short": "матовая бумага",
          "depth": 0.5
        },
        {
          "id": "b-sk",
          "mat": "b",
          "v": "sk",
          "label": "Шёлк",
          "short": "бумага шёлк",
          "depth": 0.5
        }
      ],
      "sizes": [
        {
          "id": "30x30",
          "a": 30,
          "b": 30,
          "thickness": 5,
          "price": {
            "w-gl": 2800,
            "w-mt": 2800,
            "w-sk": 2800,
            "b-gl": 2800,
            "b-mt": 2800,
            "b-sk": 2800
          },
          "pack": {
            "w-gl": {
              "l": 36,
              "w": 36,
              "h": 4,
              "g": 330,
              "price": 50
            },
            "w-mt": {
              "l": 36,
              "w": 36,
              "h": 4,
              "g": 330,
              "price": 50
            },
            "w-sk": {
              "l": 36,
              "w": 36,
              "h": 4,
              "g": 330,
              "price": 50
            },
            "b-gl": {
              "l": 36,
              "w": 36,
              "h": 4,
              "g": 330,
              "price": 50
            },
            "b-mt": {
              "l": 36,
              "w": 36,
              "h": 4,
              "g": 330,
              "price": 50
            },
            "b-sk": {
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
          "thickness": 5,
          "price": {
            "w-gl": 3600,
            "w-mt": 3600,
            "w-sk": 3600,
            "b-gl": 3600,
            "b-mt": 3600,
            "b-sk": 3600
          },
          "pack": {
            "w-gl": {
              "l": 46,
              "w": 36,
              "h": 4,
              "g": 360,
              "price": 50
            },
            "w-mt": {
              "l": 46,
              "w": 36,
              "h": 4,
              "g": 360,
              "price": 50
            },
            "w-sk": {
              "l": 46,
              "w": 36,
              "h": 4,
              "g": 360,
              "price": 50
            },
            "b-gl": {
              "l": 46,
              "w": 36,
              "h": 4,
              "g": 360,
              "price": 50
            },
            "b-mt": {
              "l": 46,
              "w": 36,
              "h": 4,
              "g": 360,
              "price": 50
            },
            "b-sk": {
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
          "thickness": 5,
          "price": {
            "w-gl": 4000,
            "w-mt": 4000,
            "w-sk": 4000,
            "b-gl": 4000,
            "b-mt": 4000,
            "b-sk": 4000
          },
          "pack": {
            "w-gl": {
              "l": 51,
              "w": 36,
              "h": 4,
              "g": 370,
              "price": 60
            },
            "w-mt": {
              "l": 51,
              "w": 36,
              "h": 4,
              "g": 370,
              "price": 60
            },
            "w-sk": {
              "l": 51,
              "w": 36,
              "h": 4,
              "g": 370,
              "price": 60
            },
            "b-gl": {
              "l": 51,
              "w": 36,
              "h": 4,
              "g": 370,
              "price": 60
            },
            "b-mt": {
              "l": 51,
              "w": 36,
              "h": 4,
              "g": 370,
              "price": 60
            },
            "b-sk": {
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
          "thickness": 5,
          "price": {
            "w-gl": 4700,
            "w-mt": 4700,
            "w-sk": 4700,
            "b-gl": 4700,
            "b-mt": 4700,
            "b-sk": 4700
          },
          "pack": {
            "w-gl": {
              "l": 46,
              "w": 46,
              "h": 4,
              "g": 390,
              "price": 60
            },
            "w-mt": {
              "l": 46,
              "w": 46,
              "h": 4,
              "g": 390,
              "price": 60
            },
            "w-sk": {
              "l": 46,
              "w": 46,
              "h": 4,
              "g": 390,
              "price": 60
            },
            "b-gl": {
              "l": 46,
              "w": 46,
              "h": 4,
              "g": 390,
              "price": 60
            },
            "b-mt": {
              "l": 46,
              "w": 46,
              "h": 4,
              "g": 390,
              "price": 60
            },
            "b-sk": {
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
          "thickness": 5,
          "price": {
            "w-gl": 5800,
            "w-mt": 5800,
            "w-sk": 5800,
            "b-gl": 5800,
            "b-mt": 5800,
            "b-sk": 5800
          },
          "pack": {
            "w-gl": {
              "l": 56,
              "w": 46,
              "h": 4,
              "g": 430,
              "price": 70
            },
            "w-mt": {
              "l": 56,
              "w": 46,
              "h": 4,
              "g": 430,
              "price": 70
            },
            "w-sk": {
              "l": 56,
              "w": 46,
              "h": 4,
              "g": 430,
              "price": 70
            },
            "b-gl": {
              "l": 56,
              "w": 46,
              "h": 4,
              "g": 430,
              "price": 70
            },
            "b-mt": {
              "l": 56,
              "w": 46,
              "h": 4,
              "g": 430,
              "price": 70
            },
            "b-sk": {
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
          "thickness": 5,
          "price": {
            "w-gl": 6800,
            "w-mt": 6800,
            "w-sk": 6800,
            "b-gl": 6800,
            "b-mt": 6800,
            "b-sk": 6800
          },
          "pack": {
            "w-gl": {
              "l": 66,
              "w": 46,
              "h": 4,
              "g": 470,
              "price": 80
            },
            "w-mt": {
              "l": 66,
              "w": 46,
              "h": 4,
              "g": 470,
              "price": 80
            },
            "w-sk": {
              "l": 66,
              "w": 46,
              "h": 4,
              "g": 470,
              "price": 80
            },
            "b-gl": {
              "l": 66,
              "w": 46,
              "h": 4,
              "g": 470,
              "price": 80
            },
            "b-mt": {
              "l": 66,
              "w": 46,
              "h": 4,
              "g": 470,
              "price": 80
            },
            "b-sk": {
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
          "thickness": 5,
          "price": {
            "w-gl": 7100,
            "w-mt": 7100,
            "w-sk": 7100,
            "b-gl": 7100,
            "b-mt": 7100,
            "b-sk": 7100
          },
          "pack": {
            "w-gl": {
              "l": 56,
              "w": 56,
              "h": 4,
              "g": 480,
              "price": 80
            },
            "w-mt": {
              "l": 56,
              "w": 56,
              "h": 4,
              "g": 480,
              "price": 80
            },
            "w-sk": {
              "l": 56,
              "w": 56,
              "h": 4,
              "g": 480,
              "price": 80
            },
            "b-gl": {
              "l": 56,
              "w": 56,
              "h": 4,
              "g": 480,
              "price": 80
            },
            "b-mt": {
              "l": 56,
              "w": 56,
              "h": 4,
              "g": 480,
              "price": 80
            },
            "b-sk": {
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
          "thickness": 5,
          "price": {
            "w-gl": 8400,
            "w-mt": 8400,
            "w-sk": 8400,
            "b-gl": 8400,
            "b-mt": 8400,
            "b-sk": 8400
          },
          "pack": {
            "w-gl": {
              "l": 66,
              "w": 56,
              "h": 4,
              "g": 520,
              "price": 90
            },
            "w-mt": {
              "l": 66,
              "w": 56,
              "h": 4,
              "g": 520,
              "price": 90
            },
            "w-sk": {
              "l": 66,
              "w": 56,
              "h": 4,
              "g": 520,
              "price": 90
            },
            "b-gl": {
              "l": 66,
              "w": 56,
              "h": 4,
              "g": 520,
              "price": 90
            },
            "b-mt": {
              "l": 66,
              "w": 56,
              "h": 4,
              "g": 520,
              "price": 90
            },
            "b-sk": {
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
          "thickness": 5,
          "price": {
            "w-gl": 9800,
            "w-mt": 9800,
            "w-sk": 9800,
            "b-gl": 9800,
            "b-mt": 9800,
            "b-sk": 9800
          },
          "pack": {
            "w-gl": {
              "l": 76,
              "w": 56,
              "h": 4,
              "g": 560,
              "price": 90
            },
            "w-mt": {
              "l": 76,
              "w": 56,
              "h": 4,
              "g": 560,
              "price": 90
            },
            "w-sk": {
              "l": 76,
              "w": 56,
              "h": 4,
              "g": 560,
              "price": 90
            },
            "b-gl": {
              "l": 76,
              "w": 56,
              "h": 4,
              "g": 560,
              "price": 90
            },
            "b-mt": {
              "l": 76,
              "w": 56,
              "h": 4,
              "g": 560,
              "price": 90
            },
            "b-sk": {
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
          "thickness": 5,
          "price": {
            "w-gl": 10100,
            "w-mt": 10100,
            "w-sk": 10100,
            "b-gl": 10100,
            "b-mt": 10100,
            "b-sk": 10100
          },
          "pack": {
            "w-gl": {
              "l": 66,
              "w": 66,
              "h": 4,
              "g": 570,
              "price": 100
            },
            "w-mt": {
              "l": 66,
              "w": 66,
              "h": 4,
              "g": 570,
              "price": 100
            },
            "w-sk": {
              "l": 66,
              "w": 66,
              "h": 4,
              "g": 570,
              "price": 100
            },
            "b-gl": {
              "l": 66,
              "w": 66,
              "h": 4,
              "g": 570,
              "price": 100
            },
            "b-mt": {
              "l": 66,
              "w": 66,
              "h": 4,
              "g": 570,
              "price": 100
            },
            "b-sk": {
              "l": 66,
              "w": 66,
              "h": 4,
              "g": 570,
              "price": 100
            }
          }
        },
        {
          "id": "60x90",
          "a": 60,
          "b": 90,
          "thickness": 5,
          "price": {
            "w-gl": 15000,
            "w-mt": 15000,
            "w-sk": 15000,
            "b-gl": 15000,
            "b-mt": 15000,
            "b-sk": 15000
          },
          "pack": {
            "w-gl": {
              "l": 96,
              "w": 66,
              "h": 4,
              "g": 740,
              "price": 130
            },
            "w-mt": {
              "l": 96,
              "w": 66,
              "h": 4,
              "g": 740,
              "price": 130
            },
            "w-sk": {
              "l": 96,
              "w": 66,
              "h": 4,
              "g": 740,
              "price": 130
            },
            "b-gl": {
              "l": 96,
              "w": 66,
              "h": 4,
              "g": 740,
              "price": 130
            },
            "b-mt": {
              "l": 96,
              "w": 66,
              "h": 4,
              "g": 740,
              "price": 130
            },
            "b-sk": {
              "l": 96,
              "w": 66,
              "h": 4,
              "g": 740,
              "price": 130
            }
          }
        }
      ],
      "materials": [
        {
          "id": "w",
          "edge": "w",
          "label": "Белый 5 мм",
          "short": "белый пенокартон 5 мм",
          "note": "Белая кромка по краю, классический вариант"
        },
        {
          "id": "b",
          "edge": "b",
          "label": "Чёрный 5 мм",
          "short": "чёрный пенокартон 5 мм",
          "note": "Чёрная кромка — край не заметен на тёмной стене и в раме"
        }
      ],
      "tableCols": [
        {
          "opt": "w-mt",
          "label": "Цена"
        }
      ],
      "matLabel": "Основа",
      "optLabel": "Бумага"
    },
    "postcard": {
      "hidden": false,
      "title": "Открытки",
      "lead": "Почтовые открытки 10 × 15 см с кадрами из каталога — по одной, готовым набором или любые пять со скидкой.",
      "specs": [
        "Формат 10 × 15 см, плотная мелованная бумага 300 г/м²",
        "На обороте — поле для адреса, марки и текста, название и место съёмки",
        "Наборы по 5 открыток, а любые 5 штук в корзине стоят как набор"
      ],
      "price": 200,
      "anyN": {
        "n": 5,
        "price": 850,
        "title": "Любые 5 открыток"
      },
      "sets": [
        {
          "id": "set-kamchatka",
          "title": "Камчатка",
          "lead": "Вулканы, тундра и облака",
          "cards": [
            "slope-clouds",
            "red-ridge",
            "tundra-pattern",
            "valley-light",
            "beyond-pass"
          ],
          "price": 850
        },
        {
          "id": "set-winter-forest",
          "title": "Зимний лес",
          "lead": "Магадан, чёрно-белая серия",
          "cards": [
            "larch-ridge",
            "forest-line",
            "larches",
            "white-valley",
            "snow-hills"
          ],
          "price": 850
        },
        {
          "id": "set-bw",
          "title": "Чёрно-белое",
          "lead": "Города и горы",
          "cards": [
            "isaac-night",
            "gate-light",
            "bridge-fog",
            "snow-peak",
            "snow-ridge"
          ],
          "price": 850
        },
        {
          "id": "set-sky",
          "title": "Небо и туман",
          "lead": "Тихие ночные и туманные кадры",
          "cards": [
            "moon-path",
            "moon",
            "cloud-slope",
            "cloud-peak",
            "rocks-fog"
          ],
          "price": 850
        },
        {
          "id": "set-quiet",
          "title": "Тихие места",
          "lead": "Река, деревня, долины",
          "cards": [
            "misty-river",
            "hut-field",
            "old-barn",
            "river-valley",
            "green-valley"
          ],
          "price": 850
        },
        {
          "id": "set-all",
          "title": "Все открытки",
          "lead": "Полная коллекция",
          "cards": "all",
          "price": 3000
        }
      ],
      "pack": {
        "each": {
          "g": 5
        },
        "envelope": {
          "l": 23,
          "w": 17,
          "h": 1,
          "g": 20,
          "price": 15
        }
      }
    }
  },
  "works": [
    {
      "id": "misty-river",
      "title": "Река в тумане",
      "caption": "Якутия",
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
      "caption": "Кольский полуостров",
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
      "title": "Врата",
      "caption": "Верхотурье",
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
      "caption": "Кольский полуостров",
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
      "caption": "Кольский полуостров",
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
      "title": "Зимний мост",
      "caption": "Новосибирск",
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
      "caption": "Магадан",
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
      "caption": "Магадан",
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
      "caption": "Магадан",
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
      "caption": "Магадан",
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
      "caption": "Магадан",
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
      "caption": "Магадан",
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
      "caption": "Магадан",
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
      "id": "misty-river",
      "title": "Река в тумане",
      "caption": "Якутия",
      "img": "img/shop/misty-river.webp",
      "thumb": "img/shop/thumb/misty-river.webp",
      "w": 5250,
      "h": 7000,
      "tags": [
        "bw",
        "forest"
      ],
      "back": "img/shop/back/misty-river.webp",
      "backL": "img/shop/back/misty-river-l.webp"
    },
    {
      "id": "isaac-night",
      "title": "Первый снег",
      "caption": "Санкт-Петербург",
      "img": "img/shop/isaac-night.webp",
      "thumb": "img/shop/thumb/isaac-night.webp",
      "w": 7000,
      "h": 4667,
      "tags": [
        "bw",
        "city"
      ],
      "back": "img/shop/back/isaac-night.webp",
      "backL": "img/shop/back/isaac-night-l.webp"
    },
    {
      "id": "slope-clouds",
      "title": "Гора Отвесная",
      "caption": "Камчатка",
      "img": "img/shop/slope-clouds.webp",
      "thumb": "img/shop/thumb/slope-clouds.webp",
      "w": 7000,
      "h": 9333,
      "tags": [
        "mountains"
      ],
      "back": "img/shop/back/slope-clouds.webp",
      "backL": "img/shop/back/slope-clouds-l.webp"
    },
    {
      "id": "moon-path",
      "title": "Ночной туман",
      "caption": "Кольский полуостров",
      "img": "img/shop/moon-path.webp",
      "thumb": "img/shop/thumb/moon-path.webp",
      "w": 7000,
      "h": 4950,
      "tags": [
        "sky"
      ],
      "back": "img/shop/back/moon-path.webp",
      "backL": "img/shop/back/moon-path-l.webp"
    },
    {
      "id": "gate-light",
      "title": "Врата",
      "caption": "Верхотурье",
      "img": "img/shop/gate-light.webp",
      "thumb": "img/shop/thumb/gate-light.webp",
      "w": 3722,
      "h": 3722,
      "tags": [
        "bw",
        "city"
      ],
      "back": "img/shop/back/gate-light.webp",
      "backL": "img/shop/back/gate-light-l.webp"
    },
    {
      "id": "hut-field",
      "title": "Баня",
      "caption": "Кольский полуостров",
      "img": "img/shop/hut-field.webp",
      "thumb": "img/shop/thumb/hut-field.webp",
      "w": 7000,
      "h": 4667,
      "tags": [
        "country"
      ],
      "back": "img/shop/back/hut-field.webp",
      "backL": "img/shop/back/hut-field-l.webp"
    },
    {
      "id": "old-barn",
      "title": "Старый сруб",
      "caption": "Кольский полуостров",
      "img": "img/shop/old-barn.webp",
      "thumb": "img/shop/thumb/old-barn.webp",
      "w": 7000,
      "h": 4667,
      "tags": [
        "country"
      ],
      "back": "img/shop/back/old-barn.webp",
      "backL": "img/shop/back/old-barn-l.webp"
    },
    {
      "id": "snow-peak",
      "title": "Снежная вершина",
      "caption": "Камчатка",
      "img": "img/shop/snow-peak.webp",
      "thumb": "img/shop/thumb/snow-peak.webp",
      "w": 7000,
      "h": 5250,
      "tags": [
        "bw",
        "mountains"
      ],
      "back": "img/shop/back/snow-peak.webp",
      "backL": "img/shop/back/snow-peak-l.webp"
    },
    {
      "id": "snow-ridge",
      "title": "Восхождение",
      "caption": "Камчатка",
      "img": "img/shop/snow-ridge.webp",
      "thumb": "img/shop/thumb/snow-ridge.webp",
      "w": 7000,
      "h": 5250,
      "tags": [
        "bw",
        "mountains"
      ],
      "back": "img/shop/back/snow-ridge.webp",
      "backL": "img/shop/back/snow-ridge-l.webp"
    },
    {
      "id": "bridge-fog",
      "title": "Зимний мост",
      "caption": "Новосибирск",
      "img": "img/shop/bridge-fog.webp",
      "thumb": "img/shop/thumb/bridge-fog.webp",
      "w": 7000,
      "h": 3938,
      "tags": [
        "bw",
        "city"
      ],
      "back": "img/shop/back/bridge-fog.webp",
      "backL": "img/shop/back/bridge-fog-l.webp"
    },
    {
      "id": "larch-ridge",
      "title": "Лиственницы под хребтом",
      "caption": "Магадан",
      "img": "img/shop/larch-ridge.webp",
      "thumb": "img/shop/thumb/larch-ridge.webp",
      "w": 7008,
      "h": 4672,
      "tags": [
        "bw",
        "forest",
        "mountains"
      ],
      "back": "img/shop/back/larch-ridge.webp",
      "backL": "img/shop/back/larch-ridge-l.webp"
    },
    {
      "id": "forest-line",
      "title": "Граница леса",
      "caption": "Магадан",
      "img": "img/shop/forest-line.webp",
      "thumb": "img/shop/thumb/forest-line.webp",
      "w": 6701,
      "h": 4467,
      "tags": [
        "bw",
        "forest",
        "mountains"
      ],
      "back": "img/shop/back/forest-line.webp",
      "backL": "img/shop/back/forest-line-l.webp"
    },
    {
      "id": "larches",
      "title": "Лиственницы",
      "caption": "Магадан",
      "img": "img/shop/larches.webp",
      "thumb": "img/shop/thumb/larches.webp",
      "w": 7008,
      "h": 4672,
      "tags": [
        "bw",
        "forest",
        "mountains"
      ],
      "back": "img/shop/back/larches.webp",
      "backL": "img/shop/back/larches-l.webp"
    },
    {
      "id": "white-valley",
      "title": "Белая долина",
      "caption": "Магадан",
      "img": "img/shop/white-valley.webp",
      "thumb": "img/shop/thumb/white-valley.webp",
      "w": 7008,
      "h": 4672,
      "tags": [
        "bw",
        "forest",
        "mountains"
      ],
      "back": "img/shop/back/white-valley.webp",
      "backL": "img/shop/back/white-valley-l.webp"
    },
    {
      "id": "sparse-slope",
      "title": "Редколесье на склоне",
      "caption": "Магадан",
      "img": "img/shop/sparse-slope.webp",
      "thumb": "img/shop/thumb/sparse-slope.webp",
      "w": 6914,
      "h": 4609,
      "tags": [
        "bw",
        "forest",
        "mountains"
      ],
      "back": "img/shop/back/sparse-slope.webp",
      "backL": "img/shop/back/sparse-slope-l.webp"
    },
    {
      "id": "snow-hills",
      "title": "Снежные сопки",
      "caption": "Магадан",
      "img": "img/shop/snow-hills.webp",
      "thumb": "img/shop/thumb/snow-hills.webp",
      "w": 7008,
      "h": 4672,
      "tags": [
        "bw",
        "forest",
        "mountains"
      ],
      "back": "img/shop/back/snow-hills.webp",
      "backL": "img/shop/back/snow-hills-l.webp"
    },
    {
      "id": "valley-light",
      "title": "Свет в долине",
      "caption": "Камчатка",
      "img": "img/shop/valley-light.webp",
      "thumb": "img/shop/thumb/valley-light.webp",
      "w": 7000,
      "h": 5250,
      "tags": [
        "mountains"
      ],
      "back": "img/shop/back/valley-light.webp",
      "backL": "img/shop/back/valley-light-l.webp"
    },
    {
      "id": "river-valley",
      "title": "Река в долине",
      "caption": "Камчатка",
      "img": "img/shop/river-valley.webp",
      "thumb": "img/shop/thumb/river-valley.webp",
      "w": 7000,
      "h": 5250,
      "tags": [
        "mountains"
      ],
      "back": "img/shop/back/river-valley.webp",
      "backL": "img/shop/back/river-valley-l.webp"
    },
    {
      "id": "green-valley",
      "title": "Зелёная долина",
      "caption": "Камчатка",
      "img": "img/shop/green-valley.webp",
      "thumb": "img/shop/thumb/green-valley.webp",
      "w": 7000,
      "h": 5250,
      "tags": [
        "mountains"
      ],
      "back": "img/shop/back/green-valley.webp",
      "backL": "img/shop/back/green-valley-l.webp"
    },
    {
      "id": "beyond-pass",
      "title": "За перевалом",
      "caption": "Камчатка",
      "img": "img/shop/beyond-pass.webp",
      "thumb": "img/shop/thumb/beyond-pass.webp",
      "w": 7000,
      "h": 5250,
      "tags": [
        "mountains"
      ],
      "back": "img/shop/back/beyond-pass.webp",
      "backL": "img/shop/back/beyond-pass-l.webp"
    },
    {
      "id": "tundra-pattern",
      "title": "Узор тундры",
      "caption": "Камчатка",
      "img": "img/shop/tundra-pattern.webp",
      "thumb": "img/shop/thumb/tundra-pattern.webp",
      "w": 7000,
      "h": 4667,
      "tags": [
        "mountains"
      ],
      "back": "img/shop/back/tundra-pattern.webp",
      "backL": "img/shop/back/tundra-pattern-l.webp"
    },
    {
      "id": "red-ridge",
      "title": "Красный гребень",
      "caption": "Камчатка",
      "img": "img/shop/red-ridge.webp",
      "thumb": "img/shop/thumb/red-ridge.webp",
      "w": 7000,
      "h": 9333,
      "tags": [
        "mountains"
      ],
      "back": "img/shop/back/red-ridge.webp",
      "backL": "img/shop/back/red-ridge-l.webp"
    },
    {
      "id": "cloud-slope",
      "title": "Облако на склоне",
      "caption": "Камчатка",
      "img": "img/shop/cloud-slope.webp",
      "thumb": "img/shop/thumb/cloud-slope.webp",
      "w": 7000,
      "h": 5250,
      "tags": [
        "mountains",
        "sky"
      ],
      "back": "img/shop/back/cloud-slope.webp",
      "backL": "img/shop/back/cloud-slope-l.webp"
    },
    {
      "id": "cloud-peak",
      "title": "Вершина под облаком",
      "caption": "Камчатка",
      "img": "img/shop/cloud-peak.webp",
      "thumb": "img/shop/thumb/cloud-peak.webp",
      "w": 7000,
      "h": 5250,
      "tags": [
        "mountains",
        "sky"
      ],
      "back": "img/shop/back/cloud-peak.webp",
      "backL": "img/shop/back/cloud-peak-l.webp"
    },
    {
      "id": "rocks-fog",
      "title": "Скалы в тумане",
      "caption": "Камчатка",
      "img": "img/shop/rocks-fog.webp",
      "thumb": "img/shop/thumb/rocks-fog.webp",
      "w": 5250,
      "h": 7000,
      "tags": [
        "mountains"
      ],
      "back": "img/shop/back/rocks-fog.webp",
      "backL": "img/shop/back/rocks-fog-l.webp"
    },
    {
      "id": "moon",
      "title": "Луна",
      "caption": "Камчатка, утро",
      "img": "img/shop/moon.webp",
      "thumb": "img/shop/thumb/moon.webp",
      "w": 7000,
      "h": 5250,
      "tags": [
        "sky"
      ],
      "back": "img/shop/back/moon.webp",
      "backL": "img/shop/back/moon-l.webp"
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
        "lead": "До отделения Почты по его индексу",
        "officesUrl": "https://www.pochta.ru/offices",
        "_widgetId": 63945,
        "_widgetNote": "Виджет-карта отключён: без договора с Почтой в нём нет кнопки выбора, а цена считается для посылки по его тарифу и не совпадает с расчётом сайта. Вернуть — переименовать _widgetId в widgetId.",
        "object": 4020,
        "maxPackSide": 100,
        "_maxNote": "Предел длинной стороны коробки, см. Крупнее — Почта не берёт: 100x150 выходит за её габариты, а для 70x100 тариф по весу сильно расходится с фактом.",
        "tooBig": "Для форматов крупнее 60×90 Почта не подходит — напишите в Telegram, отправим иначе",
        "letterObject": 2010,
        "bookpostObject": 3010
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
