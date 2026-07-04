import { useEffect, useState } from 'react';

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Journey', href: '#timeline' },
  {
    label: 'Blog',
    href: 'https://kuuhaku3614.github.io/hallasgo-blog/',
    external: true,
  },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();

    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'border-b border-white/10 bg-slate-950/80 shadow-2xl shadow-cyan-950/20 backdrop-blur-xl'
          : 'bg-transparent'
      }`}
    >
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 lg:px-8"
        aria-label="Main navigation"
      >
        <a
          href="#home"
          className="group flex items-center gap-3"
          onClick={() => setOpen(false)}
        >
          <span className="grid h-10 w-10 place-items-center rounded-2xl border border-cyan-300/30 bg-cyan-300/10 text-sm font-bold text-cyan-200 shadow-lg shadow-cyan-950/30">
            GH
          </span>

          <span className="text-sm font-semibold tracking-wide text-white group-hover:text-cyan-200">
            Gerby Hallasgo
          </span>
        </a>

        <button
          type="button"
          className="rounded-xl border border-white/10 p-2 text-slate-200 lg:hidden"
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen((value) => !value)}
        >
          <span className="sr-only">Toggle menu</span>
          <span className="block h-0.5 w-6 bg-current"></span>
          <span className="mt-1.5 block h-0.5 w-6 bg-current"></span>
          <span className="mt-1.5 block h-0.5 w-6 bg-current"></span>
        </button>

        <div className="hidden items-center gap-1 lg:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              target={link.external ? '_blank' : undefined}
              rel={link.external ? 'noreferrer' : undefined}
              className="nav-link"
            >
              {link.label}
            </a>
          ))}

          <a
            href="#contact"
            className="ml-3 rounded-full bg-cyan-300 px-5 py-2.5 text-sm font-semibold text-slate-950 transition hover:-translate-y-0.5 hover:bg-cyan-200"
          >
            Hire Me
          </a>
        </div>
      </nav>

      <div
        id="mobile-menu"
        className={`${
          open ? 'block' : 'hidden'
        } border-t border-white/10 bg-slate-950/95 px-5 pb-5 backdrop-blur-xl lg:hidden`}
      >
        <div className="mx-auto flex max-w-7xl flex-col gap-2 pt-3">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              target={link.external ? '_blank' : undefined}
              rel={link.external ? 'noreferrer' : undefined}
              className="nav-link"
              onClick={() => setOpen(false)}
            >
              {link.label}
            </a>
          ))}

          <a
            href="#contact"
            className="mt-2 rounded-full bg-cyan-300 px-5 py-2.5 text-center text-sm font-semibold text-slate-950 transition hover:bg-cyan-200"
            onClick={() => setOpen(false)}
          >
            Hire Me
          </a>
        </div>
      </div>
    </header>
  );
}