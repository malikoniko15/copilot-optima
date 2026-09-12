import { createClient, SupabaseClient } from '@supabase/supabase-js'

const url = import.meta.env.VITE_SUPABASE_URL as string | undefined
const key = import.meta.env.VITE_SUPABASE_ANON_KEY as string | undefined

// Если .env не заполнен — supabase будет null, и dataService автоматически
// продолжит отдавать моковые данные из src/data/mockEmployees.ts.
export const supabase: SupabaseClient | null = url && key ? createClient(url, key) : null
