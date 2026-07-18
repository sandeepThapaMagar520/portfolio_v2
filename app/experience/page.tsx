import { Check } from "lucide-react";
import { PageIntro } from "../components/PageIntro";
import { SiteFooter } from "../components/SiteFooter";
import { SiteHeader } from "../components/SiteHeader";
import { experience } from "../content/experience";

export default function ExperiencePage() {
  return (
    <main id="main-content" tabIndex={-1}>
      <SiteHeader />
      <PageIntro number="03" label="Experience" backdrop="EXPERIENCE" context="Operations × Leadership × Engineering" title={<>Leadership, technology, and <em>execution.</em></>} copy="A career shaped by taking responsibility, enabling people, improving systems, and delivering practical results." />
      <section className="experience-page section-shell">
        <div className="timeline">
          <div className="timeline-rail"><i /></div>
          {experience.map((job,index)=><article key={`${job.role}-${job.company}`} className={job.current?"current":""} data-reveal style={{ "--reveal-delay": `${Math.min(index * 55, 165)}ms` } as React.CSSProperties}>
            <div className="timeline-marker"><i /><span>0{index+1}</span></div>
            <div className="job-date"><span>{job.dates}</span><small>{job.location}</small></div>
            <div className="job-body">{job.current&&<span className="current-label"><i />Current</span>}<h3>{job.role}</h3><h4>{job.company}</h4><p>{job.summary}</p><ul>{job.responsibilities.map(point=><li key={point}><Check size={14} aria-hidden="true"/>{point}</li>)}</ul></div>
          </article>)}
        </div>
      </section>
      <section className="experience-cta"><span>Want the complete overview?</span><h2>Download my CV.</h2><a href="/Sandeep-Thapa-Magar-CV.pdf" download>Download PDF</a></section>
      <SiteFooter />
    </main>
  );
}
