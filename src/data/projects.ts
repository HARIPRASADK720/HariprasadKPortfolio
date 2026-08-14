export interface ProjectItem {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  domain: string;
  badge: string;
  description: string;
  problem: string;
  solution: string;
  technicalArchitecture: string[];
  pipelineSteps: {
    step: string;
    label: string;
    description: string;
    tech: string;
  }[];
  stack: string[];
  highlights: string[];
  keyOutcome: string;
  interactiveDemoType: "summarizer" | "ranker";
}

export const projectsData: ProjectItem[] = [
  {
    id: "kannada-nlp-summarization",
    number: "01",
    title: "NLP Kannada Text Summarization",
    subtitle: "Hybrid Extractive + Abstractive System for Low-Resource Languages",
    domain: "Natural Language Processing & Deep Learning",
    badge: "Flagship NLP Research",
    description: "Built a hybrid extractive and abstractive summarization system for Kannada using BART and T5 Transformer architectures combined with TextRank and TF-IDF scoring for low-resource linguistic contexts.",
    problem: "Low-resource languages like Kannada lack extensive paired summarization corpora, causing standalone abstractive neural networks to hallucinate or omit essential topical context.",
    solution: "Architected a dual-stage pipeline where graph-based TextRank and statistical TF-IDF extract salient sentence centroids, which are then synthesized through fine-tuned BART/T5 sequence-to-sequence transformer models into fluent abstractive summaries.",
    technicalArchitecture: [
      "Linguistic Preprocessing: Tokenization, stop-word elimination, and morphological normalization using Indic-adapted NLTK and spaCy pipelines.",
      "Extractive Filtering: TF-IDF vectorization combined with TextRank graph centrality to identify high-density sentence nodes.",
      "Abstractive Synthesis: Fine-tuned BART & T5 sequence-to-sequence transformer architectures for grammatical Kannada text generation.",
      "Evaluation Framework: Multi-stage pipeline validation comparing semantic coherence and information retention across unstructured text."
    ],
    pipelineSteps: [
      {
        step: "01",
        label: "Raw Text Ingestion",
        description: "Ingests multilingual and Kannada unstructured documents.",
        tech: "Python IO & Corpus Loaders"
      },
      {
        step: "02",
        label: "Linguistic Preprocessing",
        description: "Morphological analysis, token filtering, and sentence boundary detection.",
        tech: "NLTK · spaCy"
      },
      {
        step: "03",
        label: "Extractive Ranking",
        description: "Graph centrality & term frequency ranking of salient passages.",
        tech: "TF-IDF · TextRank"
      },
      {
        step: "04",
        label: "Transformer Synthesis",
        description: "Deep seq2seq encoding and conditioned contextual decoding.",
        tech: "Hugging Face · BART · T5"
      },
      {
        step: "05",
        label: "Fluent Summary Output",
        description: "Generates concise, contextually accurate abstractive Kannada summaries.",
        tech: "Model Output Pipeline"
      }
    ],
    stack: [
      "Python",
      "Hugging Face",
      "BART",
      "T5",
      "TextRank",
      "TF-IDF",
      "NLTK",
      "spaCy"
    ],
    highlights: [
      "Kannada Low-Resource NLP",
      "Hybrid Extractive + Abstractive Pipeline",
      "BART & T5 Transformers",
      "TextRank Graph Centrality",
      "Multilingual Unstructured Text"
    ],
    keyOutcome: "Delivered an end-to-end NLP pipeline: data preprocessing → model fine-tuning → performance evaluation across multilingual unstructured text.",
    interactiveDemoType: "summarizer"
  },
  {
    id: "ats-resume-ranker",
    number: "02",
    title: "ATS Resume Ranker",
    subtitle: "Automated Semantic Matching & Candidate Scoring System",
    domain: "Applied Machine Learning & Information Retrieval",
    badge: "ML Information Retrieval",
    description: "Automated resume-to-job-description matching engine utilizing TF-IDF high-dimensional vectorization, cosine similarity geometric metrics, and spaCy linguistic entity extraction to rank candidates with measurable semantic scores.",
    problem: "Traditional keyword-based ATS filters fail to capture contextual semantics and skill synonymity, creating high rejection friction for qualified applicants.",
    solution: "Engineered a vector space scoring pipeline that cleanses unstructured resumes, extracts syntactic and domain entities via spaCy, generates TF-IDF weighted document vectors, and computes geometric cosine distance against target job descriptions.",
    technicalArchitecture: [
      "Document Normalization: Automated parsing of unstructured text formats with stopword removal and lemmatization.",
      "Entity & Keyword Extraction: spaCy linguistic parsing identifying technical skills, tooling frameworks, and core competency vectors.",
      "Vector Space Modeling: Scikit-learn TF-IDF matrices mapping document term weights across corpus dimensions.",
      "Geometric Scoring: Cosine similarity computation yielding deterministic, ranked alignment scores for candidate qualification."
    ],
    pipelineSteps: [
      {
        step: "01",
        label: "Resume Ingestion",
        description: "Parses candidate profile documents and skill corpora.",
        tech: "Python File Parsers"
      },
      {
        step: "02",
        label: "Semantic Entity Extraction",
        description: "Tokenizes and extracts named entities and technical competencies.",
        tech: "spaCy · Scikit-learn"
      },
      {
        step: "03",
        label: "TF-IDF Vectorization",
        description: "Transforms text into high-dimensional numerical feature space.",
        tech: "TF-IDF Vectorizer"
      },
      {
        step: "04",
        label: "Cosine Distance Metric",
        description: "Calculates angular distance between candidate vectors and job profiles.",
        tech: "Cosine Similarity Math"
      },
      {
        step: "05",
        label: "Ranked Candidate Score",
        description: "Outputs measurable match ranking for deterministic talent matching.",
        tech: "Scoring Engine"
      }
    ],
    stack: [
      "Python",
      "TF-IDF",
      "Cosine Similarity",
      "spaCy",
      "Scikit-learn"
    ],
    highlights: [
      "Vector Space Modeling",
      "Semantic Similarity Analysis",
      "Automated Candidate Ranking",
      "Entity Extraction Pipeline",
      "Deterministic Match Scoring"
    ],
    keyOutcome: "Engineered automated resume-to-job-description matching with TF-IDF vectorization and cosine similarity, ranking candidates with measurable semantic match scores.",
    interactiveDemoType: "ranker"
  }
];
