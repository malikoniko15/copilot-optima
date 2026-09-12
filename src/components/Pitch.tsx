const points = [
  {
    title: 'Модель',
    text: '20% от суммы, которую компания реально сэкономила в первый квартал — считаем не за подписку, а за результат.',
  },
  {
    title: 'Почему не общий SaaS-трекер',
    text: 'Zylo, Productiv и Torii считают весь SaaS. Мы — только ИИ-инструменты, потому что именно там сейчас самый быстрый рост бесполезных трат: компании покупают лицензии пачками, ещё не умея их контролировать.',
  },
]

export default function Pitch() {
  return (
    <section className="section">
      <div className="wrap">
        <div className="section-head">
          <h2>Коротко для питча</h2>
        </div>
        <div className="pitch-grid">
          {points.map((p) => (
            <div className="pitch-card" key={p.title}>
              <h3>{p.title}</h3>
              <p>{p.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
