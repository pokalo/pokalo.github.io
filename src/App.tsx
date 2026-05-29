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
    items: ['Тестирование', 'Мониторинг', 'Оптимизация', 'Поддержка'],
  },
  {
    area: 'Внедрение и обучение',
    items: ['Внедрение Open Source на предприятиях', 'Миграция на свободное ПО', 'Обучение сотрудников', 'Сопровождение перехода'],
  },
]

const services = [
  { title: 'Разработка', desc: 'Проектируем и разрабатываем ПО под ключ — от архитектуры до деплоя.' },
  { title: 'Настройка', desc: 'Настройка серверов, кластеров, окружений. Стабильность и отказоустойчивость.' },
  { title: 'Тестирование', desc: 'Модульное, интеграционное, нагрузочное. Гарантируем качество.' },
  { title: 'Сопровождение', desc: 'Поддержка, мониторинг, обновления. Ваш продукт в надёжных руках.' },
  { title: 'Консультирование', desc: 'Аудит архитектуры, ревью кода, стратегия развития.' },
  { title: 'Внедрение Open Source', desc: 'Переводим офисы и предприятия на свободное ПО. Подбор, миграция, настройка.' },
  { title: 'Обучение', desc: 'Курсы и воркшопы для сотрудников. Адаптация команды к новым инструментам.' },
  { title: 'Аутстафф', desc: 'Предоставляем разработчиков под ваши задачи с контролем качества.' },
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
            <a href="#team" className="transition-colors hover:text-white">Команда</a>
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
          <h1 className="mb-4 text-5xl font-bold tracking-tight sm:text-7xl">
            PAVKRAFT
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent"> Labs</span>
          </h1>
          <p className="mx-auto mb-2 max-w-2xl text-lg text-zinc-400">
            Команда разработчиков под руководством опытного инженера и лида.
          </p>
          <p className="mx-auto mb-8 max-w-xl text-sm text-zinc-500">
            Разработка &middot; Инфраструктура &middot; Внедрение &middot; Обучение
          </p>
          <a
            href="#contact"
            className="inline-block rounded-full bg-cyan-500 px-8 py-3 text-sm font-semibold text-black transition-all hover:bg-cyan-400 hover:shadow-lg hover:shadow-cyan-500/25"
          >
            Связаться
          </a>
        </div>
      </section>

      {/* Team */}
      <section id="team" className="border-t border-white/5 px-6 py-24">
        <div className="mx-auto max-w-4xl">
          <h2 className="mb-12 text-center text-3xl font-bold">
            / <span className="text-cyan-400">Команда</span>
          </h2>
          <div className="mx-auto mb-12 max-w-2xl text-center text-zinc-400 leading-relaxed">
            <p className="mb-4">
              PAVKRAFT Labs — это команда разработчиков под руководством инженера с двумя образованиями:
              инженера-программиста и инженера-архитектора. За плечами руководителя — настройка и администрирование
              Windows и Linux серверов, кластерных систем, управление командами разработчиков.
            </p>
            <p>
              Мы объединяем системный подход архитектора с инженерной точностью программиста.
              Понимаем продукт целиком — от кода до инфраструктуры, от задачи до процесса.
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-2">
            {[
              { title: 'Программирование', desc: 'Проектируем и разрабатываем приложения, API, интеграции. Современный стек, чистый код.' },
              { title: 'Инфраструктура', desc: 'Серверы, сети, кластеры, CI/CD, облачные решения. Надёжность и отказоустойчивость.' },
              { title: 'Архитектура систем', desc: 'Проектируем архитектуру ПО и распределённых систем с учётом масштабирования.' },
              { title: 'Управление', desc: 'Team Lead, организация процессов, контроль качества. Руководство командами разработки.' },
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
            Готовы обсудить ваш проект? Пишите.
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
