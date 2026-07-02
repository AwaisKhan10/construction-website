export const careers = [
  {
    id: "1",
    title: "Senior Structural Engineer",
    department: "engineering" as const,
    location: "Frankfurt, Germany",
    type: "Full-time",
    description: "Lead structural design for major commercial and infrastructure projects.",
  },
  {
    id: "2",
    title: "Project Manager",
    department: "management" as const,
    location: "Paris, France",
    type: "Full-time",
    description: "Oversee end-to-end project delivery for residential and commercial developments.",
  },
  {
    id: "3",
    title: "Site Supervisor",
    department: "operations" as const,
    location: "Dubai, UAE",
    type: "Full-time",
    description: "Manage on-site construction activities ensuring safety and quality standards.",
  },
  {
    id: "4",
    title: "BIM Coordinator",
    department: "design" as const,
    location: "Munich, Germany",
    type: "Full-time",
    description: "Coordinate BIM workflows and digital twin implementation across projects.",
  },
  {
    id: "5",
    title: "Safety Officer",
    department: "operations" as const,
    location: "Brussels, Belgium",
    type: "Full-time",
    description: "Implement and monitor safety programs across active construction sites.",
  },
  {
    id: "6",
    title: "Civil Engineer",
    department: "engineering" as const,
    location: "Hamburg, Germany",
    type: "Full-time",
    description: "Design and oversee infrastructure projects including roads and bridges.",
  },
];

export type CareerDepartment = (typeof careers)[number]["department"];

export const clientLogos = [
  "Horizon Group",
  "Emirates Properties",
  "FTA France",
  "Bavaria Holdings",
  "Global Infra",
  "Metro Build",
  "Skyline Corp",
  "Urban Dev",
];
