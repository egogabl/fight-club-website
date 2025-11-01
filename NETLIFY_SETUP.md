# Инструкция по настройке Netlify

## Проблема: "Your publish directory cannot be the same as the base directory"

Эта ошибка возникает когда в Netlify UI установлен Publish directory = корень репозитория.

## Решение:

### Шаг 1: Откройте Netlify Dashboard
1. Перейдите на https://app.netlify.com
2. Выберите ваш сайт

### Шаг 2: Измените Build settings
1. Site settings → Build & deploy → Continuous Deployment → Build settings
2. Нажмите "Edit settings"
3. Найдите поле **"Publish directory"**
4. **ОЧИСТИТЕ ПОЛЕ** (оставьте пустым) или установите: `.netlify/output/public`
5. Сохраните изменения

### Шаг 3: Запустите новый деплой
После изменения настроек Netlify автоматически запустит новый деплой, или вы можете запустить вручную через "Trigger deploy"

## Важно:
- Плагин `@netlify/plugin-nextjs` автоматически управляет publish directory
- Не устанавливайте publish = корень репозитория в UI
- Если publish пустой в UI, плагин установит правильную директорию автоматически

## Альтернатива:
Если в UI нельзя очистить поле, установите:
```
Publish directory: .netlify/output/public
```

