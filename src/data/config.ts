const config = {
  title: "Mohsin Saeed | Aspiring AI Engineer",
  description: {
    long: "Portfolio of Mohsin Saeed, an AI Engineering student at GIKI specializing in MLOps, NLP, and production-grade AI systems. Explore projects in air quality intelligence, debate AI, and more.",
    short: "Mohsin Saeed — AI Engineering student building production ML systems and NLP tools.",
  },
  keywords: ["Mohsin Saeed", "AI Engineer", "MLOps", "NLP", "Machine Learning", "GIKI", "Python", "FastAPI", "PyTorch"],
  author: "Mohsin Saeed",
  email: "marboo786@gmail.com",
  site: "https://your-vercel-url.vercel.app",
  githubUsername: "marbo786",
  githubRepo: "Portfolio101",
  resume: "https://drive.google.com/file/d/1gvvk3wS-KBfuFLZP339E5bPEvskdKcrS/view?usp=sharing",
  get ogImg() {
    return this.site + "/assets/seo/og-image.png";
  },
  social: {
    twitter: "",
    linkedin: "https://linkedin.com/in/marbo123",
    instagram: "",
    facebook: "",
    github: "https://github.com/marbo786",
  },
};
export { config };
