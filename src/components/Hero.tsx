export default function Hero() {
  return (
    <section className="hero" id="top">
      <div className="wrap">
        <div className="hero-card">
          <svg className="radar" viewBox="0 0 900 400" preserveAspectRatio="xMidYMid slice">
            <g fill="none" stroke="#F7F1E4" strokeWidth="1.5">
              <circle cx="450" cy="230" r="70" />
              <circle cx="450" cy="230" r="130" />
              <circle cx="450" cy="230" r="190" />
            </g>
            <line
              x1="450" y1="230" x2="450" y2="40"
              stroke="#E9B8C4" strokeWidth="2"
              className="sweep-line"
              style={{ transformBox: 'fill-box', transformOrigin: '450px 230px' }}
            />
            <g fill="#E9B8C4">
              <circle cx="480" cy="170" r="4" />
              <circle cx="410" cy="290" r="3" />
            </g>
            <g fill="#F7F1E4" opacity="0.4">
              <circle cx="560" cy="180" r="3" />
              <circle cx="330" cy="330" r="3" />
              <circle cx="600" cy="290" r="2.5" />
            </g>
          </svg>
          <h1>
            Компания платит за ИИ всей команде. Летает на нём — <em>не вся команда</em>
          </h1>
          <a href="#dashboard" className="hero-btn">в радар →</a>
        </div>
      </div>
    </section>
  )
}
