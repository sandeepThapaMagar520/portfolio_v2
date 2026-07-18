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
  solution: string;
  currentState: string;
  privacyNote: string | null;
  proof: readonly { label: string; value: string }[];
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
    audience: "Nepal’s mechanical-keyboard and enthusiast-accessories market",
    positioning: "An independent specialised-commerce platform currently being designed and developed for Nepal.",
    overview: "An independent specialised-commerce platform being developed for Nepal’s mechanical-keyboard and enthusiast-accessories market.",
    problem: "Enthusiast products and trusted pre-owned mechanical gear can be difficult to discover and purchase through a focused local platform.",
    role: "Founder, product designer, and full-stack developer.",
    solution: "Designing and developing a platform intended to support new products, selected pre-owned gear, product discovery, customer enquiries, and administrative catalogue workflows.",
    currentState: "The product is actively under development. Features, catalogue content, branding, and operational workflows are still being refined before public launch.",
    privacyNote: null,
    proof: [
      { label: "Status", value: "Under construction" },
      { label: "Role", value: "Founder / Product / Engineering" },
      { label: "Market", value: "Nepal" },
      { label: "Type", value: "Independent product" },
    ],
    responsibilities: ["Owned product and business-flow planning", "Designed the customer and administrative experience", "Implemented frontend and backend foundations", "Designed catalogue and product-variant models", "Implemented customer enquiry workflows", "Maintained deployment and technical direction"],
    capabilities: ["New and selected pre-owned catalogue", "Category and product discovery", "Customer account and cart foundations", "Sell-your-gear workflow", "Product-request workflow", "Catalogue administration"],
    decisions: ["Designed new and selected pre-owned inventory as distinct catalogue states so condition can remain clear.", "Structured the catalogue around categories, product details, and variants instead of a generic listing page.", "Kept purchasing, selling, and product-request journeys distinct while sharing one platform foundation."],
    stack: ["Next.js", "Spring Boot", "PostgreSQL", "Supabase", "Cloudinary", "Render", "Vercel"],
    status: "Under construction",
    link: "https://mech-haven-frontend.vercel.app",
    screenshot: null,
  },
  {
    id: "employee-management-system", number: "02", name: "Employee Management System", type: "Internal operations platform",
    audience: "Private internal use",
    positioning: "A privacy-conscious internal system designed to consolidate recurring remote-team operations.",
    overview: "A role-controlled internal platform created to bring recurring remote-team workflows into one organised system.",
    problem: "Attendance, work logs, project coordination, leave, holidays, and reporting were handled through separate processes.",
    role: "Product planning, workflow design, and software development.",
    solution: "A central internal system that supports attendance sessions, work logs, project coordination, leave and holiday management, and administrative reporting.",
    currentState: "Maintained as a private internal system. Public access, product interfaces, and operational details are intentionally unavailable.",
    privacyNote: "Detailed interfaces, organisational data, internal metrics, and implementation information are intentionally not shown.",
    proof: [
      { label: "Status", value: "Internal" },
      { label: "Role", value: "Product planning / Engineering" },
      { label: "Visibility", value: "Private" },
      { label: "Type", value: "Operational system" },
    ],
    responsibilities: ["Designed high-level workflow requirements", "Co-designed the product structure", "Implemented and maintained the private system"],
    capabilities: ["Employee and role management", "Attendance start and end sessions", "Project coordination", "Daily work logs", "Leave and holiday management", "Administrative summaries and reporting"],
    decisions: ["Organised recurring attendance activity as explicit sessions.", "Connected project coordination with work-log context.", "Separated standard and administrative actions through role-controlled access."],
    stack: ["Technology details intentionally withheld"],
    status: "Internal system",
    link: null, screenshot: null,
  },
];
