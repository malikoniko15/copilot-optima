# Copilot Optima — React

Кто из команды реально использует ИИ-подписки, а кто нет.

## Запуск локально

Нужен [Node.js](https://nodejs.org) 18+.

```bash
cd copilot-optima-react
npm install
npm run dev
```

Откроется на **http://localhost:5173**.

Сразу после установки дашборд работает на моковых данных
(`src/data/mockEmployees.ts`) — 12 сотрудников, чтобы сразу было видно
таблицу в деле. Ссылка «в радар →» на главной — это просто якорь
`#dashboard`, она скроллит к таблице на этой же странице, никуда не уводит.

---

## Как подключить настоящую базу данных

Самый быстрый вариант для MVP — **Supabase**: это Postgres с готовым
REST API из коробки, писать свой бэкенд не нужно. Бесплатного тарифа
достаточно для старта.

### 1. Создайте проект

Зайдите на [supabase.com](https://supabase.com) → New project.
Дождитесь, пока проект поднимется (1-2 минуты).

### 2. Создайте таблицу

В Supabase откройте **SQL Editor** → вставьте и выполните:

```sql
create table employees (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  email text not null,
  department text not null,
  tool text not null check (tool in ('github_copilot', 'chatgpt_enterprise', 'notion_ai', 'gemini')),
  sessions_this_week int not null default 0,
  last_active_at date,
  created_at timestamptz default now()
);

-- чтобы фронтенд мог читать таблицу анонимным ключом (для MVP/демо)
alter table employees enable row level security;
create policy "Public read access"
  on employees for select
  using (true);
```

Добавьте несколько строк для проверки:

```sql
insert into employees (name, email, department, tool, sessions_this_week, last_active_at) values
  ('Айгерим Сатова', 'a.satova@company.kz', 'Продукт', 'github_copilot', 34, '2026-08-15'),
  ('Мария Волкова', 'm.volkova@company.kz', 'Разработка', 'github_copilot', 0, '2026-06-02');
```

> В реальном проекте `sessions_this_week` и `last_active_at` должны
> обновляться автоматически — через вебхуки/API того инструмента,
> который вы отслеживаете (например, GitHub Copilot даёт usage-метрики
> через свой Admin API), или через ежедневную cron-задачу, которая
> дозаписывает данные в эту таблицу.

### 3. Возьмите ключи проекта

Supabase → Project Settings → API. Скопируйте:
- **Project URL**
- **anon public key**

### 4. Подключите к приложению

```bash
cp .env.example .env
```

Впишите в `.env`:

```
VITE_SUPABASE_URL=https://xxxxx.supabase.co
VITE_SUPABASE_ANON_KEY=eyJhbGciOi...
```

Перезапустите `npm run dev`. Дашборд сам переключится на реальные
данные — надпись под заголовком таблицы сменится на «Данные из вашей
базы Supabase». Логика переключения — в `src/lib/dataService.ts`,
компоненты UI при этом не меняются вообще.

### Если не хотите Supabase

Тот же слой `dataService.ts` можно переписать под любой другой
источник — свой Express + PostgreSQL API, Firebase Firestore и т.д.
Единственное требование — функция `fetchEmployees()` должна вернуть
массив объектов `Employee` (см. `src/data/types.ts`).

---

## Структура

```
src/
  components/
    Header.tsx
    Hero.tsx        — иллюстрация радара + заголовок
    Steps.tsx        — 3 шага
    Dashboard.tsx     — таблица сотрудников (поиск/фильтр/сортировка)
    Tools.tsx         — инструменты, которые отслеживаем
    Story.tsx         — о проекте
    Footer.tsx
  data/
    types.ts          — тип Employee, общий для мока и Supabase
    mockEmployees.ts   — демо-данные
  lib/
    supabaseClient.ts  — клиент Supabase (null, если .env пустой)
    dataService.ts      — единая точка получения данных
  index.css
  App.tsx
  main.tsx
```

## Палитра

| Переменная      | Hex       |
|-----------------|-----------|
| `--cream`       | `#F7F1E4` |
| `--cream-warm`  | `#F0E6D2` |
| `--pink`        | `#E9B8C4` |
| `--pink-deep`   | `#D68CA0` |
| `--brown-deep`  | `#3B2A1E` |
| `--brown-mid`   | `#6B4226` |
| `--ink`         | `#2A1F17` |

## Сборка

```bash
npm run build
npm run preview
```
