import Reveal from './Reveal';

export default function SectionHeading({ eyebrow, title, description, align = 'center' }) {
  const alignment = align === 'left' ? 'items-start text-left' : 'items-center text-center mx-auto';

  return (
    <Reveal className={`mb-12 flex max-w-3xl flex-col ${alignment}`}>
      {eyebrow && (
        <p className="mb-3 rounded-full border border-cyan-300/20 bg-cyan-300/10 px-4 py-1 text-sm font-medium text-cyan-200">
          {eyebrow}
        </p>
      )}
      <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
        {title}
      </h2>
      {description && <p className="mt-4 text-base leading-7 text-slate-300 sm:text-lg">{description}</p>}
    </Reveal>
  );
}
