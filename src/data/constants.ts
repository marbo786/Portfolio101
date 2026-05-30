// thoda zada ts ho gya idhar
export enum SkillNames {
  PYTHON = "python",
  PYTORCH = "pytorch",
  TENSORFLOW = "tensorflow",
  SKLEARN = "sklearn",
  FASTAPI = "fastapi",
  DOCKER = "docker",
  MLFLOW = "mlflow",
  PREFECT = "prefect",
  GIT = "git",
  CPP = "cpp",
}

export type Skill = {
  id: number;
  name: string;
  label: string;
  shortDescription: string;
  color: string;
  icon: string;
};

export const SKILLS: Record<SkillNames, Skill> = {
  [SkillNames.PYTHON]: {
    id: 1,
    name: "python",
    label: "Python",
    shortDescription: "my go-to for everything AI, from pipelines to APIs 🐍🔥",
    color: "#3776ab",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
  },
  [SkillNames.PYTORCH]: {
    id: 2,
    name: "pytorch",
    label: "PyTorch",
    shortDescription: "deep learning that actually makes sense, no cap 🔥🧠",
    color: "#ee4c2c",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytorch/pytorch-original.svg",
  },
  [SkillNames.TENSORFLOW]: {
    id: 3,
    name: "tensorflow",
    label: "TensorFlow",
    shortDescription: "Google's ML flex, and it hits different fr 🤖💡",
    color: "#ff6f00",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg",
  },
  [SkillNames.SKLEARN]: {
    id: 4,
    name: "sklearn",
    label: "Scikit-learn",
    shortDescription: "classic ML done right, 86.6% accuracy bussin' 📊✅",
    color: "#f89939",
    icon: "https://upload.wikimedia.org/wikipedia/commons/0/05/Scikit_learn_logo_small.svg",
  },
  [SkillNames.FASTAPI]: {
    id: 5,
    name: "fastapi",
    label: "FastAPI",
    shortDescription: "REST APIs so fast they make Express jealous 🚀⚡",
    color: "#009688",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg",
  },
  [SkillNames.DOCKER]: {
    id: 6,
    name: "docker",
    label: "Docker",
    shortDescription: "works on my machine? now it works everywhere 🐳🔥",
    color: "#2496ed",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
  },
  [SkillNames.MLFLOW]: {
    id: 7,
    name: "mlflow",
    label: "MLflow",
    shortDescription: "experiment tracking so clean it's bussin' fr fr 📈🧪",
    color: "#0194e2",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mlflow/mlflow-original.svg",
  },
  [SkillNames.PREFECT]: {
    id: 8,
    name: "prefect",
    label: "Prefect",
    shortDescription: "10-task pipelines orchestrated with zero drama 🔄✨",
    color: "#7b2ff7",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
  },
  [SkillNames.GIT]: {
    id: 9,
    name: "git",
    label: "Git",
    shortDescription: "version control, the code's personal bodyguard 🕵️‍♂️🔄",
    color: "#f1502f",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
  },
  [SkillNames.CPP]: {
    id: 10,
    name: "cpp",
    label: "C++",
    shortDescription: "when Python is too slow and you want to suffer 💀⚙️",
    color: "#00599c",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg",
  },
};

export type Experience = {
  id: number;
  startDate: string;
  endDate: string;
  title: string;
  company: string;
  description: string[];
  skills: SkillNames[];
};

export const EXPERIENCE: Experience[] = [
  {
    id: 1,
    startDate: "2024",
    endDate: "Present",
    title: "AI/ML Engineer",
    company: "AirSense — Applied AI Solutions",
    description: [
      "Built a production-grade air quality intelligence system processing 420K+ records with 40+ engineered features.",
      "Developed and evaluated multiple ML models — 86.6% accuracy in AQI classification, RMSE of 13.15 in PM2.5 regression.",
      "Designed and deployed a FastAPI backend serving multiple ML models via real-time REST endpoints.",
      "Orchestrated a 10-task end-to-end training pipeline using Prefect with MLflow experiment tracking.",
      "Containerized the system using Docker Compose and implemented CI/CD pipelines for automated testing and deployment.",
    ],
    skills: [
      SkillNames.PYTHON,
      SkillNames.FASTAPI,
      SkillNames.SKLEARN,
      SkillNames.MLFLOW,
      SkillNames.PREFECT,
      SkillNames.DOCKER,
    ],
  },
  {
    id: 2,
    startDate: "2024",
    endDate: "2024",
    title: "NLP Developer",
    company: "Debate AI — Hack and Connect, Netronix Society GIKI",
    description: [
      "Developed an AI-driven NLP system to analyze debate topics and extract semantic context.",
      "Automated structured pro and con argument generation using ML-based text analysis techniques.",
      "Delivered a practical tool enabling efficient multi-perspective analysis in a competitive hackathon environment.",
    ],
    skills: [
      SkillNames.PYTHON,
      SkillNames.PYTORCH,
    ],
  },
];

export const themeDisclaimers = {
  light: [
    "Warning: Light mode emits a gazillion lumens of pure radiance!",
    "Caution: Light mode ahead! Please don't try this at home.",
    "Only trained professionals can handle this much brightness. Proceed with sunglasses!",
    "Brace yourself! Light mode is about to make everything shine brighter than your future.",
    "Flipping the switch to light mode... Are you sure your eyes are ready for this?",
  ],
  dark: [
    "Light mode? I thought you went insane... but welcome back to the dark side!",
    "Switching to dark mode... How was life on the bright side?",
    "Dark mode activated! Thanks you from the bottom of my heart, and my eyes too.",
    "Welcome back to the shadows. How was life out there in the light?",
    "Dark mode on! Finally, someone who understands true sophistication.",
  ],
};
