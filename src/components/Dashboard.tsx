import { useEffect, useMemo, useState } from 'react'
import { fetchEmployees, isUsingRealDatabase } from '../lib/dataService'
import { TOOL_LABELS, isActive, type Employee } from '../data/types'
import { TOOL_PRICE_USD } from '../data/pricing'

type StatusFilter = 'all' | 'active' | 'inactive'
type SortDir = 'asc' | 'desc'

function formatDate(iso: string | null) {
  if (!iso) return 'никогда'
  const d = new Date(iso)
  return d.toLocaleDateString('ru-RU', { day: '2-digit', month: 'short' })
}

function formatUsd(n: number) {
  return `$${n.toLocaleString('en-US', { maximumFractionDigits: 0 })}`
}

export default function Dashboard() {
  const [employees, setEmployees] = useState<Employee[]>([])
  const [loading, setLoading] = useState(true)
  const [query, setQuery] = useState('')
  const [status, setStatus] = useState<StatusFilter>('all')
  const [sortDir, setSortDir] = useState<SortDir>('desc')

  useEffect(() => {
    let cancelled = false
    fetchEmployees().then((data) => {
      if (!cancelled) {
        setEmployees(data)
        setLoading(false)
      }
    })
    return () => {
      cancelled = true
    }
  }, [])

  const activeCount = useMemo(() => employees.filter(isActive).length, [employees])
  const total = employees.length

  // Калькулятор экономии: сколько стоят все купленные места сейчас
  // и сколько можно сэкономить в месяц/год, если оставить только активные.
  const savings = useMemo(() => {
    const totalMonthly = employees.reduce((sum, e) => sum + TOOL_PRICE_USD[e.tool], 0)
    const wastedMonthly = employees
      .filter((e) => !isActive(e))
      .reduce((sum, e) => sum + TOOL_PRICE_USD[e.tool], 0)
    return {
      totalMonthly,
      wastedMonthly,
      wastedYearly: wastedMonthly * 12,
    }
  }, [employees])

  const filtered = useMemo(() => {
    let rows = employees.filter((e) => {
      const matchesQuery =
        query.trim() === '' ||
        e.name.toLowerCase().includes(query.toLowerCase()) ||
        e.department.toLowerCase().includes(query.toLowerCase())
      const matchesStatus =
        status === 'all' || (status === 'active' ? isActive(e) : !isActive(e))
      return matchesQuery && matchesStatus
    })

    rows = rows.sort((a, b) =>
      sortDir === 'desc' ? b.sessionsThisWeek - a.sessionsThisWeek : a.sessionsThisWeek - b.sessionsThisWeek
    )

    return rows
  }, [employees, query, status, sortDir])

  return (
    <section className="dashboard" id="dashboard">
      <div className="wrap">
        <div className="section-head">
          <div>
            <h2>
              Активны <em>{activeCount}</em> из {total}
            </h2>
            <p className="dash-sub">
              {isUsingRealDatabase
                ? 'Данные из вашей базы Supabase'
                : 'Демо-данные — подключите базу в .env, см. README'}
            </p>
          </div>
          <div className="dash-controls">
            <input
              className="dash-search"
              type="text"
              placeholder="Поиск по имени или отделу…"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
            <div className="dash-tabs">
              <button className={status === 'all' ? 'active' : ''} onClick={() => setStatus('all')}>Все</button>
              <button className={status === 'active' ? 'active' : ''} onClick={() => setStatus('active')}>Активные</button>
              <button className={status === 'inactive' ? 'active' : ''} onClick={() => setStatus('inactive')}>Неактивные</button>
            </div>
          </div>
        </div>

        <div className="savings-row">
          <div className="savings-card">
            <span className="savings-label">Платите за все места</span>
            <span className="savings-value">{formatUsd(savings.totalMonthly)}<span className="savings-unit">/мес</span></span>
          </div>
          <div className="savings-card savings-card--accent">
            <span className="savings-label">Уходит впустую</span>
            <span className="savings-value">{formatUsd(savings.wastedMonthly)}<span className="savings-unit">/мес</span></span>
          </div>
          <div className="savings-card savings-card--dark">
            <span className="savings-label">Можно вернуть за год</span>
            <span className="savings-value">{formatUsd(savings.wastedYearly)}</span>
          </div>
        </div>
        <p className="privacy-note">
          Мы считаем сессии и дату последней активности инструмента — не читаем переписку, промпты и содержание работы.
          Цены в калькуляторе — ориентировочные (см. <code>src/data/pricing.ts</code>).
        </p>

        <div className="dash-table-wrap">
          <table className="dash-table">
            <thead>
              <tr>
                <th>Сотрудник</th>
                <th>Отдел</th>
                <th>Инструмент</th>
                <th
                  className="sortable"
                  onClick={() => setSortDir((d) => (d === 'desc' ? 'asc' : 'desc'))}
                >
                  Сессий за неделю {sortDir === 'desc' ? '↓' : '↑'}
                </th>
                <th>Последний раз</th>
                <th>Статус</th>
              </tr>
            </thead>
            <tbody>
              {loading && (
                <tr>
                  <td colSpan={6} className="dash-empty">Загрузка…</td>
                </tr>
              )}
              {!loading && filtered.length === 0 && (
                <tr>
                  <td colSpan={6} className="dash-empty">Никого не нашли — измените фильтр или поиск</td>
                </tr>
              )}
              {!loading &&
                filtered.map((e) => (
                  <tr key={e.id}>
                    <td>
                      <div className="dash-person">
                        <span className="dash-name">{e.name}</span>
                        <span className="dash-email">{e.email}</span>
                      </div>
                    </td>
                    <td>{e.department}</td>
                    <td>{TOOL_LABELS[e.tool]}</td>
                    <td className="dash-num">{e.sessionsThisWeek}</td>
                    <td>{formatDate(e.lastActiveAt)}</td>
                    <td>
                      <span className={`badge ${isActive(e) ? 'badge--active' : 'badge--idle'}`}>
                        {isActive(e) ? 'активен' : 'не активен'}
                      </span>
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  )
}
