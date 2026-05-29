function App() {
  return (
    <div className="min-h-screen bg-[#0a0a0f] text-white">
      {/* Nav */}
      <nav className="fixed top-0 left-0 right-0 z-50 border-b border-white/5 bg-[#0a0a0f]/80 backdrop-blur-lg">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <span className="text-lg font-bold tracking-wider">
            PAVKRAFT<span className="text-cyan-400"> Labs</span>
          </span>
          <div className="hidden items-center gap-8 text-sm text-zinc-400 sm:flex">
            <a href="#about" className="transition-colors hover:text-white">О нас</a>
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
          <p className="mx-auto mb-8 max-w-xl text-lg text-zinc-400">
            Лаборатория разработки. Создаём цифровые продукты, которые работают.
          </p>
          <a
            href="#contact"
            className="inline-block rounded-full bg-cyan-500 px-8 py-3 text-sm font-semibold text-black transition-all hover:bg-cyan-400 hover:shadow-lg hover:shadow-cyan-500/25"
          >
            Обсудить проект
          </a>
        </div>
      </section>

      {/* About */}
      <section id="about" className="border-t border-white/5 px-6 py-24">
        <div className="mx-auto max-w-4xl">
          <h2 className="mb-12 text-center text-3xl font-bold">
            / О <span className="text-cyan-400">лаборатории</span>
          </h2>
          <div className="grid gap-8 md:grid-cols-3">
            {[
              { title: 'Продукт', desc: 'Проектируем и разрабатываем цифровые продукты под ключ — от идеи до релиза.' },
              { title: 'Качество', desc: 'Чистый код, современный стек, внимание к деталям. Каждый проект проходит ревью.' },
              { title: 'Рост', desc: 'Постоянно изучаем новые технологии, чтобы предлагать лучшие решения.' },
            ].map((item) => (
              <div key={item.title} className="rounded-xl border border-white/5 bg-white/5 p-6 backdrop-blur-sm">
                <h3 className="mb-2 font-semibold text-cyan-400">{item.title}</h3>
                <p className="text-sm leading-relaxed text-zinc-400">{item.desc}</p>
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
            {[
              { title: 'Веб-разработка', desc: 'Сайты, SPA, PWA, админ-панели — на React, TypeScript, Node.js' },
              { title: 'UI/UX Дизайн', desc: 'Современные интерфейсы, прототипирование, дизайн-системы' },
              { title: 'Бэкенд & API', desc: 'Серверная логика, REST/GraphQL API, авторизация, БД' },
              { title: 'Консультации', desc: 'Аудит кода, ревью архитектуры, помощь с выбором стека' },
            ].map((s) => (
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
            Готовы обсудить ваш проект? Пишите — ответим в ближайшее время.
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

      {/* Footer */}
      <footer className="border-t border-white/5 px-6 py-6 text-center text-sm text-zinc-600">
        &copy; {new Date().getFullYear()} PAVKRAFT Labs
      </footer>
    </div>
  )
}

export default App
