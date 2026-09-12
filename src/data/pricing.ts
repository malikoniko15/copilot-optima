import type { Tool } from './types'

// Ориентировочная стоимость одного места в месяц, USD.
// Это публичные ballpark-цены enterprise-тарифов на 2026 год — подставьте
// реальные цифры из своих контрактов, когда будете считать точную экономию.
export const TOOL_PRICE_USD: Record<Tool, number> = {
  github_copilot: 19,
  chatgpt_enterprise: 30,
  notion_ai: 10,
  gemini: 20,
}
