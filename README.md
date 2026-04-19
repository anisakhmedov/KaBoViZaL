# Pitch Day Demo Website

Статический сайт для этапа Pitch Day с обязательными разделами и отдельной страницей `/demo`.

## Структура

- `index.html` — главная страница с разделами 1-5
- `demo/index.html` — страница `/demo` с пунктами 6.1-6.3
- `assets/styles.css` — стили
- `assets/main.js` — интерактивный блок FAQ-чатбота

## Быстрый локальный запуск

Если установлен Node.js:

```bash
npx serve .
```

Откройте адрес из консоли (обычно `http://localhost:3000`).

## Публикация онлайн

### Вариант 1: Vercel (рекомендуется)

1. Загрузить проект в GitHub-репозиторий.
2. В Vercel нажать `Add New -> Project`.
3. Выбрать репозиторий.
4. Framework Preset: `Other`.
5. Deploy.

### Вариант 2: Netlify

1. Загрузить проект в GitHub.
2. В Netlify: `Add new site -> Import an existing project`.
3. Build command: пусто.
4. Publish directory: `.`
5. Deploy site.

### Вариант 3: GitHub Pages

1. Push в ветку `main`.
2. В репозитории: `Settings -> Pages`.
3. Source: `Deploy from a branch`, branch `main`, folder `/ (root)`.
4. Save.

## Что нужно заменить перед финальной сдачей

- В `demo/index.html` заменить ссылку в `<iframe>` на реальное демо-видео.
- В `demo/index.html` заменить ссылку `https://example.com/prototype` на рабочий прототип.
- В `index.html` обновить ссылки участников команды на реальные профили.
