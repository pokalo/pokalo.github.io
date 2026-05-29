const expertise = [
  {
    area: 'Разработка ПО',
    items: ['Архитектура приложений', 'Full-stack разработка', 'API (REST/GraphQL)', 'Интеграция систем'],
  },
  {
    area: 'Инфраструктура',
    items: ['Linux/Windows серверы', 'Кластеризация', 'CI/CD', 'Docker / контейнеризация'],
  },
  {
    area: 'Управление',
    items: ['Team Lead / Tech Lead', 'Построение процессов', 'Аудит и ревью', 'Менторство'],
  },
  {
    area: 'Сопровождение',
    items: ['Тестирование', 'Мониторинг', 'Оптимизация', '24/7 поддержка'],
  },
]

const services = [
  { title: 'Разработка', desc: 'Проектирую и разрабатываю ПО под ключ — от архитектуры до деплоя.' },
  { title: 'Настройка', desc: 'Настройка серверов, кластеров, окружений. Всё, что нужно для стабильной работы.' },
  { title: 'Тестирование', desc: 'Модульное, интеграционное, нагрузочное. Гарантия качества продукта.' },
  { title: 'Сопровождение', desc: 'Поддержка, мониторинг, обновления. Ваш продукт в надёжных руках.' },
  { title: 'Консультирование', desc: 'Аудит архитектуры, ревью кода, стратегия развития проекта.' },
  { title: 'Управление командами', desc: 'Организация процессов, контроль сроков, менторство разработчиков.' },
]

function App() {
  return (
    <div className="min-h-screen bg-[#0a0a0f] text-white">
      <nav className="fixed top-0 left-0 right-0 z-50 border-b border-white/5 bg-[#0a0a0f]/80 backdrop-blur-lg">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <span className="text-lg font-bold tracking-wider">
            PAVKRAFT<span className="text-cyan-400"> Labs</span>
          </span>
          <div className="hidden items-center gap-8 text-sm text-zinc-400 sm:flex">
            <a href="#about" className="transition-colors hover:text-white">Обо мне</a>
            <a href="#expertise" className="transition-colors hover:text-white">Компетенции</a>
            <a href="#services" className="transition-colors hover:text-white">Услуги</a>
            <a href="#contact" className="transition-colors hover:text-white">Контакты</a>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative flex min-h-screen items-center justify-center overflow-hidden px-6">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(6,182,212,0.15)_0%,_transparent_60%)]" />
        <div className="relative text-center">
          <div className="mb-4 text-sm font-medium uppercase tracking-widest text-zinc-500">
            Инженер-программист &middot; Инженер-архитектор
          </div>
          <h1 className="mb-4 text-5xl font-bold tracking-tight sm:text-7xl">
            PAVKRAFT
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent"> Labs</span>
          </h1>
          <p className="mx-auto mb-8 max-w-2xl text-lg text-zinc-400">
            Разработка, инфраструктура, управление командами.
            Проектирую и сопровождаю цифровые продукты от идеи до релиза.
          </p>
          <a
            href="#contact"
            className="inline-block rounded-full bg-cyan-500 px-8 py-3 text-sm font-semibold text-black transition-all hover:bg-cyan-400 hover:shadow-lg hover:shadow-cyan-500/25"
          >
            Связаться
          </a>
        </div>
      </section>

      {/* About */}
      <section id="about" className="border-t border-white/5 px-6 py-24">
        <div className="mx-auto max-w-4xl">
          <h2 className="mb-12 text-center text-3xl font-bold">
            / <span className="text-cyan-400">Обо мне</span>
          </h2>
          <div className="mx-auto mb-12 max-w-2xl text-center text-zinc-400 leading-relaxed">
            <p className="mb-4">
              Инженер-программист с образованием инженера-архитектора. За плечами — настройка и администрирование
              Windows и Linux серверов, кластерных систем, управление командами разработчиков.
            </p>
            <p>
              Объединяю системный подход архитектора с инженерной точностью программиста.
              Понимаю продукт целиком — от кода до инфраструктуры, от задачи до процесса.
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-2">
            {[
              { title: 'Программирование', desc: 'Проектирование и разработка приложений, API, интеграции. Современный стек, чистый код.' },
              { title: 'Инфраструктура', desc: 'Серверы, сети, кластеры, CI/CD, облачные решения. Надёжность и отказоустойчивость.' },
              { title: 'Архитектура систем', desc: 'Проектирование архитектуры ПО и распределённых систем с учётом масштабирования.' },
              { title: 'Управление', desc: 'Team Lead, организация процессов, контроль качества. Опыт руководства командами разработки.' },
            ].map((item) => (
              <div key={item.title} className="rounded-xl border border-white/5 bg-white/5 p-6 backdrop-blur-sm">
                <h3 className="mb-2 font-semibold text-cyan-400">{item.title}</h3>
                <p className="text-sm leading-relaxed text-zinc-400">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Expertise */}
      <section id="expertise" className="border-t border-white/5 bg-white/[0.01] px-6 py-24">
        <div className="mx-auto max-w-4xl">
          <h2 className="mb-12 text-center text-3xl font-bold">
            / <span className="text-cyan-400">Компетенции</span>
          </h2>
          <div className="grid gap-8 md:grid-cols-2">
            {expertise.map((group) => (
              <div key={group.area} className="rounded-xl border border-white/5 p-6">
                <h3 className="mb-4 text-lg font-semibold text-cyan-400">{group.area}</h3>
                <ul className="space-y-2">
                  {group.items.map((item) => (
                    <li key={item} className="flex items-center gap-3 text-sm text-zinc-400">
                      <span className="h-1.5 w-1.5 rounded-full bg-cyan-500" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="border-t border-white/5 px-6 py-24">
        <div className="mx-auto max-w-4xl">
          <h2 className="mb-12 text-center text-3xl font-bold">
            / <span className="text-cyan-400">Услуги</span>
          </h2>
          <div className="grid gap-6 md:grid-cols-2">
            {services.map((s) => (
              <div key={s.title} className="group rounded-xl border border-white/5 bg-white/[0.02] p-6 transition-all hover:border-cyan-500/30 hover:bg-white/[0.06]">
                <h3 className="mb-2 font-semibold group-hover:text-cyan-400">{s.title}</h3>
                <p className="text-sm leading-relaxed text-zinc-500">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="border-t border-white/5 px-6 py-24">
        <div className="mx-auto max-w-xl text-center">
          <h2 className="mb-4 text-3xl font-bold">
            / <span className="text-cyan-400">Контакты</span>
          </h2>
          <p className="mb-8 text-zinc-400">
            Открыт к предложениям. Пишите — обсудим ваш проект.
          </p>
          <a
            href="https://github.com/pokalo"
            target="_blank"
            className="inline-block rounded-full border border-white/10 px-8 py-3 text-sm font-medium transition-all hover:border-cyan-500/50 hover:text-cyan-400"
          >
            GitHub: pokalo
          </a>
        </div>
      </section>

      <footer className="border-t border-white/5 px-6 py-6 text-center text-sm text-zinc-600">
        &copy; {new Date().getFullYear()} PAVKRAFT Labs
      </footer>
    </div>
  )
}

export default App
