import Image from "next/image";
import { ArrowDown, ArrowRight, ArrowUpRight, Download } from "lucide-react";
import Link from "next/link";
import { DisciplineTicker } from "./components/motion/DisciplineTicker";
import { LoopingEmphasis } from "./components/motion/LoopingEmphasis";
import { SiteFooter } from "./components/SiteFooter";
import { SiteHeader } from "./components/SiteHeader";

export default function Home() {
  return (
    <main id="main-content" tabIndex={-1} className="home-v2">
      <SiteHeader />

      <section className="v2-hero" data-ambient>
        <div className="v2-grid" />

        <div className="v2-hero-copy">
          <div className="v2-intro">
            <span><i /> Available for meaningful opportunities</span>
            <span>Kathmandu, Nepal</span>
          </div>

          <p className="v2-hello">
            Hello, I&apos;m Sandeep Thapa Magar.
          </p>

          <h1>
            <span>I turn ambitious</span>{" "}
            <span>ideas into</span>{" "}
            <LoopingEmphasis />
          </h1>

          <div className="v2-hero-bottom">
            <p>
              Chief Operating Officer, product builder, and software engineer connecting
              people, strategy, and technology to move work forward.
            </p>
            <div className="v2-actions">
              <Link className="v2-primary" href="/work">Explore my work <ArrowUpRight /></Link>
              <a className="v2-secondary" href="/Sandeep-Thapa-Magar-CV.pdf" download>Download CV <Download aria-hidden="true" /></a>
            </div>
          </div>
        </div>

        <div className="v2-portrait">
          <div className="v2-portrait-outline" />
          <div className="v2-portrait-photo">
            <Image
              src="/assets/sandeep-portrait.webp"
              alt="Sandeep Thapa Magar seated outdoors"
              fill
              priority
              sizes="(max-width: 800px) 90vw, 36vw"
            />
            <span>Based in Nepal</span>
          </div>
          <div className="v2-role-card">
            <small>Current focus</small>
            <strong>Operations × Product × Engineering</strong>
          </div>
          <div className="v2-portrait-number">STM / 01</div>
        </div>

        <div className="v2-side-note">
          <span>Chief Operating Officer</span>
          <span>Software Engineer</span>
          <span>Product Builder</span>
        </div>

        <a className="v2-scroll" href="#profile"><span>Scroll</span><ArrowDown /></a>
      </section>

      <DisciplineTicker />

      <section id="profile" className="v2-profile" data-reveal>
        <div className="v2-section-label"><span>01</span><p>Profile</p></div>
        <div className="v2-profile-main">
          <h2 className="v2-profile-lead">
            I work at the intersection of <em>people, products, and technology.</em>
          </h2>
          <div className="v2-profile-copy">
            <p>
              I take unstructured problems, understand the process behind them, and create
              the clarity teams need to execute. That might mean improving an operation,
              shaping a product, training a team, or building the software itself.
            </p>
            <Link href="/about">Discover my approach <ArrowRight /></Link>
          </div>
        </div>
        <div className="v2-capabilities">
          <article><span>01</span><h3>Lead with clarity</h3><p>Align people, priorities, and daily operations around clear outcomes.</p></article>
          <article><span>02</span><h3>Shape the product</h3><p>Translate real business problems into useful workflows and product decisions.</p></article>
          <article><span>03</span><h3>Build the system</h3><p>Deliver reliable full-stack products with a practical engineering mindset.</p></article>
        </div>
      </section>

      <section className="v2-work" data-reveal>
        <div className="v2-work-heading">
          <div className="v2-section-label"><span>02</span><p>Selected work</p></div>
          <h2>Products with a reason to <em>exist.</em></h2>
          <p>Two products presented with clear status, ownership, and privacy boundaries.</p>
        </div>

        <div className="v2-projects">
          <Link className="v2-project v2-mech" href="/work#mech-hevan" style={{ "--stagger": "0ms" } as React.CSSProperties}>
            <div className="v2-project-meta"><span>01</span><p>Founder / Product / Engineering</p><ArrowUpRight /></div>
            <div className="v2-project-visual v2-private-preview v2-commerce-preview">
              <span>Under construction</span>
              <div>
                <strong>Mechanical-gear commerce, in development.</strong>
                <p>Building a specialised commerce platform for mechanical gear and enthusiast accessories in Nepal.</p>
              </div>
              <small>Independent product · Nepal</small>
            </div>
            <div className="v2-project-copy"><div><small>UNDER CONSTRUCTION</small><h3>Mech Hevan</h3></div><p>An independent specialised-commerce product currently being designed and developed for Nepal.</p></div>
          </Link>

          <Link className="v2-project v2-ems" href="/work#employee-management-system" style={{ "--stagger": "60ms" } as React.CSSProperties}>
            <div className="v2-project-meta"><span>02</span><p>Product planning / Engineering</p><ArrowUpRight /></div>
            <div className="v2-project-visual v2-private-preview">
              <span>Private internal project</span>
              <div>
                <strong>Recurring internal workflows, consolidated.</strong>
                <p>An internal system designed to consolidate recurring remote-team operations.</p>
              </div>
              <small>Interfaces and operational details withheld</small>
            </div>
            <div className="v2-project-copy"><div><small>PRIVATE INTERNAL PROJECT</small><h3>Employee Management System</h3></div><p>A role-controlled internal system presented without organisational data, metrics, or implementation details.</p></div>
          </Link>
        </div>

        <Link className="v2-all-work" href="/work">View project summaries <ArrowRight /></Link>
      </section>

      <section className="v2-experience" data-reveal>
        <div className="v2-section-label"><span>03</span><p>Experience</p></div>
        <div className="v2-experience-grid">
          <div>
            <span className="v2-live"><i />Now</span>
            <h2>Chief Operating Officer</h2>
            <p>Leaflet Digital Solutions Pvt. Ltd.</p>
          </div>
          <p>
            Overseeing business operations, project delivery, team coordination,
            internal workflows, and organisational execution within a technology company.
          </p>
          <Link href="/experience#experience-top" scroll>
            View the full journey <ArrowUpRight />
          </Link>
        </div>
        <div className="v2-experience-focus" aria-label="Current areas of responsibility">
          <span><b>01</b>Business operations</span>
          <span><b>02</b>Project delivery</span>
          <span><b>03</b>Team coordination</span>
          <span><b>04</b>Workflow improvement</span>
        </div>
      </section>

      <section className="v2-contact" data-reveal>
        <div>
          <span>Have an idea or opportunity?</span>
          <p>Let&apos;s make it real.</p>
          <small>Operations, product, engineering, or a meaningful opportunity—I&apos;m open to the conversation.</small>
        </div>
        <Link href="/contact">Start a conversation <ArrowUpRight /></Link>
      </section>

      <SiteFooter />
    </main>
  );
}
