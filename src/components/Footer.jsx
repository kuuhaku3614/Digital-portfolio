export default function Footer() {
  return (
    <footer className="border-t border-white/10 py-8">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-5 text-center text-sm text-slate-500 sm:flex-row lg:px-8">
        <p>© {new Date().getFullYear()} Gerby P. Hallasgo. Built with React, Vite, and Tailwind CSS.</p>
        <a href="#home" className="text-cyan-200 transition hover:text-cyan-100">
          Back to top ↑
        </a>
      </div>
    </footer>
  );
}
