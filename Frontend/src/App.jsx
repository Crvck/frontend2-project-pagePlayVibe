function App() {
  return (
    <main className="flex min-h-screen items-center justify-center px-6 py-16">
      <section className="w-full max-w-5xl rounded-3xl border border-white/10 bg-slate-950/60 p-8 shadow-2xl shadow-blue-950/30 backdrop-blur md:p-12">
        <span className="inline-flex rounded-full border border-cyan-400/30 bg-cyan-400/10 px-4 py-1 text-sm font-medium text-cyan-300">
          Frontend independiente con Docker
        </span>
        <div className="mt-6 grid gap-10 md:grid-cols-[1.4fr_1fr] md:items-center">
          <div>
            <h1 className="text-4xl font-bold tracking-tight text-white md:text-6xl">
              React + Vite + Tailwind solo dentro del contenedor
            </h1>
            <p className="mt-5 max-w-2xl text-lg text-slate-300">
              Este frontend queda aislado de tu host. No necesitas instalar Node
              localmente para trabajar aquí; el contenedor se encarga de instalar
              dependencias y ejecutar Vite.
            </p>
            <div className="mt-8 flex flex-wrap gap-3 text-sm text-slate-200">
              <span className="rounded-full bg-white/5 px-4 py-2 ring-1 ring-white/10">React 19</span>
              <span className="rounded-full bg-white/5 px-4 py-2 ring-1 ring-white/10">Vite 8</span>
              <span className="rounded-full bg-white/5 px-4 py-2 ring-1 ring-white/10">Tailwind 4</span>
              <span className="rounded-full bg-white/5 px-4 py-2 ring-1 ring-white/10">Docker Compose</span>
            </div>
          </div>

          <div className="rounded-2xl border border-blue-400/20 bg-slate-900/80 p-6 text-left">
            <h2 className="text-xl font-semibold text-white">Siguiente paso</h2>
            <p className="mt-3 text-slate-300">
              Mantén `sequelize` y `mysql2` en el backend. El frontend solo debe
              consumir tu API.
            </p>
            <div className="mt-5 rounded-xl bg-slate-950 p-4 font-mono text-sm text-cyan-300 ring-1 ring-white/10">
              docker compose up --build
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

export default App
