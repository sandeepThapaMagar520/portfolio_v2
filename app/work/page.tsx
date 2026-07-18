import { ArrowUpRight, Check, LockKeyhole, Plus } from "lucide-react";
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
                <p className="case-study-type">{project.type}</p>
                <h2>{project.name}</h2>
                <p className="case-study-positioning">{project.positioning}</p>
              </div>
              <dl className="case-study-facts">
                <div><dt>Designed for</dt><dd>{project.audience}</dd></div>
                <div><dt>Current status</dt><dd>{project.status}</dd></div>
              </dl>
            </header>

            <section className="case-study-spotlight">
              <p className="case-study-label">Project brief</p>
              <p>{project.overview}</p>
            </section>

            <div className="case-study-disclosures">
              <details>
                <summary><span>01</span><strong>The problem</strong><Plus aria-hidden="true" /></summary>
                <div className="disclosure-body"><p>{project.problem}</p></div>
              </details>
              <details>
                <summary><span>02</span><strong>My contribution</strong><Plus aria-hidden="true" /></summary>
                <div className="disclosure-body"><p>{project.role}</p></div>
              </details>
              <details>
                <summary><span>03</span><strong>Key work</strong><Plus aria-hidden="true" /></summary>
                <div className="disclosure-body">
                  <ul>{project.responsibilities.map((item) => <li key={item}><Check aria-hidden="true" />{item}</li>)}</ul>
                </div>
              </details>
              <details>
                <summary><span>04</span><strong>Product capabilities</strong><Plus aria-hidden="true" /></summary>
                <div className="disclosure-body">
                  <ul>{project.capabilities.map((item) => <li key={item}><Check aria-hidden="true" />{item}</li>)}</ul>
                </div>
              </details>
              <details>
                <summary><span>05</span><strong>Product decisions</strong><Plus aria-hidden="true" /></summary>
                <div className="disclosure-body">
                  <ol>{project.decisions.map((decision, index) => <li key={decision}><span>0{index + 1}</span>{decision}</li>)}</ol>
                </div>
              </details>
              <details>
                <summary><span>06</span><strong>Technology</strong><Plus aria-hidden="true" /></summary>
                <div className="disclosure-body">
                  <ul className="disclosure-stack">{project.stack.map((item) => <li key={item}>{item}</li>)}</ul>
                </div>
              </details>
            </div>

            <div className="case-study-footer">
              {project.link ? (
                <a href={project.link} target="_blank" rel="noopener noreferrer">
                  Visit Mech Hevan <span className="sr-only">(opens in a new tab)</span>
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
