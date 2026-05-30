import SlideShow from "@/components/slide-show";
import { Button } from "@/components/ui/button";
import { TypographyH3, TypographyP } from "@/components/ui/typography";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { ReactNode } from "react";
import { Modal, ModalBody, ModalContent, ModalTrigger } from "../ui/animated-modal";
import SectionWrapper from "../ui/section-wrapper";
import { SectionHeader } from "./section-header";
import {
  SiDocker,
  SiFastapi,
  SiPython,
  SiScikitlearn,
  SiStreamlit,
  SiTypescript,
  SiPlotly,
} from "react-icons/si";

export type Skill = {
  title: string;
  bg: string;
  fg: string;
  icon: ReactNode;
};

const PROJECT_SKILLS = {
  python: { title: "Python", bg: "black", fg: "white", icon: <SiPython /> },
  fastapi: { title: "FastAPI", bg: "black", fg: "white", icon: <SiFastapi /> },
  docker: { title: "Docker", bg: "black", fg: "white", icon: <SiDocker /> },
  sklearn: { title: "Scikit-learn", bg: "black", fg: "white", icon: <SiScikitlearn /> },
  streamlit: { title: "Streamlit", bg: "black", fg: "white", icon: <SiStreamlit /> },
  typescript: { title: "TypeScript", bg: "black", fg: "white", icon: <SiTypescript /> },
  plotly: { title: "Plotly", bg: "black", fg: "white", icon: <SiPlotly /> },
  mlflow: {
    title: "MLflow",
    bg: "black",
    fg: "white",
    icon: <span style={{ fontWeight: "bold", fontSize: "0.7rem" }}>ML</span>,
  },
  prefect: {
    title: "Prefect",
    bg: "black",
    fg: "white",
    icon: <span style={{ fontWeight: "bold", fontSize: "0.7rem" }}>PF</span>,
  },
  pytorch: {
    title: "PyTorch",
    bg: "black",
    fg: "white",
    icon: <span style={{ fontWeight: "bold", fontSize: "0.7rem" }}>PT</span>,
  },
  llm: {
    title: "LLMs",
    bg: "black",
    fg: "white",
    icon: <span style={{ fontWeight: "bold", fontSize: "0.7rem" }}>LLM</span>,
  },
  wasm: {
    title: "WASM",
    bg: "black",
    fg: "white",
    icon: <span style={{ fontWeight: "bold", fontSize: "0.7rem" }}>WA</span>,
  },
  dash: {
    title: "Dash",
    bg: "black",
    fg: "white",
    icon: <span style={{ fontWeight: "bold", fontSize: "0.7rem" }}>DA</span>,
  },
};

const ProjectsLinks = ({ live, repo }: { live: string; repo?: string }) => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-start gap-3 my-3 mb-8">
      <Link className="font-mono underline flex gap-2" rel="noopener" target="_new" href={live}>
        <Button variant={"default"} size={"sm"}>
          Visit Website <ArrowUpRight className="ml-3 w-5 h-5" />
        </Button>
      </Link>
      {repo && (
        <Link className="font-mono underline flex gap-2" rel="noopener" target="_new" href={repo}>
          <Button variant={"default"} size={"sm"}>
            Github <ArrowUpRight className="ml-3 w-5 h-5" />
          </Button>
        </Link>
      )}
    </div>
  );
};

export type Project = {
  id: string;
  category: string;
  title: string;
  src: string;
  screenshots: string[];
  skills: { frontend: Skill[]; backend: Skill[] };
  content: React.ReactNode | any;
  github?: string;
  live: string;
};

const projects: Project[] = [
  {
    id: "airsense",
    category: "MLOps / AI",
    title: "AirSense",
    src: "",
    screenshots: [],
    skills: {
      frontend: [PROJECT_SKILLS.python, PROJECT_SKILLS.fastapi, PROJECT_SKILLS.sklearn],
      backend: [PROJECT_SKILLS.mlflow, PROJECT_SKILLS.prefect, PROJECT_SKILLS.docker],
    },
    live: "https://github.com/marbo786/AirSense",
    github: "https://github.com/marbo786/AirSense",
    get content() {
      return (
        <div>
          <TypographyP className="font-mono text-2xl text-center">
            End-to-End MLOps Pipeline for Air Quality Intelligence
          </TypographyP>
          <TypographyP className="font-mono">
            Production-grade system processing 420K+ records with 40+ engineered features.
            Achieved 86.6% accuracy in AQI classification and RMSE of 13.15 in PM2.5
            regression. Full CI/CD automation with Docker Compose.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />
          <TypographyH3 className="my-4 mt-8">ML Models</TypographyH3>
          <p className="font-mono mb-2">
            Multiple models evaluated for AQI classification (86.6% accuracy) and PM2.5
            regression (RMSE 13.15) using Scikit-learn with 40+ engineered features.
          </p>
          <TypographyH3 className="my-4 mt-8">FastAPI Backend</TypographyH3>
          <p className="font-mono mb-2">
            REST API serving multiple ML models simultaneously with real-time inference
            endpoints for both classification and regression tasks.
          </p>
          <TypographyH3 className="my-4 mt-8">MLOps Pipeline</TypographyH3>
          <p className="font-mono mb-2">
            10-task end-to-end pipeline orchestrated with Prefect — from data ingestion
            and feature engineering to model training and deployment. MLflow tracks all
            experiments for full reproducibility.
          </p>
          <TypographyH3 className="my-4 mt-8">Docker & CI/CD</TypographyH3>
          <p className="font-mono mb-2">
            Entire system containerized with Docker Compose. CI/CD pipelines handle
            automated testing, linting, and deployment on every push.
          </p>
        </div>
      );
    },
  },
  {
    id: "debateai",
    category: "NLP / Multi-Agent",
    title: "DEBATEAI",
    src: "",
    screenshots: [],
    skills: {
      frontend: [PROJECT_SKILLS.python, PROJECT_SKILLS.llm],
      backend: [PROJECT_SKILLS.pytorch],
    },
    live: "https://github.com/marbo786/DEBATEAI",
    github: "https://github.com/marbo786/DEBATEAI",
    get content() {
      return (
        <div>
          <TypographyP className="font-mono text-2xl text-center">
            Multi-Agent Debate System with LLM-Driven Argument Generation
          </TypographyP>
          <TypographyP className="font-mono">
            Combines minimax search, probabilistic belief modeling, and LLM-driven argument
            generation in real time. Built during the Hack and Connect hackathon at
            Netronix Society, GIKI.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />
          <TypographyH3 className="my-4 mt-8">Multi-Agent Architecture</TypographyH3>
          <p className="font-mono mb-2">
            Agents employ minimax search to strategically plan argument sequences,
            modeling opponent beliefs probabilistically to anticipate counterarguments.
          </p>
          <TypographyH3 className="my-4 mt-8">LLM Argument Generation</TypographyH3>
          <p className="font-mono mb-2">
            LLM backends generate fluent, structured pro and con arguments in real time,
            grounded in semantic topic analysis and belief state modeling.
          </p>
          <TypographyH3 className="my-4 mt-8">Hackathon</TypographyH3>
          <p className="font-mono mb-2">
            Delivered under competitive time pressure at GIKI. Practical tool enabling
            rapid multi-perspective analysis across unfamiliar debate topics.
          </p>
        </div>
      );
    },
  },
  {
    id: "marcode",
    category: "TypeScript / WASM",
    title: "MARCODE",
    src: "",
    screenshots: [],
    skills: {
      frontend: [PROJECT_SKILLS.typescript, PROJECT_SKILLS.wasm],
      backend: [PROJECT_SKILLS.python],
    },
    live: "https://github.com/marbo786/MARCODE",
    github: "https://github.com/marbo786/MARCODE",
    get content() {
      return (
        <div>
          <TypographyP className="font-mono text-2xl text-center">
            Hybrid Plagiarism Detection with WASM Acceleration
          </TypographyP>
          <TypographyP className="font-mono">
            Leverages k-gram fingerprinting, sequence alignment, and structural similarity
            analysis — accelerated with WebAssembly for high-performance in-browser
            computation.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />
          <TypographyH3 className="my-4 mt-8">Detection Techniques</TypographyH3>
          <p className="font-mono mb-2">
            Combines k-gram fingerprinting for near-duplicate detection, sequence alignment
            for structural similarity, and WASM acceleration for real-time performance.
          </p>
          <TypographyH3 className="my-4 mt-8">Architecture</TypographyH3>
          <p className="font-mono mb-2">
            TypeScript frontend with WASM modules handling the computationally intensive
            fingerprinting and alignment routines at near-native speed.
          </p>
        </div>
      );
    },
  },
  {
    id: "lenet5",
    category: "Deep Learning",
    title: "LeNet-5 Digit Classifier",
    src: "",
    screenshots: [],
    skills: {
      frontend: [PROJECT_SKILLS.streamlit, PROJECT_SKILLS.python],
      backend: [PROJECT_SKILLS.pytorch],
    },
    live: "https://github.com/marbo786/LENET-5",
    github: "https://github.com/marbo786/LENET-5",
    get content() {
      return (
        <div>
          <TypographyP className="font-mono text-2xl text-center">
            Real-Time Handwritten Digit Classification with LeNet-5
          </TypographyP>
          <TypographyP className="font-mono">
            Streamlit web app with an interactive canvas — draw any digit and get
            real-time classification from a PyTorch implementation of the classic
            LeNet-5 CNN trained on MNIST.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />
          <TypographyH3 className="my-4 mt-8">Model</TypographyH3>
          <p className="font-mono mb-2">
            PyTorch implementation of LeNet-5 trained on the MNIST dataset. Handles
            preprocessing of hand-drawn canvas input for robust real-time inference.
          </p>
          <TypographyH3 className="my-4 mt-8">Interface</TypographyH3>
          <p className="font-mono mb-2">
            Streamlit canvas lets users draw digits freehand. Predictions update
            instantly with confidence scores displayed for each class.
          </p>
        </div>
      );
    },
  },
  {
    id: "ssad",
    category: "Sports Analytics / AI",
    title: "SSAD Sports Analytics",
    src: "",
    screenshots: [],
    skills: {
      frontend: [PROJECT_SKILLS.dash, PROJECT_SKILLS.plotly],
      backend: [PROJECT_SKILLS.python, PROJECT_SKILLS.sklearn, PROJECT_SKILLS.llm],
    },
    live: "https://github.com/marbo786/SSAD",
    github: "https://github.com/marbo786/SSAD",
    get content() {
      return (
        <div>
          <TypographyP className="font-mono text-2xl text-center">
            ML-Powered Sports Analytics Dashboard with AI Chatbot
          </TypographyP>
          <TypographyP className="font-mono">
            Interactive Dash web app combining ML-powered performance prediction,
            dynamic Plotly visualizations, and an AI chatbot for natural language
            data exploration.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />
          <TypographyH3 className="my-4 mt-8">ML Predictions</TypographyH3>
          <p className="font-mono mb-2">
            Performance prediction models trained on sports data, surfaced through
            interactive Plotly charts with drill-down capabilities.
          </p>
          <TypographyH3 className="my-4 mt-8">AI Chatbot</TypographyH3>
          <p className="font-mono mb-2">
            Natural language interface lets users query the sports dataset conversationally
            — ask questions, get insights, no SQL required.
          </p>
        </div>
      );
    },
  },
  {
    id: "research-summarizer",
    category: "NLP / LLMs",
    title: "Research Paper Summarizer",
    src: "",
    screenshots: [],
    skills: {
      frontend: [PROJECT_SKILLS.streamlit, PROJECT_SKILLS.python],
      backend: [PROJECT_SKILLS.llm],
    },
    live: "https://github.com/marbo786/Research-paper-summarizer-",
    github: "https://github.com/marbo786/Research-paper-summarizer-",
    get content() {
      return (
        <div>
          <TypographyP className="font-mono text-2xl text-center">
            Model-Agnostic Research Paper Summarization Pipeline
          </TypographyP>
          <TypographyP className="font-mono">
            Streamlit-based PDF ingestion and chunking pipeline with a unified API
            abstracting multiple LLM backends — OpenAI, Cohere, and local models —
            enabling drop-in model switching without code changes.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />
          <TypographyH3 className="my-4 mt-8">PDF Pipeline</TypographyH3>
          <p className="font-mono mb-2">
            Ingests research PDFs, chunks them intelligently, and feeds sections
            through the summarization interface preserving context across chunks.
          </p>
          <TypographyH3 className="my-4 mt-8">Model-Agnostic Design</TypographyH3>
          <p className="font-mono mb-2">
            Unified backend API abstracts OpenAI, Cohere, and local models behind
            a single interface — swap models without touching application logic.
          </p>
        </div>
      );
    },
  },
];

const ProjectsSection = () => {
  return (
    <SectionWrapper id="projects" className="flex flex-col items-center justify-center min-h-screen py-20 z-10 relative">
      <div className="w-full max-w-6xl px-4 md:px-8 mx-auto">
        <SectionHeader
          id="projects"
          title="Projects"
          desc="Showcasing my technical creations."
          className="mb-12 md:mb-20 mt-0"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {projects.map((project, idx) => (
            <ProjectCard key={project.id} project={project} index={idx} />
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
};

const ProjectCard = ({ project, index }: { project: Project; index: number }) => {
  return (
    <Modal>
      <div className="bg-slate-950/75 backdrop-blur-xl border border-slate-800/80 hover:border-slate-750/80 rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1 shadow-lg hover:shadow-xl flex flex-col justify-between h-full min-h-[380px]">
        <div className="flex flex-col gap-4">
          {/* Card Head */}
          <div className="flex justify-between items-center">
            <span className="font-mono text-xs uppercase tracking-wider text-slate-500">
              {project.category}
            </span>
          </div>

          {/* Title */}
          <h3 className="font-mono font-bold text-2xl text-white mt-1">
            {project.title}
          </h3>

          {/* Description Snippet */}
          <div className="text-slate-400 text-sm font-mono mt-2 leading-relaxed">
            {project.id === "airsense" && "Production-grade MLOps system processing 420K+ air quality records."}
            {project.id === "debateai" && "NLP system that auto-generates structured debate arguments."}
            {project.id === "marcode" && "Hybrid plagiarism detection with WASM acceleration."}
            {project.id === "lenet5" && "Real-time handwritten digit classification using PyTorch."}
            {project.id === "ssad" && "ML-powered sports analytics dashboard with interactive plots."}
            {project.id === "research-summarizer" && "Model-agnostic research paper summarization pipeline."}
          </div>
        </div>

        <div className="flex flex-col gap-4 mt-6">
          {/* Tech Badges */}
          <div className="flex flex-wrap gap-1.5">
            {project.skills.frontend.map((s, i) => (
              <span 
                key={i} 
                className="px-2 py-0.5 rounded bg-slate-950/60 border border-slate-850 font-mono text-[10px] text-slate-400 flex items-center gap-1"
              >
                <span className="text-[12px] opacity-80">{s.icon}</span>
                {s.title}
              </span>
            ))}
            {project.skills.backend.map((s, i) => (
              <span 
                key={i} 
                className="px-2 py-0.5 rounded bg-slate-950/60 border border-slate-850 font-mono text-[10px] text-slate-400 flex items-center gap-1"
              >
                <span className="text-[12px] opacity-80">{s.icon}</span>
                {s.title}
              </span>
            ))}
          </div>

          {/* Modal Trigger Button */}
          <ModalTrigger className="w-full bg-slate-850 hover:bg-slate-800 text-white font-mono text-sm border border-slate-800 transition-colors py-2.5 rounded-xl flex items-center justify-center gap-2 mt-2">
            Explore Project
            <ArrowUpRight className="w-4 h-4 text-slate-400" />
          </ModalTrigger>
        </div>
      </div>

      <ModalBody className="max-w-[90%] md:max-w-[70%] lg:max-w-[50%] bg-slate-950/95 border border-slate-800 md:rounded-2xl shadow-2xl relative">
        <ModalContent className="p-6 md:p-10 text-white">
          <div className="flex flex-col gap-6">
            <div className="flex justify-between items-start border-b border-slate-800 pb-4">
              <div>
                <span className="font-mono text-xs uppercase tracking-wider text-slate-500">
                  {project.category}
                </span>
                <h2 className="font-mono font-bold text-3xl mt-1 text-white">
                  {project.title}
                </h2>
              </div>
            </div>
            
            {/* Custom content */}
            <div className="font-mono text-slate-350 leading-relaxed text-sm">
              {project.content}
            </div>
          </div>
        </ModalContent>
      </ModalBody>
    </Modal>
  );
};

export default ProjectsSection;
