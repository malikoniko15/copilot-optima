export type Tool = 'github_copilot' | 'chatgpt_enterprise' | 'notion_ai' | 'gemini'

export interface Employee {
  id: string
  name: string
  email: string
  department: string
  tool: Tool
  sessionsThisWeek: number
  lastActiveAt: string | null // ISO date, null = никогда не использовал
}

export const TOOL_LABELS: Record<Tool, string> = {
  github_copilot: 'GitHub Copilot',
  chatgpt_enterprise: 'ChatGPT Enterprise',
  notion_ai: 'Notion AI',
  gemini: 'Gemini',
}

export function isActive(emp: Employee): boolean {
  return emp.sessionsThisWeek > 0
}
