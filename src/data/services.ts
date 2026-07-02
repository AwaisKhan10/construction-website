export const serviceKeys = [
  "commercial",
  "residential",
  "infrastructure",
  "road",
  "bridge",
  "industrial",
  "management",
  "engineering",
  "designBuild",
  "renovation",
] as const;

export type ServiceKey = (typeof serviceKeys)[number];

export const serviceIcons: Record<ServiceKey, string> = {
  commercial: "Building2",
  residential: "Home",
  infrastructure: "Landmark",
  road: "Route",
  bridge: "GitBranch",
  industrial: "Factory",
  management: "ClipboardList",
  engineering: "Ruler",
  designBuild: "PenTool",
  renovation: "Hammer",
};

export const serviceImages: Record<ServiceKey, string> = {
  commercial: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80",
  residential: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800&q=80",
  infrastructure: "https://images.unsplash.com/photo-1513828583688-c52646db42da?w=800&q=80",
  road: "https://images.unsplash.com/photo-1590644365607-1c4a519a1e2c?w=800&q=80",
  bridge: "https://images.unsplash.com/photo-1513828583688-c52646db42da?w=800&q=80",
  industrial: "https://images.unsplash.com/photo-1581094790869-4e0a8c4c4b8a?w=800&q=80",
  management: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=800&q=80",
  engineering: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&q=80",
  designBuild: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=800&q=80",
  renovation: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?w=800&q=80",
};
