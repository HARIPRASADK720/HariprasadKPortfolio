export interface EducationItem {
  degree: string;
  field: string;
  institution: string;
  location: string;
  period: string;
  cgpa: string;
  cgpaMax: string;
  highlights: string[];
}

export interface CertificationItem {
  id: string;
  title: string;
  issuer: string;
  focus: string;
  badgeType: "oracle" | "java";
  topics: string[];
}

export interface AchievementItem {
  id: string;
  title: string;
  event: string;
  rank: string;
  totalCompetitors: string;
  timeConstraint: string;
  description: string;
  highlights: string[];
}

export const educationData: EducationItem = {
  degree: "Bachelor of Engineering (B.E.)",
  field: "Information Science Engineering",
  institution: "APS College of Engineering",
  location: "Bangalore, India",
  period: "2022 – 2026",
  cgpa: "8.71",
  cgpaMax: "10.0",
  highlights: [
    "Core curriculum in Data Structures, Algorithms, DBMS, Operating Systems, and Distributed Computing.",
    "Graduating with high academic distinction and 8.71/10.0 cumulative grade point average."
  ]
};

export const certificationsData: CertificationItem[] = [
  {
    id: "oracle-ai",
    title: "Oracle AI Foundations Associate",
    issuer: "Oracle Corporation",
    focus: "AI/ML Fundamentals & Responsible AI",
    badgeType: "oracle",
    topics: [
      "AI & Machine Learning Fundamentals",
      "Model Training & Evaluation Metrics",
      "Responsible AI & Ethical Principles",
      "Computer Vision & NLP Foundation"
    ]
  },
  {
    id: "jspiders-java",
    title: "Java Full Stack Professional Course Certificate",
    issuer: "JSpiders, Basavanagudi",
    focus: "Enterprise Java Architecture & Full Stack Engineering",
    badgeType: "java",
    topics: [
      "Core & Advanced Java (OOP, Multithreading, Collections)",
      "Spring Boot Microservices & Hibernate ORM",
      "SQL Query Optimization & Database Normalization (3NF)",
      "React.js & Next.js Dynamic Client Systems"
    ]
  }
];

export const hackathonAchievement: AchievementItem = {
  id: "hackotsava-2k25",
  title: "Hackotsava 2K25 Hackathon",
  event: "Hackotsava 2K25",
  rank: "TOP 07",
  totalCompetitors: "100+ TEAMS",
  timeConstraint: "36 HOURS",
  description: "Delivered a complete, production-ready full-stack solution under a high-intensity 36-hour sprint, finishing in the Top 7 out of 100+ competing engineering teams.",
  highlights: [
    "Rapid High-Velocity Prototyping",
    "Complex Algorithmic Problem Solving",
    "End-to-End Full-Stack System Execution",
    "36-Hour Time-Constrained Delivery"
  ]
};
