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
