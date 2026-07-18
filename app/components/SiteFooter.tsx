import { Github, Instagram, Linkedin, Mail } from "lucide-react";
import { profile } from "../content/site";

export function SiteFooter() {
  return (
    <footer>
      <span>Designed and built by Sandeep Thapa Magar.</span>
      <span>© {new Date().getFullYear()} · {profile.location}</span>
      <div>
        <a href={`mailto:${profile.email}`} aria-label={`Email Sandeep Thapa Magar at ${profile.email}`}><Mail aria-hidden="true" /></a>
        <a href={profile.social.linkedin} target="_blank" rel="noopener noreferrer" aria-label="Visit Sandeep Thapa Magar on LinkedIn (opens in a new tab)"><Linkedin aria-hidden="true" /></a>
        <a href={profile.social.github} target="_blank" rel="noopener noreferrer" aria-label="View Sandeep Thapa Magar’s GitHub profile (opens in a new tab)"><Github aria-hidden="true" /></a>
        <a href={profile.social.instagram} target="_blank" rel="noopener noreferrer" aria-label="Visit Sandeep Thapa Magar on Instagram (opens in a new tab)"><Instagram aria-hidden="true" /></a>
      </div>
    </footer>
  );
}
