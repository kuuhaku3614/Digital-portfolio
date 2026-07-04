export default function BackgroundGlow() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden bg-slate-950">
      <div className="absolute left-1/2 top-[-220px] h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-cyan-400/20 blur-[120px]" />
      <div className="absolute right-[-180px] top-[18%] h-[420px] w-[420px] rounded-full bg-blue-500/20 blur-[120px]" />
      <div className="absolute bottom-[-160px] left-[-120px] h-[480px] w-[480px] rounded-full bg-teal-400/10 blur-[130px]" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(148,163,184,0.06)_1px,transparent_1px),linear-gradient(to_bottom,rgba(148,163,184,0.06)_1px,transparent_1px)] bg-[size:72px_72px] [mask-image:radial-gradient(ellipse_at_top,black,transparent_72%)]" />
    </div>
  );
}
