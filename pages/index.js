export default function HomePage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      <div className="mx-auto flex max-w-5xl flex-col items-center px-6 py-16 text-center">
        <h1 className="text-balance text-4xl font-semibold tracking-tight text-slate-900 sm:text-5xl">
          Greenbits
        </h1>
        <p className="mt-4 max-w-2xl text-pretty text-lg text-slate-600">
          A sleek web development agency build on Next.js.
        </p>

        <div className="mt-8 grid w-full max-w-2xl grid-cols-1 gap-4 sm:grid-cols-3">
          <div className="rounded-2xl border bg-white p-5 text-left shadow-sm">
            <div className="text-sm font-medium text-slate-900">Fast</div>
            <div className="mt-2 text-sm text-slate-600">
              Next.js optimized rendering.
            </div>
          </div>
          <div className="rounded-2xl border bg-white p-5 text-left shadow-sm">
            <div className="text-sm font-medium text-slate-900">Modern</div>
            <div className="mt-2 text-sm text-slate-600">
              Tailwind CSS for rapid UI.
            </div>
          </div>
          <div className="rounded-2xl border bg-white p-5 text-left shadow-sm">
            <div className="text-sm font-medium text-slate-900">Simple</div>
            <div className="mt-2 text-sm text-slate-600">
              Clean boilerplate to start fast.
            </div>
          </div>
        </div>

        <div className="mt-10">
          <a
            href="#"
            className="inline-flex items-center justify-center rounded-xl bg-slate-900 px-5 py-3 text-sm font-medium text-white shadow-sm hover:bg-slate-800"
          >
            Get started
          </a>
        </div>
      </div>
    </main>
  );
}

