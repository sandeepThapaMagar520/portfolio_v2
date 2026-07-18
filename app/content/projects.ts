export type Project = {
  id: string;
  number: string;
  name: string;
  type: string;
  audience: string;
  positioning: string;
  overview: string;
  problem: string;
  role: string;
  responsibilities: readonly string[];
  capabilities: readonly string[];
  decisions: readonly string[];
  stack: readonly string[];
  status: string;
  link: string | null;
  screenshot: { src: string; alt: string; caption: string } | null;
};

export const projects: readonly Project[] = [
  {
    id: "mech-hevan", number: "01", name: "Mech Hevan", type: "Specialised commerce platform",
    audience: "Mechanical-keyboard customers in Nepal",
    positioning: "A specialised commerce platform for mechanical keyboards and related gear, designed for the Nepalese market.",
    overview: "Mech Hevan brings new and certified pre-owned keyboards, mice, keycaps, switches, deskmats, and related gear into one focused purchasing experience.",
    problem: "Enthusiasts need a clearer way to browse specialised gear, understand product condition and variants, and move through buying, selling, or product-request workflows within the local market.",
    role: "I led the product direction and developed the platform across frontend, backend, data modelling, deployment, administrative workflows, and security-focused improvements.",
    responsibilities: ["Product and business-flow planning", "Frontend and backend development", "Catalog and product-variant modelling", "Customer and administrative workflows", "Authentication and media architecture", "Cloud deployment and technical direction"],
    capabilities: ["New and certified pre-owned catalog", "Category and product-detail browsing", "Cart and customer account flow", "Sell-your-gear workflow", "Keyboard request workflow", "Catalog administration"],
    decisions: ["Separated new and certified pre-owned inventory so condition is clear before purchase.", "Structured the catalog around categories, product details, and variants rather than a generic listing page.", "Kept buying, selling, and product-request journeys distinct while sharing one product platform."],
    stack: ["Next.js", "Spring Boot", "PostgreSQL", "Supabase", "Cloudinary", "Render", "Vercel"],
    status: "Independent commerce product for Nepalese mechanical-keyboard customers.",
    link: "https://mech-haven-frontend.vercel.app",
    screenshot: { src: "/assets/projects/mech-hevan-homepage.webp", alt: "Mech Hevan public homepage showing its mechanical-keyboard store navigation, hero message, featured keyboard and shopping actions.", caption: "Public homepage · captured from the live deployment in July 2026" },
  },
  {
    id: "employee-management-system", number: "02", name: "Employee Management System", type: "Internal operations platform",
    audience: "Remote teams and their administrators",
    positioning: "An internal employee and operations management platform designed to support attendance, project coordination, work logging, leave handling, and administrative reporting for remote teams.",
    overview: "The Employee Management System brings recurring remote-team operations into a single workflow instead of spreading attendance, projects, work updates, leave, and reporting across disconnected tools.",
    problem: "Remote operations become difficult to follow when attendance sessions, project activity, daily work logs, leave requests, holidays, and reporting are maintained separately.",
    role: "I contributed to the product structure, operational workflows, full-stack development, deployment, and ongoing improvement of the system.",
    responsibilities: ["Workflow planning and requirements definition", "Frontend and backend development", "Attendance and work-log logic", "Project and leave workflow implementation", "Administrative reporting", "Authentication, access control, and deployment"],
    capabilities: ["Employee and role management", "Attendance start and end sessions", "Project coordination", "Daily work logs", "Leave and holiday management", "Administrative summaries and reporting"],
    decisions: ["Organised attendance as explicit work sessions so start and end activity can be followed consistently.", "Connected projects with daily work logs to give operational updates a clear work context.", "Separated employee actions from administrative reporting through role-based access."],
    stack: ["Next.js", "Spring Boot", "PostgreSQL", "Supabase", "Render", "Vercel"],
    status: "Private internal platform. No public demo or repository is linked.",
    link: null, screenshot: null,
  },
];
