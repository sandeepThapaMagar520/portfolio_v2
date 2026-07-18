import { ArrowUpRight, Github, Linkedin } from "lucide-react";
import { SiteFooter } from "../components/SiteFooter";
import { SiteHeader } from "../components/SiteHeader";
import { profile } from "../content/site";

export default function ContactPage() {
  return (
    <main id="main-content" tabIndex={-1}>
      <SiteHeader />
      <section className="contact-page" data-reveal data-backdrop="CONTACT">
        <div className="eyebrow"><span>04</span>Contact</div>
        <h1>Let&apos;s discuss the work that needs <em>moving forward.</em></h1>
        <div className="contact-page-grid">
          <div className="contact-primary">
            <p>Open to meaningful conversations around operations, product development, software, and technology-led business ideas.</p>
            <a className="contact-primary-action" href={`mailto:${profile.email}`} aria-label={`Email Sandeep Thapa Magar at ${profile.email}`}>
              <span><small>Start a conversation</small><strong>Email me</strong><em>{profile.email}</em></span>
              <ArrowUpRight aria-hidden="true"/>
            </a>
            <p className="contact-response-time">Usually replies within 1 business days.</p>
          </div>
          <div className="contact-secondary">
            <section className="contact-conversations" aria-labelledby="contact-conversations-title">
              <p className="contact-section-label" id="contact-conversations-title">Open to conversations about</p>
              <ul>
                <li><span>01</span>Operations and delivery leadership opportunities</li>
                <li><span>02</span>Product and workflow collaboration</li>
                <li><span>03</span>Business and technology partnerships</li>
              </ul>
            </section>
            <section className="contact-profiles" aria-labelledby="contact-profiles-title">
              <p className="contact-section-label" id="contact-profiles-title">Professional profiles</p>
              <div className="contact-cards">
                <a href={profile.social.linkedin} target="_blank" rel="noopener noreferrer" aria-label="Visit Sandeep Thapa Magar on LinkedIn (opens in a new tab)"><Linkedin aria-hidden="true"/><span><small>LinkedIn · New tab</small>Connect professionally</span><ArrowUpRight aria-hidden="true"/></a>
                <a href={profile.social.github} target="_blank" rel="noopener noreferrer" aria-label="View Sandeep Thapa Magar’s GitHub profile (opens in a new tab)"><Github aria-hidden="true"/><span><small>GitHub · New tab</small>View development work</span><ArrowUpRight aria-hidden="true"/></a>
              </div>
            </section>
          </div>
        </div>
        <div className="contact-page-context">Kathmandu, Nepal <span /> Professional enquiries welcome</div>
      </section>
      <SiteFooter />
    </main>
  );
}
