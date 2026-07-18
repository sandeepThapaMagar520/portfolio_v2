export type Experience = {
  role: string;
  company: string;
  dates: string;
  location: string;
  summary: string;
  responsibilities: readonly string[];
  current: boolean;
  context: string;
  emphasis: "primary" | "standard" | "foundation";
};

export const experience: readonly Experience[] = [
  {
    role: "Chief Operating Officer",
    company: "Leaflet Digital Solutions Pvt. Ltd.",
    dates: "January 2025 — Present",
    location: "Kathmandu, Nepal",
    current: true,
    context: "Current role",
    emphasis: "primary",
    summary: "Coordinates day-to-day operations, delivery processes, team communication, and the internal structures that keep work accountable and visible.",
    responsibilities: [
      "Coordinated daily operations, priorities, and delivery follow-through",
      "Improved clarity around responsibilities and accountability",
      "Helped standardise internal workflows and reporting structures",
      "Established more consistent communication across ongoing work",
      "Supported recruitment, onboarding, and team training",
      "Identified operational gaps and practical process improvements",
      "Prepared operational context to support leadership decisions",
    ],
  },
  {
    role: "Founder and Tech Lead",
    company: "Mech Hevan",
    dates: "May 2024 — Present",
    location: "Kathmandu, Nepal",
    current: true,
    context: "Independent venture · Concurrent role",
    emphasis: "primary",
    summary: "Building an independent mechanical-keyboard commerce product that remains under construction, combining product, brand, technical, and operational planning.",
    responsibilities: [
      "Defined the product direction and explored the business model",
      "Researched the Nepalese mechanical-keyboard market",
      "Directed brand positioning and interface decisions",
      "Designed purchasing, enquiry, and catalogue workflows",
      "Implemented frontend and backend foundations",
      "Planned testing, deployment, and future operations",
    ],
  },
  {
    role: "Software Engineer",
    company: "Skill Rank",
    dates: "January 2024 — May 2025",
    location: "Remote",
    current: false,
    context: "Previous role",
    emphasis: "standard",
    summary: "Delivered full-stack application work across frontend and backend implementation while also supporting technical training and probation-period development.",
    responsibilities: [
      "Implemented frontend and backend application features",
      "Integrated APIs and worked with application databases",
      "Supported testing, deployment, and technical problem-solving",
      "Conducted technical training during probation periods",
      "Prepared practical learning plans and structured feedback",
      "Supported employee onboarding and probation evaluations",
    ],
  },
  {
    role: "Front Desk Assistant",
    company: "Westland Tour and Travels",
    dates: "February 2023 — November 2024",
    location: "Kathmandu, Nepal",
    current: false,
    context: "Previous role",
    emphasis: "foundation",
    summary: "Provided customer-facing administrative support across enquiries, form preparation, documents, and routine digital services.",
    responsibilities: [
      "Assisted customers with forms, passport and certificate-related services",
      "Supported document preparation, records, enquiries, and general administration",
    ],
  },
];
