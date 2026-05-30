// High-impact skills list for Mohsin Saeed
export enum SkillNames {
  // Programming & Core CS
  PYTHON = "python",
  CPP = "cpp",
  SQL = "sql",
  DSA = "dsa",
  OOP = "oop",
  GIT = "git",
  
  // Machine Learning / AI
  ML = "ml",
  DEEP_LEARNING = "deep_learning",
  NEURAL_NETWORKS = "neural_networks",
  TENSORFLOW = "tensorflow",
  PYTORCH = "pytorch",
  NLP = "nlp",
  
  // Data Science & Analytics
  PANDAS = "pandas",
  NUMPY = "numpy",
  MATPLOTLIB = "matplotlib",
  PREPROCESSING = "preprocessing",
  STATS = "stats",
  
  // Web / App Development
  STREAMLIT = "streamlit",
  FASTAPI = "fastapi",
  DASH = "dash",
  
  // Tools / Deployment / Others
  LINUX = "linux",
  DOCKER = "docker",
  REST_APIS = "rest_apis",
  DEPLOYMENT = "deployment",
}

export type Skill = {
  id: number;
  name: string;
  label: string;
  shortDescription: string;
  color: string;
  icon: string;
  threeDKey: string; // Mapped to the 10 interactive Spline keys
};

export const SKILLS: Record<SkillNames, Skill> = {
  // Programming & Core CS
  [SkillNames.PYTHON]: {
    id: 1,
    name: "python",
    label: "Python",
    shortDescription: "my go-to language for AI, data pipelines, and scalable APIs 🐍🔥",
    color: "#3776ab",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
    threeDKey: "python",
  },
  [SkillNames.CPP]: {
    id: 2,
    name: "cpp",
    label: "C++",
    shortDescription: "high-performance coding and algorithmic problem solving 💀⚙️",
    color: "#00599c",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg",
    threeDKey: "cpp",
  },
  [SkillNames.SQL]: {
    id: 3,
    name: "sql",
    label: "SQL",
    shortDescription: "querying, schema design, and structuring relational databases 🗄️⚡",
    color: "#00758f",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
    threeDKey: "cpp",
  },
  [SkillNames.DSA]: {
    id: 4,
    name: "dsa",
    label: "Data Structures & Algorithms",
    shortDescription: "problem-solving foundation for efficient and optimized execution 📊🔍",
    color: "#f0db4f",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
    threeDKey: "python",
  },
  [SkillNames.OOP]: {
    id: 5,
    name: "oop",
    label: "OOP",
    shortDescription: "modular, reusable, and robust software design principles 🏗️🧱",
    color: "#61dafb",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
    threeDKey: "python",
  },
  [SkillNames.GIT]: {
    id: 6,
    name: "git",
    label: "Git & GitHub",
    shortDescription: "version control, branching, and secure collaborative development 🕵️‍♂️🔄",
    color: "#f1502f",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
    threeDKey: "git",
  },

  // Machine Learning / AI
  [SkillNames.ML]: {
    id: 7,
    name: "ml",
    label: "Machine Learning",
    shortDescription: "supervised and unsupervised models built for real-world impact 📊🧠",
    color: "#f89939",
    icon: "https://upload.wikimedia.org/wikipedia/commons/0/05/Scikit_learn_logo_small.svg",
    threeDKey: "sklearn",
  },
  [SkillNames.DEEP_LEARNING]: {
    id: 8,
    name: "deep_learning",
    label: "Deep Learning",
    shortDescription: "designing and training complex neural architectures 🧠🧬",
    color: "#ee4c2c",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytorch/pytorch-original.svg",
    threeDKey: "pytorch",
  },
  [SkillNames.NEURAL_NETWORKS]: {
    id: 9,
    name: "neural_networks",
    label: "Neural Networks",
    shortDescription: "CNNs, RNNs, and custom-layered cognitive architectures 🕸️🤖",
    color: "#ff6f00",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg",
    threeDKey: "pytorch",
  },
  [SkillNames.TENSORFLOW]: {
    id: 10,
    name: "tensorflow",
    label: "TensorFlow",
    shortDescription: "Google's powerful machine learning and model training engine 🦾💡",
    color: "#ff6f00",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg",
    threeDKey: "tensorflow",
  },
  [SkillNames.PYTORCH]: {
    id: 11,
    name: "pytorch",
    label: "PyTorch",
    shortDescription: "deep learning that actually makes sense, highly dynamic and flexible 🔥🧠",
    color: "#ee4c2c",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytorch/pytorch-original.svg",
    threeDKey: "pytorch",
  },
  [SkillNames.NLP]: {
    id: 12,
    name: "nlp",
    label: "Natural Language Processing",
    shortDescription: "analyzing, processing, and generating human language text and semantic context 💬📖",
    color: "#0284c7",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
    threeDKey: "mlflow",
  },

  // Data Science & Analytics
  [SkillNames.PANDAS]: {
    id: 13,
    name: "pandas",
    label: "Pandas",
    shortDescription: "lightning-fast data manipulation, analysis, and processing 🐼📊",
    color: "#150458",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pandas/pandas-original.svg",
    threeDKey: "prefect",
  },
  [SkillNames.NUMPY]: {
    id: 14,
    name: "numpy",
    label: "NumPy",
    shortDescription: "efficient multi-dimensional array operations and scientific computing 🔢⚡",
    color: "#013243",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/numpy/numpy-original.svg",
    threeDKey: "prefect",
  },
  [SkillNames.MATPLOTLIB]: {
    id: 15,
    name: "matplotlib",
    label: "Matplotlib & Seaborn",
    shortDescription: "crafting stunning, detailed, and insightful data visualizations 📉🎨",
    color: "#11557c",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
    threeDKey: "prefect",
  },
  [SkillNames.PREPROCESSING]: {
    id: 16,
    name: "preprocessing",
    label: "Feature Engineering",
    shortDescription: "imputing, normalizing, scaling, and engineering high-impact features 🧹💎",
    color: "#f89939",
    icon: "https://upload.wikimedia.org/wikipedia/commons/0/05/Scikit_learn_logo_small.svg",
    threeDKey: "sklearn",
  },
  [SkillNames.STATS]: {
    id: 17,
    name: "stats",
    label: "Statistical Analysis",
    shortDescription: "hypothesis testing, distribution mapping, and data-backed inference 📊🔬",
    color: "#7b2ff7",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
    threeDKey: "sklearn",
  },

  // Web / App Development
  [SkillNames.STREAMLIT]: {
    id: 18,
    name: "streamlit",
    label: "Streamlit",
    shortDescription: "spinning up interactive ML prototype web apps in record time 🚀🎨",
    color: "#ff4b4b",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
    threeDKey: "prefect",
  },
  [SkillNames.FASTAPI]: {
    id: 19,
    name: "fastapi",
    label: "Flask & FastAPI",
    shortDescription: "asynchronous, high-performance RESTful backends and microservices 🚀⚡",
    color: "#009688",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg",
    threeDKey: "fastapi",
  },
  [SkillNames.DASH]: {
    id: 20,
    name: "dash",
    label: "Plotly Dash",
    shortDescription: "enterprise-grade analytical dashboards with complex plotting capabilities 📊🕸️",
    color: "#3f4f75",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
    threeDKey: "prefect",
  },

  // Tools / Deployment / Others
  [SkillNames.LINUX]: {
    id: 21,
    name: "linux",
    label: "Linux & Bash",
    shortDescription: "navigating the terminal, shell scripting, and server administration 🐧💻",
    color: "#f89939",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg",
    threeDKey: "git",
  },
  [SkillNames.DOCKER]: {
    id: 22,
    name: "docker",
    label: "Docker",
    shortDescription: "containerization to guarantee seamless 'works-on-every-machine' runtimes 🐳🔥",
    color: "#2496ed",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
    threeDKey: "docker",
  },
  [SkillNames.REST_APIS]: {
    id: 23,
    name: "rest_apis",
    label: "REST APIs",
    shortDescription: "robust, secure, and properly documented API endpoint architectures 🔌🔗",
    color: "#009688",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg",
    threeDKey: "fastapi",
  },
  [SkillNames.DEPLOYMENT]: {
    id: 24,
    name: "deployment",
    label: "Model Deployment",
    shortDescription: "packaging and deploying intelligent models to cloud and production environments 🚀☁️",
    color: "#0194e2",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
    threeDKey: "mlflow",
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
      "Orchestrated a 10-task end-to-end training pipeline with experiment tracking.",
      "Containerized the system using Docker Compose and implemented CI/CD pipelines for automated testing and deployment.",
    ],
    skills: [
      SkillNames.PYTHON,
      SkillNames.FASTAPI,
      SkillNames.ML,
      SkillNames.PREPROCESSING,
      SkillNames.DOCKER,
      SkillNames.REST_APIS,
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
      SkillNames.NLP,
      SkillNames.DEEP_LEARNING,
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
