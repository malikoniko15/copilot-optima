import { supabase } from './supabaseClient'
import { mockEmployees } from '../data/mockEmployees'
import type { Employee } from '../data/types'

/**
 * Единая точка входа за данными сотрудников.
 * — Если Supabase подключён (заполнен .env) — читает из таблицы `employees`.
 * — Если нет — отдаёт моковые данные, чтобы интерфейс работал сразу после npm install.
 *
 * Компоненты (Dashboard.tsx и др.) ничего не знают об источнике данных —
 * это и есть смысл слоя: подключить реальную базу можно, не трогая UI.
 */
export async function fetchEmployees(): Promise<Employee[]> {
  if (!supabase) {
    return mockEmployees
  }

  const { data, error } = await supabase
    .from('employees')
    .select('id, name, email, department, tool, sessions_this_week, last_active_at')

  if (error) {
    console.error('Supabase error, falling back to mock data:', error.message)
    return mockEmployees
  }

  return (data ?? []).map((row) => ({
    id: row.id,
    name: row.name,
    email: row.email,
    department: row.department,
    tool: row.tool,
    sessionsThisWeek: row.sessions_this_week ?? 0,
    lastActiveAt: row.last_active_at,
  }))
}

export const isUsingRealDatabase = Boolean(supabase)
