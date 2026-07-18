export function PageIntro({ number, label, title, copy, backdrop, context }: { number: string; label: string; title: React.ReactNode; copy: string; backdrop: string; context: string }) {
  return (
    <section className="page-intro" data-backdrop={backdrop} data-ambient>
      <div data-reveal>
        <div className="eyebrow"><span>{number}</span>{label}</div>
        <h1>{title}</h1>
        <div className="page-intro-lower">
          <small>{context}</small>
          <p>{copy}</p>
        </div>
      </div>
    </section>
  );
}
