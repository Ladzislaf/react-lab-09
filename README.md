# project

## Задание 1

Продолжите разработку компонента SortTable. 
Компонент должен содержать следующие обязательные поля:

- Наименование (Название);
- Стоимость;
- Количество;
- Изображение;
- Описание;
- Новинка (значение Да/Нет);
- Скидка (значение в процентах).

В пункте «Изображение» выводите миниатюру изображения, а не его полную версию. Реализуйте возможность сортировки по наименованию, стоимости, количеству, скидке.

Разработайте компонент товара Сatalog для отображения элементов из списка SortTable в виде каталога интернет-магазина. Компонент должен выводить всю информацию о каждом товаре из компонента SortTable. Реализуйте возможность сортировки по тем же критериям, что и в компоненте SortTable (по наименованию, стоимости, количеству, скидке).

При наличии скидки на товар выведите стоимость со скидкой и его полную стоимость. Если товар является новинкой, выведите информацию об этом в компоненте. Товары-новинки, независимо от типа сортировки, должны быть отображены первыми.