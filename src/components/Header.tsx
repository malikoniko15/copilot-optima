import { useState } from 'react'

export default function Header() {
  const [open, setOpen] = useState(false)

  return (
    <header className="header">
      <div className="wrap header__row">
        <a href="#top" className="logo">Copilot Optima</a>

        <nav className={`nav ${open ? 'nav--open' : ''}`}>
          <a href="#dashboard" onClick={() => setOpen(false)}>Дашборд</a>
          <a href="#steps" onClick={() => setOpen(false)}>Как это работает</a>
          <a href="#story" onClick={() => setOpen(false)}>О проекте</a>
          <a href="#dashboard" className="btn btn--primary btn--sm nav__cta" onClick={() => setOpen(false)}>
            Смотреть радар
          </a>
        </nav>

        <a href="#dashboard" className="btn btn--primary btn--sm header__cta">Смотреть радар</a>

        <button className={`burger ${open ? 'burger--open' : ''}`} aria-label="Открыть меню" onClick={() => setOpen((o) => !o)}>
          <span /><span /><span />
        </button>
      </div>
    </header>
  )
}
