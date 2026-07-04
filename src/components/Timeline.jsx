import { timeline } from '../data/timeline';
import Reveal from './Reveal';
import SectionHeading from './SectionHeading';

export default function Timeline() {
  return (
    <section id="timeline" className="section-spacing">
      <div className="mx-auto max-w-5xl px-5 lg:px-8">
        <SectionHeading
          eyebrow="Journey"
          title="A simple timeline that connects education, projects, and growth."
          description="This section replaces a long experience list with a focused path that makes sense for a fresh graduate."
        />

        <div className="relative">
          <div className="absolute left-4 top-0 hidden h-full w-px bg-gradient-to-b from-cyan-300 via-blue-400 to-transparent sm:block" />
          <div className="space-y-5">
            {timeline.map((item, index) => (
              <Reveal key={`${item.period}-${item.title}`} delay={index * 100} className="relative sm:pl-12">
                <div className="absolute left-[9px] top-7 hidden h-3 w-3 rounded-full bg-cyan-300 shadow-[0_0_28px_rgba(34,211,238,0.85)] sm:block" />
                <div className="glass-card p-6">
                  <div className="flex flex-wrap items-center gap-3">
                    <span className="rounded-full bg-cyan-300 px-3 py-1 text-xs font-bold text-slate-950">{item.period}</span>
                    <span className="text-sm text-slate-400">{item.label}</span>
                  </div>
                  <h3 className="mt-4 text-xl font-bold text-white">{item.title}</h3>
                  <p className="mt-3 leading-7 text-slate-400">{item.description}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
