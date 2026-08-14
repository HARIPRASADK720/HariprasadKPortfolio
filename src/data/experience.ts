export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  period: string;
  year: string;
  location?: string;
  highlightSummary: string;
  projects: {
    name: string;
    description: string;
    features?: string[];
    frontend: string;
    backend: string;
    database?: string;
    stack: string[];
  }[];
  keyAchievements: string[];
  techStack: string[];
}

export const experiences: ExperienceItem[] = [
  {
    id: "kavora",
    role: "Java Full Stack Engineer Intern",
    company: "Kavora Tech Groups",
    period: "Jul 2026 – Aug 2026",
    year: "2026",
    highlightSummary: "Engineered full-stack solutions across EdTech, e-commerce, and freelancer automation platforms using Spring Boot and React ecosystems.",
    projects: [
      {
        name: "Nursery Web Platform",
        description: "Interactive e-commerce and catalog system for botanical nursery operations.",
        frontend: "React.js",
        backend: "Java, Spring Boot, Hibernate",
        database: "MySQL",
        stack: ["React.js", "Java", "Spring Boot", "Hibernate", "MySQL", "REST APIs"]
      },
      {
        name: "EdTech Learning Platform",
        description: "High-performance educational portal with dynamic course delivery and student interfaces.",
        frontend: "Next.js",
        backend: "Java, Spring Boot, Hibernate",
        database: "MySQL",
        stack: ["Next.js", "Java", "Spring Boot", "Hibernate", "MySQL", "REST APIs"]
      },
      {
        name: "RedNode Automations",
        description: "Portfolio and automation workflow platform engineered for freelancers.",
        frontend: "Modern Web UI",
        backend: "Java, Spring Boot, Hibernate",
        database: "MySQL",
        stack: ["Java", "Spring Boot", "Hibernate", "MySQL", "REST APIs"]
      }
    ],
    keyAchievements: [
      "Engineered end-to-end REST APIs with Spring Boot and Hibernate ORM for relational persistence in MySQL.",
      "Delivered performant frontends across React.js and Next.js tailored to specific domain workflows."
    ],
    techStack: ["Java", "Spring Boot", "Hibernate", "MySQL", "React.js", "Next.js", "REST APIs"]
  },
  {
    id: "jspiders",
    role: "Java Full Stack Developer Intern",
    company: "JSpiders, Basavanagudi",
    period: "Jan 2026 – Jun 2026",
    year: "2026",
    highlightSummary: "Spearheaded modular OOP architecture, query optimization, and enterprise service management systems.",
    projects: [
      {
        name: "Car Service Management System",
        description: "Enterprise operations platform handling end-to-end vehicle service lifecycles.",
        features: ["Booking management", "Real-time service tracking", "Automated billing engine"],
        frontend: "Next.js",
        backend: "Java, Spring Boot, Hibernate",
        database: "MySQL",
        stack: ["Next.js", "Java", "Spring Boot", "Hibernate", "MySQL"]
      }
    ],
    keyAchievements: [
      "Built modular Java service components using OOP principles, reducing code redundancy by ~30%.",
      "Optimized complex SQL queries with strategic indexing and 3NF database normalization for high-throughput data retrieval."
    ],
    techStack: ["Java", "Spring Boot", "Hibernate", "MySQL", "Next.js", "OOP", "SQL Indexing", "3NF Normalization"]
  },
  {
    id: "uniconverge",
    role: "Full Stack Development Intern",
    company: "Uniconverge Technologies",
    period: "Feb 2026 – Apr 2026",
    year: "2026",
    highlightSummary: "Developed responsive Content Management System with streamlined asset delivery and rendering speeds.",
    projects: [
      {
        name: "Content Management System (CMS)",
        description: "Dynamic publishing platform for blog management and content workflows.",
        features: ["Article creation & rich text editing", "Multi-tag categorization", "Instant publishing pipeline"],
        frontend: "HTML5, CSS3, JavaScript",
        backend: "Web Architecture",
        stack: ["HTML5", "CSS3", "JavaScript", "Frontend Optimization"]
      }
    ],
    keyAchievements: [
      "Engineered lightweight, responsive interfaces using clean semantic HTML5, CSS3, and JavaScript.",
      "Reduced overall page load time by 25% through DOM optimization and asset minification."
    ],
    techStack: ["HTML5", "CSS3", "JavaScript", "DOM Optimization", "Web Performance"]
  },
  {
    id: "edunet",
    role: "MERN Stack Developer Intern",
    company: "Next Gen Employability Program, Edunet Foundation",
    period: "Sep 2025 – Nov 2025",
    year: "2025",
    highlightSummary: "Constructed full-featured grocery e-commerce platform with authenticated REST APIs and NoSQL cloud persistence.",
    projects: [
      {
        name: "Grocery Store E-Commerce Web Application",
        description: "Full-cycle digital storefront for grocery shopping, ordering, and cart transactions.",
        features: ["Real-time product catalog & filtering", "Persistent cart management", "Secure order checkout", "User authentication"],
        frontend: "React.js",
        backend: "Node.js, Express.js",
        database: "MongoDB Atlas",
        stack: ["MongoDB", "Express.js", "React", "Node.js", "RESTful APIs"]
      }
    ],
    keyAchievements: [
      "Designed and implemented 10+ secure RESTful API endpoints with token authentication.",
      "Integrated MongoDB Atlas for real-time cloud data persistence and schema handling."
    ],
    techStack: ["MongoDB", "Express.js", "React", "Node.js", "MongoDB Atlas", "REST APIs"]
  }
];
