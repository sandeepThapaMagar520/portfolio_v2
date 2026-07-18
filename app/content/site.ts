export const navigation = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Work", href: "/work" },
  { label: "Experience", href: "/experience" },
  { label: "Contact", href: "/contact" },
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
  { title: "Leadership & Operations", skills: ["Operations Management", "Team Coordination", "Remote Team Leadership", "Strategic Thinking", "Performance Management", "Recruitment & Onboarding"] },
  { title: "Product & Delivery", skills: ["Product Planning", "Requirements Analysis", "Workflow Design", "Feature Prioritisation", "Project Coordination", "Testing & Delivery"] },
  { title: "Training & Communication", skills: ["Technical Training", "Employee Mentoring", "Learning Plans", "Client Communication", "Stakeholder Coordination", "Team Onboarding"] },
  { title: "Technology", skills: ["Next.js", "Flutter", "Spring Boot", "PostgreSQL", "Supabase", "REST APIs", "Git & GitHub", "Cloudinary", "Render", "Vercel"] },
] as const;
