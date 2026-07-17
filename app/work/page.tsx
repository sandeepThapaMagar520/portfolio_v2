"use client";

import { ArrowUpRight, Check } from "lucide-react";
import { PageIntro, SiteFooter, SiteNav } from "../components/SiteChrome";

const projects = [
  {
    id:"mech-hevan", number:"01", name:"Mech Hevan", type:"Full-Stack E-commerce Platform", role:"Founder and Tech Lead",
    description:"A specialised e-commerce platform focused on mechanical keyboards, mice, keycaps, switches, deskmats, and related accessories for the Nepalese market.",
    summary:"I founded Mech Hevan and led it from the initial business idea through market research, branding, product planning, operational workflow design, full-stack development, security, testing, and deployment.",
    contributions:["Defined the business model and product direction","Researched the mechanical keyboard market in Nepal","Planned purchasing, intake, refurbishment, and resale workflows","Coordinated branding and user experience","Built frontend and backend systems","Implemented authentication and media management"],
    stack:["Next.js","Spring Boot","PostgreSQL","Supabase","Cloudinary","Render","Vercel"], link:"https://mech-haven-frontend.vercel.app"
  },
  {
    id:"employee-management-system", number:"02", name:"Employee Management System", type:"Full-Stack HR and Workforce Management Platform", role:"Product Planner and Full-Stack Developer",
    description:"A full-stack employee management platform designed to organise and support the daily operations of remote teams.",
    summary:"Remote teams often manage attendance, work updates, leave, projects, holidays, and reporting through disconnected tools. This platform combines those workflows into one secure, structured system.",
    contributions:["Employee attendance and work session tracking","Daily work logs and project monitoring","Leave requests and holiday management","Administrative reporting","User and role management","Role-based access control and secure authentication"],
    stack:["Next.js","Spring Boot","PostgreSQL","Supabase","Render","Vercel"], link:null
  }
] as const;

function Visual({type}:{type:"commerce"|"dashboard"}) {
  if(type==="commerce") return <div className="work-visual commerce-work"><div className="browser-top"><i/><i/><i/><span>mechhevan.com</span></div><div className="commerce-word">MECH<br/><em>HEVAN</em></div><div className="large-keyboard">{Array.from({length:48}).map((_,i)=><i key={i}/>)}</div><small>Specialised commerce for enthusiasts.</small></div>;
  return <div className="work-visual dashboard-work"><aside><strong>STM<span>WORK</span></strong>{["Overview","People","Projects","Reports"].map(x=><i key={x}>{x}</i>)}</aside><section><div className="work-dash-title"><small>WORKSPACE OVERVIEW</small><strong>Good morning, Sandeep.</strong></div><div className="work-metrics"><i/><i/><i/></div><div className="work-chart">{[45,72,54,86,65,91,78].map((h,i)=><i key={i} style={{height:`${h}%`}}/>)}</div></section></div>;
}

export default function WorkPage() {
  return (
    <main>
      <SiteNav />
      <PageIntro number="01" label="Selected Work" title={<>Products built around <em>real problems.</em></>} copy="Two practical digital products shaped from both operational and technical perspectives—kept concise, focused, and honest." />
      <section className="work-page section-shell">
        {projects.map((project,index)=><article id={project.id} className="work-summary" key={project.id}>
          <div className="work-summary-top"><span>{project.number}</span><b>{project.type}</b><small>{project.role}</small></div>
          <div className="work-summary-grid">
            <div className="work-copy"><h2>{project.name}</h2><p className="lead">{project.description}</p><p>{project.summary}</p><div className="work-contributions">{project.contributions.map(item=><span key={item}><Check size={14}/>{item}</span>)}</div>{project.link&&<a href={project.link} target="_blank" rel="noreferrer">Visit website <ArrowUpRight/></a>}</div>
            <div><Visual type={index===0?"commerce":"dashboard"}/><div className="work-stack">{project.stack.map(item=><span key={item}>{item}</span>)}</div></div>
          </div>
        </article>)}
      </section>
      <section className="work-end"><p>Interested in how I approach products and operations?</p><a href="/contact">Let&apos;s talk <ArrowUpRight/></a></section>
      <SiteFooter />
    </main>
  );
}

