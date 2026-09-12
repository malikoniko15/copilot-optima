export default function Story() {
  return (
    <section className="story" id="story">
      <div className="wrap story-grid">
        <div>
          <h2>Почему мы за этим следим</h2>
          <p>Copilot Optima родилась из одной таблицы: HR-директор одной компании увидел, что из 40 купленных лицензий Copilot реально используются 11.</p>
          <p>Компании покупают ИИ-подписки пачками — потому что «все так делают». Но подписка сама по себе не повышает продуктивность. Её должен кто-то реально использовать.</p>
          <p>Мы показываем, кто именно летает на автопилоте, а кто просто занимает место в кабине — и сколько компания может сэкономить в следующем квартале.</p>
          <a href="#dashboard" className="pill-link">смотреть дашборд →</a>
        </div>
        <div className="story-art">
          <svg viewBox="0 0 400 330" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="storyGrad" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="#6B4226" />
                <stop offset="100%" stopColor="#3B2A1E" />
              </linearGradient>
            </defs>
            <rect width="400" height="330" fill="url(#storyGrad)" />
            <g fill="none" stroke="#F7F1E4" strokeWidth="1.4">
              <circle cx="200" cy="165" r="50" />
              <circle cx="200" cy="165" r="90" />
              <circle cx="200" cy="165" r="130" />
            </g>
            <line x1="200" y1="165" x2="200" y2="45" stroke="#E9B8C4" strokeWidth="2.5" />
            <g fill="#E9B8C4">
              <circle cx="230" cy="120" r="5" />
              <circle cx="170" cy="205" r="4" />
            </g>
            <g fill="#F7F1E4" opacity="0.45">
              <circle cx="280" cy="140" r="3.5" />
              <circle cx="130" cy="230" r="3.5" />
              <circle cx="300" cy="230" r="3" />
            </g>
          </svg>
        </div>
      </div>
    </section>
  )
}
