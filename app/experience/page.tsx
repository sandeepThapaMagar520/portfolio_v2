import { Check, Download } from "lucide-react";
import { PageIntro } from "../components/PageIntro";
import { SiteFooter } from "../components/SiteFooter";
import { SiteHeader } from "../components/SiteHeader";
import { experience } from "../content/experience";

export default function ExperiencePage() {
  return (
    <main id="main-content" tabIndex={-1}>
      <span id="experience-top" className="page-top-anchor" aria-hidden="true" />
      <SiteHeader />
      <PageIntro number="03" label="Experience" backdrop="EXPERIENCE" context="Operations × Leadership × Engineering" title={<>Leadership, technology, and <em>execution.</em></>} copy="A progression from customer-facing administration into software delivery, training, independent product building, and operations leadership." />
      <section className="experience-page section-shell">
        <div className="experience-intro-tools">
          <p>Some dates overlap where employment and independent product work were pursued concurrently.</p>
          <a className="experience-cv-action" href="/Sandeep-Thapa-Magar-CV.pdf" download>
            Download CV <Download aria-hidden="true" />
          </a>
        </div>
        <div className="timeline">
          <div className="timeline-rail"><i /></div>
          {experience.map((job,index)=><article key={`${job.role}-${job.company}`} className={`${job.current?"current":""} role-${job.emphasis}`} data-reveal style={{ "--reveal-delay": `${Math.min(index * 55, 165)}ms` } as React.CSSProperties}>
            <div className="timeline-marker"><i /><span>0{index+1}</span></div>
            <div className="job-date"><span>{job.dates}</span><small>{job.location}</small></div>
            <div className="job-body">
              <div className="job-context">
                {job.current&&<span className="current-label"><i />Current</span>}
                <span className="employment-context">{job.context}</span>
                {job.company === "Mech Hevan" && <span className="development-status">Under construction</span>}
              </div>
              <h3>{job.role}</h3><h4>{job.company}</h4><p>{job.summary}</p><ul>{job.responsibilities.map(point=><li key={point}><Check size={14} aria-hidden="true"/>{point}</li>)}</ul>
            </div>
          </article>)}
        </div>
      </section>
      <section className="experience-cta"><span>Want the complete overview?</span><h2>Download my CV.</h2><a href="/Sandeep-Thapa-Magar-CV.pdf" download>Download PDF</a></section>
      <SiteFooter />
    </main>
  );
}
