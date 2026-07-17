"use client";

import { ArrowUpRight, Github, Linkedin, Mail, MapPin } from "lucide-react";
import { useState } from "react";
import { SiteFooter, SiteNav } from "../components/SiteChrome";

export default function ContactPage() {
  const [pointer,setPointer]=useState({x:50,y:50});
  return (
    <main>
      <SiteNav />
      <section className="contact-page" onMouseMove={e=>{const r=e.currentTarget.getBoundingClientRect();setPointer({x:(e.clientX-r.left)/r.width*100,y:(e.clientY-r.top)/r.height*100})}}>
        <div className="contact-page-orbit" style={{left:`${pointer.x}%`,top:`${pointer.y}%`}}/>
        <div className="eyebrow"><span>05</span>Contact</div>
        <h1>Have an idea, opportunity, or <em>problem worth solving?</em></h1>
        <div className="contact-page-grid">
          <div><p>I&apos;m open to meaningful conversations around leadership, digital products, software development, operations, and professional opportunities.</p><a className="contact-email" href="mailto:sandeepthapa520@gmail.com">sandeepthapa520@gmail.com <ArrowUpRight/></a></div>
          <div className="contact-cards">
            <a href="mailto:sandeepthapa520@gmail.com"><Mail/><span><small>Email</small>Write to me</span><ArrowUpRight/></a>
            <a href="https://www.linkedin.com/in/sandeep-thapa-magar-a907a3282/" target="_blank" rel="noreferrer"><Linkedin/><span><small>LinkedIn</small>Sandeep Thapa Magar</span><ArrowUpRight/></a>
            <a href="https://github.com/sandeepThapaMagar520" target="_blank" rel="noreferrer"><Github/><span><small>GitHub</small>sandeepThapaMagar520</span><ArrowUpRight/></a>
            <div><MapPin/><span><small>Location</small>Kathmandu, Nepal</span></div>
          </div>
        </div>
      </section>
      <SiteFooter />
    </main>
  );
}
