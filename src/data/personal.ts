export interface PersonalInfo {
  name: string;
  shortName: string;
  role: string;
  titles: string[];
  contact: {
    phone: string;
    email: string;
    linkedin: string;
    github: string;
    location: string;
  };
  summary: {
    headline: string;
    narrative: string[];
    pillars: {
      title: string;
      description: string;
      icon: string;
    }[];
  };
  status: string;
}

export const personalData: PersonalInfo = {
  name: "HARIPRASAD K",
  shortName: "HK",
  role: "Software Engineer | Full Stack Developer",
  titles: [
    "Full Stack Developer",
    "Java & Spring Boot Engineer",
    "NLP & Transformer Researcher",
    "React & Next.js Architect"
  ],
  contact: {
    phone: "+91 6363619355",
    email: "hariprasadk716@gmail.com",
    linkedin: "https://linkedin.com",
    github: "https://github.com",
    location: "Bangalore, India",
  },
  summary: {
    headline: "Building high-performance enterprise systems and intelligent NLP architectures.",
    narrative: [
      "Motivated fresher with hands-on internship and project experience across Java Full Stack, MERN Stack, and Python development.",
      "Skilled in architecting robust web applications with React.js, Next.js, Java, Spring Boot, Hibernate, and Node.js/Express.js.",
      "Specialized in Python-based NLP engineering using Hugging Face Transformers (BART, T5), TextRank, and TF-IDF for multilingual & low-resource text intelligence."
    ],
    pillars: [
      {
        title: "Enterprise Backend",
        description: "Modular Java microservices, Spring Boot, Hibernate ORM, and high-throughput SQL optimization with 3NF normalization.",
        icon: "Server"
      },
      {
        title: "Modern Frontend",
        description: "Responsive, dynamic web apps with React.js, Next.js, TypeScript, and high-performance user interfaces.",
        icon: "Layout"
      },
      {
        title: "AI & Low-Resource NLP",
        description: "Transformer model fine-tuning, hybrid extractive + abstractive summarization, and semantic vector matching.",
        icon: "Cpu"
      }
    ]
  },
  status: "Open to Software Engineering Opportunities"
};
