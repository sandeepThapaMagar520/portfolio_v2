import { ArrowUpRight, Download, Github, Linkedin, Mail } from "lucide-react";
import { SiteFooter } from "../components/SiteFooter";
import { SiteHeader } from "../components/SiteHeader";
import { profile } from "../content/site";

export default function ContactPage() {
  return (
    <main id="main-content" tabIndex={-1}>
      <SiteHeader />
      <section className="contact-page" data-reveal data-backdrop="CONTACT">
        <div className="eyebrow"><span>05</span>Contact</div>
        <h1>Let&apos;s discuss the work that needs <em>moving forward.</em></h1>
        <div className="contact-page-grid">
          <div><p>I&apos;m open to conversations about operations leadership, product collaboration, software projects, and professional opportunities. Email is the most direct way to reach me.</p><a className="contact-email" href={`mailto:${profile.email}`}>{profile.email} <ArrowUpRight aria-hidden="true"/></a></div>
          <div className="contact-cards">
            <a href="mailto:sandeepthapa520@gmail.com"><Mail aria-hidden="true"/><span><small>Email</small>Write to me</span><ArrowUpRight aria-hidden="true"/></a>
            <a href="https://www.linkedin.com/in/sandeep-thapa-magar-a907a3282/" target="_blank" rel="noopener noreferrer"><Linkedin aria-hidden="true"/><span><small>LinkedIn · New tab</small>Sandeep Thapa Magar <span className="sr-only">(opens in a new tab)</span></span><ArrowUpRight aria-hidden="true"/></a>
            <a href="https://github.com/sandeepThapaMagar520" target="_blank" rel="noopener noreferrer"><Github aria-hidden="true"/><span><small>GitHub · New tab</small>sandeepThapaMagar520 <span className="sr-only">(opens in a new tab)</span></span><ArrowUpRight aria-hidden="true"/></a>
            <a href="/Sandeep-Thapa-Magar-CV.pdf" download><Download aria-hidden="true"/><span><small>Resume · PDF</small>Download resume</span><ArrowUpRight aria-hidden="true"/></a>
          </div>
        </div>
        <div className="contact-page-context">Kathmandu, Nepal <span /> Available for meaningful opportunities</div>
      </section>
      <SiteFooter />
    </main>
  );
}
