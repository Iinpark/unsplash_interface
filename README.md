# 🔗[Resplash](https://iinpark.github.io/unsplash_interface/#/")  - тестовое задание для Ракетной Фирмы

## Задача: Создать интерфейс фотостока на основе API Unsplash.

В интерфейсе должны присутствовать:
- [x] Главная страница со списком
- [x] Поиск
- [x] История поиска на отдельных страницах
- [x] Страница фотографии


## Решение

##### В качестве фреймворков использованы React и Redux. 

- **Главная страница** состоит из карточек с картинками. Сюда подгружаются фотографии из API Unsplash. Реализована бесконечная прокрутка. 

- **Карточка с картинкой**. При наведении мышки на Карточку появляется оверлей с кнопками. Здесь можно добавить картинку в Избранное, тогда информация о картинке сохранится в память устройства. Благодаря этому избранные картинки сохраняются даже после перезагрузки страницы, или после закрытия браузера. Также можно скачать картинку, или перейти на её страницу

- **Поиск**. Помимо поиска картинок, здесь есть история поиска. При нажатии на ключевое слово происходит поиск.

- **Страница фотографии**. Здесь можено просмотреть фото в увеличенном разрешении, добавить в Избранное, или скачать