export const navigation = [
  { number: "00", label: "Home", href: "/" },
  { number: "01", label: "About", href: "/about" },
  { number: "02", label: "Work", href: "/work" },
  { number: "03", label: "Experience", href: "/experience" },
  { number: "04", label: "Contact", href: "/contact" },
] as const;

export const profile = {
  email: "sandeepthapa520@gmail.com",
  location: "Kathmandu, Nepal",
  cv: "/Sandeep-Thapa-Magar-CV.pdf",
  whatsapp: "https://wa.me/9779864057456",
  social: {
    linkedin: "https://www.linkedin.com/in/sandeep-thapa-magar-a907a3282/",
    github: "https://github.com/sandeepThapaMagar520",
    instagram: "https://www.instagram.com/sandeep_thapa5/",
  },
} as const;

export const capabilityGroups = [
  {
    title: "Leadership & Operations",
    evidence: "Coordinates daily operations, delivery follow-through, internal workflows, reporting structures, onboarding, and cross-team communication.",
    skills: ["Operations Management", "Team Coordination", "Workflow Improvement", "Accountability", "Reporting", "Recruitment & Onboarding"],
  },
  {
    title: "Product & Delivery",
    evidence: "Shapes requirements, product workflows, priorities, interface decisions, testing, and delivery planning—including an independent product in development.",
    skills: ["Product Planning", "Requirements Analysis", "Workflow Design", "Feature Prioritisation", "Project Coordination", "Testing & Delivery"],
  },
  {
    title: "Training & Communication",
    evidence: "Has prepared practical learning plans, conducted technical training, supported onboarding, and provided structured probation feedback.",
    skills: ["Technical Training", "Learning Plans", "Structured Feedback", "Client Communication", "Stakeholder Coordination", "Team Onboarding"],
  },
  {
    title: "Technology",
    evidence: "Implements full-stack applications across interfaces, APIs, databases, testing, source control, and cloud deployment.",
    skills: ["Next.js", "Flutter", "Spring Boot", "PostgreSQL", "Supabase", "REST APIs", "Git & GitHub", "Render", "Vercel"],
  },
] as const;
