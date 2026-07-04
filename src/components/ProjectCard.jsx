function ProjectButton({ href, children, variant = 'secondary' }) {
  const isDisabled = !href;
  const classes = variant === 'primary' ? 'btn-card-primary' : 'btn-card-secondary';

  if (isDisabled) {
    return (
      <span className={`${classes} cursor-not-allowed opacity-50`} aria-disabled="true">
        {children}
      </span>
    );
  }

  return (
    <a className={classes} href={href} target="_blank" rel="noreferrer">
      {children}
    </a>
  );
}

export default function ProjectCard({ project, onViewDetails }) {
  return (
    <article className="project-card group">
      <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-slate-900">
        <img src={project.image} alt="" className="h-56 w-full object-cover opacity-85 transition duration-500 group-hover:scale-105 group-hover:opacity-100" />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />
        <div className="absolute left-4 top-4 rounded-full border border-cyan-300/20 bg-slate-950/70 px-3 py-1 text-xs font-semibold text-cyan-100 backdrop-blur">
          {project.status}
        </div>
      </div>

      <div className="p-6">
        <div className="mb-3 flex flex-wrap items-center gap-2 text-xs text-slate-400">
          <span>{project.category}</span>
          <span className="h-1 w-1 rounded-full bg-slate-600" />
          <span>{project.year}</span>
        </div>
        <h3 className="text-xl font-bold text-white transition group-hover:text-cyan-100">{project.title}</h3>
        <p className="mt-3 line-clamp-3 text-sm leading-6 text-slate-400">{project.summary}</p>

        <div className="mt-5 flex flex-wrap gap-2">
          {project.stack.slice(0, 5).map((tech) => (
            <span key={tech} className="skill-pill">
              {tech}
            </span>
          ))}
          {project.stack.length > 5 && <span className="skill-pill">+{project.stack.length - 5}</span>}
        </div>

        <div className="mt-6 grid gap-2 sm:grid-cols-3">
          <ProjectButton href={project.github}>GitHub</ProjectButton>
          <ProjectButton href={project.demo}>Live Demo</ProjectButton>
          <button type="button" className="btn-card-primary" onClick={() => onViewDetails(project)}>
            View Details
          </button>
        </div>
      </div>
    </article>
  );
}
