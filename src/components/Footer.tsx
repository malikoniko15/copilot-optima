export default function Footer() {
  return (
    <footer id="contacts">
      <div className="wrap">
        <div className="foot-top">
          <div>
            <div className="foot-brand">Copilot Optima</div>
            <p className="foot-lede">Свяжитесь с нами, если хотите понять, сколько вы теряете на неиспользуемых ИИ-подписках.</p>
            <div className="socials">
              <a className="social" href="#" aria-label="Telegram">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#2A1F17" strokeWidth="1.8"><path d="M21 4 3 11l6 2 2 6 3-4 5 4 2-15Z" /></svg>
              </a>
              <a className="social" href="#" aria-label="LinkedIn">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#2A1F17" strokeWidth="1.8"><rect x="3" y="3" width="18" height="18" rx="4" /><path d="M8 10v7M8 7v.01M12 17v-4.5a2 2 0 0 1 4 0V17" /></svg>
              </a>
              <a className="social" href="#" aria-label="Mail">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#2A1F17" strokeWidth="1.8"><rect x="3" y="5" width="18" height="14" rx="3" /><path d="m4 7 8 6 8-6" /></svg>
              </a>
            </div>
          </div>
          <div>
            <p className="foot-heading">Навигация</p>
            <div className="foot-list">
              <a href="#top">Главная</a>
              <a href="#dashboard">Дашборд</a>
              <a href="#steps">Как это работает</a>
            </div>
          </div>
          <div>
            <p className="foot-heading">Контакты</p>
            <div className="foot-list">
              <a href="tel:+70000000000">+7 (000) 000-00-00</a>
              <a href="mailto:hello@copilot-optima.com">hello@copilot-optima.com</a>
              <span>Удалённая команда</span>
            </div>
          </div>
        </div>
        <div className="foot-bottom">
          <span>© 2026 Copilot Optima</span>
          <span>кто из команды реально летает на ИИ</span>
        </div>
      </div>
    </footer>
  )
}
