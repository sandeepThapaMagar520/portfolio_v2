"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowDown, ArrowRight, ArrowUpRight, Download, Sparkles } from "lucide-react";
import { useState } from "react";
import { SiteFooter, SiteNav } from "./components/SiteChrome";

const reveal = {
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
};

export default function Home() {
  const reduceMotion = useReducedMotion();
  const [pointer, setPointer] = useState({ x: 50, y: 50 });

  const followPointer = (event: React.MouseEvent<HTMLElement>) => {
    if (reduceMotion) return;
    const box = event.currentTarget.getBoundingClientRect();
    setPointer({
      x: ((event.clientX - box.left) / box.width) * 100,
      y: ((event.clientY - box.top) / box.height) * 100,
    });
  };

  return (
    <main className="home-v2">
      <SiteNav />

      <section className="v2-hero" onMouseMove={followPointer}>
        <div className="v2-grid" />
        <div className="v2-cursor-glow" style={{ left: `${pointer.x}%`, top: `${pointer.y}%` }} />

        <div className="v2-hero-copy">
          <motion.div {...reveal} transition={{ duration: .55 }} className="v2-intro">
            <span><i /> Available for meaningful opportunities</span>
            <span>Kathmandu, Nepal</span>
          </motion.div>

          <motion.p {...reveal} transition={{ delay: .08, duration: .6 }} className="v2-hello">
            Hello, I&apos;m Sandeep Thapa Magar.
          </motion.p>

          <motion.h1 {...reveal} transition={{ delay: .14, duration: .7 }}>
            I turn ambitious ideas into <em>working systems.</em>
          </motion.h1>

          <motion.div {...reveal} transition={{ delay: .22, duration: .6 }} className="v2-hero-bottom">
            <p>
              Chief Operating Officer, product builder, and software engineer connecting
              people, strategy, and technology to move work forward.
            </p>
            <div className="v2-actions">
              <a className="v2-primary" href="/work">Explore my work <ArrowUpRight /></a>
              <a className="v2-secondary" href="/Sandeep-Thapa-Magar-CV.pdf" download><Download /> Download CV</a>
            </div>
          </motion.div>
        </div>

        <motion.div
          className="v2-portrait"
          initial={{ opacity: 0, scale: .95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ delay: .2, duration: .8 }}
        >
          <div className="v2-portrait-outline" />
          <div className="v2-portrait-photo">
            <Image
              src="/assets/sandeep-portrait.png"
              alt="Sandeep Thapa Magar overlooking Kathmandu"
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
        </motion.div>

        <div className="v2-side-note">
          <span>Chief Operating Officer</span>
          <span>Software Engineer</span>
          <span>Product Builder</span>
        </div>

        <a className="v2-scroll" href="#profile"><span>Scroll</span><ArrowDown /></a>
      </section>

      <section className="v2-ticker" aria-label="Professional disciplines">
        <div>
          {["Operations Leadership", "Product Strategy", "Software Engineering", "Remote Team Leadership", "Workflow Design", "Full-Stack Development"].map(item => (
            <span key={item}><Sparkles />{item}</span>
          ))}
        </div>
      </section>

      <section id="profile" className="v2-profile">
        <div className="v2-section-label"><span>01</span><p>Profile</p></div>
        <div className="v2-profile-main">
          <p className="v2-profile-lead">
            I work at the intersection of <em>people, products, and technology.</em>
          </p>
          <div className="v2-profile-copy">
            <p>
              I take unstructured problems, understand the process behind them, and create
              the clarity teams need to execute. That might mean improving an operation,
              shaping a product, training a team, or building the software itself.
            </p>
            <a href="/about">Discover my approach <ArrowRight /></a>
          </div>
        </div>
        <div className="v2-capabilities">
          <article><span>01</span><h3>Lead with clarity</h3><p>Align people, priorities, and daily operations around clear outcomes.</p></article>
          <article><span>02</span><h3>Shape the product</h3><p>Translate real business problems into useful workflows and product decisions.</p></article>
          <article><span>03</span><h3>Build the system</h3><p>Deliver reliable full-stack products with a practical engineering mindset.</p></article>
        </div>
      </section>

      <section className="v2-work">
        <div className="v2-work-heading">
          <div className="v2-section-label"><span>02</span><p>Selected work</p></div>
          <h2>Products with a reason to <em>exist.</em></h2>
          <p>Two products shaped from business idea to working software.</p>
        </div>

        <div className="v2-projects">
          <a className="v2-project v2-mech" href="/work#mech-hevan">
            <div className="v2-project-meta"><span>01</span><p>Founder & Tech Lead</p><ArrowUpRight /></div>
            <div className="v2-project-visual">
              <div className="v2-browser-bar"><i /><i /><i /><span>mechhevan.com</span></div>
              <div className="v2-mech-type">THE<br />PERFECT <em>FEEL.</em></div>
              <div className="v2-keyboard">{Array.from({ length: 42 }).map((_, i) => <i key={i} />)}</div>
            </div>
            <div className="v2-project-copy"><div><small>FULL-STACK E-COMMERCE</small><h3>Mech Hevan</h3></div><p>A specialised commerce platform for Nepal&apos;s mechanical keyboard community.</p></div>
          </a>

          <a className="v2-project v2-ems" href="/work#employee-management-system">
            <div className="v2-project-meta"><span>02</span><p>Product Planner & Full-Stack Developer</p><ArrowUpRight /></div>
            <div className="v2-project-visual">
              <div className="v2-dashboard-nav"><strong>STM<span>WORK</span></strong><i>Overview</i><i>People</i><i>Projects</i></div>
              <div className="v2-dashboard-body">
                <small>MONDAY, 08:42</small><h4>Good morning, Sandeep.</h4>
                <div className="v2-dash-metrics"><i /><i /><i /></div>
                <div className="v2-dash-chart">{[45,70,53,88,62,91,76].map((height, i) => <i key={i} style={{ height: `${height}%` }} />)}</div>
              </div>
            </div>
            <div className="v2-project-copy"><div><small>WORKFORCE OPERATIONS</small><h3>Employee Management System</h3></div><p>One structured platform for the daily operations of remote teams.</p></div>
          </a>
        </div>

        <a className="v2-all-work" href="/work">View project summaries <ArrowRight /></a>
      </section>

      <section className="v2-experience">
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
          <a href="/experience">View the full journey <ArrowUpRight /></a>
        </div>
        <div className="v2-role-words">
          <span>Lead</span>
          <span>Plan</span>
          <span>Build</span>
          <span>Enable</span>
        </div>
      </section>

      <section className="v2-contact">
        <div><span>Have an idea or opportunity?</span><p>Let&apos;s make it real.</p></div>
        <a href="/contact">Start a conversation <ArrowUpRight /></a>
      </section>

      <SiteFooter />
    </main>
  );
}
