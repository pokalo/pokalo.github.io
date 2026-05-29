const expertise = [
  {
    area: 'Инфраструктура и серверы',
    items: ['Linux (CentOS, Debian, Ubuntu, RHEL)', 'Windows Server', 'Отказоустойчивые кластеры', 'Хостинговые платформы'],
  },
  {
    area: 'AI и автоматизация',
    items: ['Интеграция и внедрение AI/LLM', 'Установка нейросетей на сервер', 'AI-помощники для бизнеса', 'Автоматизация процессов'],
  },
  {
    area: 'Сети и веб-технологии',
    items: ['Nginx, Apache', 'Postfix, Exim', 'MySQL, PostgreSQL, MongoDB', 'Высоконагруженные системы'],
  },
  {
    area: 'Управление и внедрение',
    items: ['Team Lead / Tech Lead', 'Внедрение Linux на предприятиях', 'Миграция на Open Source', 'Аудит и консалтинг'],
  },
]

const services = [
  { title: 'AI и нейросети', desc: 'Установка и настройка нейросетей на вашем сервере. AI-помощники для бизнеса. Интеграция LLM.' },
  { title: 'Администрирование Linux', desc: 'Настройка и сопровождение Linux-серверов (CentOS, Debian, Ubuntu, RHEL). Отказоустойчивые кластеры.' },
  { title: 'Внедрение Open Source', desc: 'Переводим офисы и предприятия на свободное ПО. Почтовые серверы, веб-серверы, БД.' },
  { title: 'Высоконагруженные системы', desc: 'Проектирование, оптимизация и сопровождение систем с высокой нагрузкой.' },
  { title: 'Сопровождение', desc: 'Мониторинг, обновления, бэкапы. Ваша инфраструктура в надёжных руках.' },
  { title: 'Консультирование', desc: 'Аудит инфраструктуры, ревью архитектуры, стратегия развития IT.' },
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
            Команда разработчиков PAVKRAFT Labs с серьёзным стажем.
          </p>
          <p className="mx-auto mb-8 max-w-xl text-sm text-zinc-500">
            Инфраструктура &middot; AI/LLM &middot; Open Source &middot; Высоконагрузки
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
              PAVKRAFT Labs — команда разработчиков с серьёзным стажем, двумя образованиями
              (инженер-программист и инженер-архитектор) и опытом управления командами разработчиков.
            </p>
            <p className="mb-4">
              Ключевая экспертиза — Linux-инфраструктура, отказоустойчивые кластеры, внедрение Open Source
              на предприятиях, а также интеграция AI/LLM-решений для бизнеса.
            </p>
            <p>
              Специализируемся на высоконагруженных системах, автоматизации процессов и полном
              сопровождении IT-инфраструктуры компаний.
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-2">
            {[
              { title: 'Linux-инфраструктура', desc: 'CentOS, Debian, Ubuntu, RHEL. Кластеры, хостинговые платформы, веб-серверы, почта.' },
              { title: 'AI и нейросети', desc: 'Установка и настройка нейросетей на серверах. Интеграция LLM. AI-помощники для бизнеса.' },
              { title: 'Базы данных и highload', desc: 'MySQL, PostgreSQL, MongoDB. Высоконагруженные системы, оптимизация.' },
              { title: 'Open Source и миграция', desc: 'Внедрение свободного ПО в офисах и на предприятиях. Обучение сотрудников.' },
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
          <div className="flex flex-wrap items-center justify-center gap-4">
            <a
              href="https://t.me/PAVkraft_bot"
              target="_blank"
              className="inline-block rounded-full bg-cyan-500 px-8 py-3 text-sm font-semibold text-black transition-all hover:bg-cyan-400"
            >
              Telegram бот
            </a>
            <a
              href="https://github.com/pokalo"
              target="_blank"
              className="inline-block rounded-full border border-white/10 px-8 py-3 text-sm font-medium transition-all hover:border-cyan-500/50 hover:text-cyan-400"
            >
              GitHub
            </a>
            <a
              href="https://freelance.ru/andreypokalo"
              target="_blank"
              className="inline-block rounded-full border border-white/10 px-8 py-3 text-sm font-medium transition-all hover:border-cyan-500/50 hover:text-cyan-400"
            >
              freelance.ru
            </a>
          </div>
        </div>
      </section>

      <footer className="border-t border-white/5 px-6 py-6 text-center text-sm text-zinc-600">
        &copy; {new Date().getFullYear()} PAVKRAFT Labs
      </footer>
    </div>
  )
}

export default App
