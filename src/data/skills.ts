export interface SkillItem {
  name: string;
  category: "languages" | "coreCs" | "frontend" | "backend" | "nlpAi" | "tools";
  categoryLabel: string;
  proficiencyLevel: "Core" | "Advanced" | "Proficient";
  appliedContext: string;
  iconName?: string;
}

export interface SkillCategoryGroup {
  id: string;
  title: string;
  icon: string;
  description: string;
  skills: SkillItem[];
}

export const skillTaxonomy: SkillCategoryGroup[] = [
  {
    id: "backend",
    title: "Backend & Enterprise Systems",
    icon: "Server",
    description: "Robust Java microservices, Spring framework, ORM persistence, and relational architecture.",
    skills: [
      { name: "Java", category: "backend", categoryLabel: "Backend", proficiencyLevel: "Core", appliedContext: "Kavora Tech Groups, JSpiders, RedNode Automations, Enterprise Services" },
      { name: "Spring Boot", category: "backend", categoryLabel: "Backend", proficiencyLevel: "Core", appliedContext: "Kavora Tech Groups, JSpiders, REST API microservices" },
      { name: "Spring AI", category: "backend", categoryLabel: "Backend", proficiencyLevel: "Proficient", appliedContext: "AI-assisted backend integration and LLM application layer" },
      { name: "Hibernate", category: "backend", categoryLabel: "Backend", proficiencyLevel: "Advanced", appliedContext: "Relational ORM mapping across Kavora and JSpiders systems" },
      { name: "Node.js", category: "backend", categoryLabel: "Backend", proficiencyLevel: "Advanced", appliedContext: "Edunet MERN Stack e-commerce backend & REST APIs" },
      { name: "Express.js", category: "backend", categoryLabel: "Backend", proficiencyLevel: "Advanced", appliedContext: "Engineered 10+ RESTful API endpoints at Edunet Foundation" },
      { name: "REST APIs", category: "backend", categoryLabel: "Backend", proficiencyLevel: "Core", appliedContext: "Architected across all 4 internships and project platforms" },
      { name: "PostgreSQL", category: "backend", categoryLabel: "Backend", proficiencyLevel: "Proficient", appliedContext: "Relational database schema modeling and enterprise queries" }
    ]
  },
  {
    id: "nlpAi",
    title: "AI & Natural Language Processing",
    icon: "Brain",
    description: "Transformer seq2seq architectures, linguistic graph algorithms, and vector space semantic modeling.",
    skills: [
      { name: "Hugging Face Transformers", category: "nlpAi", categoryLabel: "NLP & AI", proficiencyLevel: "Core", appliedContext: "Fine-tuned models for Kannada Low-Resource Text Summarization" },
      { name: "BART", category: "nlpAi", categoryLabel: "NLP & AI", proficiencyLevel: "Advanced", appliedContext: "Seq2seq abstractive summarization synthesis for Kannada" },
      { name: "T5", category: "nlpAi", categoryLabel: "NLP & AI", proficiencyLevel: "Advanced", appliedContext: "Text-to-text transformer pipeline for multilingual text" },
      { name: "TextRank", category: "nlpAi", categoryLabel: "NLP & AI", proficiencyLevel: "Advanced", appliedContext: "Graph-based sentence centroid scoring for extractive summarization" },
      { name: "TF-IDF", category: "nlpAi", categoryLabel: "NLP & AI", proficiencyLevel: "Core", appliedContext: "Kannada text preprocessing & ATS Resume Ranker vectorization" },
      { name: "Cosine Similarity", category: "nlpAi", categoryLabel: "NLP & AI", proficiencyLevel: "Core", appliedContext: "Geometric semantic distance scoring in ATS Resume Ranker" },
      { name: "spaCy", category: "nlpAi", categoryLabel: "NLP & AI", proficiencyLevel: "Advanced", appliedContext: "Linguistic entity extraction, tokenization, and POS analysis" },
      { name: "NLTK", category: "nlpAi", categoryLabel: "NLP & AI", proficiencyLevel: "Advanced", appliedContext: "Corpus normalization and sentence boundary preprocessing" }
    ]
  },
  {
    id: "frontend",
    title: "Frontend Engineering",
    icon: "Layout",
    description: "Modern, responsive client architectures, server components, and responsive performance.",
    skills: [
      { name: "React.js", category: "frontend", categoryLabel: "Frontend", proficiencyLevel: "Core", appliedContext: "Kavora Nursery web portal, Edunet e-commerce app, modern SPAs" },
      { name: "Next.js", category: "frontend", categoryLabel: "Frontend", proficiencyLevel: "Core", appliedContext: "Kavora EdTech platform, JSpiders Car Service System" },
      { name: "HTML5", category: "frontend", categoryLabel: "Frontend", proficiencyLevel: "Core", appliedContext: "Uniconverge CMS blog platform (25% faster load times)" },
      { name: "CSS3", category: "frontend", categoryLabel: "Frontend", proficiencyLevel: "Core", appliedContext: "Responsive stylesheets, glassmorphic UI, animations" },
      { name: "JavaScript", category: "frontend", categoryLabel: "Frontend", proficiencyLevel: "Core", appliedContext: "DOM scripting, asynchronous pipelines, dynamic interfaces" }
    ]
  },
  {
    id: "languages",
    title: "Programming Languages",
    icon: "Code2",
    description: "Core syntax, object-oriented systems, querying languages, and automation scripting.",
    skills: [
      { name: "Python 3", category: "languages", categoryLabel: "Languages", proficiencyLevel: "Core", appliedContext: "Kannada NLP, ATS Ranker, AI models, data pipelines" },
      { name: "SQL", category: "languages", categoryLabel: "Languages", proficiencyLevel: "Core", appliedContext: "3NF Normalization, Indexing optimization at JSpiders & MySQL" },
      { name: "TypeScript", category: "languages", categoryLabel: "Languages", proficiencyLevel: "Advanced", appliedContext: "Type-safe frontend development and enterprise components" },
      { name: "Bash/Shell Scripting", category: "languages", categoryLabel: "Languages", proficiencyLevel: "Proficient", appliedContext: "Environment automation, Linux workflows, deployment scripts" }
    ]
  },
  {
    id: "coreCs",
    title: "Computer Science Fundamentals",
    icon: "Binary",
    description: "Algorithmic thinking, data structures, and computer science principles.",
    skills: [
      { name: "Data Structures & Algorithms", category: "coreCs", categoryLabel: "Core CS", proficiencyLevel: "Core", appliedContext: "B.E. Information Science (8.71 CGPA), Hackotsava 2K25 Top 7" },
      { name: "OOP (Object-Oriented Programming)", category: "coreCs", categoryLabel: "Core CS", proficiencyLevel: "Core", appliedContext: "Reduced code redundancy by ~30% at JSpiders" },
      { name: "DBMS", category: "coreCs", categoryLabel: "Core CS", proficiencyLevel: "Core", appliedContext: "Schema design, relational normalization, indexing structures" },
      { name: "Operating Systems", category: "coreCs", categoryLabel: "Core CS", proficiencyLevel: "Proficient", appliedContext: "Process scheduling, thread memory management, Linux systems" }
    ]
  },
  {
    id: "tools",
    title: "Tools, Cloud & Libraries",
    icon: "Wrench",
    description: "DevOps tooling, database engines, and machine learning computation libraries.",
    skills: [
      { name: "MySQL", category: "tools", categoryLabel: "Tools", proficiencyLevel: "Core", appliedContext: "Kavora Tech, JSpiders, RedNode Automations relational database" },
      { name: "MongoDB", category: "tools", categoryLabel: "Tools", proficiencyLevel: "Advanced", appliedContext: "Edunet Foundation MongoDB Atlas cloud persistence" },
      { name: "Git & GitHub", category: "tools", categoryLabel: "Tools", proficiencyLevel: "Core", appliedContext: "Version control, collaboration, CI/CD code repositories" },
      { name: "Docker (Basics)", category: "tools", categoryLabel: "Tools", proficiencyLevel: "Proficient", appliedContext: "Containerization fundamentals and environment isolation" },
      { name: "Postman", category: "tools", categoryLabel: "Tools", proficiencyLevel: "Core", appliedContext: "RESTful API testing, header auth, endpoint verification" },
      { name: "CI/CD", category: "tools", categoryLabel: "Tools", proficiencyLevel: "Proficient", appliedContext: "Continuous integration and automated build verification" },
      { name: "Linux CLI", category: "tools", categoryLabel: "Tools", proficiencyLevel: "Advanced", appliedContext: "Command-line server navigation and environment operations" },
      { name: "Pandas & NumPy", category: "tools", categoryLabel: "Tools", proficiencyLevel: "Advanced", appliedContext: "Data manipulation for NLP datasets and matrix computations" },
      { name: "Flask", category: "tools", categoryLabel: "Tools", proficiencyLevel: "Advanced", appliedContext: "Microservice backend endpoints for Python NLP models" },
      { name: "Scikit-learn", category: "tools", categoryLabel: "Tools", proficiencyLevel: "Advanced", appliedContext: "TF-IDF vectorizers and similarity models in ATS Ranker" }
    ]
  }
];
