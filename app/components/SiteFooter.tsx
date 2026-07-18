import { Github, Instagram, Linkedin, Mail } from "lucide-react";
import { profile } from "../content/site";

export function SiteFooter() {
  return (
    <footer>
      <span>Designed and built by Sandeep Thapa Magar.</span>
      <span>© {new Date().getFullYear()} · {profile.location}</span>
      <div>
        <a href={`mailto:${profile.email}`} aria-label="Email"><Mail aria-hidden="true" /></a>
        <a href={profile.social.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn (opens in a new tab)"><Linkedin aria-hidden="true" /></a>
        <a href={profile.social.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub (opens in a new tab)"><Github aria-hidden="true" /></a>
        <a href={profile.social.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram (opens in a new tab)"><Instagram aria-hidden="true" /></a>
      </div>
    </footer>
  );
}
