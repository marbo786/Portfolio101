import React from "react";

// ─── SKILL TYPES ────────────────────────────────────────────────────────────

export type SkillNames =
  | "python"
  | "pytorch"
  | "tensorflow"
  | "sklearn"
  | "fastapi"
  | "docker"
  | "mlflow"
  | "prefect"
  | "git"
  | "cpp";

export type Skill = {
  name: SkillNames;
  label: string;
  shortDescription: string;
  longDescription: string;
};

// ─── SKILLS ─────────────────────────────────────────────────────────────────
// Note: these names must match the Spline keycap object names.
// The default keyboard uses the original author's skills — you can leave
// the 3D labels as-is; only the hover text below changes.

export const SKILLS: Record<SkillNames, Skill> = {
  python: {
    name: "python",
    label: "Python",
    shortDescription: "Primary language",
    longDescription:
      "My go-to language for everything AI — from data pipelines and model training to building production APIs with FastAPI.",
  },
  pytorch: {
    name: "pytorch",
    label: "PyTorch",
    shortDescription: "Deep learning",
    longDescription:
      "Used for building and training deep learning models. Completed IBM AI Engineering and LLM specializations using PyTorch.",
  },
  tensorflow: {
    name: "tensorflow",
    label: "TensorFlow",
    shortDescription: "ML framework",
    longDescription:
      "Hands-on experience building and evaluating neural networks through IBM AI Engineering specialization on Coursera.",
  },
  sklearn: {
    name: "sklearn",
    label: "Scikit-learn",
    shortDescription: "Classic ML",
    longDescription:
      "Used for regression, classification, and clustering. Built the AirSense AQI classification model achieving 86.6% accuracy.",
  },
  fastapi: {
    name: "fastapi",
    label: "FastAPI",
    shortDescription: "API backend",
    longDescription:
      "Designed and deployed a FastAPI backend serving multiple ML models via real-time REST endpoints in the AirSense project.",
  },
  docker: {
    name: "docker",
    label: "Docker",
    shortDescription: "Containerization",
    longDescription:
      "Containerized the AirSense system using Docker Compose, enabling reproducible deployments across environments.",
  },
  mlflow: {
    name: "mlflow",
    label: "MLflow",
    shortDescription: "Experiment tracking",
    longDescription:
      "Used MLflow for experiment tracking and reproducibility in the AirSense MLOps pipeline, logging metrics across model runs.",
  },
  prefect: {
    name: "prefect",
    label: "Prefect",
    shortDescription: "Pipeline orchestration",
    longDescription:
      "Orchestrated a 10-task end-to-end training pipeline using Prefect, automating data ingestion through model deployment.",
  },
  git: {
    name: "git",
    label: "Git",
    shortDescription: "Version control",
    longDescription:
      "Used Git and GitHub for version control, CI/CD pipelines, and collaborative development across all projects.",
  },
  cpp: {
    name: "cpp",
    label: "C++",
    shortDescription: "Systems programming",
    longDescription:
      "Studied C++ as part of my CS curriculum at GIKI, building foundational knowledge in memory management and algorithms.",
  },
};

// ─── EXPERIENCE ─────────────────────────────────────────────────────────────

export type Experience = {
  id: string;
  title: string;
  company: string;
  period: string;
  description: string[];
  skills: string[];
};

export const EXPERIENCE: Experience[] = [
  {
    id: "airsense",
    title: "AI/ML Engineer",
    company: "AirSense — Applied AI Solutions",
    period: "2024 – Present",
    description: [
      "Built a production-grade air quality intelligence system processing 420K+ records with 40+ engineered features.",
      "Developed and evaluated multiple ML models — 86.6% accuracy in AQI classification, RMSE of 13.15 in PM2.5 regression.",
      "Designed and deployed a FastAPI backend serving multiple ML models via real-time REST endpoints.",
      "Orchestrated a 10-task end-to-end training pipeline using Prefect with MLflow experiment tracking.",
      "Containerized the system using Docker Compose and implemented CI/CD pipelines for automated testing and deployment.",
    ],
    skills: ["Python", "FastAPI", "MLflow", "Prefect", "Docker", "Scikit-learn"],
  },
  {
    id: "debate-ai",
    title: "NLP Developer",
    company: "Debate AI — Hack and Connect, Netronix Society GIKI",
    period: "2024",
    description: [
      "Developed an AI-driven NLP system to analyze debate topics and extract semantic context.",
      "Automated structured pro and con argument generation using ML-based text analysis techniques.",
      "Delivered a practical tool enabling efficient multi-perspective analysis in a competitive hackathon environment.",
    ],
    skills: ["Python", "NLP", "Machine Learning", "Text Analysis"],
  },
];

// ─── CERTIFICATIONS ──────────────────────────────────────────────────────────

export type Certification = {
  title: string;
  issuer: string;
  description: string;
};

export const CERTIFICATIONS: Certification[] = [
  {
    title: "AI Fluency: Framework and Foundations",
    issuer: "Anthropic",
    description:
      "Foundational knowledge in generative AI principles, ethical considerations, and practical applications of large language models.",
  },
  {
    title: "IBM AI Engineering",
    issuer: "Coursera",
    description:
      "Comprehensive specialization in deep learning, ML algorithms, and engineering scalable AI models using PyTorch and TensorFlow.",
  },
  {
    title: "Machine Learning with Python",
    issuer: "Coursera",
    description:
      "Hands-on experience building, evaluating, and optimizing ML models for regression, classification, and clustering using scikit-learn.",
  },
  {
    title: "Generative AI Engineering with Transformers & LLMs",
    issuer: "Coursera",
    description:
      "Mastered LLM architecture and training methodologies, with focus on advanced fine-tuning techniques and model performance evaluation.",
  },
];

// ─── THEME DISCLAIMERS ───────────────────────────────────────────────────────
// These are the funny toast messages shown when switching light/dark mode

export const themeDisclaimers = {
  dark: [
    "Dark mode: where bugs hide in the shadows 🐛",
    "Welcome to the dark side. We have no bugs. Just features. 🌑",
    "Dark mode activated. Your eyes thank you 🙏",
    "Switching to dark mode like a true developer 🧑‍💻",
  ],
  light: [
    "Light mode?! Are you okay? ☀️",
    "Light mode activated. Please wear sunglasses 😎",
    "Warning: This mode may expose you to reality 💡",
    "Bold choice. Respect. 🫡",
  ],
};
