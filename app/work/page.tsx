import { ArrowUpRight, Check, LockKeyhole, Minus, Plus } from "lucide-react";
import Link from "next/link";
import { PageIntro } from "../components/PageIntro";
import { SiteFooter } from "../components/SiteFooter";
import { SiteHeader } from "../components/SiteHeader";
import { projects } from "../content/projects";


export default function WorkPage() {
  return (
    <main id="main-content" tabIndex={-1}>
      <SiteHeader />
      <PageIntro
        number="02"
        label="Selected Work"
        backdrop="WORK"
        context="Selected product case studies"
        title={<>Products shaped around <em>real workflows.</em></>}
        copy="Two full-stack products presented through the problem, product decisions, operational thinking, and implementation work behind them."
      />

      <section className="case-studies section-shell" aria-label="Project case studies">
        {projects.map((project) => (
          <article id={project.id} className="case-study" key={project.id} data-reveal>
            <header className="case-study-header">
              <div className="case-study-index">{project.number}</div>
              <div>
                <div className="case-study-title-meta">
                  <p className="case-study-type">{project.type}</p>
                  <span className="case-study-status">{project.status}</span>
                </div>
                <h2>{project.name}</h2>
                <p className="case-study-positioning">{project.positioning}</p>
              </div>
              <dl className="case-study-facts">
                <div><dt>Designed for</dt><dd>{project.audience}</dd></div>
                <div><dt>Ownership</dt><dd>{project.role}</dd></div>
              </dl>
            </header>

            <section className="case-study-spotlight">
              <p className="case-study-label">Overview</p>
              <p>{project.overview}</p>
            </section>

            <dl className="project-proof-strip" aria-label={`${project.name} project facts`}>
              {project.proof.map(({ label, value }) => (
                <div key={label}><dt>{label}</dt><dd>{value}</dd></div>
              ))}
            </dl>

            <div className="case-study-visible-details">
              <section><span>01</span><p className="case-study-label">Problem</p><p>{project.problem}</p></section>
              <section><span>02</span><p className="case-study-label">My role</p><p>{project.role}</p></section>
              <section><span>03</span><p className="case-study-label">Solution</p><p>{project.solution}</p></section>
              <section><span>04</span><p className="case-study-label">Current state</p><p>{project.currentState}</p></section>
            </div>

            {project.privacyNote && (
              <aside className="case-study-privacy" aria-label="Project privacy note">
                <LockKeyhole aria-hidden="true" />
                <div><strong>Privacy note</strong><p>{project.privacyNote}</p></div>
              </aside>
            )}

            <div className="case-study-disclosures">
              <details>
                <summary><span>01</span><strong>Capabilities</strong><span className="disclosure-icon"><Plus aria-hidden="true" /><Minus aria-hidden="true" /></span></summary>
                <div className="disclosure-body">
                  <ul>{project.capabilities.map((item) => <li key={item}><Check aria-hidden="true" />{item}</li>)}</ul>
                </div>
              </details>
              <details>
                <summary><span>02</span><strong>Technical implementation</strong><span className="disclosure-icon"><Plus aria-hidden="true" /><Minus aria-hidden="true" /></span></summary>
                <div className="disclosure-body">
                  <ul>{project.responsibilities.map((item) => <li key={item}><Check aria-hidden="true" />{item}</li>)}</ul>
                </div>
              </details>
              <details>
                <summary><span>03</span><strong>Product decisions</strong><span className="disclosure-icon"><Plus aria-hidden="true" /><Minus aria-hidden="true" /></span></summary>
                <div className="disclosure-body">
                  <ol>{project.decisions.map((decision, index) => <li key={decision}><span>0{index + 1}</span>{decision}</li>)}</ol>
                </div>
              </details>
              <details>
                <summary><span>04</span><strong>Technology stack</strong><span className="disclosure-icon"><Plus aria-hidden="true" /><Minus aria-hidden="true" /></span></summary>
                <div className="disclosure-body">
                  <ul className="disclosure-stack">{project.stack.map((item) => <li key={item}>{item}</li>)}</ul>
                </div>
              </details>
            </div>

            <div className="case-study-footer">
              {project.link ? (
                <a href={project.link} target="_blank" rel="noopener noreferrer">
                  Preview in-development site <span className="sr-only">(opens in a new tab)</span>
                  <ArrowUpRight aria-hidden="true" />
                </a>
              ) : (
                <span className="private-project-status"><LockKeyhole aria-hidden="true" />Private internal platform</span>
              )}
            </div>
          </article>
        ))}
      </section>

      <section className="work-end">
        <p>Interested in how I connect operations, product decisions, and implementation?</p>
        <Link href="/contact">Start a conversation <ArrowUpRight aria-hidden="true" /></Link>
      </section>
      <SiteFooter />
    </main>
  );
}
