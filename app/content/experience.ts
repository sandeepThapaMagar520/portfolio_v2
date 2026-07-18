export type Experience = {
  role: string;
  company: string;
  dates: string;
  location: string;
  summary: string;
  responsibilities: readonly string[];
  current: boolean;
};

export const experience: readonly Experience[] = [
  { role: "Chief Operating Officer", company: "Leaflet Digital Solutions Pvt. Ltd.", dates: "January 2025 — Present", location: "Kathmandu, Nepal", current: true, summary: "Overseeing business operations, project delivery, team coordination, internal workflows, and organisational execution within a technology company.", responsibilities: ["Oversee daily business operations", "Coordinate teams and project delivery", "Improve internal workflows and procedures", "Monitor priorities, deadlines, and performance", "Support recruitment, onboarding, and training", "Coordinate management, clients, and stakeholders"] },
  { role: "Founder and Tech Lead", company: "Mech Hevan", dates: "May 2024 — Present", location: "Kathmandu, Nepal", current: true, summary: "Leading product strategy, branding, workflow design, business planning, and technical development for a specialised e-commerce platform.", responsibilities: ["Defined the business model and product direction", "Researched the Nepalese mechanical keyboard market", "Designed purchasing and product intake workflows", "Coordinated branding and user experience", "Built frontend and backend systems", "Managed testing and deployment"] },
  { role: "Software Engineer", company: "Skill Rank", dates: "January 2024 — May 2025", location: "Remote", current: false, summary: "Worked across software engineering, technical training, employee onboarding, performance evaluation, and development support.", responsibilities: ["Conducted technical training", "Prepared practical learning plans", "Monitored trainee performance", "Provided structured feedback", "Prepared probation evaluations", "Supported employee onboarding"] },
  { role: "Front Desk Assistant", company: "Westland Tour and Travels", dates: "February 2023 — November 2024", location: "Kathmandu, Nepal", current: false, summary: "Supported customers with online forms, digital services, enquiries, records, and daily front-desk operations.", responsibilities: ["Assisted with online forms", "Supported customer enquiries", "Maintained document records", "Provided basic computer support"] },
];
