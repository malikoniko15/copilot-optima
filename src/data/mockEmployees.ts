import type { Employee } from './types'

// Моковые данные — используются, пока не подключён Supabase (см. src/lib/supabaseClient.ts и README).
// Структура полей совпадает со схемой таблицы `employees` в Supabase,
// поэтому переход на реальную базу не потребует менять компоненты.
export const mockEmployees: Employee[] = [
  { id: '1', name: 'Айгерим Сатова', email: 'a.satova@company.kz', department: 'Продукт', tool: 'github_copilot', sessionsThisWeek: 34, lastActiveAt: '2026-08-15' },
  { id: '2', name: 'Данияр Ким', email: 'd.kim@company.kz', department: 'Разработка', tool: 'github_copilot', sessionsThisWeek: 51, lastActiveAt: '2026-08-16' },
  { id: '3', name: 'Мария Волкова', email: 'm.volkova@company.kz', department: 'Разработка', tool: 'github_copilot', sessionsThisWeek: 0, lastActiveAt: '2026-06-02' },
  { id: '4', name: 'Ержан Абенов', email: 'e.abenov@company.kz', department: 'Маркетинг', tool: 'chatgpt_enterprise', sessionsThisWeek: 12, lastActiveAt: '2026-08-14' },
  { id: '5', name: 'Светлана Ли', email: 's.li@company.kz', department: 'Маркетинг', tool: 'chatgpt_enterprise', sessionsThisWeek: 0, lastActiveAt: '2026-05-20' },
  { id: '6', name: 'Тимур Жаксыбеков', email: 't.zhaksybekov@company.kz', department: 'Продажи', tool: 'chatgpt_enterprise', sessionsThisWeek: 0, lastActiveAt: null },
  { id: '7', name: 'Полина Ким', email: 'p.kim@company.kz', department: 'HR', tool: 'notion_ai', sessionsThisWeek: 6, lastActiveAt: '2026-08-13' },
  { id: '8', name: 'Асель Нурланова', email: 'a.nurlanova@company.kz', department: 'HR', tool: 'notion_ai', sessionsThisWeek: 0, lastActiveAt: '2026-04-11' },
  { id: '9', name: 'Иван Петров', email: 'i.petrov@company.kz', department: 'Разработка', tool: 'gemini', sessionsThisWeek: 3, lastActiveAt: '2026-08-10' },
  { id: '10', name: 'Гульнара Осипова', email: 'g.osipova@company.kz', department: 'Финансы', tool: 'gemini', sessionsThisWeek: 0, lastActiveAt: null },
  { id: '11', name: 'Артём Соколов', email: 'a.sokolov@company.kz', department: 'Продукт', tool: 'chatgpt_enterprise', sessionsThisWeek: 8, lastActiveAt: '2026-08-15' },
  { id: '12', name: 'Дина Рахимова', email: 'd.rahimova@company.kz', department: 'Финансы', tool: 'notion_ai', sessionsThisWeek: 0, lastActiveAt: '2026-07-01' },
]
