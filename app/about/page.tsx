"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { SiteFooter, SiteNav, PageIntro } from "../components/SiteChrome";

const principles = [
  ["01", "Think in systems", "I look beyond individual tasks to understand how people, tools, and processes work together.", "See the whole system before changing one part."],
  ["02", "Build with purpose", "I believe technology should solve a meaningful problem and support a clear business objective.", "Useful beats impressive. Every time."],
  ["03", "Lead with clarity", "Clear responsibilities, honest communication, and structured execution help teams perform better.", "Good work starts with shared understanding."],
];

const groups = [
  ["Leadership & Operations", ["Operations Management", "Team Coordination", "Remote Team Leadership", "Strategic Thinking", "Performance Management", "Recruitment & Onboarding"]],
  ["Product & Delivery", ["Product Planning", "Requirements Analysis", "Workflow Design", "Feature Prioritisation", "Project Coordination", "Testing & Delivery"]],
  ["Training & Communication", ["Technical Training", "Employee Mentoring", "Learning Plans", "Client Communication", "Stakeholder Coordination", "Team Onboarding"]],
  ["Technology", ["Next.js", "Flutter", "Spring Boot", "PostgreSQL", "Supabase", "REST APIs", "Git & GitHub", "Cloudinary", "Render", "Vercel"]],
] as const;

export default function AboutPage() {
  return (
    <main>
      <SiteNav />
      <PageIntro number="02" label="About" title={<>I work where people, products, and <em>technology meet.</em></>} copy="A multidisciplinary technology professional focused on making teams, products, and systems work better together." />
      <section className="about-page-story section-shell">
        <div className="about-page-image"><Image src="/assets/sandeep-portrait.png" alt="Sandeep Thapa Magar in Kathmandu" fill sizes="45vw" /></div>
        <div>
          <p className="about-big">I&apos;m Sandeep Thapa Magar, a technology and operations professional based in Nepal.</p>
          <p>My experience covers business operations, remote team coordination, digital product planning, software development, employee training, and project delivery.</p>
          <p>I enjoy taking an unstructured problem, understanding how the process works, organising the people and responsibilities involved, and helping transform the idea into a practical system.</p>
          <div className="about-facts"><span><small>BASED IN</small>Kathmandu, Nepal</span><span><small>CURRENT ROLE</small>Chief Operating Officer</span><span><small>FOCUS</small>People × Product × Technology</span></div>
        </div>
      </section>
      <section className="principle-page section-shell">
        <div className="eyebrow"><span>01</span>Working principles</div>
        <div className="principles">
          {principles.map((item, index) => <motion.article key={item[1]} className={`principle principle-${index+1}`} initial={{opacity:0,y:20}} whileInView={{opacity:1,y:0}} viewport={{once:true}}><span>{item[0]}</span><div><h3>{item[1]}</h3><p>{item[2]}</p><small>{item[3]}</small></div><i>{index===0?"⌘":index===1?"◇":"→"}</i></motion.article>)}
        </div>
      </section>
      <section className="capabilities-page">
        <div className="section-shell">
          <div className="eyebrow"><span>02</span>Capabilities</div>
          <h2>A blend of leadership, product thinking, and technology.</h2>
          <div className="capability-groups">{groups.map(([group, skills], index) => <article key={group}><span>0{index+1}</span><h3>{group}</h3><div>{skills.map(skill=><i key={skill}>{skill}</i>)}</div></article>)}</div>
        </div>
      </section>
      <section className="education-section section-shell">
        <div className="eyebrow"><span>03</span>Education</div>
        <div className="education-grid">
          <article><span>2025</span><small>NOV 2022 — DEC 2025</small><h3>BSc (Hons)<br />Computing</h3><p>Islington College<br />Kathmandu, Nepal</p><i>01</i></article>
          <article><span>2022</span><small>COMPLETED 2022</small><h3>School Leaving<br />Certification</h3><p>Oxford College of Engineering and Management<br />Gaidakot, Nawalpur</p><i>02</i></article>
        </div>
      </section>
      <section className="beyond-compact section-shell">
        <div><div className="eyebrow"><span>04</span>Beyond work</div><h2>More than projects and deadlines.</h2><p>Outside work, I recharge through travelling, photography, new places, music, mobile games, and conversations with interesting people.</p></div>
        <div className="interest-grid">{["Travelling","Photography","Exploring new places","Music","Mobile gaming","Networking"].map((item,i)=><span key={item}><b>0{i+1}</b>{item}</span>)}</div>
      </section>
      <SiteFooter />
    </main>
  );
}

