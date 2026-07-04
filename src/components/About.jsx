import Reveal from './Reveal';
import SectionHeading from './SectionHeading';

const quickFacts = [
  ['Education', 'BS Computer Science'],
  ['Location', 'Philippines'],
  ['Work setup', 'Remote-friendly / WFH'],
  ['Best fit', 'Junior software, full-stack, Laravel roles'],
];

export default function About() {
  return (
    <section id="about" className="section-spacing">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <SectionHeading
          eyebrow="About"
          title="A practical developer who values clarity, teamwork, and steady growth."
          
        />

        <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          <Reveal className="glass-card p-6 sm:p-8">
            <div className="aspect-square overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-cyan-300/20 via-blue-500/10 to-slate-950 p-6">
              <div className="grid h-full place-items-center rounded-3xl border border-cyan-300/20 bg-slate-950/70 text-center">
                <div>
                  <img src={`${import.meta.env.BASE_URL}profile.jpg`} alt="Gerby P. Hallasgo" />
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal delay={150} className="glass-card p-6 sm:p-8">
            <div className="space-y-5 text-slate-300">
              <p className="leading-8">
                I’m Gerby P. Hallasgo, a fresh Computer Science graduate building portfolio projects around practical problems: billing systems, membership systems, welfare program records, and credential verification workflows.
              </p>
              <p className="leading-8">
                I enjoy turning requirements into organized screens, clean data flows, and usable interfaces. My strongest fit is a junior role where I can contribute to frontend development, Laravel/PHP systems, database-backed features, and team-based product improvements.
              </p>
              <p className="leading-8">
                I bring a teachable mindset, reliable follow-through, collaboration, and the discipline to keep improving both communication and technical skills.
              </p>
            </div>

            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {quickFacts.map(([label, value]) => (
                <div key={label} className="rounded-2xl border border-white/10 bg-white/[0.03] p-4">
                  <p className="text-sm text-slate-500">{label}</p>
                  <p className="mt-1 font-semibold text-white">{value}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
