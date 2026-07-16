import Reveal from './Reveal';

const roles = ['Junior Software Developer', 'Full Stack Developer', 'Laravel Developer'];
const strengths = ['Teachable', 'Reliable', 'Collaborative', 'Remote-friendly'];

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden pb-20 pt-32 sm:pt-40 lg:min-h-screen lg:pb-28">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 lg:grid-cols-[1.2fr_0.8fr] lg:px-8">
        <Reveal>
          <div className="mb-5 flex flex-wrap gap-3">
            <p className="inline-flex rounded-full border border-cyan-300/20 bg-cyan-300/10 px-4 py-2 text-sm font-medium text-cyan-100">
              Fresh Computer Science Graduate • Open to remote-friendly roles
            </p>
            <a
              href="https://ieeexplore.ieee.org/document/11594360"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-amber-300/30 bg-amber-300/10 px-4 py-2 text-sm font-medium text-amber-200 transition hover:bg-amber-300/20"
            >
              <svg viewBox="0 0 20 20" fill="currentColor" className="h-4 w-4" aria-hidden="true">
                <path fillRule="evenodd" d="M10 1a4.5 4.5 0 0 0-4.5 4.5c0 1.61.846 3.023 2.118 3.818L6.5 18l3.5-2 3.5 2-1.118-8.682A4.497 4.497 0 0 0 14.5 5.5 4.5 4.5 0 0 0 10 1Z" clipRule="evenodd" />
              </svg>
              IEEE-Published Researcher
            </a>
          </div>

          <h1 className="max-w-4xl text-4xl font-black tracking-tight text-white sm:text-6xl lg:text-7xl">
            I build practical full-stack systems with clean, recruiter-friendly interfaces.
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
            Hi, I’m <span className="font-semibold text-white">Gerby P. Hallasgo</span> — an aspiring developer focused on Laravel, Tauri, React, database-driven systems, and real-world software workflows.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            {roles.map((role) => (
              <span key={role} className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-200">
                {role}
              </span>
            ))}
          </div>

          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <a href="#projects" className="btn-primary">
              View Featured Projects
            </a>
            <a href="#contact" className="btn-secondary">
              Contact Me
            </a>
            <a href={`${import.meta.env.BASE_URL}resume.pdf`} className="btn-ghost">
              Download Resume
            </a>
          </div>
        </Reveal>

        <Reveal delay={150} className="relative">
          <div className="glass-card relative overflow-hidden p-6 sm:p-8">
            <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-cyan-300 via-blue-400 to-teal-300" />
            <div className="flex items-center gap-3 border-b border-white/10 pb-5">
              <img src={`${import.meta.env.BASE_URL}profile.jpg`} alt="Gerby P. Hallasgo" className="h-12 w-12 rounded-full border border-white/10 object-cover" />
              <div>
                <h2 className="text-xl font-bold text-white">Gerby P. Hallasgo</h2>
                <p className="text-sm text-slate-400">Developer Portfolio</p>
              </div>
            </div>

            <div className="mt-6 space-y-4">
              <div className="rounded-2xl border border-white/10 bg-slate-950/60 p-4">
                <p className="text-sm text-slate-400">Current focus</p>
                <p className="mt-1 font-semibold text-white">React + Laravel + MySQL systems</p>
              </div>
              <div className="grid grid-cols-2 gap-3">
                {strengths.map((item) => (
                  <div key={item} className="rounded-2xl border border-cyan-300/10 bg-cyan-300/5 p-4 text-sm font-medium text-cyan-100">
                    {item}
                  </div>
                ))}
              </div>
              <div className="rounded-2xl border border-white/10 bg-slate-950/60 p-4">
                <p className="text-sm text-slate-400">Portfolio promise</p>
                <p className="mt-1 leading-7 text-slate-200">Clear projects, honest skill presentation, and fast navigation for recruiters.</p>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
