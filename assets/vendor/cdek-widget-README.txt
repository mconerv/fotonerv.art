Виджет ПВЗ СДЭК — @cdek-it/widget 4.1.0 (https://github.com/cdek-it/widget), лицензия LGPL-3.0 (cdek-widget-LICENSE.txt).
Изменение: ссылки на шрифты fonts.gstatic.com в @font-face заменены на local("Arial"),
чтобы при открытии карты браузер не обращался к Google Fonts. Остальной код — без изменений.
Повторить: взять dist/cdek-widget.umd.js из npm-пакета и заменить url(https://fonts.gstatic.com/...) на local("Arial").
