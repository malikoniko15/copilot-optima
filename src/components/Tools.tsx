const tools = ['GitHub Copilot', 'ChatGPT Enterprise', 'Notion AI', 'Gemini']

export default function Tools() {
  return (
    <section className="section">
      <div className="wrap">
        <div className="section-head">
          <h2>Инструменты, которые мы отслеживаем</h2>
        </div>
        <div className="cats">
          {tools.map((t) => (
            <div className="cat" key={t}>{t}</div>
          ))}
        </div>
      </div>
    </section>
  )
}
