/* FotoNerv · данные магазина. Правьте только JSON между маркерами — его же читает серверная функция. */
window.SHOP_DATA = /*JSON-START*/{
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
    "Пенокартон: materials — основа (w — белый, b — чёрный, 5 мм; edge — цвет кромки на превью), options — основа × бумага (v: gl — глянцевая, mt — матовая). Печать — Durst Theta 76, «мокрая».",
    "Открытки: postcards — по работам каталога; products.postcard.sets — наборы (cards: id открыток или \"all\"), anyN — любые n открыток поштучно стоят как набор (скидка считается в quote). Только открытки — Почта шлёт заказным письмом (до 100 г) или заказной бандеролью.",
    "products.postcard.sets[].cover — id открытки, которая лежит сверху на превью набора (необязательно).",
    "postcards[].themes — темы для фильтра поштучных открыток (ключи из products.postcard.themes); postcards[].region — ключ из products.postcard.regions.",
    "short — необязательное короткое название для подписи в сетке каталога и наборов; крупный просмотр, оборот, корзина и заказ берут полное title."
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
      "title": "Фотопечать на жёсткой основе",
      "lead": "Фотография на фотобумаге, накатанная на лёгкую жёсткую основу из пенокартона: под раму или сразу на стену.",
      "specs": [
        "Печать: классическая «мокрая» фотопечать в фотолаборатории Durst Theta 76 на фотобумаге Fuji",
        "Бумага на выбор: глянцевая или матовая",
        "Основа: пенокартон 5 мм — пенополистирол, покрытый мелованным картоном с двух сторон; белый или чёрный",
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
            "b-gl": 2800,
            "b-mt": 2800
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
            "b-gl": 3600,
            "b-mt": 3600
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
            "b-gl": 4000,
            "b-mt": 4000
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
            "b-gl": 4700,
            "b-mt": 4700
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
            "b-gl": 5800,
            "b-mt": 5800
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
            "b-gl": 6800,
            "b-mt": 6800
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
            "b-gl": 7100,
            "b-mt": 7100
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
            "b-gl": 8400,
            "b-mt": 8400
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
            "b-gl": 9800,
            "b-mt": 9800
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
            "b-gl": 10100,
            "b-mt": 10100
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
            "b-gl": 15000,
            "b-mt": 15000
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
      "optLabel": "Бумага",
      "tab": "Жёсткая основа"
    },
    "postcard": {
      "hidden": false,
      "title": "Открытки",
      "lead": "Почтовые открытки 10 × 15 см с кадрами из каталога — по одной, готовым набором или любые пять со скидкой.",
      "specs": [
        "Формат 10 × 15 см, плотная мелованная бумага 300 г/м²",
        "На обороте — поле для адреса, марки и текста, название и место съёмки",
        "Наборы по 5 открыток и большие наборы по регионам, а любые 5 штук в корзине стоят как набор"
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
          "price": 850,
          "cover": "valley-light"
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
          "price": 850,
          "cover": "moon-path"
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
          "id": "set-milky-way",
          "title": "Млечный путь",
          "lead": "Ночное небо Камчатки",
          "cards": [
            "mw-valley",
            "mw-forest",
            "mw-red",
            "mw-branches",
            "mw-crown"
          ],
          "price": 850
        },
        {
          "id": "set-autumn-forest",
          "title": "Осенний лес",
          "lead": "Парки Петербурга и Ленобласти",
          "cards": [
            "maple-moss",
            "fern-leaf",
            "moss-stump",
            "yellow-maple",
            "log-mushrooms"
          ],
          "price": 850
        },
        {
          "id": "set-forest-details",
          "title": "Лесные мелочи",
          "lead": "Листья, папоротники и пни",
          "cards": [
            "leaf-spruce",
            "leaves-grass",
            "stump-fern",
            "fern-autumn",
            "old-stumps"
          ],
          "price": 850,
          "cover": "leaf-spruce"
        },
        {
          "id": "set-spb-details",
          "title": "Петербург. Детали",
          "lead": "Листья на камне и зелёный фургон",
          "cards": [
            "maple-leaf",
            "leaf-cobbles",
            "leaf-slabs",
            "green-van",
            "van-mirror"
          ],
          "price": 850
        },
        {
          "id": "set-spb-views",
          "title": "Петербургские виды",
          "lead": "Исаакий, Спас, Казанский собор",
          "cards": [
            "isaac-view",
            "griboedov",
            "dom-knigi",
            "kazan-tree",
            "kazan-dome"
          ],
          "price": 850,
          "cover": "isaac-view"
        },
        {
          "id": "set-tomsk-lace",
          "title": "Деревянное кружево",
          "lead": "Резьба томских домов",
          "cards": [
            "wood-curl",
            "terem-moon",
            "wood-lace",
            "four-windows",
            "carved-eaves"
          ],
          "price": 850
        },
        {
          "id": "set-tomsk-streets",
          "title": "Томск. Улицы",
          "lead": "Храмы, часовня, старые дома",
          "cards": [
            "tomsk-churches",
            "chapel-stairs",
            "green-house",
            "ivy-door",
            "white-bridge"
          ],
          "price": 850
        },
        {
          "id": "set-tomsk-summer",
          "title": "Томское лето",
          "lead": "Одуванчики, ландыши и колесо обозрения",
          "cards": [
            "butterfly",
            "lilies",
            "ferris-wheel",
            "owl-tree",
            "roof-dandelion"
          ],
          "price": 850
        },
        {
          "id": "set-kola-sky",
          "title": "Кольский: небо",
          "lead": "Сияние, радуга и луна над тундрой",
          "cards": [
            "kola-aurora",
            "fogbow",
            "barrel-moon",
            "lone-tree",
            "antlers"
          ],
          "price": 850,
          "cover": "kola-aurora"
        },
        {
          "id": "set-kola-winter",
          "title": "Кольская зима",
          "lead": "Снегопад, ручей и старые избы",
          "cards": [
            "snow-truck",
            "oil-lamp",
            "snow-creek",
            "hut-sunset",
            "old-barn"
          ],
          "price": 850
        },
        {
          "id": "set-verkhoturye-winter",
          "title": "Зимнее Верхотурье",
          "lead": "Кремль в снегу",
          "cards": [
            "snow-alley",
            "snow-merlons",
            "winter-monastery",
            "kremlin-night",
            "iron-gate"
          ],
          "price": 850
        },
        {
          "id": "set-domes",
          "title": "Купола и арки",
          "lead": "Верхотурье и Североуральск",
          "cards": [
            "autumn-gate",
            "gold-domes",
            "kremlin-hill",
            "arch-sunset",
            "belltower"
          ],
          "price": 850
        },
        {
          "id": "set-ural-winter",
          "title": "Уральская зима",
          "lead": "Серов и Краснотурьинск",
          "cards": [
            "carved-window",
            "campfire",
            "woodpile",
            "frost-pine",
            "aurora"
          ],
          "price": 850
        },
        {
          "id": "set-yak-autumn",
          "title": "Якутская осень",
          "lead": "Склоны тайги в багрянце и золоте",
          "cards": [
            "yak-crimson-slope",
            "yak-red-slope",
            "yak-golden-slope",
            "yak-red-aspen",
            "yak-river-loops"
          ],
          "price": 850,
          "cover": "yak-river-loops"
        },
        {
          "id": "set-yak-reflections",
          "title": "Отражения",
          "lead": "Тихая вода якутских рек",
          "cards": [
            "yak-stones-reflection",
            "yak-reflection",
            "yak-cliff-reflection",
            "yak-quiet-water",
            "yak-evening-channel"
          ],
          "price": 850,
          "cover": "yak-reflection"
        },
        {
          "id": "set-yak-taiga",
          "title": "Тайга вблизи",
          "lead": "Листья, цветы, ягель и хвоя",
          "cards": [
            "yak-red-leaves",
            "yak-asters",
            "yak-reindeer-moss",
            "yak-wintergreen",
            "yak-cedar-needles"
          ],
          "price": 850,
          "cover": "yak-red-leaves"
        },
        {
          "id": "set-yak-ice",
          "title": "Первый лёд",
          "lead": "Наледь, ледоход и туман над тайгой",
          "cards": [
            "yak-first-ice",
            "yak-naled",
            "yak-ice-drift",
            "yak-taiga-fog",
            "yak-new-year-branch"
          ],
          "price": 850,
          "cover": "yak-ice-drift"
        },
        {
          "id": "set-zab-autumn",
          "title": "Забайкальская осень",
          "lead": "Золото лиственниц и берёз",
          "cards": [
            "zab-golden-autumn",
            "zab-autumn-slope",
            "zab-birch-sun",
            "zab-rocks-leaves",
            "zab-fox"
          ],
          "price": 850,
          "cover": "zab-golden-autumn"
        },
        {
          "id": "set-zab-rocks",
          "title": "Скалы и степь",
          "lead": "Останцы, прострел и закат",
          "cards": [
            "zab-rocks",
            "zab-outlier",
            "zab-larch",
            "zab-pasque",
            "zab-sunset-lake"
          ],
          "price": 850,
          "cover": "zab-outlier"
        },
        {
          "id": "set-elbrus",
          "title": "Эльбрус",
          "lead": "Двуглавая вершина с разных сторон",
          "cards": [
            "kav-elbrus-forest",
            "kav-elbrus-twin",
            "kav-summit",
            "kav-bellflowers",
            "kav-elbrus-slope"
          ],
          "price": 850,
          "cover": "kav-elbrus-twin"
        },
        {
          "id": "set-donguz",
          "title": "Донгуз-Орун",
          "lead": "Стена, ледопад и ледниковый цирк",
          "cards": [
            "kav-donguz-pine",
            "kav-donguz-peak",
            "kav-donguz",
            "kav-icefall",
            "kav-cirque"
          ],
          "price": 850,
          "cover": "kav-donguz"
        },
        {
          "id": "set-kav-clouds",
          "title": "Над облаками",
          "lead": "Вершины Приэльбрусья в облаках",
          "cards": [
            "kav-peak-clouds",
            "kav-cloud-ridges",
            "kav-through-clouds",
            "kav-glacier-clouds",
            "kav-observatory"
          ],
          "price": 850,
          "cover": "kav-peak-clouds"
        },
        {
          "id": "set-kav-evening",
          "title": "Вечер в горах",
          "lead": "Закатный свет на снежных гребнях",
          "cards": [
            "kav-sunset-light",
            "kav-sunset-light-2",
            "kav-light-spots",
            "kav-red-rocks",
            "kav-eagle"
          ],
          "price": 850,
          "cover": "kav-sunset-light"
        },
        {
          "id": "set-kav-lakes",
          "title": "Озеро и долины",
          "lead": "Гижгит, Баксан и каньон",
          "cards": [
            "kav-white-shore",
            "kav-cliff-wall",
            "kav-turquoise",
            "kav-baksan",
            "kav-canyon"
          ],
          "price": 850,
          "cover": "kav-turquoise"
        },
        {
          "id": "set-kav-snow",
          "title": "Снег и лёд",
          "lead": "Ледники и снежные вершины Приэльбрусья",
          "cards": [
            "kav-snow-peaks",
            "kav-elbrus-glacier",
            "kav-snowfield",
            "kav-pyramid",
            "kav-snow-cap"
          ],
          "price": 850,
          "cover": "kav-snow-peaks"
        },
        {
          "id": "set-kav-forest",
          "title": "Лес и склоны",
          "lead": "Сосны, ручьи и зелёные склоны Кавказа",
          "cards": [
            "kav-lone-tree",
            "kav-forest-slope",
            "kav-forest-stream",
            "kav-pines-peak",
            "kav-valley-clouds"
          ],
          "price": 850,
          "cover": "kav-lone-tree"
        },
        {
          "id": "set-kamchatka-full",
          "title": "Камчатка целиком",
          "lead": "Вулканы, тундра, луна и звёзды",
          "cards": [
            "slope-clouds",
            "snow-peak",
            "snow-ridge",
            "valley-light",
            "river-valley",
            "green-valley",
            "beyond-pass",
            "tundra-pattern",
            "red-ridge",
            "cloud-slope",
            "cloud-peak",
            "rocks-fog",
            "moon",
            "moon-peak",
            "rain-valley",
            "mw-valley",
            "mw-forest",
            "mw-red",
            "mw-branches",
            "mw-crown"
          ],
          "price": 2400
        },
        {
          "id": "set-kola",
          "title": "Кольский полуостров",
          "lead": "Тундра, сияние и закаты",
          "cards": [
            "moon-path",
            "hut-field",
            "old-barn",
            "snow-truck",
            "oil-lamp",
            "kola-aurora",
            "antlers",
            "snow-creek",
            "hut-sunset",
            "lone-tree",
            "fogbow",
            "barrel-moon"
          ],
          "price": 1450
        },
        {
          "id": "set-spb",
          "title": "Петербург",
          "lead": "Соборы, каналы и осень",
          "cards": [
            "isaac-night",
            "isaac-autumn",
            "isaac-summer",
            "isaac-view",
            "yard-cat",
            "fern",
            "kazan-tree",
            "kazan-dome",
            "dom-knigi",
            "maple-leaf",
            "colonnade",
            "capitals",
            "spas-grille",
            "griboedov",
            "leaf-cobbles",
            "leaf-slabs",
            "leaf-granite",
            "green-van",
            "van-mirror"
          ],
          "price": 2150
        },
        {
          "id": "set-ural",
          "title": "Урал",
          "lead": "Верхотурье, Серов, Североуральск, Краснотурьинск",
          "cards": [
            "gate-light",
            "autumn-gate",
            "iron-gate",
            "aurora",
            "kremlin-night",
            "snow-alley",
            "kremlin-hill",
            "arch-sunset",
            "gold-domes",
            "snow-merlons",
            "winter-monastery",
            "frost-pine",
            "belltower",
            "carved-window",
            "dome-silhouette",
            "storm-lake",
            "campfire",
            "balcony",
            "woodpile"
          ],
          "price": 2300
        },
        {
          "id": "set-tomsk",
          "title": "Томск",
          "lead": "Деревянное кружево, улицы и лето",
          "cards": [
            "butterfly",
            "green-house",
            "owl-tree",
            "lilies",
            "wood-curl",
            "ivy-door",
            "terem-moon",
            "wood-lace",
            "terem-leaves",
            "terem-dome",
            "ferris-wheel",
            "tomsk-churches",
            "chapel-stairs",
            "spiral-stairs",
            "shutters",
            "carved-eaves",
            "white-bridge",
            "four-windows",
            "evening-window",
            "roof-dandelion"
          ],
          "price": 2400,
          "cover": "carved-eaves"
        },
        {
          "id": "set-yakutia",
          "title": "Якутия",
          "lead": "Осенняя тайга, реки и первый лёд",
          "cards": [
            "misty-river",
            "yak-red-leaves",
            "yak-crimson-slope",
            "yak-stones-reflection",
            "yak-reflection",
            "yak-moss-stream",
            "yak-red-slope",
            "yak-plane",
            "yak-asters",
            "yak-fireweed",
            "yak-cliff-reflection",
            "yak-cliff-clouds",
            "yak-quiet-water",
            "yak-cliffs-water",
            "yak-rail-bridge",
            "yak-red-aspen",
            "yak-river-loops",
            "yak-golden-slope",
            "yak-pasque",
            "yak-first-ice",
            "yak-naled",
            "yak-ice-drift",
            "yak-evening-channel",
            "yak-reindeer-moss",
            "yak-wintergreen",
            "yak-tussock",
            "yak-taiga-fog",
            "yak-cedar-needles",
            "yak-clearing",
            "yak-new-year-branch",
            "yak-valley-above",
            "yak-larch-cliff",
            "yak-dry-clay",
            "yak-grass"
          ],
          "price": 4100,
          "cover": "yak-river-loops"
        },
        {
          "id": "set-zabaikalye",
          "title": "Забайкалье",
          "lead": "Золотая осень, скалы и лиса",
          "cards": [
            "zab-pasque",
            "zab-birch-sun",
            "zab-rocks",
            "zab-rocks-leaves",
            "zab-outlier",
            "zab-autumn-slope",
            "zab-larch",
            "zab-golden-autumn",
            "zab-fox",
            "zab-sunset-lake"
          ],
          "price": 1200,
          "cover": "zab-golden-autumn"
        },
        {
          "id": "set-kavkaz",
          "title": "Кавказ",
          "lead": "Эльбрус, Донгуз-Орун, ледники, лес и Гижгит",
          "cards": [
            "kav-horses",
            "kav-sunset-light",
            "kav-sunset-light-2",
            "kav-light-spots",
            "kav-red-rocks",
            "kav-eagle",
            "kav-white-shore",
            "kav-cliff-wall",
            "kav-turquoise",
            "kav-elbrus-forest",
            "kav-baksan",
            "kav-donguz-pine",
            "kav-cirque",
            "kav-elbrus-twin",
            "kav-donguz-peak",
            "kav-white-flowers",
            "kav-donguz",
            "kav-peak-clouds",
            "kav-icefall",
            "kav-cloud-ridges",
            "kav-snowball",
            "kav-trail",
            "kav-mountain-flowers",
            "kav-elbrus-slope",
            "kav-canyon",
            "kav-bellflowers",
            "kav-glacier-ridge",
            "kav-through-clouds",
            "kav-summit",
            "kav-glacier-rocks",
            "kav-raven",
            "kav-glacier-clouds",
            "kav-observatory",
            "kav-lone-tree",
            "kav-snow-cap",
            "kav-elbrus-glacier",
            "kav-pyramid",
            "kav-sharp-peak",
            "kav-snowfield",
            "kav-elbrus-rocks",
            "kav-crows",
            "kav-forest-slope",
            "kav-forest-stream",
            "kav-pines-peak",
            "kav-evening-clouds",
            "kav-valley-town",
            "kav-snow-peaks",
            "kav-frost-leaves",
            "kav-cable-car",
            "kav-valley-clouds"
          ],
          "price": 6000,
          "cover": "kav-elbrus-twin"
        },
        {
          "id": "aw-best",
          "title": "Лучшее с 35Awards",
          "lead": "14 кадров: победитель «Стихийных бедствий» и ТОП‑5% конкурсов",
          "cards": [
            "aw-87",
            "rain-valley",
            "aw-63",
            "aw-46",
            "aw-11",
            "aw-01",
            "mw-branches",
            "aw-21",
            "aw-73",
            "snow-ridge",
            "aw-47",
            "hut-field",
            "aw-56",
            "aw-57"
          ],
          "price": 2000,
          "cover": "aw-87",
          "group": "35awards"
        },
        {
          "id": "aw-autumn",
          "title": "Осень",
          "lead": "краски осени, листва, лес",
          "cards": [
            "aw-01",
            "aw-02",
            "aw-03",
            "aw-04",
            "aw-05",
            "aw-06",
            "aw-07",
            "aw-08",
            "aw-09",
            "aw-10"
          ],
          "price": 1600,
          "cover": "aw-01",
          "group": "35awards"
        },
        {
          "id": "aw-winter",
          "title": "Зима",
          "lead": "иней, снег и свечи",
          "cards": [
            "aw-11",
            "aw-12",
            "aw-13",
            "aw-14",
            "aw-15",
            "aw-16",
            "aw-17",
            "aw-18",
            "aw-19",
            "aw-20"
          ],
          "price": 1600,
          "cover": "aw-11",
          "group": "35awards"
        },
        {
          "id": "aw-weather",
          "title": "Непогода",
          "lead": "дождь, облака и туман",
          "cards": [
            "aw-21",
            "aw-22",
            "aw-23",
            "aw-24",
            "aw-25",
            "aw-26",
            "aw-27",
            "aw-28",
            "aw-29",
            "aw-30"
          ],
          "price": 1600,
          "cover": "aw-21",
          "group": "35awards"
        },
        {
          "id": "aw-water",
          "title": "Вода и свет",
          "lead": "реки, закаты и луна",
          "cards": [
            "misty-river",
            "aw-31",
            "aw-32",
            "aw-33",
            "aw-34",
            "yak-rail-bridge",
            "aw-35",
            "aw-36",
            "aw-37",
            "aw-38"
          ],
          "price": 1600,
          "cover": "misty-river",
          "group": "35awards"
        },
        {
          "id": "aw-color",
          "title": "Цвет",
          "lead": "оранжевый, синий и зелёный",
          "cards": [
            "aw-39",
            "aw-40",
            "aw-41",
            "yak-quiet-water",
            "yak-cliffs-water",
            "aw-42",
            "aw-43",
            "aw-44",
            "aw-45",
            "kav-baksan"
          ],
          "price": 1600,
          "cover": "aw-39",
          "group": "35awards"
        },
        {
          "id": "aw-small",
          "title": "Маленький мир",
          "lead": "динозавры и цветы",
          "cards": [
            "aw-46",
            "aw-47",
            "aw-48",
            "aw-49",
            "aw-50",
            "aw-51",
            "aw-52",
            "aw-53",
            "aw-54",
            "aw-55"
          ],
          "price": 1600,
          "cover": "aw-46",
          "group": "35awards"
        },
        {
          "id": "aw-mobile",
          "title": "Снято на телефон",
          "lead": "мобильные кадры",
          "cards": [
            "rain-valley",
            "snow-ridge",
            "aw-56",
            "aw-57",
            "aw-58",
            "aw-59",
            "snow-peak",
            "aw-60",
            "aw-61",
            "aw-62"
          ],
          "price": 1600,
          "cover": "rain-valley",
          "group": "35awards"
        },
        {
          "id": "aw-pets",
          "title": "Хвостатые",
          "lead": "кошки, пёс и лошади",
          "cards": [
            "aw-63",
            "aw-64",
            "aw-65",
            "aw-66",
            "aw-67",
            "aw-68",
            "aw-69",
            "aw-70",
            "aw-71",
            "aw-72"
          ],
          "price": 1600,
          "cover": "aw-63",
          "group": "35awards"
        },
        {
          "id": "aw-birds",
          "title": "Птицы",
          "lead": "воробьи, голуби и утки",
          "cards": [
            "aw-73",
            "aw-74",
            "aw-75",
            "aw-76",
            "aw-77"
          ],
          "price": 850,
          "cover": "aw-73",
          "group": "35awards"
        },
        {
          "id": "aw-town",
          "title": "Город и деревня",
          "lead": "улицы, деревни и деревья",
          "cards": [
            "mw-branches",
            "hut-field",
            "aw-78",
            "isaac-night",
            "aw-79",
            "old-barn",
            "bridge-fog",
            "aw-80",
            "gate-light",
            "aw-81"
          ],
          "price": 1600,
          "cover": "mw-branches",
          "group": "35awards"
        },
        {
          "id": "aw-people",
          "title": "Человек в пейзаже",
          "lead": "путники в горах и тундре",
          "cards": [
            "aw-82",
            "aw-83",
            "aw-84",
            "aw-85",
            "aw-86"
          ],
          "price": 850,
          "cover": "aw-82",
          "group": "35awards"
        },
        {
          "id": "set-all",
          "title": "Все открытки",
          "lead": "Полная коллекция",
          "cards": "all",
          "price": 26000
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
        },
        "box": {
          "_note": "От from открыток (без отпечатков в заказе) — пакет Почты S 280×380 мм с картонной вставкой (письмо — только до 100 г, ~16 открыток). Заказ открыток дешевле bookpostUpTo ₽ — заказная бандероль (без объявленной ценности, до 2 кг), дороже — посылка с объявленной ценностью. Пакет S вмещает ~200 открыток. g — пакет ~13 г + 2 листа гофрокартона ~17 г (оценка, взвесить), price — пакет 55 ₽ + картон.",
          "from": 17,
          "boxes": [
            {
              "upTo": 200,
              "l": 38,
              "w": 28,
              "h": 3,
              "g": 30,
              "price": 60
            },
            {
              "upTo": 400,
              "l": 30,
              "w": 20,
              "h": 15,
              "g": 350,
              "price": 150,
              "_note": "Больше 200 открыток — коробка Почты M 300×200×150 с наполнителем. g и price — оценка, сверить в отделении."
            }
          ],
          "bookpostUpTo": 5000
        }
      },
      "themes": [
        [
          "mountains",
          "Горы"
        ],
        [
          "forest",
          "Лес"
        ],
        [
          "autumn",
          "Осень"
        ],
        [
          "winter",
          "Зима"
        ],
        [
          "water",
          "Вода"
        ],
        [
          "sky",
          "Небо и ночь"
        ],
        [
          "city",
          "Город"
        ],
        [
          "village",
          "Деревня"
        ],
        [
          "macro",
          "Крупный план"
        ],
        [
          "animals",
          "Животные"
        ],
        [
          "bw",
          "Чёрно-белые"
        ]
      ],
      "regions": [
        [
          "kamchatka",
          "Камчатка"
        ],
        [
          "kola",
          "Кольский"
        ],
        [
          "spb",
          "Петербург и область"
        ],
        [
          "ural",
          "Урал"
        ],
        [
          "tomsk",
          "Томск"
        ],
        [
          "yakutia",
          "Якутия"
        ],
        [
          "zabaikalye",
          "Забайкалье"
        ],
        [
          "kavkaz",
          "Кавказ"
        ],
        [
          "magadan",
          "Магадан"
        ],
        [
          "novosibirsk",
          "Новосибирск"
        ],
        [
          "altai",
          "Алтай"
        ]
      ]
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
      "id": "kav-golden-clouds",
      "title": "Золотые облака",
      "caption": "Кавказ",
      "img": "img/shop/kav-golden-clouds.webp",
      "thumb": "img/shop/thumb/kav-golden-clouds.webp",
      "w": 6000,
      "h": 4000,
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
      "id": "kav-cirrus",
      "title": "Ледник Семёрка",
      "caption": "Приэльбрусье",
      "img": "img/shop/kav-cirrus.webp",
      "thumb": "img/shop/thumb/kav-cirrus.webp",
      "w": 7000,
      "h": 4667,
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
      "id": "kav-pines-peak",
      "title": "Вершина сквозь сосны",
      "caption": "Приэльбрусье",
      "img": "img/shop/kav-pines-peak.webp",
      "thumb": "img/shop/thumb/kav-pines-peak.webp",
      "w": 7000,
      "h": 10500,
      "products": [
        "canvas",
        "foam"
      ],
      "tags": [
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
      "id": "kav-elbrus-glacier",
      "title": "Ледник",
      "caption": "Приэльбрусье",
      "img": "img/shop/kav-elbrus-glacier.webp",
      "thumb": "img/shop/thumb/kav-elbrus-glacier.webp",
      "w": 7000,
      "h": 4667,
      "products": [
        "canvas",
        "foam"
      ],
      "tags": [
        "mountains"
      ]
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
      "id": "kav-forest-stream",
      "title": "Ручей в лесу",
      "caption": "Приэльбрусье",
      "img": "img/shop/kav-forest-stream.webp",
      "thumb": "img/shop/thumb/kav-forest-stream.webp",
      "w": 7000,
      "h": 10500,
      "products": [
        "canvas",
        "foam"
      ],
      "tags": [
        "forest"
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
      "id": "yak-morning-fog",
      "title": "Утренний туман",
      "caption": "Якутия",
      "img": "img/shop/yak-morning-fog.webp",
      "thumb": "img/shop/thumb/yak-morning-fog.webp",
      "w": 6000,
      "h": 4000,
      "products": [
        "canvas",
        "foam"
      ],
      "tags": [
        "forest"
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
      "id": "kav-pines-elbrus",
      "title": "Эльбрус сквозь сосны",
      "caption": "Приэльбрусье",
      "img": "img/shop/kav-pines-elbrus.webp",
      "thumb": "img/shop/thumb/kav-pines-elbrus.webp",
      "w": 7000,
      "h": 4667,
      "products": [
        "canvas",
        "foam"
      ],
      "tags": [
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
      "id": "kav-haze",
      "title": "Утро над Тырныаузом",
      "caption": "Кавказ",
      "img": "img/shop/kav-haze.webp",
      "thumb": "img/shop/thumb/kav-haze.webp",
      "w": 5947,
      "h": 3965,
      "products": [
        "canvas",
        "foam"
      ],
      "tags": [
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
      "id": "yak-valley-above",
      "title": "Чульман вечером",
      "caption": "Якутия",
      "img": "img/shop/yak-valley-above.webp",
      "thumb": "img/shop/thumb/yak-valley-above.webp",
      "w": 7000,
      "h": 4667,
      "products": [
        "canvas",
        "foam"
      ],
      "tags": [
        "forest",
        "sky"
      ]
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
      "id": "kav-icefall-wall",
      "title": "Ледопад",
      "caption": "Приэльбрусье",
      "img": "img/shop/kav-icefall-wall.webp",
      "thumb": "img/shop/thumb/kav-icefall-wall.webp",
      "w": 7000,
      "h": 4667,
      "products": [
        "canvas",
        "foam"
      ],
      "tags": [
        "mountains"
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
      "id": "kav-sunset-ridges",
      "title": "На закате",
      "caption": "Кавказ",
      "img": "img/shop/kav-sunset-ridges.webp",
      "thumb": "img/shop/thumb/kav-sunset-ridges.webp",
      "w": 6000,
      "h": 4000,
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
    },
    {
      "id": "kav-snow-cap",
      "title": "Снежная шапка",
      "caption": "Приэльбрусье",
      "img": "img/shop/kav-snow-cap.webp",
      "thumb": "img/shop/thumb/kav-snow-cap.webp",
      "w": 7000,
      "h": 4667,
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
      "id": "kav-pyramid",
      "title": "Пирамида",
      "caption": "Приэльбрусье",
      "img": "img/shop/kav-pyramid.webp",
      "thumb": "img/shop/thumb/kav-pyramid.webp",
      "w": 7000,
      "h": 4667,
      "products": [
        "canvas",
        "foam"
      ],
      "tags": [
        "mountains"
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
      "id": "kav-elbrus-ice",
      "title": "Ледники Эльбруса",
      "caption": "Приэльбрусье",
      "img": "img/shop/kav-elbrus-ice.webp",
      "thumb": "img/shop/thumb/kav-elbrus-ice.webp",
      "w": 7000,
      "h": 10500,
      "products": [
        "canvas",
        "foam"
      ],
      "tags": [
        "mountains"
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
      "id": "kav-snow-peaks",
      "title": "Снежные пирамиды",
      "caption": "Кавказ",
      "img": "img/shop/kav-snow-peaks.webp",
      "thumb": "img/shop/thumb/kav-snow-peaks.webp",
      "w": 6000,
      "h": 4000,
      "products": [
        "canvas",
        "foam"
      ],
      "tags": [
        "mountains"
      ]
    }
  ],
  "postcards": [
    {
      "id": "kav-lone-tree",
      "title": "Одинокое дерево I",
      "caption": "Приэльбрусье",
      "img": "img/shop/kav-lone-tree.webp",
      "thumb": "img/shop/thumb/kav-lone-tree.webp",
      "w": 7000,
      "h": 4667,
      "tags": [
        "mountains",
        "forest"
      ],
      "back": "img/shop/back/kav-lone-tree.webp",
      "backL": "img/shop/back/kav-lone-tree-l.webp",
      "themes": [
        "mountains",
        "forest"
      ],
      "region": "kavkaz"
    },
    {
      "id": "kav-snow-cap",
      "title": "Снежная шапка",
      "caption": "Приэльбрусье",
      "img": "img/shop/kav-snow-cap.webp",
      "thumb": "img/shop/thumb/kav-snow-cap.webp",
      "w": 7000,
      "h": 4667,
      "tags": [
        "mountains"
      ],
      "back": "img/shop/back/kav-snow-cap.webp",
      "backL": "img/shop/back/kav-snow-cap-l.webp",
      "themes": [
        "mountains"
      ],
      "region": "kavkaz"
    },
    {
      "id": "kav-elbrus-glacier",
      "title": "Ледники Эльбруса",
      "caption": "Приэльбрусье",
      "img": "img/shop/kav-elbrus-glacier.webp",
      "thumb": "img/shop/thumb/kav-elbrus-glacier.webp",
      "w": 7000,
      "h": 4667,
      "tags": [
        "mountains"
      ],
      "back": "img/shop/back/kav-elbrus-glacier.webp",
      "backL": "img/shop/back/kav-elbrus-glacier-l.webp",
      "themes": [
        "mountains",
        "winter"
      ],
      "region": "kavkaz"
    },
    {
      "id": "kav-pyramid",
      "title": "Пирамида",
      "caption": "Приэльбрусье",
      "img": "img/shop/kav-pyramid.webp",
      "thumb": "img/shop/thumb/kav-pyramid.webp",
      "w": 7000,
      "h": 4667,
      "tags": [
        "mountains"
      ],
      "back": "img/shop/back/kav-pyramid.webp",
      "backL": "img/shop/back/kav-pyramid-l.webp",
      "themes": [
        "mountains"
      ],
      "region": "kavkaz"
    },
    {
      "id": "kav-sharp-peak",
      "title": "Острый пик",
      "caption": "Приэльбрусье",
      "img": "img/shop/kav-sharp-peak.webp",
      "thumb": "img/shop/thumb/kav-sharp-peak.webp",
      "w": 7000,
      "h": 4667,
      "tags": [
        "mountains",
        "sky"
      ],
      "back": "img/shop/back/kav-sharp-peak.webp",
      "backL": "img/shop/back/kav-sharp-peak-l.webp",
      "themes": [
        "mountains",
        "sky"
      ],
      "region": "kavkaz"
    },
    {
      "id": "kav-snowfield",
      "title": "Снежник",
      "caption": "Приэльбрусье",
      "img": "img/shop/kav-snowfield.webp",
      "thumb": "img/shop/thumb/kav-snowfield.webp",
      "w": 7000,
      "h": 4667,
      "tags": [
        "mountains"
      ],
      "back": "img/shop/back/kav-snowfield.webp",
      "backL": "img/shop/back/kav-snowfield-l.webp",
      "themes": [
        "mountains",
        "winter"
      ],
      "region": "kavkaz"
    },
    {
      "id": "kav-elbrus-rocks",
      "title": "Эльбрус между скал",
      "caption": "Приэльбрусье",
      "img": "img/shop/kav-elbrus-rocks.webp",
      "thumb": "img/shop/thumb/kav-elbrus-rocks.webp",
      "w": 7000,
      "h": 4356,
      "tags": [
        "mountains"
      ],
      "back": "img/shop/back/kav-elbrus-rocks.webp",
      "backL": "img/shop/back/kav-elbrus-rocks-l.webp",
      "themes": [
        "mountains"
      ],
      "region": "kavkaz"
    },
    {
      "id": "kav-crows",
      "title": "Вороны над гребнем",
      "caption": "Приэльбрусье",
      "img": "img/shop/kav-crows.webp",
      "thumb": "img/shop/thumb/kav-crows.webp",
      "w": 7000,
      "h": 4667,
      "tags": [
        "mountains"
      ],
      "back": "img/shop/back/kav-crows.webp",
      "backL": "img/shop/back/kav-crows-l.webp",
      "themes": [
        "mountains",
        "animals"
      ],
      "region": "kavkaz"
    },
    {
      "id": "kav-forest-slope",
      "title": "Лес на склоне",
      "caption": "Приэльбрусье",
      "img": "img/shop/kav-forest-slope.webp",
      "thumb": "img/shop/thumb/kav-forest-slope.webp",
      "w": 7000,
      "h": 4667,
      "tags": [
        "forest"
      ],
      "back": "img/shop/back/kav-forest-slope.webp",
      "backL": "img/shop/back/kav-forest-slope-l.webp",
      "themes": [
        "forest"
      ],
      "region": "kavkaz"
    },
    {
      "id": "kav-forest-stream",
      "title": "Ручей в лесу",
      "caption": "Приэльбрусье",
      "img": "img/shop/kav-forest-stream.webp",
      "thumb": "img/shop/thumb/kav-forest-stream.webp",
      "w": 7000,
      "h": 10500,
      "tags": [
        "forest",
        "sky"
      ],
      "back": "img/shop/back/kav-forest-stream.webp",
      "backL": "img/shop/back/kav-forest-stream-l.webp",
      "themes": [
        "forest",
        "water"
      ],
      "region": "kavkaz"
    },
    {
      "id": "kav-pines-peak",
      "title": "Вершина сквозь сосны",
      "caption": "Приэльбрусье",
      "img": "img/shop/kav-pines-peak.webp",
      "thumb": "img/shop/thumb/kav-pines-peak.webp",
      "w": 7000,
      "h": 10500,
      "tags": [
        "mountains",
        "forest"
      ],
      "back": "img/shop/back/kav-pines-peak.webp",
      "backL": "img/shop/back/kav-pines-peak-l.webp",
      "themes": [
        "forest",
        "mountains"
      ],
      "region": "kavkaz"
    },
    {
      "id": "kav-evening-clouds",
      "title": "Вечер над облаками",
      "caption": "Кавказ",
      "img": "img/shop/kav-evening-clouds.webp",
      "thumb": "img/shop/thumb/kav-evening-clouds.webp",
      "w": 6000,
      "h": 4000,
      "tags": [
        "mountains",
        "sky"
      ],
      "back": "img/shop/back/kav-evening-clouds.webp",
      "backL": "img/shop/back/kav-evening-clouds-l.webp",
      "themes": [
        "sky",
        "mountains"
      ],
      "region": "kavkaz"
    },
    {
      "id": "kav-valley-town",
      "title": "Тырныауз осенью",
      "caption": "Кавказ",
      "img": "img/shop/kav-valley-town.webp",
      "thumb": "img/shop/thumb/kav-valley-town.webp",
      "w": 5528,
      "h": 3685,
      "tags": [
        "mountains",
        "city"
      ],
      "back": "img/shop/back/kav-valley-town.webp",
      "backL": "img/shop/back/kav-valley-town-l.webp",
      "themes": [
        "mountains",
        "city"
      ],
      "region": "kavkaz"
    },
    {
      "id": "kav-snow-peaks",
      "title": "Снежные пирамиды",
      "caption": "Кавказ",
      "img": "img/shop/kav-snow-peaks.webp",
      "thumb": "img/shop/thumb/kav-snow-peaks.webp",
      "w": 6000,
      "h": 4000,
      "tags": [
        "mountains"
      ],
      "back": "img/shop/back/kav-snow-peaks.webp",
      "backL": "img/shop/back/kav-snow-peaks-l.webp",
      "themes": [
        "mountains",
        "winter"
      ],
      "region": "kavkaz"
    },
    {
      "id": "kav-frost-leaves",
      "title": "Иней на листьях",
      "caption": "Кавказ",
      "img": "img/shop/kav-frost-leaves.webp",
      "thumb": "img/shop/thumb/kav-frost-leaves.webp",
      "w": 6000,
      "h": 4000,
      "tags": [],
      "back": "img/shop/back/kav-frost-leaves.webp",
      "backL": "img/shop/back/kav-frost-leaves-l.webp",
      "themes": [
        "macro",
        "autumn"
      ],
      "region": "kavkaz"
    },
    {
      "id": "kav-cable-car",
      "title": "Путь на вершину",
      "caption": "Приэльбрусье",
      "img": "img/shop/kav-cable-car.webp",
      "thumb": "img/shop/thumb/kav-cable-car.webp",
      "w": 7000,
      "h": 4667,
      "tags": [
        "mountains"
      ],
      "back": "img/shop/back/kav-cable-car.webp",
      "backL": "img/shop/back/kav-cable-car-l.webp",
      "themes": [
        "mountains"
      ],
      "region": "kavkaz"
    },
    {
      "id": "kav-valley-clouds",
      "title": "Долина",
      "caption": "Приэльбрусье",
      "img": "img/shop/kav-valley-clouds.webp",
      "thumb": "img/shop/thumb/kav-valley-clouds.webp",
      "w": 7000,
      "h": 4667,
      "tags": [
        "mountains",
        "sky"
      ],
      "back": "img/shop/back/kav-valley-clouds.webp",
      "backL": "img/shop/back/kav-valley-clouds-l.webp",
      "themes": [
        "sky",
        "mountains"
      ],
      "region": "kavkaz"
    },
    {
      "id": "yak-valley-above",
      "title": "Чульман вечером",
      "caption": "Якутия",
      "img": "img/shop/yak-valley-above.webp",
      "thumb": "img/shop/thumb/yak-valley-above.webp",
      "w": 7000,
      "h": 4667,
      "tags": [
        "forest",
        "sky"
      ],
      "back": "img/shop/back/yak-valley-above.webp",
      "backL": "img/shop/back/yak-valley-above-l.webp",
      "themes": [
        "forest",
        "water"
      ],
      "region": "yakutia",
      "aw": {
        "c": "Пейзаж: Краски осени",
        "top": 34
      }
    },
    {
      "id": "yak-larch-cliff",
      "title": "Лиственница на скале",
      "caption": "Якутия",
      "img": "img/shop/yak-larch-cliff.webp",
      "thumb": "img/shop/thumb/yak-larch-cliff.webp",
      "w": 7000,
      "h": 4667,
      "tags": [
        "forest"
      ],
      "back": "img/shop/back/yak-larch-cliff.webp",
      "backL": "img/shop/back/yak-larch-cliff-l.webp",
      "themes": [
        "forest"
      ],
      "region": "yakutia"
    },
    {
      "id": "yak-dry-clay",
      "title": "Сухая глина",
      "caption": "Якутия",
      "img": "img/shop/yak-dry-clay.webp",
      "thumb": "img/shop/thumb/yak-dry-clay.webp",
      "w": 6000,
      "h": 4000,
      "tags": [],
      "back": "img/shop/back/yak-dry-clay.webp",
      "backL": "img/shop/back/yak-dry-clay-l.webp",
      "themes": [
        "macro"
      ],
      "region": "yakutia"
    },
    {
      "id": "yak-grass",
      "title": "Трава",
      "caption": "Якутия",
      "img": "img/shop/yak-grass.webp",
      "thumb": "img/shop/thumb/yak-grass.webp",
      "w": 6000,
      "h": 4000,
      "tags": [],
      "back": "img/shop/back/yak-grass.webp",
      "backL": "img/shop/back/yak-grass-l.webp",
      "themes": [
        "macro"
      ],
      "region": "yakutia"
    },
    {
      "id": "yak-red-leaves",
      "title": "Красные листья",
      "caption": "Якутия",
      "img": "img/shop/yak-red-leaves.webp",
      "thumb": "img/shop/thumb/yak-red-leaves.webp",
      "w": 7000,
      "h": 4667,
      "tags": [
        "forest"
      ],
      "back": "img/shop/back/yak-red-leaves.webp",
      "backL": "img/shop/back/yak-red-leaves-l.webp",
      "themes": [
        "autumn",
        "macro"
      ],
      "region": "yakutia"
    },
    {
      "id": "yak-crimson-slope",
      "title": "Багряный склон",
      "caption": "Якутия",
      "img": "img/shop/yak-crimson-slope.webp",
      "thumb": "img/shop/thumb/yak-crimson-slope.webp",
      "w": 7000,
      "h": 7000,
      "tags": [
        "forest"
      ],
      "back": "img/shop/back/yak-crimson-slope.webp",
      "backL": "img/shop/back/yak-crimson-slope-l.webp",
      "themes": [
        "forest",
        "autumn"
      ],
      "region": "yakutia"
    },
    {
      "id": "yak-stones-reflection",
      "title": "Отражение I",
      "caption": "Якутия",
      "img": "img/shop/yak-stones-reflection.webp",
      "thumb": "img/shop/thumb/yak-stones-reflection.webp",
      "w": 7000,
      "h": 4667,
      "tags": [
        "forest"
      ],
      "back": "img/shop/back/yak-stones-reflection.webp",
      "backL": "img/shop/back/yak-stones-reflection-l.webp",
      "themes": [
        "autumn",
        "water"
      ],
      "region": "yakutia"
    },
    {
      "id": "yak-reflection",
      "title": "Отражение II",
      "caption": "Якутия",
      "img": "img/shop/yak-reflection.webp",
      "thumb": "img/shop/thumb/yak-reflection.webp",
      "w": 7000,
      "h": 5427,
      "tags": [
        "forest"
      ],
      "back": "img/shop/back/yak-reflection.webp",
      "backL": "img/shop/back/yak-reflection-l.webp",
      "themes": [
        "forest",
        "autumn",
        "water"
      ],
      "region": "yakutia"
    },
    {
      "id": "yak-moss-stream",
      "title": "Ручей во мху",
      "caption": "Якутия",
      "img": "img/shop/yak-moss-stream.webp",
      "thumb": "img/shop/thumb/yak-moss-stream.webp",
      "w": 7000,
      "h": 4667,
      "tags": [
        "forest"
      ],
      "back": "img/shop/back/yak-moss-stream.webp",
      "backL": "img/shop/back/yak-moss-stream-l.webp",
      "themes": [
        "forest",
        "water"
      ],
      "region": "yakutia"
    },
    {
      "id": "yak-red-slope",
      "title": "Рыжий склон",
      "caption": "Якутия",
      "img": "img/shop/yak-red-slope.webp",
      "thumb": "img/shop/thumb/yak-red-slope.webp",
      "w": 7000,
      "h": 4667,
      "tags": [
        "forest"
      ],
      "back": "img/shop/back/yak-red-slope.webp",
      "backL": "img/shop/back/yak-red-slope-l.webp",
      "themes": [
        "forest",
        "autumn"
      ],
      "region": "yakutia"
    },
    {
      "id": "yak-plane",
      "title": "Жёлтый самолёт",
      "caption": "Якутия",
      "img": "img/shop/yak-plane.webp",
      "thumb": "img/shop/thumb/yak-plane.webp",
      "w": 7000,
      "h": 4667,
      "tags": [
        "sky"
      ],
      "back": "img/shop/back/yak-plane.webp",
      "backL": "img/shop/back/yak-plane-l.webp",
      "themes": [
        "sky"
      ],
      "region": "yakutia"
    },
    {
      "id": "yak-asters",
      "title": "Цветы",
      "caption": "Якутия",
      "img": "img/shop/yak-asters.webp",
      "thumb": "img/shop/thumb/yak-asters.webp",
      "w": 7000,
      "h": 4667,
      "tags": [
        "forest"
      ],
      "back": "img/shop/back/yak-asters.webp",
      "backL": "img/shop/back/yak-asters-l.webp",
      "themes": [
        "macro"
      ],
      "region": "yakutia"
    },
    {
      "id": "yak-fireweed",
      "title": "Кипрей на гальке",
      "caption": "Якутия",
      "img": "img/shop/yak-fireweed.webp",
      "thumb": "img/shop/thumb/yak-fireweed.webp",
      "w": 7000,
      "h": 4667,
      "tags": [
        "country"
      ],
      "back": "img/shop/back/yak-fireweed.webp",
      "backL": "img/shop/back/yak-fireweed-l.webp",
      "themes": [
        "autumn",
        "macro"
      ],
      "region": "yakutia"
    },
    {
      "id": "yak-cliff-reflection",
      "title": "Скалы над Чульманом",
      "caption": "Якутия",
      "img": "img/shop/yak-cliff-reflection.webp",
      "thumb": "img/shop/thumb/yak-cliff-reflection.webp",
      "w": 7000,
      "h": 5061,
      "tags": [
        "mountains"
      ],
      "back": "img/shop/back/yak-cliff-reflection.webp",
      "backL": "img/shop/back/yak-cliff-reflection-l.webp",
      "themes": [
        "water"
      ],
      "region": "yakutia"
    },
    {
      "id": "yak-cliff-clouds",
      "title": "Обрыв над рекой",
      "caption": "Якутия",
      "img": "img/shop/yak-cliff-clouds.webp",
      "thumb": "img/shop/thumb/yak-cliff-clouds.webp",
      "w": 7000,
      "h": 4667,
      "tags": [
        "sky",
        "mountains"
      ],
      "back": "img/shop/back/yak-cliff-clouds.webp",
      "backL": "img/shop/back/yak-cliff-clouds-l.webp",
      "themes": [
        "water",
        "sky"
      ],
      "region": "yakutia"
    },
    {
      "id": "yak-quiet-water",
      "title": "Тихие воды",
      "caption": "Якутия",
      "img": "img/shop/yak-quiet-water.webp",
      "thumb": "img/shop/thumb/yak-quiet-water.webp",
      "w": 7000,
      "h": 4667,
      "tags": [
        "forest"
      ],
      "back": "img/shop/back/yak-quiet-water.webp",
      "backL": "img/shop/back/yak-quiet-water-l.webp",
      "themes": [
        "water"
      ],
      "region": "yakutia",
      "aw": {
        "c": "Синий + зеленый",
        "top": 24
      }
    },
    {
      "id": "yak-cliffs-water",
      "title": "Скалы над водой",
      "caption": "Якутия",
      "img": "img/shop/yak-cliffs-water.webp",
      "thumb": "img/shop/thumb/yak-cliffs-water.webp",
      "w": 7000,
      "h": 4667,
      "tags": [
        "forest"
      ],
      "back": "img/shop/back/yak-cliffs-water.webp",
      "backL": "img/shop/back/yak-cliffs-water-l.webp",
      "themes": [
        "autumn",
        "water"
      ],
      "region": "yakutia",
      "aw": {
        "c": "Синий + зеленый",
        "top": 25
      }
    },
    {
      "id": "yak-rail-bridge",
      "title": "Железнодорожный мост, Чульман",
      "caption": "Якутия",
      "img": "img/shop/yak-rail-bridge.webp",
      "thumb": "img/shop/thumb/yak-rail-bridge.webp",
      "w": 7000,
      "h": 4667,
      "tags": [
        "country"
      ],
      "back": "img/shop/back/yak-rail-bridge.webp",
      "backL": "img/shop/back/yak-rail-bridge-l.webp",
      "themes": [
        "city"
      ],
      "region": "yakutia",
      "aw": {
        "c": "Мосты",
        "top": 15
      }
    },
    {
      "id": "yak-red-aspen",
      "title": "Красная осина",
      "caption": "Якутия",
      "img": "img/shop/yak-red-aspen.webp",
      "thumb": "img/shop/thumb/yak-red-aspen.webp",
      "w": 7000,
      "h": 10500,
      "tags": [
        "forest",
        "sky"
      ],
      "back": "img/shop/back/yak-red-aspen.webp",
      "backL": "img/shop/back/yak-red-aspen-l.webp",
      "themes": [
        "forest",
        "autumn"
      ],
      "region": "yakutia"
    },
    {
      "id": "yak-river-loops",
      "title": "Вид на долину",
      "caption": "Якутия",
      "img": "img/shop/yak-river-loops.webp",
      "thumb": "img/shop/thumb/yak-river-loops.webp",
      "w": 7000,
      "h": 4667,
      "tags": [
        "forest"
      ],
      "back": "img/shop/back/yak-river-loops.webp",
      "backL": "img/shop/back/yak-river-loops-l.webp",
      "themes": [
        "forest",
        "autumn",
        "water"
      ],
      "region": "yakutia"
    },
    {
      "id": "yak-golden-slope",
      "title": "Золотой склон",
      "caption": "Якутия",
      "img": "img/shop/yak-golden-slope.webp",
      "thumb": "img/shop/thumb/yak-golden-slope.webp",
      "w": 7000,
      "h": 4667,
      "tags": [
        "forest"
      ],
      "back": "img/shop/back/yak-golden-slope.webp",
      "backL": "img/shop/back/yak-golden-slope-l.webp",
      "themes": [
        "forest",
        "autumn"
      ],
      "region": "yakutia"
    },
    {
      "id": "yak-pasque",
      "title": "Сон-трава",
      "caption": "Якутия",
      "img": "img/shop/yak-pasque.webp",
      "thumb": "img/shop/thumb/yak-pasque.webp",
      "w": 2933,
      "h": 3911,
      "tags": [
        "forest"
      ],
      "back": "img/shop/back/yak-pasque.webp",
      "backL": "img/shop/back/yak-pasque-l.webp",
      "themes": [
        "macro"
      ],
      "region": "yakutia"
    },
    {
      "id": "yak-first-ice",
      "title": "Первый лёд",
      "caption": "Якутия",
      "img": "img/shop/yak-first-ice.webp",
      "thumb": "img/shop/thumb/yak-first-ice.webp",
      "w": 5820,
      "h": 3880,
      "tags": [
        "forest"
      ],
      "back": "img/shop/back/yak-first-ice.webp",
      "backL": "img/shop/back/yak-first-ice-l.webp",
      "themes": [
        "winter",
        "water"
      ],
      "region": "yakutia"
    },
    {
      "id": "yak-naled",
      "title": "Наледь",
      "caption": "Якутия",
      "img": "img/shop/yak-naled.webp",
      "thumb": "img/shop/thumb/yak-naled.webp",
      "w": 5820,
      "h": 3880,
      "tags": [
        "country"
      ],
      "back": "img/shop/back/yak-naled.webp",
      "backL": "img/shop/back/yak-naled-l.webp",
      "themes": [
        "winter",
        "macro"
      ],
      "region": "yakutia"
    },
    {
      "id": "yak-ice-drift",
      "title": "Ледоход",
      "caption": "Якутия",
      "img": "img/shop/yak-ice-drift.webp",
      "thumb": "img/shop/thumb/yak-ice-drift.webp",
      "w": 5388,
      "h": 3592,
      "tags": [
        "forest"
      ],
      "back": "img/shop/back/yak-ice-drift.webp",
      "backL": "img/shop/back/yak-ice-drift-l.webp",
      "themes": [
        "winter",
        "water"
      ],
      "region": "yakutia"
    },
    {
      "id": "yak-evening-channel",
      "title": "Вечер на протоке",
      "caption": "Якутия",
      "img": "img/shop/yak-evening-channel.webp",
      "thumb": "img/shop/thumb/yak-evening-channel.webp",
      "w": 6439,
      "h": 9065,
      "tags": [
        "sky",
        "forest"
      ],
      "back": "img/shop/back/yak-evening-channel.webp",
      "backL": "img/shop/back/yak-evening-channel-l.webp",
      "themes": [
        "water",
        "sky"
      ],
      "region": "yakutia"
    },
    {
      "id": "yak-reindeer-moss",
      "title": "Ягель",
      "caption": "Якутия",
      "img": "img/shop/yak-reindeer-moss.webp",
      "thumb": "img/shop/thumb/yak-reindeer-moss.webp",
      "w": 5820,
      "h": 3880,
      "tags": [
        "forest"
      ],
      "back": "img/shop/back/yak-reindeer-moss.webp",
      "backL": "img/shop/back/yak-reindeer-moss-l.webp",
      "themes": [
        "forest",
        "macro"
      ],
      "region": "yakutia"
    },
    {
      "id": "yak-wintergreen",
      "title": "Грушанка",
      "caption": "Якутия",
      "img": "img/shop/yak-wintergreen.webp",
      "thumb": "img/shop/thumb/yak-wintergreen.webp",
      "w": 5820,
      "h": 3880,
      "tags": [
        "forest"
      ],
      "back": "img/shop/back/yak-wintergreen.webp",
      "backL": "img/shop/back/yak-wintergreen-l.webp",
      "themes": [
        "forest",
        "macro"
      ],
      "region": "yakutia"
    },
    {
      "id": "yak-tussock",
      "title": "Кочка",
      "caption": "Якутия",
      "img": "img/shop/yak-tussock.webp",
      "thumb": "img/shop/thumb/yak-tussock.webp",
      "w": 5566,
      "h": 8394,
      "tags": [
        "country"
      ],
      "back": "img/shop/back/yak-tussock.webp",
      "backL": "img/shop/back/yak-tussock-l.webp",
      "themes": [
        "macro"
      ],
      "region": "yakutia"
    },
    {
      "id": "yak-taiga-fog",
      "title": "Туман над тайгой",
      "caption": "Якутия",
      "img": "img/shop/yak-taiga-fog.webp",
      "thumb": "img/shop/thumb/yak-taiga-fog.webp",
      "w": 5792,
      "h": 3861,
      "tags": [
        "forest",
        "mountains"
      ],
      "back": "img/shop/back/yak-taiga-fog.webp",
      "backL": "img/shop/back/yak-taiga-fog-l.webp",
      "themes": [
        "mountains",
        "forest"
      ],
      "region": "yakutia"
    },
    {
      "id": "yak-cedar-needles",
      "title": "Хвоя",
      "caption": "Якутия",
      "img": "img/shop/yak-cedar-needles.webp",
      "thumb": "img/shop/thumb/yak-cedar-needles.webp",
      "w": 5820,
      "h": 3880,
      "tags": [
        "forest"
      ],
      "back": "img/shop/back/yak-cedar-needles.webp",
      "backL": "img/shop/back/yak-cedar-needles-l.webp",
      "themes": [
        "forest",
        "macro"
      ],
      "region": "yakutia"
    },
    {
      "id": "yak-clearing",
      "title": "Просека",
      "caption": "Якутия",
      "img": "img/shop/yak-clearing.webp",
      "thumb": "img/shop/thumb/yak-clearing.webp",
      "w": 5820,
      "h": 3880,
      "tags": [
        "forest"
      ],
      "back": "img/shop/back/yak-clearing.webp",
      "backL": "img/shop/back/yak-clearing-l.webp",
      "themes": [
        "forest",
        "autumn"
      ],
      "region": "yakutia"
    },
    {
      "id": "yak-new-year-branch",
      "title": "Новогодняя ветка",
      "caption": "Якутия",
      "img": "img/shop/yak-new-year-branch.webp",
      "thumb": "img/shop/thumb/yak-new-year-branch.webp",
      "w": 6000,
      "h": 4000,
      "tags": [
        "forest"
      ],
      "back": "img/shop/back/yak-new-year-branch.webp",
      "backL": "img/shop/back/yak-new-year-branch-l.webp",
      "themes": [
        "forest",
        "winter",
        "macro"
      ],
      "region": "yakutia"
    },
    {
      "id": "zab-pasque",
      "title": "Прострел на склоне",
      "caption": "Забайкалье",
      "img": "img/shop/zab-pasque.webp",
      "thumb": "img/shop/thumb/zab-pasque.webp",
      "w": 7000,
      "h": 4667,
      "tags": [
        "country"
      ],
      "back": "img/shop/back/zab-pasque.webp",
      "backL": "img/shop/back/zab-pasque-l.webp",
      "themes": [
        "macro"
      ],
      "region": "zabaikalye"
    },
    {
      "id": "zab-birch-sun",
      "title": "Берёза и солнце",
      "caption": "Забайкалье",
      "img": "img/shop/zab-birch-sun.webp",
      "thumb": "img/shop/thumb/zab-birch-sun.webp",
      "w": 7000,
      "h": 4667,
      "tags": [
        "forest",
        "sky"
      ],
      "back": "img/shop/back/zab-birch-sun.webp",
      "backL": "img/shop/back/zab-birch-sun-l.webp",
      "themes": [
        "forest",
        "autumn"
      ],
      "region": "zabaikalye"
    },
    {
      "id": "zab-rocks",
      "title": "Скалы",
      "caption": "Забайкалье",
      "img": "img/shop/zab-rocks.webp",
      "thumb": "img/shop/thumb/zab-rocks.webp",
      "w": 7000,
      "h": 4667,
      "tags": [
        "mountains"
      ],
      "back": "img/shop/back/zab-rocks.webp",
      "backL": "img/shop/back/zab-rocks-l.webp",
      "themes": [
        "mountains",
        "autumn"
      ],
      "region": "zabaikalye"
    },
    {
      "id": "zab-rocks-leaves",
      "title": "Скалы в листве",
      "caption": "Забайкалье",
      "img": "img/shop/zab-rocks-leaves.webp",
      "thumb": "img/shop/thumb/zab-rocks-leaves.webp",
      "w": 5820,
      "h": 3880,
      "tags": [
        "mountains",
        "forest"
      ],
      "back": "img/shop/back/zab-rocks-leaves.webp",
      "backL": "img/shop/back/zab-rocks-leaves-l.webp",
      "themes": [
        "mountains",
        "autumn"
      ],
      "region": "zabaikalye"
    },
    {
      "id": "zab-outlier",
      "title": "Останец",
      "caption": "Забайкалье",
      "img": "img/shop/zab-outlier.webp",
      "thumb": "img/shop/thumb/zab-outlier.webp",
      "w": 6000,
      "h": 4000,
      "tags": [
        "mountains"
      ],
      "back": "img/shop/back/zab-outlier.webp",
      "backL": "img/shop/back/zab-outlier-l.webp",
      "themes": [
        "mountains"
      ],
      "region": "zabaikalye"
    },
    {
      "id": "zab-autumn-slope",
      "title": "Осенний склон",
      "caption": "Забайкалье",
      "img": "img/shop/zab-autumn-slope.webp",
      "thumb": "img/shop/thumb/zab-autumn-slope.webp",
      "w": 5642,
      "h": 4320,
      "tags": [
        "forest"
      ],
      "back": "img/shop/back/zab-autumn-slope.webp",
      "backL": "img/shop/back/zab-autumn-slope-l.webp",
      "themes": [
        "forest",
        "autumn"
      ],
      "region": "zabaikalye"
    },
    {
      "id": "zab-larch",
      "title": "Лиственница",
      "caption": "Забайкалье",
      "img": "img/shop/zab-larch.webp",
      "thumb": "img/shop/thumb/zab-larch.webp",
      "w": 5327,
      "h": 3551,
      "tags": [
        "mountains"
      ],
      "back": "img/shop/back/zab-larch.webp",
      "backL": "img/shop/back/zab-larch-l.webp",
      "themes": [
        "mountains"
      ],
      "region": "zabaikalye"
    },
    {
      "id": "zab-golden-autumn",
      "title": "Золотая осень",
      "caption": "Забайкалье",
      "img": "img/shop/zab-golden-autumn.webp",
      "thumb": "img/shop/thumb/zab-golden-autumn.webp",
      "w": 5820,
      "h": 3880,
      "tags": [
        "forest",
        "mountains"
      ],
      "back": "img/shop/back/zab-golden-autumn.webp",
      "backL": "img/shop/back/zab-golden-autumn-l.webp",
      "themes": [
        "mountains",
        "forest",
        "autumn"
      ],
      "region": "zabaikalye"
    },
    {
      "id": "zab-fox",
      "title": "Лиса",
      "caption": "Забайкалье",
      "img": "img/shop/zab-fox.webp",
      "thumb": "img/shop/thumb/zab-fox.webp",
      "w": 6000,
      "h": 4000,
      "tags": [
        "forest"
      ],
      "back": "img/shop/back/zab-fox.webp",
      "backL": "img/shop/back/zab-fox-l.webp",
      "themes": [
        "autumn",
        "animals"
      ],
      "region": "zabaikalye"
    },
    {
      "id": "zab-sunset-lake",
      "title": "Закат над озером",
      "caption": "Забайкалье",
      "img": "img/shop/zab-sunset-lake.webp",
      "thumb": "img/shop/thumb/zab-sunset-lake.webp",
      "w": 5820,
      "h": 3880,
      "tags": [
        "sky"
      ],
      "back": "img/shop/back/zab-sunset-lake.webp",
      "backL": "img/shop/back/zab-sunset-lake-l.webp",
      "themes": [
        "water",
        "sky"
      ],
      "region": "zabaikalye"
    },
    {
      "id": "kav-horses",
      "title": "Лошади в снегу",
      "caption": "Кавказ",
      "img": "img/shop/kav-horses.webp",
      "thumb": "img/shop/thumb/kav-horses.webp",
      "w": 6000,
      "h": 4000,
      "tags": [
        "mountains",
        "country"
      ],
      "back": "img/shop/back/kav-horses.webp",
      "backL": "img/shop/back/kav-horses-l.webp",
      "themes": [
        "mountains",
        "winter",
        "animals"
      ],
      "region": "kavkaz"
    },
    {
      "id": "kav-sunset-light",
      "title": "Вечер в горах I",
      "caption": "Кавказ",
      "img": "img/shop/kav-sunset-light.webp",
      "thumb": "img/shop/thumb/kav-sunset-light.webp",
      "w": 5820,
      "h": 3880,
      "tags": [
        "mountains"
      ],
      "back": "img/shop/back/kav-sunset-light.webp",
      "backL": "img/shop/back/kav-sunset-light-l.webp",
      "themes": [
        "mountains",
        "sky"
      ],
      "region": "kavkaz"
    },
    {
      "id": "kav-sunset-light-2",
      "title": "Вечер в горах II",
      "caption": "Кавказ",
      "img": "img/shop/kav-sunset-light-2.webp",
      "thumb": "img/shop/thumb/kav-sunset-light-2.webp",
      "w": 5820,
      "h": 3880,
      "tags": [
        "mountains"
      ],
      "back": "img/shop/back/kav-sunset-light-2.webp",
      "backL": "img/shop/back/kav-sunset-light-2-l.webp",
      "themes": [
        "mountains",
        "sky"
      ],
      "region": "kavkaz"
    },
    {
      "id": "kav-light-spots",
      "title": "Вечер в горах III",
      "caption": "Кавказ",
      "img": "img/shop/kav-light-spots.webp",
      "thumb": "img/shop/thumb/kav-light-spots.webp",
      "w": 5820,
      "h": 3880,
      "tags": [
        "mountains"
      ],
      "back": "img/shop/back/kav-light-spots.webp",
      "backL": "img/shop/back/kav-light-spots-l.webp",
      "themes": [
        "mountains",
        "sky"
      ],
      "region": "kavkaz"
    },
    {
      "id": "kav-red-rocks",
      "title": "Гора Наушидза (Тёщины Зубы)",
      "short": "Гора Наушидза",
      "caption": "Кавказ",
      "img": "img/shop/kav-red-rocks.webp",
      "thumb": "img/shop/thumb/kav-red-rocks.webp",
      "w": 6000,
      "h": 4000,
      "tags": [
        "mountains"
      ],
      "back": "img/shop/back/kav-red-rocks.webp",
      "backL": "img/shop/back/kav-red-rocks-l.webp",
      "themes": [
        "mountains",
        "winter"
      ],
      "region": "kavkaz"
    },
    {
      "id": "kav-eagle",
      "title": "Орёл",
      "caption": "Кавказ",
      "img": "img/shop/kav-eagle.webp",
      "thumb": "img/shop/thumb/kav-eagle.webp",
      "w": 4119,
      "h": 2746,
      "tags": [
        "mountains",
        "sky"
      ],
      "back": "img/shop/back/kav-eagle.webp",
      "backL": "img/shop/back/kav-eagle-l.webp",
      "themes": [
        "mountains",
        "sky",
        "animals"
      ],
      "region": "kavkaz"
    },
    {
      "id": "kav-white-shore",
      "title": "Белый берег",
      "caption": "Озеро Гижгит",
      "img": "img/shop/kav-white-shore.webp",
      "thumb": "img/shop/thumb/kav-white-shore.webp",
      "w": 5775,
      "h": 3850,
      "tags": [
        "mountains"
      ],
      "back": "img/shop/back/kav-white-shore.webp",
      "backL": "img/shop/back/kav-white-shore-l.webp",
      "themes": [
        "mountains",
        "water"
      ],
      "region": "kavkaz"
    },
    {
      "id": "kav-cliff-wall",
      "title": "Скальный массив Букъа-къая",
      "caption": "Кабардино-Балкария",
      "img": "img/shop/kav-cliff-wall.webp",
      "thumb": "img/shop/thumb/kav-cliff-wall.webp",
      "w": 7000,
      "h": 4667,
      "tags": [
        "mountains"
      ],
      "back": "img/shop/back/kav-cliff-wall.webp",
      "backL": "img/shop/back/kav-cliff-wall-l.webp",
      "themes": [
        "mountains"
      ],
      "region": "kavkaz"
    },
    {
      "id": "kav-turquoise",
      "title": "Бирюзовое озеро",
      "caption": "Озеро Гижгит",
      "img": "img/shop/kav-turquoise.webp",
      "thumb": "img/shop/thumb/kav-turquoise.webp",
      "w": 7000,
      "h": 4667,
      "tags": [
        "mountains"
      ],
      "back": "img/shop/back/kav-turquoise.webp",
      "backL": "img/shop/back/kav-turquoise-l.webp",
      "themes": [
        "mountains",
        "water"
      ],
      "region": "kavkaz"
    },
    {
      "id": "kav-elbrus-forest",
      "title": "Эльбрус из леса",
      "caption": "Приэльбрусье",
      "img": "img/shop/kav-elbrus-forest.webp",
      "thumb": "img/shop/thumb/kav-elbrus-forest.webp",
      "w": 7000,
      "h": 4667,
      "tags": [
        "mountains",
        "forest"
      ],
      "back": "img/shop/back/kav-elbrus-forest.webp",
      "backL": "img/shop/back/kav-elbrus-forest-l.webp",
      "themes": [
        "mountains"
      ],
      "region": "kavkaz"
    },
    {
      "id": "kav-baksan",
      "title": "Долина Баксана. Эльбрус",
      "caption": "Приэльбрусье",
      "img": "img/shop/kav-baksan.webp",
      "thumb": "img/shop/thumb/kav-baksan.webp",
      "w": 7000,
      "h": 4667,
      "tags": [
        "mountains"
      ],
      "back": "img/shop/back/kav-baksan.webp",
      "backL": "img/shop/back/kav-baksan-l.webp",
      "themes": [
        "mountains"
      ],
      "region": "kavkaz",
      "aw": {
        "c": "Синий + зеленый",
        "top": 31
      }
    },
    {
      "id": "kav-donguz-pine",
      "title": "Донгуз-Орун I",
      "caption": "Приэльбрусье",
      "img": "img/shop/kav-donguz-pine.webp",
      "thumb": "img/shop/thumb/kav-donguz-pine.webp",
      "w": 7000,
      "h": 4667,
      "tags": [
        "mountains"
      ],
      "back": "img/shop/back/kav-donguz-pine.webp",
      "backL": "img/shop/back/kav-donguz-pine-l.webp",
      "themes": [
        "mountains"
      ],
      "region": "kavkaz"
    },
    {
      "id": "kav-cirque",
      "title": "Ледниковый цирк",
      "caption": "Приэльбрусье",
      "img": "img/shop/kav-cirque.webp",
      "thumb": "img/shop/thumb/kav-cirque.webp",
      "w": 7000,
      "h": 4667,
      "tags": [
        "mountains"
      ],
      "back": "img/shop/back/kav-cirque.webp",
      "backL": "img/shop/back/kav-cirque-l.webp",
      "themes": [
        "mountains"
      ],
      "region": "kavkaz"
    },
    {
      "id": "kav-elbrus-twin",
      "title": "Двуглавый Эльбрус",
      "caption": "Приэльбрусье",
      "img": "img/shop/kav-elbrus-twin.webp",
      "thumb": "img/shop/thumb/kav-elbrus-twin.webp",
      "w": 7000,
      "h": 4667,
      "tags": [
        "mountains"
      ],
      "back": "img/shop/back/kav-elbrus-twin.webp",
      "backL": "img/shop/back/kav-elbrus-twin-l.webp",
      "themes": [
        "mountains"
      ],
      "region": "kavkaz"
    },
    {
      "id": "kav-donguz-peak",
      "title": "Вершина Донгуз-Оруна",
      "caption": "Приэльбрусье",
      "img": "img/shop/kav-donguz-peak.webp",
      "thumb": "img/shop/thumb/kav-donguz-peak.webp",
      "w": 7000,
      "h": 4667,
      "tags": [
        "mountains"
      ],
      "back": "img/shop/back/kav-donguz-peak.webp",
      "backL": "img/shop/back/kav-donguz-peak-l.webp",
      "themes": [
        "mountains"
      ],
      "region": "kavkaz"
    },
    {
      "id": "kav-white-flowers",
      "title": "Цветы над пропастью",
      "caption": "Приэльбрусье",
      "img": "img/shop/kav-white-flowers.webp",
      "thumb": "img/shop/thumb/kav-white-flowers.webp",
      "w": 7000,
      "h": 4667,
      "tags": [
        "mountains"
      ],
      "back": "img/shop/back/kav-white-flowers.webp",
      "backL": "img/shop/back/kav-white-flowers-l.webp",
      "themes": [
        "mountains",
        "macro"
      ],
      "region": "kavkaz"
    },
    {
      "id": "kav-donguz",
      "title": "Донгуз-Орун II",
      "caption": "Приэльбрусье",
      "img": "img/shop/kav-donguz.webp",
      "thumb": "img/shop/thumb/kav-donguz.webp",
      "w": 7000,
      "h": 4667,
      "tags": [
        "mountains"
      ],
      "back": "img/shop/back/kav-donguz.webp",
      "backL": "img/shop/back/kav-donguz-l.webp",
      "themes": [
        "mountains"
      ],
      "region": "kavkaz"
    },
    {
      "id": "kav-peak-clouds",
      "title": "Пик в облаках",
      "caption": "Приэльбрусье",
      "img": "img/shop/kav-peak-clouds.webp",
      "thumb": "img/shop/thumb/kav-peak-clouds.webp",
      "w": 7000,
      "h": 4667,
      "tags": [
        "mountains",
        "sky"
      ],
      "back": "img/shop/back/kav-peak-clouds.webp",
      "backL": "img/shop/back/kav-peak-clouds-l.webp",
      "themes": [
        "mountains",
        "sky"
      ],
      "region": "kavkaz"
    },
    {
      "id": "kav-icefall",
      "title": "Ледопад",
      "caption": "Приэльбрусье",
      "img": "img/shop/kav-icefall.webp",
      "thumb": "img/shop/thumb/kav-icefall.webp",
      "w": 7000,
      "h": 4667,
      "tags": [
        "mountains"
      ],
      "back": "img/shop/back/kav-icefall.webp",
      "backL": "img/shop/back/kav-icefall-l.webp",
      "themes": [
        "mountains"
      ],
      "region": "kavkaz"
    },
    {
      "id": "kav-cloud-ridges",
      "title": "Облачная гора",
      "caption": "Приэльбрусье",
      "img": "img/shop/kav-cloud-ridges.webp",
      "thumb": "img/shop/thumb/kav-cloud-ridges.webp",
      "w": 7000,
      "h": 4667,
      "tags": [
        "mountains",
        "sky"
      ],
      "back": "img/shop/back/kav-cloud-ridges.webp",
      "backL": "img/shop/back/kav-cloud-ridges-l.webp",
      "themes": [
        "mountains",
        "sky"
      ],
      "region": "kavkaz"
    },
    {
      "id": "kav-snowball",
      "title": "Снежник у Эльбруса",
      "caption": "Приэльбрусье",
      "img": "img/shop/kav-snowball.webp",
      "thumb": "img/shop/thumb/kav-snowball.webp",
      "w": 7000,
      "h": 4667,
      "tags": [
        "mountains"
      ],
      "back": "img/shop/back/kav-snowball.webp",
      "backL": "img/shop/back/kav-snowball-l.webp",
      "themes": [
        "mountains"
      ],
      "region": "kavkaz"
    },
    {
      "id": "kav-trail",
      "title": "Тропа на ледник Семёрка",
      "caption": "Приэльбрусье",
      "img": "img/shop/kav-trail.webp",
      "thumb": "img/shop/thumb/kav-trail.webp",
      "w": 7000,
      "h": 4667,
      "tags": [
        "mountains"
      ],
      "back": "img/shop/back/kav-trail.webp",
      "backL": "img/shop/back/kav-trail-l.webp",
      "themes": [
        "mountains"
      ],
      "region": "kavkaz"
    },
    {
      "id": "kav-mountain-flowers",
      "title": "Горные цветы",
      "caption": "Приэльбрусье",
      "img": "img/shop/kav-mountain-flowers.webp",
      "thumb": "img/shop/thumb/kav-mountain-flowers.webp",
      "w": 7000,
      "h": 4667,
      "tags": [
        "mountains"
      ],
      "back": "img/shop/back/kav-mountain-flowers.webp",
      "backL": "img/shop/back/kav-mountain-flowers-l.webp",
      "themes": [
        "mountains",
        "macro"
      ],
      "region": "kavkaz"
    },
    {
      "id": "kav-elbrus-slope",
      "title": "Вид на Эльбрус с Чегета",
      "caption": "Приэльбрусье",
      "img": "img/shop/kav-elbrus-slope.webp",
      "thumb": "img/shop/thumb/kav-elbrus-slope.webp",
      "w": 7000,
      "h": 4667,
      "tags": [
        "mountains"
      ],
      "back": "img/shop/back/kav-elbrus-slope.webp",
      "backL": "img/shop/back/kav-elbrus-slope-l.webp",
      "themes": [
        "mountains"
      ],
      "region": "kavkaz"
    },
    {
      "id": "kav-canyon",
      "title": "Каньон",
      "caption": "Приэльбрусье",
      "img": "img/shop/kav-canyon.webp",
      "thumb": "img/shop/thumb/kav-canyon.webp",
      "w": 7000,
      "h": 4667,
      "tags": [
        "mountains"
      ],
      "back": "img/shop/back/kav-canyon.webp",
      "backL": "img/shop/back/kav-canyon-l.webp",
      "themes": [
        "mountains"
      ],
      "region": "kavkaz"
    },
    {
      "id": "kav-bellflowers",
      "title": "Эльбрус и колокольчики",
      "caption": "Приэльбрусье",
      "img": "img/shop/kav-bellflowers.webp",
      "thumb": "img/shop/thumb/kav-bellflowers.webp",
      "w": 7000,
      "h": 4667,
      "tags": [
        "mountains"
      ],
      "back": "img/shop/back/kav-bellflowers.webp",
      "backL": "img/shop/back/kav-bellflowers-l.webp",
      "themes": [
        "mountains",
        "macro"
      ],
      "region": "kavkaz"
    },
    {
      "id": "kav-glacier-ridge",
      "title": "Вид с Чегета",
      "caption": "Приэльбрусье",
      "img": "img/shop/kav-glacier-ridge.webp",
      "thumb": "img/shop/thumb/kav-glacier-ridge.webp",
      "w": 7000,
      "h": 4667,
      "tags": [
        "mountains"
      ],
      "back": "img/shop/back/kav-glacier-ridge.webp",
      "backL": "img/shop/back/kav-glacier-ridge-l.webp",
      "themes": [
        "mountains"
      ],
      "region": "kavkaz"
    },
    {
      "id": "kav-through-clouds",
      "title": "Сквозь облака",
      "caption": "Приэльбрусье",
      "img": "img/shop/kav-through-clouds.webp",
      "thumb": "img/shop/thumb/kav-through-clouds.webp",
      "w": 7000,
      "h": 4667,
      "tags": [
        "mountains",
        "sky"
      ],
      "back": "img/shop/back/kav-through-clouds.webp",
      "backL": "img/shop/back/kav-through-clouds-l.webp",
      "themes": [
        "mountains",
        "sky"
      ],
      "region": "kavkaz"
    },
    {
      "id": "kav-summit",
      "title": "Вершина Эльбруса",
      "caption": "Приэльбрусье",
      "img": "img/shop/kav-summit.webp",
      "thumb": "img/shop/thumb/kav-summit.webp",
      "w": 7000,
      "h": 4667,
      "tags": [
        "mountains",
        "sky"
      ],
      "back": "img/shop/back/kav-summit.webp",
      "backL": "img/shop/back/kav-summit-l.webp",
      "themes": [
        "mountains"
      ],
      "region": "kavkaz"
    },
    {
      "id": "kav-observatory",
      "title": "Обсерватория Пик Терскол",
      "caption": "Приэльбрусье",
      "img": "img/shop/kav-observatory.webp",
      "thumb": "img/shop/thumb/kav-observatory.webp",
      "w": 7000,
      "h": 4667,
      "tags": [
        "mountains",
        "sky"
      ],
      "back": "img/shop/back/kav-observatory.webp",
      "backL": "img/shop/back/kav-observatory-l.webp",
      "themes": [
        "mountains",
        "sky"
      ],
      "region": "kavkaz"
    },
    {
      "id": "kav-glacier-rocks",
      "title": "Ледник и скалы",
      "caption": "Приэльбрусье",
      "img": "img/shop/kav-glacier-rocks.webp",
      "thumb": "img/shop/thumb/kav-glacier-rocks.webp",
      "w": 7000,
      "h": 4667,
      "tags": [
        "mountains"
      ],
      "back": "img/shop/back/kav-glacier-rocks.webp",
      "backL": "img/shop/back/kav-glacier-rocks-l.webp",
      "themes": [
        "mountains"
      ],
      "region": "kavkaz"
    },
    {
      "id": "kav-raven",
      "title": "Ворон",
      "caption": "Приэльбрусье",
      "img": "img/shop/kav-raven.webp",
      "thumb": "img/shop/thumb/kav-raven.webp",
      "w": 5966,
      "h": 3977,
      "tags": [
        "mountains"
      ],
      "back": "img/shop/back/kav-raven.webp",
      "backL": "img/shop/back/kav-raven-l.webp",
      "themes": [
        "mountains",
        "animals"
      ],
      "region": "kavkaz"
    },
    {
      "id": "kav-glacier-clouds",
      "title": "Склоны Эльбруса",
      "caption": "Приэльбрусье",
      "img": "img/shop/kav-glacier-clouds.webp",
      "thumb": "img/shop/thumb/kav-glacier-clouds.webp",
      "w": 7000,
      "h": 4667,
      "tags": [
        "mountains",
        "sky"
      ],
      "back": "img/shop/back/kav-glacier-clouds.webp",
      "backL": "img/shop/back/kav-glacier-clouds-l.webp",
      "themes": [
        "mountains",
        "sky"
      ],
      "region": "kavkaz"
    },
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
      "backL": "img/shop/back/misty-river-l.webp",
      "themes": [
        "forest",
        "water",
        "bw"
      ],
      "region": "yakutia",
      "aw": {
        "c": "Реки",
        "top": 6
      }
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
      "backL": "img/shop/back/isaac-night-l.webp",
      "themes": [
        "sky",
        "city",
        "bw"
      ],
      "region": "spb",
      "aw": {
        "c": "Первый снег",
        "top": 7
      }
    },
    {
      "id": "isaac-autumn",
      "title": "Поздняя осень",
      "caption": "Санкт-Петербург",
      "img": "img/shop/isaac-autumn.webp",
      "thumb": "img/shop/thumb/isaac-autumn.webp",
      "w": 2576,
      "h": 1717,
      "tags": [
        "bw",
        "city"
      ],
      "back": "img/shop/back/isaac-autumn.webp",
      "backL": "img/shop/back/isaac-autumn-l.webp",
      "themes": [
        "autumn",
        "city",
        "bw"
      ],
      "region": "spb",
      "aw": {
        "c": "Чёрно-белый город",
        "top": 28
      }
    },
    {
      "id": "isaac-summer",
      "title": "Летняя ночь",
      "caption": "Санкт-Петербург",
      "img": "img/shop/isaac-summer.webp",
      "thumb": "img/shop/thumb/isaac-summer.webp",
      "w": 2576,
      "h": 1717,
      "tags": [
        "bw",
        "city"
      ],
      "back": "img/shop/back/isaac-summer.webp",
      "backL": "img/shop/back/isaac-summer-l.webp",
      "themes": [
        "sky",
        "city",
        "bw"
      ],
      "region": "spb"
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
      "backL": "img/shop/back/slope-clouds-l.webp",
      "themes": [
        "mountains"
      ],
      "region": "kamchatka"
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
      "backL": "img/shop/back/moon-path-l.webp",
      "themes": [
        "water",
        "sky"
      ],
      "region": "kola",
      "aw": {
        "c": "Сюрреализм",
        "top": 27
      }
    },
    {
      "id": "gate-light",
      "title": "Врата I",
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
      "backL": "img/shop/back/gate-light-l.webp",
      "themes": [
        "city",
        "bw"
      ],
      "region": "ural",
      "aw": {
        "c": "Концептуальный минимализм",
        "top": 26
      }
    },
    {
      "id": "autumn-gate",
      "title": "Врата II",
      "caption": "Верхотурье",
      "img": "img/shop/autumn-gate.webp",
      "thumb": "img/shop/thumb/autumn-gate.webp",
      "w": 7000,
      "h": 4667,
      "tags": [
        "city"
      ],
      "back": "img/shop/back/autumn-gate.webp",
      "backL": "img/shop/back/autumn-gate-l.webp",
      "themes": [
        "autumn",
        "city"
      ],
      "region": "ural"
    },
    {
      "id": "iron-gate",
      "title": "Врата III",
      "caption": "Верхотурье",
      "img": "img/shop/iron-gate.webp",
      "thumb": "img/shop/thumb/iron-gate.webp",
      "w": 6000,
      "h": 4000,
      "tags": [
        "city"
      ],
      "back": "img/shop/back/iron-gate.webp",
      "backL": "img/shop/back/iron-gate-l.webp",
      "themes": [
        "winter",
        "city"
      ],
      "region": "ural"
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
      "backL": "img/shop/back/hut-field-l.webp",
      "themes": [
        "village"
      ],
      "region": "kola",
      "aw": {
        "c": "Деревенский пейзаж",
        "top": 5
      }
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
      "backL": "img/shop/back/old-barn-l.webp",
      "themes": [
        "village"
      ],
      "region": "kola",
      "aw": {
        "c": "Деревенский пейзаж",
        "top": 14
      }
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
      "backL": "img/shop/back/snow-peak-l.webp",
      "themes": [
        "mountains",
        "winter",
        "bw"
      ],
      "region": "kamchatka",
      "aw": {
        "c": "Черно-белый мобильный снимок",
        "top": 12
      }
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
      "backL": "img/shop/back/snow-ridge-l.webp",
      "themes": [
        "mountains",
        "winter",
        "bw"
      ],
      "region": "kamchatka",
      "aw": {
        "c": "Удачный мобильный снимок",
        "top": 4
      }
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
      "backL": "img/shop/back/bridge-fog-l.webp",
      "themes": [
        "winter",
        "water",
        "city",
        "bw"
      ],
      "aw": {
        "c": "Чёрно-белый город",
        "top": 22
      }
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
      "backL": "img/shop/back/larch-ridge-l.webp",
      "themes": [
        "forest",
        "winter",
        "bw"
      ],
      "region": "magadan"
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
      "backL": "img/shop/back/forest-line-l.webp",
      "themes": [
        "forest",
        "winter",
        "bw"
      ],
      "region": "magadan"
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
      "backL": "img/shop/back/larches-l.webp",
      "themes": [
        "forest",
        "winter",
        "bw"
      ],
      "region": "magadan"
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
      "backL": "img/shop/back/white-valley-l.webp",
      "themes": [
        "mountains",
        "forest",
        "winter",
        "bw"
      ],
      "region": "magadan"
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
      "backL": "img/shop/back/sparse-slope-l.webp",
      "themes": [
        "mountains",
        "forest",
        "winter",
        "bw"
      ],
      "region": "magadan"
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
      "backL": "img/shop/back/snow-hills-l.webp",
      "themes": [
        "mountains",
        "forest",
        "winter",
        "bw"
      ],
      "region": "magadan"
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
      "backL": "img/shop/back/valley-light-l.webp",
      "themes": [
        "mountains",
        "sky"
      ],
      "region": "kamchatka"
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
      "backL": "img/shop/back/river-valley-l.webp",
      "themes": [
        "mountains"
      ],
      "region": "kamchatka"
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
      "backL": "img/shop/back/green-valley-l.webp",
      "themes": [
        "mountains"
      ],
      "region": "kamchatka"
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
      "backL": "img/shop/back/beyond-pass-l.webp",
      "themes": [
        "mountains"
      ],
      "region": "kamchatka"
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
      "backL": "img/shop/back/tundra-pattern-l.webp",
      "themes": [
        "mountains"
      ],
      "region": "kamchatka"
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
      "backL": "img/shop/back/red-ridge-l.webp",
      "themes": [
        "mountains"
      ],
      "region": "kamchatka"
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
      "backL": "img/shop/back/cloud-slope-l.webp",
      "themes": [
        "mountains",
        "sky"
      ],
      "region": "kamchatka"
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
      "backL": "img/shop/back/cloud-peak-l.webp",
      "themes": [
        "mountains",
        "sky"
      ],
      "region": "kamchatka"
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
      "backL": "img/shop/back/rocks-fog-l.webp",
      "themes": [
        "mountains"
      ],
      "region": "kamchatka"
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
      "backL": "img/shop/back/moon-l.webp",
      "themes": [
        "sky"
      ],
      "region": "kamchatka"
    },
    {
      "id": "moon-peak",
      "title": "Луна над вершиной",
      "caption": "Камчатка",
      "img": "img/shop/moon-peak.webp",
      "thumb": "img/shop/thumb/moon-peak.webp",
      "w": 4466,
      "h": 3350,
      "tags": [
        "sky",
        "mountains"
      ],
      "back": "img/shop/back/moon-peak.webp",
      "backL": "img/shop/back/moon-peak-l.webp",
      "themes": [
        "mountains",
        "sky"
      ],
      "region": "kamchatka"
    },
    {
      "id": "rain-valley",
      "title": "Свет в долине II",
      "caption": "Камчатка",
      "img": "img/shop/rain-valley.webp",
      "thumb": "img/shop/thumb/rain-valley.webp",
      "w": 7000,
      "h": 5250,
      "tags": [
        "mountains",
        "sky"
      ],
      "back": "img/shop/back/rain-valley.webp",
      "backL": "img/shop/back/rain-valley-l.webp",
      "themes": [
        "mountains",
        "sky"
      ],
      "region": "kamchatka",
      "aw": {
        "c": "Удачный мобильный снимок",
        "top": 1
      }
    },
    {
      "id": "aurora",
      "title": "Северное сияние",
      "caption": "Серов",
      "img": "img/shop/aurora.webp",
      "thumb": "img/shop/thumb/aurora.webp",
      "w": 7008,
      "h": 4672,
      "tags": [
        "sky",
        "forest"
      ],
      "back": "img/shop/back/aurora.webp",
      "backL": "img/shop/back/aurora-l.webp",
      "themes": [
        "forest",
        "winter",
        "sky"
      ],
      "region": "ural"
    },
    {
      "id": "snow-truck",
      "title": "Снегопад",
      "caption": "Кольский полуостров",
      "img": "img/shop/snow-truck.webp",
      "thumb": "img/shop/thumb/snow-truck.webp",
      "w": 7000,
      "h": 4667,
      "tags": [
        "country"
      ],
      "back": "img/shop/back/snow-truck.webp",
      "backL": "img/shop/back/snow-truck-l.webp",
      "themes": [
        "winter",
        "village"
      ],
      "region": "kola"
    },
    {
      "id": "oil-lamp",
      "title": "Керосиновая лампа",
      "caption": "Кольский полуостров",
      "img": "img/shop/oil-lamp.webp",
      "thumb": "img/shop/thumb/oil-lamp.webp",
      "w": 7000,
      "h": 4667,
      "tags": [
        "country"
      ],
      "back": "img/shop/back/oil-lamp.webp",
      "backL": "img/shop/back/oil-lamp-l.webp",
      "themes": [
        "village"
      ],
      "region": "kola"
    },
    {
      "id": "isaac-view",
      "title": "Вид на Исаакий",
      "caption": "Санкт-Петербург",
      "img": "img/shop/isaac-view.webp",
      "thumb": "img/shop/thumb/isaac-view.webp",
      "w": 7000,
      "h": 4667,
      "tags": [
        "city"
      ],
      "back": "img/shop/back/isaac-view.webp",
      "backL": "img/shop/back/isaac-view-l.webp",
      "themes": [
        "city"
      ],
      "region": "spb"
    },
    {
      "id": "yard-cat",
      "title": "Кот на люке",
      "caption": "Санкт-Петербург",
      "img": "img/shop/yard-cat.webp",
      "thumb": "img/shop/thumb/yard-cat.webp",
      "w": 7008,
      "h": 4672,
      "tags": [
        "city"
      ],
      "back": "img/shop/back/yard-cat.webp",
      "backL": "img/shop/back/yard-cat-l.webp",
      "themes": [
        "city",
        "animals"
      ],
      "region": "spb"
    },
    {
      "id": "fern",
      "title": "Папоротник",
      "caption": "Санкт-Петербург",
      "img": "img/shop/fern.webp",
      "thumb": "img/shop/thumb/fern.webp",
      "w": 3061,
      "h": 2041,
      "tags": [
        "forest"
      ],
      "back": "img/shop/back/fern.webp",
      "backL": "img/shop/back/fern-l.webp",
      "themes": [
        "forest",
        "macro"
      ],
      "region": "spb"
    },
    {
      "id": "mw-valley",
      "title": "Млечный путь над долиной",
      "caption": "Камчатка",
      "img": "img/shop/mw-valley.webp",
      "thumb": "img/shop/thumb/mw-valley.webp",
      "w": 4672,
      "h": 7008,
      "tags": [
        "sky",
        "mountains"
      ],
      "back": "img/shop/back/mw-valley.webp",
      "backL": "img/shop/back/mw-valley-l.webp",
      "themes": [
        "sky"
      ],
      "region": "kamchatka"
    },
    {
      "id": "mw-forest",
      "title": "Камень желаний",
      "caption": "Камчатка",
      "img": "img/shop/mw-forest.webp",
      "thumb": "img/shop/thumb/mw-forest.webp",
      "w": 4672,
      "h": 7008,
      "tags": [
        "sky",
        "forest"
      ],
      "back": "img/shop/back/mw-forest.webp",
      "backL": "img/shop/back/mw-forest-l.webp",
      "themes": [
        "sky"
      ],
      "region": "kamchatka"
    },
    {
      "id": "mw-red",
      "title": "Млечный путь I",
      "caption": "Камчатка",
      "img": "img/shop/mw-red.webp",
      "thumb": "img/shop/thumb/mw-red.webp",
      "w": 7008,
      "h": 4672,
      "tags": [
        "sky",
        "forest"
      ],
      "back": "img/shop/back/mw-red.webp",
      "backL": "img/shop/back/mw-red-l.webp",
      "themes": [
        "sky"
      ],
      "region": "kamchatka"
    },
    {
      "id": "mw-branches",
      "title": "Млечный путь II",
      "caption": "Камчатка",
      "img": "img/shop/mw-branches.webp",
      "thumb": "img/shop/thumb/mw-branches.webp",
      "w": 7008,
      "h": 4672,
      "tags": [
        "sky",
        "forest"
      ],
      "back": "img/shop/back/mw-branches.webp",
      "backL": "img/shop/back/mw-branches-l.webp",
      "themes": [
        "sky"
      ],
      "region": "kamchatka",
      "aw": {
        "c": "Деревья",
        "top": 3
      }
    },
    {
      "id": "mw-crown",
      "title": "Млечный путь III",
      "caption": "Камчатка",
      "img": "img/shop/mw-crown.webp",
      "thumb": "img/shop/thumb/mw-crown.webp",
      "w": 4672,
      "h": 7008,
      "tags": [
        "sky",
        "forest"
      ],
      "back": "img/shop/back/mw-crown.webp",
      "backL": "img/shop/back/mw-crown-l.webp",
      "themes": [
        "sky"
      ],
      "region": "kamchatka"
    },
    {
      "id": "kola-aurora",
      "title": "Сияние над тундрой",
      "caption": "Кольский полуостров",
      "img": "img/shop/kola-aurora.webp",
      "thumb": "img/shop/thumb/kola-aurora.webp",
      "w": 7000,
      "h": 4905,
      "tags": [
        "sky"
      ],
      "back": "img/shop/back/kola-aurora.webp",
      "backL": "img/shop/back/kola-aurora-l.webp",
      "themes": [
        "sky"
      ],
      "region": "kola"
    },
    {
      "id": "antlers",
      "title": "Рога на закате",
      "caption": "Кольский полуостров",
      "img": "img/shop/antlers.webp",
      "thumb": "img/shop/thumb/antlers.webp",
      "w": 7000,
      "h": 4667,
      "tags": [
        "sky",
        "country"
      ],
      "back": "img/shop/back/antlers.webp",
      "backL": "img/shop/back/antlers-l.webp",
      "themes": [
        "winter",
        "sky"
      ],
      "region": "kola"
    },
    {
      "id": "snow-creek",
      "title": "Ручей в снегу",
      "caption": "Кольский полуостров",
      "img": "img/shop/snow-creek.webp",
      "thumb": "img/shop/thumb/snow-creek.webp",
      "w": 7000,
      "h": 4667,
      "tags": [
        "country"
      ],
      "back": "img/shop/back/snow-creek.webp",
      "backL": "img/shop/back/snow-creek-l.webp",
      "themes": [
        "winter",
        "water"
      ],
      "region": "kola"
    },
    {
      "id": "hut-sunset",
      "title": "Изба на закате",
      "caption": "Кольский полуостров",
      "img": "img/shop/hut-sunset.webp",
      "thumb": "img/shop/thumb/hut-sunset.webp",
      "w": 7000,
      "h": 4667,
      "tags": [
        "country"
      ],
      "back": "img/shop/back/hut-sunset.webp",
      "backL": "img/shop/back/hut-sunset-l.webp",
      "themes": [
        "winter",
        "sky",
        "village"
      ],
      "region": "kola"
    },
    {
      "id": "lone-tree",
      "title": "Одинокое дерево II",
      "caption": "Кольский полуостров",
      "img": "img/shop/lone-tree.webp",
      "thumb": "img/shop/thumb/lone-tree.webp",
      "w": 7000,
      "h": 4667,
      "tags": [
        "sky"
      ],
      "back": "img/shop/back/lone-tree.webp",
      "backL": "img/shop/back/lone-tree-l.webp",
      "themes": [
        "winter",
        "sky"
      ],
      "region": "kola"
    },
    {
      "id": "fogbow",
      "title": "Туманная радуга",
      "caption": "Кольский полуостров",
      "img": "img/shop/fogbow.webp",
      "thumb": "img/shop/thumb/fogbow.webp",
      "w": 7000,
      "h": 4667,
      "tags": [
        "sky"
      ],
      "back": "img/shop/back/fogbow.webp",
      "backL": "img/shop/back/fogbow-l.webp",
      "themes": [
        "winter",
        "sky"
      ],
      "region": "kola"
    },
    {
      "id": "barrel-moon",
      "title": "Бочка под луной",
      "caption": "Кольский полуостров",
      "img": "img/shop/barrel-moon.webp",
      "thumb": "img/shop/thumb/barrel-moon.webp",
      "w": 7000,
      "h": 4667,
      "tags": [
        "sky",
        "country"
      ],
      "back": "img/shop/back/barrel-moon.webp",
      "backL": "img/shop/back/barrel-moon-l.webp",
      "themes": [
        "winter",
        "sky"
      ],
      "region": "kola"
    },
    {
      "id": "kazan-tree",
      "title": "Ёлка у Казанского",
      "caption": "Санкт-Петербург",
      "img": "img/shop/kazan-tree.webp",
      "thumb": "img/shop/thumb/kazan-tree.webp",
      "w": 7008,
      "h": 4672,
      "tags": [
        "city"
      ],
      "back": "img/shop/back/kazan-tree.webp",
      "backL": "img/shop/back/kazan-tree-l.webp",
      "themes": [
        "winter",
        "city"
      ],
      "region": "spb"
    },
    {
      "id": "kazan-dome",
      "title": "Купол Казанского",
      "caption": "Санкт-Петербург",
      "img": "img/shop/kazan-dome.webp",
      "thumb": "img/shop/thumb/kazan-dome.webp",
      "w": 7000,
      "h": 10500,
      "tags": [
        "city"
      ],
      "back": "img/shop/back/kazan-dome.webp",
      "backL": "img/shop/back/kazan-dome-l.webp",
      "themes": [
        "city"
      ],
      "region": "spb"
    },
    {
      "id": "dom-knigi",
      "title": "Дом книги",
      "caption": "Санкт-Петербург",
      "img": "img/shop/dom-knigi.webp",
      "thumb": "img/shop/thumb/dom-knigi.webp",
      "w": 7000,
      "h": 4667,
      "tags": [
        "city"
      ],
      "back": "img/shop/back/dom-knigi.webp",
      "backL": "img/shop/back/dom-knigi-l.webp",
      "themes": [
        "city"
      ],
      "region": "spb"
    },
    {
      "id": "maple-leaf",
      "title": "Осень пришла",
      "caption": "Санкт-Петербург",
      "img": "img/shop/maple-leaf.webp",
      "thumb": "img/shop/thumb/maple-leaf.webp",
      "w": 7000,
      "h": 4667,
      "tags": [
        "city"
      ],
      "back": "img/shop/back/maple-leaf.webp",
      "backL": "img/shop/back/maple-leaf-l.webp",
      "themes": [
        "autumn",
        "city",
        "macro"
      ],
      "region": "spb"
    },
    {
      "id": "colonnade",
      "title": "Колоннада",
      "caption": "Санкт-Петербург",
      "img": "img/shop/colonnade.webp",
      "thumb": "img/shop/thumb/colonnade.webp",
      "w": 7000,
      "h": 10500,
      "tags": [
        "city"
      ],
      "back": "img/shop/back/colonnade.webp",
      "backL": "img/shop/back/colonnade-l.webp",
      "themes": [
        "city"
      ],
      "region": "spb"
    },
    {
      "id": "capitals",
      "title": "Капители",
      "caption": "Санкт-Петербург",
      "img": "img/shop/capitals.webp",
      "thumb": "img/shop/thumb/capitals.webp",
      "w": 7000,
      "h": 10500,
      "tags": [
        "city"
      ],
      "back": "img/shop/back/capitals.webp",
      "backL": "img/shop/back/capitals-l.webp",
      "themes": [
        "city"
      ],
      "region": "spb"
    },
    {
      "id": "spas-grille",
      "title": "Спас сквозь решётку",
      "caption": "Санкт-Петербург",
      "img": "img/shop/spas-grille.webp",
      "thumb": "img/shop/thumb/spas-grille.webp",
      "w": 7000,
      "h": 10500,
      "tags": [
        "city"
      ],
      "back": "img/shop/back/spas-grille.webp",
      "backL": "img/shop/back/spas-grille-l.webp",
      "themes": [
        "city"
      ],
      "region": "spb"
    },
    {
      "id": "griboedov",
      "title": "Канал Грибоедова",
      "caption": "Санкт-Петербург",
      "img": "img/shop/griboedov.webp",
      "thumb": "img/shop/thumb/griboedov.webp",
      "w": 7000,
      "h": 4667,
      "tags": [
        "city"
      ],
      "back": "img/shop/back/griboedov.webp",
      "backL": "img/shop/back/griboedov-l.webp",
      "themes": [
        "water",
        "city"
      ],
      "region": "spb"
    },
    {
      "id": "kremlin-night",
      "title": "Стена кремля ночью",
      "caption": "Верхотурье",
      "img": "img/shop/kremlin-night.webp",
      "thumb": "img/shop/thumb/kremlin-night.webp",
      "w": 6000,
      "h": 4000,
      "tags": [
        "city"
      ],
      "back": "img/shop/back/kremlin-night.webp",
      "backL": "img/shop/back/kremlin-night-l.webp",
      "themes": [
        "winter",
        "city"
      ],
      "region": "ural"
    },
    {
      "id": "snow-alley",
      "title": "Аллея в снегу",
      "caption": "Верхотурье",
      "img": "img/shop/snow-alley.webp",
      "thumb": "img/shop/thumb/snow-alley.webp",
      "w": 6000,
      "h": 9000,
      "tags": [
        "city"
      ],
      "back": "img/shop/back/snow-alley.webp",
      "backL": "img/shop/back/snow-alley-l.webp",
      "themes": [
        "winter",
        "city"
      ],
      "region": "ural"
    },
    {
      "id": "kremlin-hill",
      "title": "Кремль на холме",
      "caption": "Верхотурье",
      "img": "img/shop/kremlin-hill.webp",
      "thumb": "img/shop/thumb/kremlin-hill.webp",
      "w": 6000,
      "h": 4000,
      "tags": [
        "city"
      ],
      "back": "img/shop/back/kremlin-hill.webp",
      "backL": "img/shop/back/kremlin-hill-l.webp",
      "themes": [
        "winter",
        "city"
      ],
      "region": "ural"
    },
    {
      "id": "arch-sunset",
      "title": "Закат в арке",
      "caption": "Верхотурье",
      "img": "img/shop/arch-sunset.webp",
      "thumb": "img/shop/thumb/arch-sunset.webp",
      "w": 6000,
      "h": 9000,
      "tags": [
        "city",
        "sky"
      ],
      "back": "img/shop/back/arch-sunset.webp",
      "backL": "img/shop/back/arch-sunset-l.webp",
      "themes": [
        "sky",
        "city"
      ],
      "region": "ural"
    },
    {
      "id": "gold-domes",
      "title": "Золотые купола",
      "caption": "Верхотурье",
      "img": "img/shop/gold-domes.webp",
      "thumb": "img/shop/thumb/gold-domes.webp",
      "w": 7000,
      "h": 4667,
      "tags": [
        "city"
      ],
      "back": "img/shop/back/gold-domes.webp",
      "backL": "img/shop/back/gold-domes-l.webp",
      "themes": [
        "city"
      ],
      "region": "ural"
    },
    {
      "id": "snow-merlons",
      "title": "Зубцы в снегу",
      "caption": "Верхотурье",
      "img": "img/shop/snow-merlons.webp",
      "thumb": "img/shop/thumb/snow-merlons.webp",
      "w": 6000,
      "h": 4000,
      "tags": [
        "city"
      ],
      "back": "img/shop/back/snow-merlons.webp",
      "backL": "img/shop/back/snow-merlons-l.webp",
      "themes": [
        "winter",
        "city"
      ],
      "region": "ural"
    },
    {
      "id": "winter-monastery",
      "title": "Верхотурский кремль",
      "caption": "Верхотурье",
      "img": "img/shop/winter-monastery.webp",
      "thumb": "img/shop/thumb/winter-monastery.webp",
      "w": 1312,
      "h": 2048,
      "tags": [
        "city"
      ],
      "back": "img/shop/back/winter-monastery.webp",
      "backL": "img/shop/back/winter-monastery-l.webp",
      "themes": [
        "winter",
        "city"
      ],
      "region": "ural"
    },
    {
      "id": "frost-pine",
      "title": "Сосна в инее",
      "caption": "Краснотурьинск",
      "img": "img/shop/frost-pine.webp",
      "thumb": "img/shop/thumb/frost-pine.webp",
      "w": 6000,
      "h": 4000,
      "tags": [
        "forest"
      ],
      "back": "img/shop/back/frost-pine.webp",
      "backL": "img/shop/back/frost-pine-l.webp",
      "themes": [
        "forest",
        "winter",
        "macro"
      ],
      "region": "ural"
    },
    {
      "id": "belltower",
      "title": "Церковь Петра и Павла",
      "caption": "Североуральск",
      "img": "img/shop/belltower.webp",
      "thumb": "img/shop/thumb/belltower.webp",
      "w": 6000,
      "h": 9000,
      "tags": [
        "city"
      ],
      "back": "img/shop/back/belltower.webp",
      "backL": "img/shop/back/belltower-l.webp",
      "themes": [
        "winter",
        "city"
      ],
      "region": "ural"
    },
    {
      "id": "carved-window",
      "title": "Резное окно",
      "caption": "Серов",
      "img": "img/shop/carved-window.webp",
      "thumb": "img/shop/thumb/carved-window.webp",
      "w": 2281,
      "h": 3673,
      "tags": [
        "country"
      ],
      "back": "img/shop/back/carved-window.webp",
      "backL": "img/shop/back/carved-window-l.webp",
      "themes": [
        "winter",
        "village"
      ],
      "region": "ural"
    },
    {
      "id": "dome-silhouette",
      "title": "Часовня Симеона Верхотурского",
      "caption": "Серов",
      "img": "img/shop/dome-silhouette.webp",
      "thumb": "img/shop/thumb/dome-silhouette.webp",
      "w": 5500,
      "h": 7700,
      "tags": [
        "sky"
      ],
      "back": "img/shop/back/dome-silhouette.webp",
      "backL": "img/shop/back/dome-silhouette-l.webp",
      "themes": [
        "sky",
        "city"
      ],
      "region": "ural"
    },
    {
      "id": "storm-lake",
      "title": "Гроза над водой",
      "caption": "Серов",
      "img": "img/shop/storm-lake.webp",
      "thumb": "img/shop/thumb/storm-lake.webp",
      "w": 7000,
      "h": 4667,
      "tags": [
        "sky"
      ],
      "back": "img/shop/back/storm-lake.webp",
      "backL": "img/shop/back/storm-lake-l.webp",
      "themes": [
        "water",
        "sky"
      ],
      "region": "ural"
    },
    {
      "id": "campfire",
      "title": "Дрова в печи",
      "caption": "Серов",
      "img": "img/shop/campfire.webp",
      "thumb": "img/shop/thumb/campfire.webp",
      "w": 1365,
      "h": 2048,
      "tags": [
        "country"
      ],
      "back": "img/shop/back/campfire.webp",
      "backL": "img/shop/back/campfire-l.webp",
      "themes": [
        "village"
      ],
      "region": "ural"
    },
    {
      "id": "balcony",
      "title": "Балкон на Проспекте Серова",
      "caption": "Серов",
      "img": "img/shop/balcony.webp",
      "thumb": "img/shop/thumb/balcony.webp",
      "w": 1707,
      "h": 2560,
      "tags": [
        "city"
      ],
      "back": "img/shop/back/balcony.webp",
      "backL": "img/shop/back/balcony-l.webp",
      "themes": [
        "city"
      ],
      "region": "ural"
    },
    {
      "id": "woodpile",
      "title": "Поленница",
      "caption": "Серов",
      "img": "img/shop/woodpile.webp",
      "thumb": "img/shop/thumb/woodpile.webp",
      "w": 2048,
      "h": 1365,
      "tags": [
        "country"
      ],
      "back": "img/shop/back/woodpile.webp",
      "backL": "img/shop/back/woodpile-l.webp",
      "themes": [
        "winter",
        "village"
      ],
      "region": "ural"
    },
    {
      "id": "leaf-spruce",
      "title": "Осень",
      "caption": "Петербург и Ленобласть",
      "img": "img/shop/leaf-spruce.webp",
      "thumb": "img/shop/thumb/leaf-spruce.webp",
      "w": 7008,
      "h": 4672,
      "tags": [
        "forest"
      ],
      "back": "img/shop/back/leaf-spruce.webp",
      "backL": "img/shop/back/leaf-spruce-l.webp",
      "themes": [
        "forest",
        "autumn",
        "macro"
      ],
      "region": "spb"
    },
    {
      "id": "leaves-grass",
      "title": "Листья в траве",
      "caption": "Петербург и Ленобласть",
      "img": "img/shop/leaves-grass.webp",
      "thumb": "img/shop/thumb/leaves-grass.webp",
      "w": 6298,
      "h": 4199,
      "tags": [
        "forest"
      ],
      "back": "img/shop/back/leaves-grass.webp",
      "backL": "img/shop/back/leaves-grass-l.webp",
      "themes": [
        "forest",
        "autumn",
        "macro"
      ],
      "region": "spb"
    },
    {
      "id": "stump-fern",
      "title": "Пень",
      "caption": "Петербург и Ленобласть",
      "img": "img/shop/stump-fern.webp",
      "thumb": "img/shop/thumb/stump-fern.webp",
      "w": 7008,
      "h": 4672,
      "tags": [
        "forest"
      ],
      "back": "img/shop/back/stump-fern.webp",
      "backL": "img/shop/back/stump-fern-l.webp",
      "themes": [
        "forest",
        "autumn"
      ],
      "region": "spb"
    },
    {
      "id": "maple-moss",
      "title": "Клён на пне",
      "caption": "Петербург и Ленобласть",
      "img": "img/shop/maple-moss.webp",
      "thumb": "img/shop/thumb/maple-moss.webp",
      "w": 7008,
      "h": 4672,
      "tags": [
        "forest"
      ],
      "back": "img/shop/back/maple-moss.webp",
      "backL": "img/shop/back/maple-moss-l.webp",
      "themes": [
        "forest",
        "autumn",
        "macro"
      ],
      "region": "spb"
    },
    {
      "id": "fern-autumn",
      "title": "Осенний папоротник",
      "caption": "Петербург и Ленобласть",
      "img": "img/shop/fern-autumn.webp",
      "thumb": "img/shop/thumb/fern-autumn.webp",
      "w": 7008,
      "h": 4672,
      "tags": [
        "forest"
      ],
      "back": "img/shop/back/fern-autumn.webp",
      "backL": "img/shop/back/fern-autumn-l.webp",
      "themes": [
        "forest",
        "autumn"
      ],
      "region": "spb"
    },
    {
      "id": "fern-leaf",
      "title": "Лист в папоротнике",
      "caption": "Петербург и Ленобласть",
      "img": "img/shop/fern-leaf.webp",
      "thumb": "img/shop/thumb/fern-leaf.webp",
      "w": 7008,
      "h": 4672,
      "tags": [
        "forest"
      ],
      "back": "img/shop/back/fern-leaf.webp",
      "backL": "img/shop/back/fern-leaf-l.webp",
      "themes": [
        "forest",
        "autumn",
        "macro"
      ],
      "region": "spb"
    },
    {
      "id": "old-stumps",
      "title": "Старые пни",
      "caption": "Петербург и Ленобласть",
      "img": "img/shop/old-stumps.webp",
      "thumb": "img/shop/thumb/old-stumps.webp",
      "w": 7008,
      "h": 4672,
      "tags": [
        "forest"
      ],
      "back": "img/shop/back/old-stumps.webp",
      "backL": "img/shop/back/old-stumps-l.webp",
      "themes": [
        "forest",
        "autumn"
      ],
      "region": "spb"
    },
    {
      "id": "moss-stump",
      "title": "Пень во мху",
      "caption": "Петербург и Ленобласть",
      "img": "img/shop/moss-stump.webp",
      "thumb": "img/shop/thumb/moss-stump.webp",
      "w": 7008,
      "h": 4672,
      "tags": [
        "forest"
      ],
      "back": "img/shop/back/moss-stump.webp",
      "backL": "img/shop/back/moss-stump-l.webp",
      "themes": [
        "forest",
        "autumn"
      ],
      "region": "spb"
    },
    {
      "id": "yellow-maple",
      "title": "Жёлтый клён",
      "caption": "Петербург и Ленобласть",
      "img": "img/shop/yellow-maple.webp",
      "thumb": "img/shop/thumb/yellow-maple.webp",
      "w": 7008,
      "h": 4672,
      "tags": [
        "forest"
      ],
      "back": "img/shop/back/yellow-maple.webp",
      "backL": "img/shop/back/yellow-maple-l.webp",
      "themes": [
        "forest",
        "autumn",
        "macro"
      ],
      "region": "spb"
    },
    {
      "id": "fern-2",
      "title": "Папоротник II",
      "caption": "Петербург и Ленобласть",
      "img": "img/shop/fern-2.webp",
      "thumb": "img/shop/thumb/fern-2.webp",
      "w": 2261,
      "h": 3392,
      "tags": [
        "forest"
      ],
      "back": "img/shop/back/fern-2.webp",
      "backL": "img/shop/back/fern-2-l.webp",
      "themes": [
        "forest",
        "autumn",
        "macro"
      ],
      "region": "spb"
    },
    {
      "id": "log-mushrooms",
      "title": "Грибы на бревне",
      "caption": "Петербург и Ленобласть",
      "img": "img/shop/log-mushrooms.webp",
      "thumb": "img/shop/thumb/log-mushrooms.webp",
      "w": 7008,
      "h": 4672,
      "tags": [
        "forest"
      ],
      "back": "img/shop/back/log-mushrooms.webp",
      "backL": "img/shop/back/log-mushrooms-l.webp",
      "themes": [
        "forest",
        "autumn",
        "macro"
      ],
      "region": "spb"
    },
    {
      "id": "van-mirror",
      "title": "Зелёный фургон II",
      "caption": "Санкт-Петербург",
      "img": "img/shop/van-mirror.webp",
      "thumb": "img/shop/thumb/van-mirror.webp",
      "w": 4505,
      "h": 6757,
      "tags": [
        "city"
      ],
      "back": "img/shop/back/van-mirror.webp",
      "backL": "img/shop/back/van-mirror-l.webp",
      "themes": [
        "city"
      ],
      "region": "spb"
    },
    {
      "id": "green-van",
      "title": "Зелёный фургон I",
      "caption": "Санкт-Петербург",
      "img": "img/shop/green-van.webp",
      "thumb": "img/shop/thumb/green-van.webp",
      "w": 6582,
      "h": 4388,
      "tags": [
        "city"
      ],
      "back": "img/shop/back/green-van.webp",
      "backL": "img/shop/back/green-van-l.webp",
      "themes": [
        "city"
      ],
      "region": "spb"
    },
    {
      "id": "leaf-cobbles",
      "title": "Осень пришла II",
      "caption": "Санкт-Петербург",
      "img": "img/shop/leaf-cobbles.webp",
      "thumb": "img/shop/thumb/leaf-cobbles.webp",
      "w": 7000,
      "h": 4667,
      "tags": [
        "city"
      ],
      "back": "img/shop/back/leaf-cobbles.webp",
      "backL": "img/shop/back/leaf-cobbles-l.webp",
      "themes": [
        "autumn",
        "city",
        "macro"
      ],
      "region": "spb"
    },
    {
      "id": "leaf-slabs",
      "title": "Осень пришла III",
      "caption": "Санкт-Петербург",
      "img": "img/shop/leaf-slabs.webp",
      "thumb": "img/shop/thumb/leaf-slabs.webp",
      "w": 7000,
      "h": 4667,
      "tags": [
        "city"
      ],
      "back": "img/shop/back/leaf-slabs.webp",
      "backL": "img/shop/back/leaf-slabs-l.webp",
      "themes": [
        "autumn",
        "city",
        "macro"
      ],
      "region": "spb"
    },
    {
      "id": "leaf-granite",
      "title": "Осень пришла IV",
      "caption": "Санкт-Петербург",
      "img": "img/shop/leaf-granite.webp",
      "thumb": "img/shop/thumb/leaf-granite.webp",
      "w": 7000,
      "h": 4667,
      "tags": [
        "city"
      ],
      "back": "img/shop/back/leaf-granite.webp",
      "backL": "img/shop/back/leaf-granite-l.webp",
      "themes": [
        "autumn",
        "city",
        "macro"
      ],
      "region": "spb"
    },
    {
      "id": "butterfly",
      "title": "Бабочка",
      "caption": "Томск",
      "img": "img/shop/butterfly.webp",
      "thumb": "img/shop/thumb/butterfly.webp",
      "w": 3049,
      "h": 2033,
      "tags": [
        "country"
      ],
      "back": "img/shop/back/butterfly.webp",
      "backL": "img/shop/back/butterfly-l.webp",
      "themes": [
        "macro",
        "animals"
      ],
      "region": "tomsk"
    },
    {
      "id": "green-house",
      "title": "Дом в зелени",
      "caption": "Томск",
      "img": "img/shop/green-house.webp",
      "thumb": "img/shop/thumb/green-house.webp",
      "w": 4516,
      "h": 6021,
      "tags": [
        "city"
      ],
      "back": "img/shop/back/green-house.webp",
      "backL": "img/shop/back/green-house-l.webp",
      "themes": [
        "city"
      ],
      "region": "tomsk"
    },
    {
      "id": "owl-tree",
      "title": "Сова",
      "caption": "Томск",
      "img": "img/shop/owl-tree.webp",
      "thumb": "img/shop/thumb/owl-tree.webp",
      "w": 6718,
      "h": 4479,
      "tags": [
        "country"
      ],
      "back": "img/shop/back/owl-tree.webp",
      "backL": "img/shop/back/owl-tree-l.webp",
      "themes": [
        "forest",
        "macro"
      ],
      "region": "tomsk"
    },
    {
      "id": "lilies",
      "title": "Ландыши",
      "caption": "Томск",
      "img": "img/shop/lilies.webp",
      "thumb": "img/shop/thumb/lilies.webp",
      "w": 6739,
      "h": 4493,
      "tags": [
        "country"
      ],
      "back": "img/shop/back/lilies.webp",
      "backL": "img/shop/back/lilies-l.webp",
      "themes": [
        "macro"
      ],
      "region": "tomsk"
    },
    {
      "id": "wood-curl",
      "title": "Завиток",
      "caption": "Томск",
      "img": "img/shop/wood-curl.webp",
      "thumb": "img/shop/thumb/wood-curl.webp",
      "w": 6676,
      "h": 4451,
      "tags": [
        "city"
      ],
      "back": "img/shop/back/wood-curl.webp",
      "backL": "img/shop/back/wood-curl-l.webp",
      "themes": [
        "city",
        "macro"
      ],
      "region": "tomsk"
    },
    {
      "id": "ivy-door",
      "title": "Дверь в плюще",
      "caption": "Томск",
      "img": "img/shop/ivy-door.webp",
      "thumb": "img/shop/thumb/ivy-door.webp",
      "w": 4264,
      "h": 6396,
      "tags": [
        "city"
      ],
      "back": "img/shop/back/ivy-door.webp",
      "backL": "img/shop/back/ivy-door-l.webp",
      "themes": [
        "city"
      ],
      "region": "tomsk"
    },
    {
      "id": "terem-moon",
      "title": "Терем и луна",
      "caption": "Томск",
      "img": "img/shop/terem-moon.webp",
      "thumb": "img/shop/thumb/terem-moon.webp",
      "w": 6739,
      "h": 4493,
      "tags": [
        "city",
        "sky"
      ],
      "back": "img/shop/back/terem-moon.webp",
      "backL": "img/shop/back/terem-moon-l.webp",
      "themes": [
        "city"
      ],
      "region": "tomsk"
    },
    {
      "id": "wood-lace",
      "title": "Деревянное кружево",
      "caption": "Томск",
      "img": "img/shop/wood-lace.webp",
      "thumb": "img/shop/thumb/wood-lace.webp",
      "w": 6739,
      "h": 4493,
      "tags": [
        "city"
      ],
      "back": "img/shop/back/wood-lace.webp",
      "backL": "img/shop/back/wood-lace-l.webp",
      "themes": [
        "city"
      ],
      "region": "tomsk"
    },
    {
      "id": "terem-leaves",
      "title": "Терем за листвой",
      "caption": "Томск",
      "img": "img/shop/terem-leaves.webp",
      "thumb": "img/shop/thumb/terem-leaves.webp",
      "w": 2891,
      "h": 4336,
      "tags": [
        "city"
      ],
      "back": "img/shop/back/terem-leaves.webp",
      "backL": "img/shop/back/terem-leaves-l.webp",
      "themes": [
        "city"
      ],
      "region": "tomsk"
    },
    {
      "id": "terem-dome",
      "title": "Купол терема",
      "caption": "Томск",
      "img": "img/shop/terem-dome.webp",
      "thumb": "img/shop/thumb/terem-dome.webp",
      "w": 4150,
      "h": 6226,
      "tags": [
        "city",
        "sky"
      ],
      "back": "img/shop/back/terem-dome.webp",
      "backL": "img/shop/back/terem-dome-l.webp",
      "themes": [
        "city"
      ],
      "region": "tomsk"
    },
    {
      "id": "ferris-wheel",
      "title": "Колесо обозрения",
      "caption": "Томск",
      "img": "img/shop/ferris-wheel.webp",
      "thumb": "img/shop/thumb/ferris-wheel.webp",
      "w": 5662,
      "h": 4045,
      "tags": [
        "city",
        "sky"
      ],
      "back": "img/shop/back/ferris-wheel.webp",
      "backL": "img/shop/back/ferris-wheel-l.webp",
      "themes": [
        "sky",
        "city"
      ],
      "region": "tomsk"
    },
    {
      "id": "tomsk-churches",
      "title": "Воскресенская церковь",
      "caption": "Томск",
      "img": "img/shop/tomsk-churches.webp",
      "thumb": "img/shop/thumb/tomsk-churches.webp",
      "w": 6439,
      "h": 4293,
      "tags": [
        "city"
      ],
      "back": "img/shop/back/tomsk-churches.webp",
      "backL": "img/shop/back/tomsk-churches-l.webp",
      "themes": [
        "city"
      ],
      "region": "tomsk"
    },
    {
      "id": "chapel-stairs",
      "title": "Ворота храма Покрова",
      "caption": "Томск",
      "img": "img/shop/chapel-stairs.webp",
      "thumb": "img/shop/thumb/chapel-stairs.webp",
      "w": 4135,
      "h": 6202,
      "tags": [
        "city"
      ],
      "back": "img/shop/back/chapel-stairs.webp",
      "backL": "img/shop/back/chapel-stairs-l.webp",
      "themes": [
        "city"
      ],
      "region": "tomsk"
    },
    {
      "id": "spiral-stairs",
      "title": "Винтовая лестница",
      "caption": "Томск",
      "img": "img/shop/spiral-stairs.webp",
      "thumb": "img/shop/thumb/spiral-stairs.webp",
      "w": 4672,
      "h": 7008,
      "tags": [
        "bw",
        "city"
      ],
      "back": "img/shop/back/spiral-stairs.webp",
      "backL": "img/shop/back/spiral-stairs-l.webp",
      "themes": [
        "city",
        "bw"
      ],
      "region": "tomsk"
    },
    {
      "id": "shutters",
      "title": "Окна и ставни",
      "caption": "Томск",
      "img": "img/shop/shutters.webp",
      "thumb": "img/shop/thumb/shutters.webp",
      "w": 6410,
      "h": 4274,
      "tags": [
        "city"
      ],
      "back": "img/shop/back/shutters.webp",
      "backL": "img/shop/back/shutters-l.webp",
      "themes": [
        "city"
      ],
      "region": "tomsk"
    },
    {
      "id": "carved-eaves",
      "title": "Резной карниз",
      "caption": "Томск",
      "img": "img/shop/carved-eaves.webp",
      "thumb": "img/shop/thumb/carved-eaves.webp",
      "w": 4928,
      "h": 3285,
      "tags": [
        "city"
      ],
      "back": "img/shop/back/carved-eaves.webp",
      "backL": "img/shop/back/carved-eaves-l.webp",
      "themes": [
        "city"
      ],
      "region": "tomsk"
    },
    {
      "id": "white-bridge",
      "title": "Каменный мост через реку Ушайку",
      "caption": "Томск",
      "img": "img/shop/white-bridge.webp",
      "thumb": "img/shop/thumb/white-bridge.webp",
      "w": 4431,
      "h": 6646,
      "tags": [
        "city"
      ],
      "back": "img/shop/back/white-bridge.webp",
      "backL": "img/shop/back/white-bridge-l.webp",
      "themes": [
        "water",
        "city"
      ],
      "region": "tomsk"
    },
    {
      "id": "four-windows",
      "title": "Окна",
      "caption": "Томск",
      "img": "img/shop/four-windows.webp",
      "thumb": "img/shop/thumb/four-windows.webp",
      "w": 7008,
      "h": 4672,
      "tags": [
        "city"
      ],
      "back": "img/shop/back/four-windows.webp",
      "backL": "img/shop/back/four-windows-l.webp",
      "themes": [
        "city"
      ],
      "region": "tomsk"
    },
    {
      "id": "evening-window",
      "title": "Вечернее окно",
      "caption": "Томск",
      "img": "img/shop/evening-window.webp",
      "thumb": "img/shop/thumb/evening-window.webp",
      "w": 5754,
      "h": 3836,
      "tags": [
        "city"
      ],
      "back": "img/shop/back/evening-window.webp",
      "backL": "img/shop/back/evening-window-l.webp",
      "themes": [
        "city"
      ],
      "region": "tomsk"
    },
    {
      "id": "roof-dandelion",
      "title": "Одуванчик на крыше",
      "caption": "Томск",
      "img": "img/shop/roof-dandelion.webp",
      "thumb": "img/shop/thumb/roof-dandelion.webp",
      "w": 6704,
      "h": 4469,
      "tags": [
        "country",
        "sky"
      ],
      "back": "img/shop/back/roof-dandelion.webp",
      "backL": "img/shop/back/roof-dandelion-l.webp",
      "themes": [
        "sky",
        "macro"
      ],
      "region": "tomsk"
    },
    {
      "id": "aw-01",
      "title": "Парк в Ловозере",
      "caption": "Ловозеро, Кольский полуостров",
      "img": "img/shop/aw-01.webp",
      "thumb": "img/shop/thumb/aw-01.webp",
      "w": 3498,
      "h": 1627,
      "tags": [],
      "back": "img/shop/back/aw-01.webp",
      "backL": "img/shop/back/aw-01-l.webp",
      "themes": [
        "autumn",
        "village"
      ],
      "region": "kola",
      "aw": {
        "c": "Осень в городе",
        "top": 3
      }
    },
    {
      "id": "aw-02",
      "title": "Осенняя долина",
      "caption": "Камчатка",
      "img": "img/shop/aw-02.webp",
      "thumb": "img/shop/thumb/aw-02.webp",
      "w": 3500,
      "h": 2625,
      "tags": [],
      "back": "img/shop/back/aw-02.webp",
      "backL": "img/shop/back/aw-02-l.webp",
      "themes": [
        "autumn",
        "mountains"
      ],
      "region": "kamchatka",
      "aw": {
        "c": "Пейзаж: Краски осени",
        "top": 7
      }
    },
    {
      "id": "aw-03",
      "title": "Ручей в тумане",
      "caption": "Якутия",
      "img": "img/shop/aw-03.webp",
      "thumb": "img/shop/thumb/aw-03.webp",
      "w": 3076,
      "h": 3500,
      "tags": [
        "bw"
      ],
      "back": "img/shop/back/aw-03.webp",
      "backL": "img/shop/back/aw-03-l.webp",
      "themes": [
        "forest",
        "water",
        "bw"
      ],
      "region": "yakutia",
      "aw": {
        "c": "Лес",
        "top": 9
      }
    },
    {
      "id": "aw-04",
      "title": "Вдали",
      "caption": "Камчатка",
      "img": "img/shop/aw-04.webp",
      "thumb": "img/shop/thumb/aw-04.webp",
      "w": 3500,
      "h": 2625,
      "tags": [],
      "back": "img/shop/back/aw-04.webp",
      "backL": "img/shop/back/aw-04-l.webp",
      "themes": [
        "autumn",
        "mountains"
      ],
      "region": "kamchatka",
      "aw": {
        "c": "Пейзаж: Краски осени",
        "top": 9
      }
    },
    {
      "id": "aw-05",
      "title": "Осень у вулкана",
      "caption": "Камчатка",
      "img": "img/shop/aw-05.webp",
      "thumb": "img/shop/thumb/aw-05.webp",
      "w": 3500,
      "h": 2626,
      "tags": [],
      "back": "img/shop/back/aw-05.webp",
      "backL": "img/shop/back/aw-05-l.webp",
      "themes": [
        "autumn",
        "mountains"
      ],
      "region": "kamchatka",
      "aw": {
        "c": "Пейзаж: Краски осени",
        "top": 9
      }
    },
    {
      "id": "aw-06",
      "title": "Берёзовые листья",
      "caption": "Камчатка",
      "img": "img/shop/aw-06.webp",
      "thumb": "img/shop/thumb/aw-06.webp",
      "w": 3024,
      "h": 4032,
      "tags": [],
      "back": "img/shop/back/aw-06.webp",
      "backL": "img/shop/back/aw-06-l.webp",
      "themes": [
        "autumn",
        "macro"
      ],
      "region": "kamchatka",
      "aw": {
        "c": "Листва",
        "top": 10
      }
    },
    {
      "id": "aw-07",
      "title": "Осень. Тырныауз",
      "caption": "Тырныауз, Приэльбрусье",
      "img": "img/shop/aw-07.webp",
      "thumb": "img/shop/thumb/aw-07.webp",
      "w": 3084,
      "h": 2056,
      "tags": [],
      "back": "img/shop/back/aw-07.webp",
      "backL": "img/shop/back/aw-07-l.webp",
      "themes": [
        "autumn",
        "mountains"
      ],
      "region": "kavkaz",
      "aw": {
        "c": "Пейзаж: Краски осени",
        "top": 12
      }
    },
    {
      "id": "aw-08",
      "title": "Осень на Камчатке",
      "caption": "Камчатка",
      "img": "img/shop/aw-08.webp",
      "thumb": "img/shop/thumb/aw-08.webp",
      "w": 3500,
      "h": 2625,
      "tags": [],
      "back": "img/shop/back/aw-08.webp",
      "backL": "img/shop/back/aw-08-l.webp",
      "themes": [
        "autumn",
        "mountains"
      ],
      "region": "kamchatka",
      "aw": {
        "c": "Листва",
        "top": 12
      }
    },
    {
      "id": "aw-09",
      "title": "Бирюзовая Катунь в сентябре",
      "caption": "Чемал, Алтай",
      "img": "img/shop/aw-09.webp",
      "thumb": "img/shop/thumb/aw-09.webp",
      "w": 3500,
      "h": 2333,
      "tags": [],
      "back": "img/shop/back/aw-09.webp",
      "backL": "img/shop/back/aw-09-l.webp",
      "themes": [
        "autumn",
        "water",
        "forest"
      ],
      "region": "altai",
      "aw": {
        "c": "Лес",
        "top": 14
      }
    },
    {
      "id": "aw-10",
      "title": "Чульманские скалы",
      "caption": "Чульман, Якутия",
      "img": "img/shop/aw-10.webp",
      "thumb": "img/shop/thumb/aw-10.webp",
      "w": 2333,
      "h": 3500,
      "tags": [],
      "back": "img/shop/back/aw-10.webp",
      "backL": "img/shop/back/aw-10-l.webp",
      "themes": [
        "forest",
        "autumn"
      ],
      "region": "yakutia",
      "aw": {
        "c": "Лес",
        "top": 14
      }
    },
    {
      "id": "aw-11",
      "title": "Зимний вечер в Верхотурье",
      "caption": "Верхотурье",
      "img": "img/shop/aw-11.webp",
      "thumb": "img/shop/thumb/aw-11.webp",
      "w": 3500,
      "h": 2164,
      "tags": [],
      "back": "img/shop/back/aw-11.webp",
      "backL": "img/shop/back/aw-11-l.webp",
      "themes": [
        "winter",
        "village"
      ],
      "region": "ural",
      "aw": {
        "c": "Деревенский пейзаж",
        "top": 2
      }
    },
    {
      "id": "aw-12",
      "title": "Морозное солнце",
      "caption": "Серов",
      "img": "img/shop/aw-12.webp",
      "thumb": "img/shop/thumb/aw-12.webp",
      "w": 3500,
      "h": 2333,
      "tags": [],
      "back": "img/shop/back/aw-12.webp",
      "backL": "img/shop/back/aw-12-l.webp",
      "themes": [
        "winter",
        "macro"
      ],
      "region": "ural",
      "aw": {
        "c": "Иней",
        "top": 7
      }
    },
    {
      "id": "aw-13",
      "title": "Солнце над тундрой",
      "caption": "Колмозеро, Кольский полуостров",
      "img": "img/shop/aw-13.webp",
      "thumb": "img/shop/thumb/aw-13.webp",
      "w": 3500,
      "h": 1565,
      "tags": [],
      "back": "img/shop/back/aw-13.webp",
      "backL": "img/shop/back/aw-13-l.webp",
      "themes": [
        "winter"
      ],
      "region": "kola",
      "aw": {
        "c": "Зимний пейзаж",
        "top": 9
      }
    },
    {
      "id": "aw-14",
      "title": "Вечерний чай I",
      "caption": "Санкт-Петербург",
      "img": "img/shop/aw-14.webp",
      "thumb": "img/shop/thumb/aw-14.webp",
      "w": 2625,
      "h": 3500,
      "tags": [],
      "back": "img/shop/back/aw-14.webp",
      "backL": "img/shop/back/aw-14-l.webp",
      "themes": [
        "winter"
      ],
      "region": "spb",
      "aw": {
        "c": "Зимний натюрморт",
        "top": 11
      }
    },
    {
      "id": "aw-15",
      "title": "Первые заморозки",
      "caption": "Тырныауз, Приэльбрусье",
      "img": "img/shop/aw-15.webp",
      "thumb": "img/shop/thumb/aw-15.webp",
      "w": 3500,
      "h": 2333,
      "tags": [],
      "back": "img/shop/back/aw-15.webp",
      "backL": "img/shop/back/aw-15-l.webp",
      "themes": [
        "winter",
        "mountains"
      ],
      "region": "kavkaz",
      "aw": {
        "c": "Иней",
        "top": 12
      }
    },
    {
      "id": "aw-16",
      "title": "Зимний серпантин",
      "caption": "Тырныауз, Приэльбрусье",
      "img": "img/shop/aw-16.webp",
      "thumb": "img/shop/thumb/aw-16.webp",
      "w": 3500,
      "h": 2716,
      "tags": [],
      "back": "img/shop/back/aw-16.webp",
      "backL": "img/shop/back/aw-16-l.webp",
      "themes": [
        "winter",
        "mountains"
      ],
      "region": "kavkaz",
      "aw": {
        "c": "Зимний пейзаж",
        "top": 13
      }
    },
    {
      "id": "aw-17",
      "title": "Две свечи",
      "caption": "Санкт-Петербург",
      "img": "img/shop/aw-17.webp",
      "thumb": "img/shop/thumb/aw-17.webp",
      "w": 2333,
      "h": 3500,
      "tags": [],
      "back": "img/shop/back/aw-17.webp",
      "backL": "img/shop/back/aw-17-l.webp",
      "themes": [
        "winter"
      ],
      "region": "spb",
      "aw": {
        "c": "Зимний натюрморт",
        "top": 14
      }
    },
    {
      "id": "aw-18",
      "title": "Ветка в инее",
      "caption": "Новосибирск",
      "img": "img/shop/aw-18.webp",
      "thumb": "img/shop/thumb/aw-18.webp",
      "w": 3500,
      "h": 2333,
      "tags": [],
      "back": "img/shop/back/aw-18.webp",
      "backL": "img/shop/back/aw-18-l.webp",
      "themes": [
        "winter",
        "macro"
      ],
      "region": "novosibirsk",
      "aw": {
        "c": "Иней",
        "top": 16
      }
    },
    {
      "id": "aw-19",
      "title": "Вечерний чай II",
      "caption": "Санкт-Петербург",
      "img": "img/shop/aw-19.webp",
      "thumb": "img/shop/thumb/aw-19.webp",
      "w": 4576,
      "h": 6102,
      "tags": [],
      "back": "img/shop/back/aw-19.webp",
      "backL": "img/shop/back/aw-19-l.webp",
      "themes": [
        "winter"
      ],
      "region": "spb",
      "aw": {
        "c": "Зимний натюрморт",
        "top": 16
      }
    },
    {
      "id": "aw-20",
      "title": "Морозный узор",
      "caption": "Серов",
      "img": "img/shop/aw-20.webp",
      "thumb": "img/shop/thumb/aw-20.webp",
      "w": 3500,
      "h": 2333,
      "tags": [],
      "back": "img/shop/back/aw-20.webp",
      "backL": "img/shop/back/aw-20-l.webp",
      "themes": [
        "winter",
        "macro"
      ],
      "region": "ural",
      "aw": {
        "c": "Иней",
        "top": 18
      }
    },
    {
      "id": "aw-21",
      "title": "Туман на склоне",
      "caption": "Тырныауз, Приэльбрусье",
      "img": "img/shop/aw-21.webp",
      "thumb": "img/shop/thumb/aw-21.webp",
      "w": 3500,
      "h": 2333,
      "tags": [
        "bw"
      ],
      "back": "img/shop/back/aw-21.webp",
      "backL": "img/shop/back/aw-21-l.webp",
      "themes": [
        "mountains",
        "sky",
        "bw"
      ],
      "region": "kavkaz",
      "aw": {
        "c": "Облака",
        "top": 4
      }
    },
    {
      "id": "aw-22",
      "title": "Облака над ущельем",
      "caption": "Тырныауз, Приэльбрусье",
      "img": "img/shop/aw-22.webp",
      "thumb": "img/shop/thumb/aw-22.webp",
      "w": 3500,
      "h": 2333,
      "tags": [],
      "back": "img/shop/back/aw-22.webp",
      "backL": "img/shop/back/aw-22-l.webp",
      "themes": [
        "mountains",
        "sky"
      ],
      "region": "kavkaz",
      "aw": {
        "c": "Облака",
        "top": 9
      }
    },
    {
      "id": "aw-23",
      "title": "Летний дождь II",
      "caption": "Новосибирск",
      "img": "img/shop/aw-23.webp",
      "thumb": "img/shop/thumb/aw-23.webp",
      "w": 3500,
      "h": 2333,
      "tags": [
        "city"
      ],
      "back": "img/shop/back/aw-23.webp",
      "backL": "img/shop/back/aw-23-l.webp",
      "themes": [
        "city"
      ],
      "region": "novosibirsk",
      "aw": {
        "c": "Дождь",
        "top": 16
      }
    },
    {
      "id": "aw-24",
      "title": "Летний дождь III",
      "caption": "Новосибирск",
      "img": "img/shop/aw-24.webp",
      "thumb": "img/shop/thumb/aw-24.webp",
      "w": 3500,
      "h": 2293,
      "tags": [
        "city"
      ],
      "back": "img/shop/back/aw-24.webp",
      "backL": "img/shop/back/aw-24-l.webp",
      "themes": [
        "city"
      ],
      "region": "novosibirsk",
      "aw": {
        "c": "Дождь",
        "top": 16
      }
    },
    {
      "id": "aw-25",
      "title": "Капли на лиственнице",
      "caption": "Новосибирск",
      "img": "img/shop/aw-25.webp",
      "thumb": "img/shop/thumb/aw-25.webp",
      "w": 3500,
      "h": 2333,
      "tags": [],
      "back": "img/shop/back/aw-25.webp",
      "backL": "img/shop/back/aw-25-l.webp",
      "themes": [
        "macro",
        "forest"
      ],
      "region": "novosibirsk",
      "aw": {
        "c": "Дождь",
        "top": 17
      }
    },
    {
      "id": "aw-26",
      "title": "Летний дождь I",
      "caption": "Новосибирск",
      "img": "img/shop/aw-26.webp",
      "thumb": "img/shop/thumb/aw-26.webp",
      "w": 3500,
      "h": 2333,
      "tags": [
        "city"
      ],
      "back": "img/shop/back/aw-26.webp",
      "backL": "img/shop/back/aw-26-l.webp",
      "themes": [
        "city"
      ],
      "region": "novosibirsk",
      "aw": {
        "c": "Дождливые города и улицы",
        "top": 19
      }
    },
    {
      "id": "aw-27",
      "title": "Облака на закате",
      "caption": "Тырныауз, Приэльбрусье",
      "img": "img/shop/aw-27.webp",
      "thumb": "img/shop/thumb/aw-27.webp",
      "w": 3500,
      "h": 2333,
      "tags": [],
      "back": "img/shop/back/aw-27.webp",
      "backL": "img/shop/back/aw-27-l.webp",
      "themes": [
        "sky"
      ],
      "region": "kavkaz",
      "aw": {
        "c": "Облака",
        "top": 21
      }
    },
    {
      "id": "aw-28",
      "title": "Летний дождь IV",
      "caption": "Новосибирск",
      "img": "img/shop/aw-28.webp",
      "thumb": "img/shop/thumb/aw-28.webp",
      "w": 3500,
      "h": 2333,
      "tags": [
        "city"
      ],
      "back": "img/shop/back/aw-28.webp",
      "backL": "img/shop/back/aw-28-l.webp",
      "themes": [
        "city"
      ],
      "region": "novosibirsk",
      "aw": {
        "c": "Дождливые города и улицы",
        "top": 22
      }
    },
    {
      "id": "aw-29",
      "title": "Облака",
      "caption": "Тырныауз, Приэльбрусье",
      "img": "img/shop/aw-29.webp",
      "thumb": "img/shop/thumb/aw-29.webp",
      "w": 3500,
      "h": 2333,
      "tags": [],
      "back": "img/shop/back/aw-29.webp",
      "backL": "img/shop/back/aw-29-l.webp",
      "themes": [
        "mountains",
        "sky"
      ],
      "region": "kavkaz",
      "aw": {
        "c": "Облака",
        "top": 26
      }
    },
    {
      "id": "aw-30",
      "title": "Туман над лесом",
      "caption": "Тырныауз, Приэльбрусье",
      "img": "img/shop/aw-30.webp",
      "thumb": "img/shop/thumb/aw-30.webp",
      "w": 3500,
      "h": 2333,
      "tags": [],
      "back": "img/shop/back/aw-30.webp",
      "backL": "img/shop/back/aw-30-l.webp",
      "themes": [
        "mountains",
        "forest"
      ],
      "region": "kavkaz",
      "aw": {
        "c": "Облака",
        "top": 27
      }
    },
    {
      "id": "aw-31",
      "title": "Часовня на закате",
      "caption": "Магаданская область",
      "img": "img/shop/aw-31.webp",
      "thumb": "img/shop/thumb/aw-31.webp",
      "w": 2048,
      "h": 1365,
      "tags": [],
      "back": "img/shop/back/aw-31.webp",
      "backL": "img/shop/back/aw-31-l.webp",
      "themes": [
        "winter",
        "village"
      ],
      "region": "magadan",
      "aw": {
        "c": "Рассветы и закаты",
        "top": 7
      }
    },
    {
      "id": "aw-32",
      "title": "Оранжевое солнце V",
      "caption": "Магаданская область",
      "img": "img/shop/aw-32.webp",
      "thumb": "img/shop/thumb/aw-32.webp",
      "w": 2048,
      "h": 2048,
      "tags": [],
      "back": "img/shop/back/aw-32.webp",
      "backL": "img/shop/back/aw-32-l.webp",
      "themes": [
        "winter",
        "sky"
      ],
      "region": "magadan",
      "aw": {
        "c": "Рассветы и закаты",
        "top": 8
      }
    },
    {
      "id": "aw-33",
      "title": "Обь у Красного Яра",
      "caption": "Новосибирская область",
      "img": "img/shop/aw-33.webp",
      "thumb": "img/shop/thumb/aw-33.webp",
      "w": 3700,
      "h": 2467,
      "tags": [
        "bw"
      ],
      "back": "img/shop/back/aw-33.webp",
      "backL": "img/shop/back/aw-33-l.webp",
      "themes": [
        "water",
        "bw"
      ],
      "region": "novosibirsk",
      "aw": {
        "c": "Реки",
        "top": 12
      }
    },
    {
      "id": "aw-34",
      "title": "Ручей на Колмозере",
      "caption": "Колмозеро, Кольский полуостров",
      "img": "img/shop/aw-34.webp",
      "thumb": "img/shop/thumb/aw-34.webp",
      "w": 3500,
      "h": 2333,
      "tags": [],
      "back": "img/shop/back/aw-34.webp",
      "backL": "img/shop/back/aw-34-l.webp",
      "themes": [
        "winter",
        "water"
      ],
      "region": "kola",
      "aw": {
        "c": "Реки",
        "top": 14
      }
    },
    {
      "id": "aw-35",
      "title": "Дневная луна",
      "caption": "Тырныауз, Приэльбрусье",
      "img": "img/shop/aw-35.webp",
      "thumb": "img/shop/thumb/aw-35.webp",
      "w": 3500,
      "h": 2333,
      "tags": [],
      "back": "img/shop/back/aw-35.webp",
      "backL": "img/shop/back/aw-35-l.webp",
      "themes": [
        "mountains",
        "sky"
      ],
      "region": "kavkaz",
      "aw": {
        "c": "Лунный пейзаж",
        "top": 17
      }
    },
    {
      "id": "aw-36",
      "title": "Закат над путями",
      "caption": "Павино, Новосибирская область",
      "img": "img/shop/aw-36.webp",
      "thumb": "img/shop/thumb/aw-36.webp",
      "w": 2500,
      "h": 1666,
      "tags": [],
      "back": "img/shop/back/aw-36.webp",
      "backL": "img/shop/back/aw-36-l.webp",
      "themes": [
        "sky"
      ],
      "region": "novosibirsk",
      "aw": {
        "c": "Рассветы и закаты",
        "top": 17
      }
    },
    {
      "id": "aw-37",
      "title": "Река в тайге",
      "caption": "Чульман, Якутия",
      "img": "img/shop/aw-37.webp",
      "thumb": "img/shop/thumb/aw-37.webp",
      "w": 3500,
      "h": 1750,
      "tags": [],
      "back": "img/shop/back/aw-37.webp",
      "backL": "img/shop/back/aw-37-l.webp",
      "themes": [
        "forest",
        "water"
      ],
      "region": "yakutia",
      "aw": {
        "c": "Реки",
        "top": 18
      }
    },
    {
      "id": "aw-38",
      "title": "Золотой ручей",
      "caption": "Новосибирск",
      "img": "img/shop/aw-38.webp",
      "thumb": "img/shop/thumb/aw-38.webp",
      "w": 1800,
      "h": 1200,
      "tags": [],
      "back": "img/shop/back/aw-38.webp",
      "backL": "img/shop/back/aw-38-l.webp",
      "themes": [
        "winter",
        "water"
      ],
      "region": "novosibirsk",
      "aw": {
        "c": "Реки",
        "top": 20
      }
    },
    {
      "id": "aw-39",
      "title": "Оранжевое солнце I",
      "caption": "Магаданская область",
      "img": "img/shop/aw-39.webp",
      "thumb": "img/shop/thumb/aw-39.webp",
      "w": 2048,
      "h": 2048,
      "tags": [],
      "back": "img/shop/back/aw-39.webp",
      "backL": "img/shop/back/aw-39-l.webp",
      "themes": [
        "winter",
        "sky"
      ],
      "region": "magadan",
      "aw": {
        "c": "Оранжевый цвет",
        "top": 13
      }
    },
    {
      "id": "aw-40",
      "title": "Прострелы",
      "caption": "Чульман, Якутия",
      "img": "img/shop/aw-40.webp",
      "thumb": "img/shop/thumb/aw-40.webp",
      "w": 2625,
      "h": 3500,
      "tags": [],
      "back": "img/shop/back/aw-40.webp",
      "backL": "img/shop/back/aw-40-l.webp",
      "themes": [
        "macro"
      ],
      "region": "yakutia",
      "aw": {
        "c": "Цветы",
        "top": 15
      }
    },
    {
      "id": "aw-41",
      "title": "Оранжевое солнце II",
      "caption": "Магаданская область",
      "img": "img/shop/aw-41.webp",
      "thumb": "img/shop/thumb/aw-41.webp",
      "w": 2048,
      "h": 1365,
      "tags": [],
      "back": "img/shop/back/aw-41.webp",
      "backL": "img/shop/back/aw-41-l.webp",
      "themes": [
        "mountains",
        "winter"
      ],
      "region": "magadan",
      "aw": {
        "c": "Оранжевый цвет",
        "top": 19
      }
    },
    {
      "id": "aw-42",
      "title": "Оранжевое солнце III",
      "caption": "Магаданская область",
      "img": "img/shop/aw-42.webp",
      "thumb": "img/shop/thumb/aw-42.webp",
      "w": 2048,
      "h": 1365,
      "tags": [],
      "back": "img/shop/back/aw-42.webp",
      "backL": "img/shop/back/aw-42-l.webp",
      "themes": [
        "mountains",
        "winter"
      ],
      "region": "magadan",
      "aw": {
        "c": "Оранжевый цвет",
        "top": 26
      }
    },
    {
      "id": "aw-43",
      "title": "Безмятежность (Bliss) по-кавказски",
      "caption": "Тырныауз, Приэльбрусье",
      "img": "img/shop/aw-43.webp",
      "thumb": "img/shop/thumb/aw-43.webp",
      "w": 3500,
      "h": 2333,
      "tags": [],
      "back": "img/shop/back/aw-43.webp",
      "backL": "img/shop/back/aw-43-l.webp",
      "themes": [
        "sky",
        "mountains"
      ],
      "region": "kavkaz",
      "aw": {
        "c": "Синий + зеленый",
        "top": 30
      }
    },
    {
      "id": "aw-44",
      "title": "Оранжевое солнце IV",
      "caption": "Магаданская область",
      "img": "img/shop/aw-44.webp",
      "thumb": "img/shop/thumb/aw-44.webp",
      "w": 1365,
      "h": 2048,
      "tags": [],
      "back": "img/shop/back/aw-44.webp",
      "backL": "img/shop/back/aw-44-l.webp",
      "themes": [
        "winter",
        "sky"
      ],
      "region": "magadan",
      "aw": {
        "c": "Оранжевый цвет",
        "top": 30
      }
    },
    {
      "id": "aw-45",
      "title": "Сияние над Ловозером",
      "caption": "Ловозеро, Кольский полуостров",
      "img": "img/shop/aw-45.webp",
      "thumb": "img/shop/thumb/aw-45.webp",
      "w": 3500,
      "h": 2333,
      "tags": [],
      "back": "img/shop/back/aw-45.webp",
      "backL": "img/shop/back/aw-45-l.webp",
      "themes": [
        "sky",
        "water"
      ],
      "region": "kola",
      "aw": {
        "c": "Синий + зеленый",
        "top": 31
      }
    },
    {
      "id": "aw-46",
      "title": "Брахиозавры у воды",
      "caption": "Новосибирск",
      "img": "img/shop/aw-46.webp",
      "thumb": "img/shop/thumb/aw-46.webp",
      "w": 3500,
      "h": 2333,
      "tags": [],
      "back": "img/shop/back/aw-46.webp",
      "backL": "img/shop/back/aw-46-l.webp",
      "themes": [
        "macro"
      ],
      "region": "novosibirsk",
      "aw": {
        "c": "Миниатюрный мир",
        "top": 2
      }
    },
    {
      "id": "aw-47",
      "title": "Спинозавр на разливе",
      "caption": "Новосибирск",
      "img": "img/shop/aw-47.webp",
      "thumb": "img/shop/thumb/aw-47.webp",
      "w": 3500,
      "h": 3500,
      "tags": [],
      "back": "img/shop/back/aw-47.webp",
      "backL": "img/shop/back/aw-47-l.webp",
      "themes": [
        "macro"
      ],
      "region": "novosibirsk",
      "aw": {
        "c": "Миниатюрный мир",
        "top": 5
      }
    },
    {
      "id": "aw-48",
      "title": "Белые соцветия",
      "caption": "Серов",
      "img": "img/shop/aw-48.webp",
      "thumb": "img/shop/thumb/aw-48.webp",
      "w": 3500,
      "h": 2334,
      "tags": [],
      "back": "img/shop/back/aw-48.webp",
      "backL": "img/shop/back/aw-48-l.webp",
      "themes": [
        "macro"
      ],
      "region": "ural",
      "aw": {
        "c": "Цветы",
        "top": 7
      }
    },
    {
      "id": "aw-49",
      "title": "Выход теризинозавра",
      "caption": "Новосибирск",
      "img": "img/shop/aw-49.webp",
      "thumb": "img/shop/thumb/aw-49.webp",
      "w": 6000,
      "h": 4000,
      "tags": [],
      "back": "img/shop/back/aw-49.webp",
      "backL": "img/shop/back/aw-49-l.webp",
      "themes": [
        "macro"
      ],
      "region": "novosibirsk",
      "aw": {
        "c": "Миниатюрный мир",
        "top": 8
      }
    },
    {
      "id": "aw-50",
      "title": "Спинозавр",
      "caption": "Новосибирск",
      "img": "img/shop/aw-50.webp",
      "thumb": "img/shop/thumb/aw-50.webp",
      "w": 3499,
      "h": 2333,
      "tags": [],
      "back": "img/shop/back/aw-50.webp",
      "backL": "img/shop/back/aw-50-l.webp",
      "themes": [
        "macro"
      ],
      "region": "novosibirsk",
      "aw": {
        "c": "Миниатюрный мир",
        "top": 9
      }
    },
    {
      "id": "aw-51",
      "title": "Встреча на песке",
      "caption": "Новосибирск",
      "img": "img/shop/aw-51.webp",
      "thumb": "img/shop/thumb/aw-51.webp",
      "w": 3500,
      "h": 2333,
      "tags": [],
      "back": "img/shop/back/aw-51.webp",
      "backL": "img/shop/back/aw-51-l.webp",
      "themes": [
        "macro"
      ],
      "region": "novosibirsk",
      "aw": {
        "c": "Миниатюрный мир",
        "top": 10
      }
    },
    {
      "id": "aw-52",
      "title": "Спинозавр в реке",
      "caption": "Новосибирск",
      "img": "img/shop/aw-52.webp",
      "thumb": "img/shop/thumb/aw-52.webp",
      "w": 4619,
      "h": 3080,
      "tags": [],
      "back": "img/shop/back/aw-52.webp",
      "backL": "img/shop/back/aw-52-l.webp",
      "themes": [
        "macro"
      ],
      "region": "novosibirsk",
      "aw": {
        "c": "Миниатюрный мир",
        "top": 12
      }
    },
    {
      "id": "aw-53",
      "title": "Луговые цветы",
      "caption": "Пулково, Санкт-Петербург",
      "img": "img/shop/aw-53.webp",
      "thumb": "img/shop/thumb/aw-53.webp",
      "w": 3500,
      "h": 3500,
      "tags": [],
      "back": "img/shop/back/aw-53.webp",
      "backL": "img/shop/back/aw-53-l.webp",
      "themes": [
        "macro"
      ],
      "region": "spb",
      "aw": {
        "c": "Цветы",
        "top": 13
      }
    },
    {
      "id": "aw-54",
      "title": "Рудбекия",
      "caption": "Пулково, Санкт-Петербург",
      "img": "img/shop/aw-54.webp",
      "thumb": "img/shop/thumb/aw-54.webp",
      "w": 3500,
      "h": 2334,
      "tags": [],
      "back": "img/shop/back/aw-54.webp",
      "backL": "img/shop/back/aw-54-l.webp",
      "themes": [
        "macro"
      ],
      "region": "spb",
      "aw": {
        "c": "Цветы",
        "top": 14
      }
    },
    {
      "id": "aw-55",
      "title": "Смертельный бой",
      "caption": "Новосибирск",
      "img": "img/shop/aw-55.webp",
      "thumb": "img/shop/thumb/aw-55.webp",
      "w": 3500,
      "h": 2333,
      "tags": [],
      "back": "img/shop/back/aw-55.webp",
      "backL": "img/shop/back/aw-55-l.webp",
      "themes": [
        "macro"
      ],
      "region": "novosibirsk",
      "aw": {
        "c": "Миниатюрный мир",
        "top": 17
      }
    },
    {
      "id": "aw-56",
      "title": "Галерея Гостиного двора",
      "caption": "Санкт-Петербург",
      "img": "img/shop/aw-56.webp",
      "thumb": "img/shop/thumb/aw-56.webp",
      "w": 3024,
      "h": 4032,
      "tags": [
        "city"
      ],
      "back": "img/shop/back/aw-56.webp",
      "backL": "img/shop/back/aw-56-l.webp",
      "themes": [
        "city"
      ],
      "region": "spb",
      "aw": {
        "c": "Удачный мобильный снимок",
        "top": 5
      }
    },
    {
      "id": "aw-57",
      "title": "Кроны",
      "caption": "Петропавловск-Камчатский",
      "img": "img/shop/aw-57.webp",
      "thumb": "img/shop/thumb/aw-57.webp",
      "w": 2625,
      "h": 3500,
      "tags": [
        "bw"
      ],
      "back": "img/shop/back/aw-57.webp",
      "backL": "img/shop/back/aw-57-l.webp",
      "themes": [
        "forest",
        "bw"
      ],
      "region": "kamchatka",
      "aw": {
        "c": "Деревья",
        "top": 5
      }
    },
    {
      "id": "aw-58",
      "title": "Хребты",
      "caption": "Камчатка",
      "img": "img/shop/aw-58.webp",
      "thumb": "img/shop/thumb/aw-58.webp",
      "w": 3024,
      "h": 4032,
      "tags": [
        "bw"
      ],
      "back": "img/shop/back/aw-58.webp",
      "backL": "img/shop/back/aw-58-l.webp",
      "themes": [
        "mountains",
        "bw"
      ],
      "region": "kamchatka",
      "aw": {
        "c": "Удачный мобильный снимок",
        "top": 8
      }
    },
    {
      "id": "aw-59",
      "title": "Дорога к перевалу",
      "caption": "Камчатка",
      "img": "img/shop/aw-59.webp",
      "thumb": "img/shop/thumb/aw-59.webp",
      "w": 3500,
      "h": 2625,
      "tags": [
        "bw"
      ],
      "back": "img/shop/back/aw-59.webp",
      "backL": "img/shop/back/aw-59-l.webp",
      "themes": [
        "mountains",
        "bw"
      ],
      "region": "kamchatka",
      "aw": {
        "c": "Черно-белый мобильный снимок",
        "top": 10
      }
    },
    {
      "id": "aw-60",
      "title": "Улитка",
      "caption": "Новосибирск",
      "img": "img/shop/aw-60.webp",
      "thumb": "img/shop/thumb/aw-60.webp",
      "w": 4032,
      "h": 3024,
      "tags": [],
      "back": "img/shop/back/aw-60.webp",
      "backL": "img/shop/back/aw-60-l.webp",
      "themes": [
        "macro",
        "animals"
      ],
      "region": "novosibirsk",
      "aw": {
        "c": "Мобильное фото: Движение",
        "top": 13
      }
    },
    {
      "id": "aw-61",
      "title": "Пригородный вокзал",
      "caption": "Новосибирск",
      "img": "img/shop/aw-61.webp",
      "thumb": "img/shop/thumb/aw-61.webp",
      "w": 2997,
      "h": 3996,
      "tags": [
        "bw",
        "city"
      ],
      "back": "img/shop/back/aw-61.webp",
      "backL": "img/shop/back/aw-61-l.webp",
      "themes": [
        "city",
        "bw"
      ],
      "region": "novosibirsk",
      "aw": {
        "c": "Черно-белый мобильный снимок",
        "top": 22
      }
    },
    {
      "id": "aw-62",
      "title": "«Метла» у керна",
      "caption": "Камчатка",
      "img": "img/shop/aw-62.webp",
      "thumb": "img/shop/thumb/aw-62.webp",
      "w": 2625,
      "h": 3500,
      "tags": [
        "bw"
      ],
      "back": "img/shop/back/aw-62.webp",
      "backL": "img/shop/back/aw-62-l.webp",
      "themes": [
        "bw"
      ],
      "region": "kamchatka",
      "aw": {
        "c": "Черно-белый мобильный снимок",
        "top": 22
      }
    },
    {
      "id": "aw-63",
      "title": "Доброго утра!",
      "caption": "Тырныауз, Приэльбрусье",
      "img": "img/shop/aw-63.webp",
      "thumb": "img/shop/thumb/aw-63.webp",
      "w": 6000,
      "h": 4000,
      "tags": [],
      "back": "img/shop/back/aw-63.webp",
      "backL": "img/shop/back/aw-63-l.webp",
      "themes": [
        "animals"
      ],
      "region": "kavkaz",
      "aw": {
        "c": "Кошки",
        "top": 2
      }
    },
    {
      "id": "aw-64",
      "title": "Полосатый кот",
      "caption": "Тырныауз, Приэльбрусье",
      "img": "img/shop/aw-64.webp",
      "thumb": "img/shop/thumb/aw-64.webp",
      "w": 3500,
      "h": 2333,
      "tags": [],
      "back": "img/shop/back/aw-64.webp",
      "backL": "img/shop/back/aw-64-l.webp",
      "themes": [
        "animals"
      ],
      "region": "kavkaz",
      "aw": {
        "c": "Кошки",
        "top": 12
      }
    },
    {
      "id": "aw-65",
      "title": "Кошачье семейство",
      "caption": "Тырныауз, Приэльбрусье",
      "img": "img/shop/aw-65.webp",
      "thumb": "img/shop/thumb/aw-65.webp",
      "w": 2925,
      "h": 2925,
      "tags": [],
      "back": "img/shop/back/aw-65.webp",
      "backL": "img/shop/back/aw-65-l.webp",
      "themes": [
        "animals"
      ],
      "region": "kavkaz",
      "aw": {
        "c": "Домашние животные с потомством",
        "top": 15
      }
    },
    {
      "id": "aw-66",
      "title": "Белый Бим Чёрное ухо",
      "caption": "Камчатка",
      "img": "img/shop/aw-66.webp",
      "thumb": "img/shop/thumb/aw-66.webp",
      "w": 2334,
      "h": 3500,
      "tags": [],
      "back": "img/shop/back/aw-66.webp",
      "backL": "img/shop/back/aw-66-l.webp",
      "themes": [
        "animals"
      ],
      "region": "kamchatka",
      "aw": {
        "c": "Собаки",
        "top": 15
      }
    },
    {
      "id": "aw-67",
      "title": "Утро в Приэльбрусье",
      "caption": "Тырныауз, Приэльбрусье",
      "img": "img/shop/aw-67.webp",
      "thumb": "img/shop/thumb/aw-67.webp",
      "w": 3500,
      "h": 2334,
      "tags": [],
      "back": "img/shop/back/aw-67.webp",
      "backL": "img/shop/back/aw-67-l.webp",
      "themes": [
        "animals",
        "village"
      ],
      "region": "kavkaz",
      "aw": {
        "c": "Домашние животные с потомством",
        "top": 20
      }
    },
    {
      "id": "aw-68",
      "title": "Дворовые кошки",
      "caption": "Тырныауз, Приэльбрусье",
      "img": "img/shop/aw-68.webp",
      "thumb": "img/shop/thumb/aw-68.webp",
      "w": 6000,
      "h": 4000,
      "tags": [],
      "back": "img/shop/back/aw-68.webp",
      "backL": "img/shop/back/aw-68-l.webp",
      "themes": [
        "animals"
      ],
      "region": "kavkaz",
      "aw": {
        "c": "Кошки",
        "top": 20
      }
    },
    {
      "id": "aw-69",
      "title": "Трое у забора",
      "caption": "Тырныауз, Приэльбрусье",
      "img": "img/shop/aw-69.webp",
      "thumb": "img/shop/thumb/aw-69.webp",
      "w": 5463,
      "h": 3642,
      "tags": [],
      "back": "img/shop/back/aw-69.webp",
      "backL": "img/shop/back/aw-69-l.webp",
      "themes": [
        "animals"
      ],
      "region": "kavkaz",
      "aw": {
        "c": "Кошки",
        "top": 22
      }
    },
    {
      "id": "aw-70",
      "title": "Взгляд",
      "caption": "Тырныауз, Приэльбрусье",
      "img": "img/shop/aw-70.webp",
      "thumb": "img/shop/thumb/aw-70.webp",
      "w": 6000,
      "h": 4000,
      "tags": [],
      "back": "img/shop/back/aw-70.webp",
      "backL": "img/shop/back/aw-70-l.webp",
      "themes": [
        "animals"
      ],
      "region": "kavkaz",
      "aw": {
        "c": "Кошки",
        "top": 25
      }
    },
    {
      "id": "aw-71",
      "title": "Дружба",
      "caption": "Тырныауз, Приэльбрусье",
      "img": "img/shop/aw-71.webp",
      "thumb": "img/shop/thumb/aw-71.webp",
      "w": 4029,
      "h": 2686,
      "tags": [],
      "back": "img/shop/back/aw-71.webp",
      "backL": "img/shop/back/aw-71-l.webp",
      "themes": [
        "animals"
      ],
      "region": "kavkaz",
      "aw": {
        "c": "Кошки",
        "top": 25
      }
    },
    {
      "id": "aw-72",
      "title": "Привет!",
      "caption": "Тырныауз, Приэльбрусье",
      "img": "img/shop/aw-72.webp",
      "thumb": "img/shop/thumb/aw-72.webp",
      "w": 6000,
      "h": 4000,
      "tags": [],
      "back": "img/shop/back/aw-72.webp",
      "backL": "img/shop/back/aw-72-l.webp",
      "themes": [
        "animals"
      ],
      "region": "kavkaz",
      "aw": {
        "c": "Кошки",
        "top": 26
      }
    },
    {
      "id": "aw-73",
      "title": "Жара в городе",
      "caption": "Томск",
      "img": "img/shop/aw-73.webp",
      "thumb": "img/shop/thumb/aw-73.webp",
      "w": 3500,
      "h": 2500,
      "tags": [
        "city"
      ],
      "back": "img/shop/back/aw-73.webp",
      "backL": "img/shop/back/aw-73-l.webp",
      "themes": [
        "animals",
        "city"
      ],
      "region": "tomsk",
      "aw": {
        "c": "Птицы в городе",
        "top": 4
      }
    },
    {
      "id": "aw-74",
      "title": "Воробей у фонтана",
      "caption": "Томск",
      "img": "img/shop/aw-74.webp",
      "thumb": "img/shop/thumb/aw-74.webp",
      "w": 3500,
      "h": 2500,
      "tags": [
        "city"
      ],
      "back": "img/shop/back/aw-74.webp",
      "backL": "img/shop/back/aw-74-l.webp",
      "themes": [
        "animals",
        "city"
      ],
      "region": "tomsk",
      "aw": {
        "c": "Птицы в городе",
        "top": 8
      }
    },
    {
      "id": "aw-75",
      "title": "Гало над Невой",
      "caption": "Санкт-Петербург",
      "img": "img/shop/aw-75.webp",
      "thumb": "img/shop/thumb/aw-75.webp",
      "w": 3500,
      "h": 2333,
      "tags": [],
      "back": "img/shop/back/aw-75.webp",
      "backL": "img/shop/back/aw-75-l.webp",
      "themes": [
        "animals",
        "winter",
        "water"
      ],
      "region": "spb",
      "aw": {
        "c": "Птицы в городе",
        "top": 13
      }
    },
    {
      "id": "aw-76",
      "title": "Голубь под мостом",
      "caption": "Санкт-Петербург",
      "img": "img/shop/aw-76.webp",
      "thumb": "img/shop/thumb/aw-76.webp",
      "w": 3500,
      "h": 2333,
      "tags": [
        "city"
      ],
      "back": "img/shop/back/aw-76.webp",
      "backL": "img/shop/back/aw-76-l.webp",
      "themes": [
        "animals",
        "city"
      ],
      "region": "spb",
      "aw": {
        "c": "Птицы в городе",
        "top": 15
      }
    },
    {
      "id": "aw-77",
      "title": "На взлёт!",
      "caption": "Серов",
      "img": "img/shop/aw-77.webp",
      "thumb": "img/shop/thumb/aw-77.webp",
      "w": 3500,
      "h": 2500,
      "tags": [
        "city"
      ],
      "back": "img/shop/back/aw-77.webp",
      "backL": "img/shop/back/aw-77-l.webp",
      "themes": [
        "animals",
        "city"
      ],
      "region": "ural",
      "aw": {
        "c": "Птицы в городе",
        "top": 19
      }
    },
    {
      "id": "aw-78",
      "title": "Река сверху",
      "caption": "Камчатка",
      "img": "img/shop/aw-78.webp",
      "thumb": "img/shop/thumb/aw-78.webp",
      "w": 3500,
      "h": 2625,
      "tags": [],
      "back": "img/shop/back/aw-78.webp",
      "backL": "img/shop/back/aw-78-l.webp",
      "themes": [
        "winter",
        "water"
      ],
      "region": "kamchatka",
      "aw": {
        "c": "Деревья",
        "top": 6
      }
    },
    {
      "id": "aw-79",
      "title": "Деревня зимой",
      "caption": "Верхотурье",
      "img": "img/shop/aw-79.webp",
      "thumb": "img/shop/thumb/aw-79.webp",
      "w": 3500,
      "h": 1233,
      "tags": [],
      "back": "img/shop/back/aw-79.webp",
      "backL": "img/shop/back/aw-79-l.webp",
      "themes": [
        "winter",
        "village"
      ],
      "region": "ural",
      "aw": {
        "c": "Деревенский пейзаж",
        "top": 13
      }
    },
    {
      "id": "aw-80",
      "title": "Росток в трещине",
      "caption": "Тырныауз, Приэльбрусье",
      "img": "img/shop/aw-80.webp",
      "thumb": "img/shop/thumb/aw-80.webp",
      "w": 3500,
      "h": 2333,
      "tags": [],
      "back": "img/shop/back/aw-80.webp",
      "backL": "img/shop/back/aw-80-l.webp",
      "themes": [
        "macro"
      ],
      "region": "kavkaz",
      "aw": {
        "c": "Концептуальный кадр без обработки",
        "top": 25
      }
    },
    {
      "id": "aw-81",
      "title": "Кроссовки на проводе",
      "caption": "Серов",
      "img": "img/shop/aw-81.webp",
      "thumb": "img/shop/thumb/aw-81.webp",
      "w": 6955,
      "h": 4637,
      "tags": [
        "city"
      ],
      "back": "img/shop/back/aw-81.webp",
      "backL": "img/shop/back/aw-81-l.webp",
      "themes": [
        "city"
      ],
      "region": "ural",
      "aw": {
        "c": "Концептуальный кадр без обработки",
        "top": 27
      }
    },
    {
      "id": "aw-82",
      "title": "Тропа на водопад Терскол",
      "caption": "Терскол, Приэльбрусье",
      "img": "img/shop/aw-82.webp",
      "thumb": "img/shop/thumb/aw-82.webp",
      "w": 3500,
      "h": 2216,
      "tags": [],
      "back": "img/shop/back/aw-82.webp",
      "backL": "img/shop/back/aw-82-l.webp",
      "themes": [
        "mountains"
      ],
      "region": "kavkaz",
      "aw": {
        "c": "Человек и пейзаж",
        "top": 18
      }
    },
    {
      "id": "aw-83",
      "title": "Путник на гряде",
      "caption": "Колмозеро, Кольский полуостров",
      "img": "img/shop/aw-83.webp",
      "thumb": "img/shop/thumb/aw-83.webp",
      "w": 6000,
      "h": 4000,
      "tags": [],
      "back": "img/shop/back/aw-83.webp",
      "backL": "img/shop/back/aw-83-l.webp",
      "themes": [
        "sky"
      ],
      "region": "kola",
      "aw": {
        "c": "Путешественники",
        "top": 22
      }
    },
    {
      "id": "aw-84",
      "title": "По снегу",
      "caption": "Колмозеро, Кольский полуостров",
      "img": "img/shop/aw-84.webp",
      "thumb": "img/shop/thumb/aw-84.webp",
      "w": 3500,
      "h": 2333,
      "tags": [],
      "back": "img/shop/back/aw-84.webp",
      "backL": "img/shop/back/aw-84-l.webp",
      "themes": [
        "winter"
      ],
      "region": "kola",
      "aw": {
        "c": "Человек и пейзаж",
        "top": 25
      }
    },
    {
      "id": "aw-85",
      "title": "Привал с лошадьми",
      "caption": "Тырныауз, Приэльбрусье",
      "img": "img/shop/aw-85.webp",
      "thumb": "img/shop/thumb/aw-85.webp",
      "w": 3500,
      "h": 2333,
      "tags": [],
      "back": "img/shop/back/aw-85.webp",
      "backL": "img/shop/back/aw-85-l.webp",
      "themes": [
        "mountains",
        "animals"
      ],
      "region": "kavkaz",
      "aw": {
        "c": "Путешественники",
        "top": 25
      }
    },
    {
      "id": "aw-86",
      "title": "Подъём на Чегет",
      "caption": "Чегет, Приэльбрусье",
      "img": "img/shop/aw-86.webp",
      "thumb": "img/shop/thumb/aw-86.webp",
      "w": 3500,
      "h": 2333,
      "tags": [],
      "back": "img/shop/back/aw-86.webp",
      "backL": "img/shop/back/aw-86-l.webp",
      "themes": [
        "mountains"
      ],
      "region": "kavkaz",
      "aw": {
        "c": "Путешественники",
        "top": 29
      }
    },
    {
      "id": "aw-87",
      "title": "Пожар на горе",
      "caption": "Тырныауз, Приэльбрусье",
      "img": "img/shop/aw-87.webp",
      "thumb": "img/shop/thumb/aw-87.webp",
      "w": 3500,
      "h": 2333,
      "tags": [],
      "back": "img/shop/back/aw-87.webp",
      "backL": "img/shop/back/aw-87-l.webp",
      "themes": [
        "mountains",
        "sky"
      ],
      "region": "kavkaz",
      "aw": {
        "c": "Стихийные бедствия",
        "best": true
      }
    },
    {
      "id": "aw-88",
      "title": "Детская железная дорога",
      "caption": "Заельцовский парк, Новосибирск",
      "img": "img/shop/aw-88.webp",
      "thumb": "img/shop/thumb/aw-88.webp",
      "w": 7000,
      "h": 4667,
      "tags": [],
      "back": "img/shop/back/aw-88.webp",
      "backL": "img/shop/back/aw-88-l.webp",
      "themes": [
        "autumn",
        "winter",
        "forest"
      ],
      "region": "novosibirsk",
      "aw": {
        "c": "Городские парки",
        "top": 13
      }
    },
    {
      "id": "aw-92",
      "title": "Пастбище в горах",
      "caption": "Тырныауз, Приэльбрусье",
      "img": "img/shop/aw-92.webp",
      "thumb": "img/shop/thumb/aw-92.webp",
      "w": 3500,
      "h": 2333,
      "tags": [],
      "back": "img/shop/back/aw-92.webp",
      "backL": "img/shop/back/aw-92-l.webp",
      "themes": [
        "winter",
        "mountains",
        "animals"
      ],
      "region": "kavkaz",
      "aw": {
        "c": "Первый снег",
        "top": 25
      }
    },
    {
      "id": "aw-93",
      "title": "Метель",
      "caption": "Санкт-Петербург",
      "img": "img/shop/aw-93.webp",
      "thumb": "img/shop/thumb/aw-93.webp",
      "w": 3500,
      "h": 2333,
      "tags": [
        "city"
      ],
      "back": "img/shop/back/aw-93.webp",
      "backL": "img/shop/back/aw-93-l.webp",
      "themes": [
        "winter",
        "city"
      ],
      "region": "spb",
      "aw": {
        "c": "Первый снег",
        "top": 32
      }
    }
  ],
  "delivery": {
    "from": {
      "city": "Санкт-Петербург",
      "postal_code": "191186",
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
        "lead": "До отделения Почты: выберите на карте или введите индекс",
        "widgetId": 63945,
        "_widgetNote": "Виджет widget.pochta.ru: callback fotonervPochta, стоимость и сроки в нём выключены — цену считает сайт (письма для открыток, коробка для большого числа открыток — посылкой, посылки для отпечатков). officesUrl — запасная ссылка, если убрать widgetId.",
        "officesUrl": "https://www.pochta.ru/offices",
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
}/*JSON-END*/;
