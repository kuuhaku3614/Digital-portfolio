import { skillGroups } from '../data/skills';
import Reveal from './Reveal';
import SectionHeading from './SectionHeading';

export default function Skills() {
  return (
    <section id="skills" className="section-spacing">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <SectionHeading
          eyebrow="Skills"
          
          
        />

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {skillGroups.map((group, index) => (
            <Reveal key={group.title} delay={index * 80} className="glass-card p-6">
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-cyan-300/10 text-lg font-black text-cyan-200">
                {String(index + 1).padStart(2, '0')}
              </div>
              <h3 className="text-xl font-bold text-white">{group.title}</h3>
              <p className="mt-2 min-h-12 text-sm leading-6 text-slate-400">{group.description}</p>
              <div className="mt-5 flex flex-wrap gap-2">
                {group.items.map((skill) => (
                  <span key={skill} className="skill-pill">
                    {skill}
                  </span>
                ))}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
