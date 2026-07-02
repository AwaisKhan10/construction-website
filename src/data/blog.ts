export const blogPosts = [
  {
    slug: "sustainable-construction-2025",
    title: "The Future of Sustainable Construction in 2025",
    excerpt: "Exploring green building technologies and carbon-neutral construction methods reshaping the industry.",
    category: "industry" as const,
    date: "2025-06-15",
    image: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=800&q=80",
    author: "Dr. Marcus Weber",
  },
  {
    slug: "skyline-tower-completion",
    title: "Skyline Tower Reaches Full Height",
    excerpt: "Our flagship Frankfurt project marks a major milestone with the topping-out ceremony.",
    category: "projects" as const,
    date: "2025-05-28",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80",
    author: "Sarah Mitchell",
  },
  {
    slug: "bim-technology-advancements",
    title: "BIM Technology: Transforming Project Delivery",
    excerpt: "How Building Information Modeling is revolutionizing construction planning and execution.",
    category: "engineering" as const,
    date: "2025-05-10",
    image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&q=80",
    author: "James Chen",
  },
  {
    slug: "meridian-expansion-europe",
    title: "Meridian Build Group Expands European Operations",
    excerpt: "Opening new regional headquarters to serve growing demand across Central Europe.",
    category: "news" as const,
    date: "2025-04-22",
    image: "https://images.unsplash.com/photo-1577495508048-b590073f7e33?w=800&q=80",
    author: "Alexander Hartmann",
  },
];

export type BlogCategory = (typeof blogPosts)[number]["category"];
