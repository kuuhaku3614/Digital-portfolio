import { useEffect } from 'react';

export default function ProjectModal({ project, onClose }) {
  useEffect(() => {
    if (!project) return undefined;
    const onKeyDown = (event) => {
      if (event.key === 'Escape') onClose();
    };
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', onKeyDown);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', onKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div className="fixed inset-0 z-[80] flex items-center justify-center bg-slate-950/80 px-5 py-8 backdrop-blur-xl" role="dialog" aria-modal="true">
      <div className="max-h-[90vh] w-full max-w-4xl overflow-y-auto rounded-3xl border border-white/10 bg-slate-950 p-6 shadow-2xl shadow-cyan-950/40 sm:p-8">
        <div className="flex items-start justify-between gap-6">
          <div>
            <p className="text-sm font-semibold text-cyan-200">{project.category} • {project.year}</p>
            <h3 className="mt-2 text-2xl font-bold text-white sm:text-3xl">{project.title}</h3>
            <p className="mt-2 text-slate-400">Role: {project.role}</p>
          </div>
          <button type="button" onClick={onClose} className="rounded-full border border-white/10 px-3 py-1 text-slate-300 hover:bg-white/10">
            Close
          </button>
        </div>

        {project.publication && (
          <div className="mt-8 rounded-2xl border border-amber-300/25 bg-gradient-to-r from-amber-300/10 via-amber-200/5 to-transparent p-5 sm:p-6">
            <div className="flex flex-wrap items-start justify-between gap-4">
              <div>
                <p className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-amber-300">
                  <svg viewBox="0 0 20 20" fill="currentColor" className="h-4 w-4" aria-hidden="true">
                    <path fillRule="evenodd" d="M10 1a4.5 4.5 0 0 0-4.5 4.5c0 1.61.846 3.023 2.118 3.818L6.5 18l3.5-2 3.5 2-1.118-8.682A4.497 4.497 0 0 0 14.5 5.5 4.5 4.5 0 0 0 10 1Z" clipRule="evenodd" />
                  </svg>
                  Published Research
                </p>
                <h4 className="mt-2 font-semibold text-white">{project.publication.title}</h4>
                <p className="mt-1 text-sm text-slate-400">
                  {project.publication.venue} • {project.publication.year}
                </p>
              </div>
              <div className="flex flex-wrap gap-2">
                <a
                  href={project.publication.url}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-full bg-amber-300 px-4 py-2 text-sm font-semibold text-slate-950 transition hover:bg-amber-200"
                >
                  View on IEEE Xplore
                </a>
                <a
                  href={project.publication.cert}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-full border border-amber-300/40 px-4 py-2 text-sm font-semibold text-amber-200 transition hover:bg-amber-300/10"
                >
                  Presentation Certificate
                </a>
              </div>
            </div>
          </div>
        )}

        <div className="mt-8 grid gap-5 md:grid-cols-3">
          <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
            <h4 className="font-semibold text-white">Problem</h4>
            <p className="mt-2 text-sm leading-6 text-slate-400">{project.problem}</p>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
            <h4 className="font-semibold text-white">Solution</h4>
            <p className="mt-2 text-sm leading-6 text-slate-400">{project.solution}</p>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
            <h4 className="font-semibold text-white">Impact</h4>
            <p className="mt-2 text-sm leading-6 text-slate-400">{project.impact}</p>
          </div>
        </div>

        <div className="mt-8">
          <h4 className="font-semibold text-white">Key features</h4>
          <ul className="mt-4 grid gap-3 sm:grid-cols-2">
            {project.highlights.map((item) => (
              <li key={item} className="rounded-2xl border border-cyan-300/10 bg-cyan-300/5 p-4 text-sm leading-6 text-cyan-50">
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-8 flex flex-wrap gap-2">
          {project.stack.map((tech) => (
            <span key={tech} className="skill-pill">
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
