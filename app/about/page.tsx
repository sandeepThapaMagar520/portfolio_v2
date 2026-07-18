import Image from "next/image";
import { PageIntro } from "../components/PageIntro";
import { SiteFooter } from "../components/SiteFooter";
import { SiteHeader } from "../components/SiteHeader";
import { principles } from "../content/about";
import { capabilityGroups } from "../content/site";

export default function AboutPage() {
  return (
    <main id="main-content" tabIndex={-1}>
      <SiteHeader />
      <PageIntro number="01" label="About" backdrop="ABOUT" context="People × Product × Technology" title={<>I work where people, products, and <em>technology meet.</em></>} copy="A multidisciplinary technology professional focused on making teams, products, and systems work better together." />
      <section className="about-page-story section-shell" data-reveal>
        <div className="about-page-image"><Image src="/assets/sandeep-portrait.webp" alt="Sandeep Thapa Magar seated outdoors" fill sizes="(max-width: 760px) calc(100vw - 36px), 45vw" /></div>
        <div>
          <p className="about-big">I&apos;m Sandeep Thapa Magar, a technology and operations professional based in Nepal.</p>
          <p>My experience covers business operations, remote team coordination, digital product planning, software development, employee training, and project delivery.</p>
          <p>I enjoy taking an unstructured problem, understanding how the process works, organising the people and responsibilities involved, and helping transform the idea into a practical system.</p>
          <div className="about-facts"><span><small>BASED IN</small>Kathmandu, Nepal</span><span><small>CURRENT ROLE</small>Chief Operating Officer</span><span><small>FOCUS</small>People × Product × Technology</span></div>
        </div>
      </section>
      <section className="principle-page section-shell" data-reveal>
        <div className="eyebrow"><span>01</span>Working principles</div>
        <div className="principles">
          {principles.map((item, index) => <article key={item.title} className={`principle principle-${index+1}`}><span>{item.number}</span><div><h3>{item.title}</h3><p>{item.description}</p><small>{item.note}</small></div><i>{item.symbol}</i></article>)}
        </div>
      </section>
      <section className="capabilities-page">
        <div className="section-shell">
          <div className="eyebrow"><span>02</span>Capabilities</div>
          <h2>A blend of leadership, product thinking, and technology.</h2>
          <div className="capability-groups" data-reveal>{capabilityGroups.map(({ title, skills }, index) => <article key={title} style={{ "--stagger": `${index * 55}ms` } as React.CSSProperties}><span>0{index+1}</span><h3>{title}</h3><div>{skills.map(skill=><i key={skill}>{skill}</i>)}</div></article>)}</div>
        </div>
      </section>
      <section className="education-section section-shell" data-reveal>
        <div className="eyebrow"><span>03</span>Education</div>
        <div className="education-grid">
          <article><span>COMPLETED</span><h3>BSc (Hons)<br />Computing</h3><p>Islington College<br />Kathmandu, Nepal</p><i>01</i></article>
          <article><span>COMPLETED</span><h3>School Leaving<br />Certification</h3><p>Oxford College of Engineering and Management<br />Gaidakot, Nawalpur</p><i>02</i></article>
        </div>
      </section>
      <section className="beyond-compact section-shell" data-reveal>
        <div><div className="eyebrow"><span>04</span>Beyond work</div><h2>More than projects and deadlines.</h2><p>Outside work, I recharge through travelling, photography, new places, music, mobile games, and conversations with interesting people.</p></div>
        <div className="interest-grid">{["Travelling","Photography","Exploring new places","Music","Mobile gaming","Networking"].map((item,i)=><span key={item}><b>0{i+1}</b>{item}</span>)}</div>
      </section>
      <SiteFooter />
    </main>
  );
}
