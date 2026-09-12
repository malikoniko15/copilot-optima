const steps = [
  { n: '1', title: 'Подключите инструменты', text: 'GitHub Copilot, ChatGPT Enterprise, Notion AI и другие — за пару минут' },
  { n: '2', title: 'Радар считает активность', text: 'Реальные сессии и запросы, а не факт наличия лицензии' },
  { n: '3', title: 'Экономьте на подписках', text: 'Отчёт о том, кому лицензия нужна, а кому — нет' },
] as const

export default function Steps() {
  return (
    <section className="steps" id="steps">
      {steps.map((s) => (
        <div className="step" key={s.n}>
          <div className="n">{s.n}</div>
          <h4>{s.title}</h4>
          <p>{s.text}</p>
        </div>
      ))}
    </section>
  )
}
