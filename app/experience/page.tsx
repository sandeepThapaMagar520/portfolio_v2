"use client";

import { Check } from "lucide-react";
import { motion } from "framer-motion";
import { PageIntro, SiteFooter, SiteNav } from "../components/SiteChrome";

const experience = [
  ["Chief Operating Officer","Leaflet Digital Solutions Pvt. Ltd.","January 2025 — Present","Kathmandu, Nepal","Overseeing business operations, project delivery, team coordination, internal workflows, and organisational execution within a technology company.",["Oversee daily business operations","Coordinate teams and project delivery","Improve internal workflows and procedures","Monitor priorities, deadlines, and performance","Support recruitment, onboarding, and training","Coordinate management, clients, and stakeholders"]],
  ["Founder and Tech Lead","Mech Hevan","May 2024 — Present","Kathmandu, Nepal","Leading product strategy, branding, workflow design, business planning, and technical development for a specialised e-commerce platform.",["Defined the business model and product direction","Researched the Nepalese mechanical keyboard market","Designed purchasing and product intake workflows","Coordinated branding and user experience","Built frontend and backend systems","Managed testing and deployment"]],
  ["Software Engineer","Skill Rank","January 2024 — May 2025","Remote","Worked across software engineering, technical training, employee onboarding, performance evaluation, and development support.",["Conducted technical training","Prepared practical learning plans","Monitored trainee performance","Provided structured feedback","Prepared probation evaluations","Supported employee onboarding"]],
  ["Front Desk Assistant","Westland Tour and Travels","February 2023 — November 2024","Kathmandu, Nepal","Supported customers with online forms, digital services, enquiries, records, and daily front-desk operations.",["Assisted with online forms","Supported customer enquiries","Maintained document records","Provided basic computer support"]],
] as const;

export default function ExperiencePage() {
  return (
    <main>
      <SiteNav />
      <PageIntro number="03" label="Experience" title={<>Leadership, technology, and <em>execution.</em></>} copy="A career shaped by taking responsibility, enabling people, improving systems, and delivering practical results." />
      <section className="experience-page section-shell">
        <div className="timeline">
          <div className="timeline-rail"><i /></div>
          {experience.map((job,index)=><motion.article key={job[0]} className={index<2?"current":""} initial={{opacity:0,y:30}} whileInView={{opacity:1,y:0}} viewport={{once:true,margin:"-12%"}}>
            <div className="timeline-marker"><i /><span>0{index+1}</span></div>
            <div className="job-date"><span>{job[2]}</span><small>{job[3]}</small></div>
            <div className="job-body">{index<2&&<span className="current-label"><i />Current</span>}<h3>{job[0]}</h3><h4>{job[1]}</h4><p>{job[4]}</p><ul>{job[5].map(point=><li key={point}><Check size={14}/>{point}</li>)}</ul></div>
          </motion.article>)}
        </div>
      </section>
      <section className="experience-cta"><span>Want the complete overview?</span><h2>Download my CV.</h2><a href="/Sandeep-Thapa-Magar-CV.pdf" download>Download PDF</a></section>
      <SiteFooter />
    </main>
  );
}

