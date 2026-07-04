import Reveal from './Reveal';
import SectionHeading from './SectionHeading';

const contactLinks = [
  {
    label: 'Email',
    value: 'hallasgogerby@gmail.com',
    href: 'mailto:hallasgogerby@gmail.com?subject=Portfolio%20Inquiry%20for%20Gerby%20Hallasgo',
  },
  {
    label: 'GitHub',
    value: 'github.com/kuuhaku3614',
    href: 'https://github.com/kuuhaku3614',
  },
  {
    label: 'LinkedIn',
    value: 'linkedin.com/in/gerby-hallasgo-8829b0370',
    href: 'https://www.linkedin.com/in/gerby-hallasgo-8829b0370/',
  },
];

export default function Contact() {
  return (
    <section id="contact" className="section-spacing pb-16">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="rounded-[2rem] border border-cyan-300/15 bg-gradient-to-br from-cyan-300/10 via-slate-900/80 to-blue-500/10 p-6 shadow-2xl shadow-cyan-950/30 sm:p-10 lg:p-14">
          <SectionHeading
            eyebrow="Contact"
            title="Let’s build something useful."
            
          />

          <div className="grid gap-4 md:grid-cols-3">
            {contactLinks.map((link, index) => (
              <Reveal key={link.label} delay={index * 90}>
                <a href={link.href} target={link.href.startsWith('http') ? '_blank' : undefined} rel="noreferrer" className="block rounded-3xl border border-white/10 bg-slate-950/70 p-6 transition hover:-translate-y-1 hover:border-cyan-300/40 hover:bg-slate-900/80">
                  <p className="text-sm text-slate-400">{link.label}</p>
                  <p className="mt-2 break-words font-semibold text-white">{link.value}</p>
                </a>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
