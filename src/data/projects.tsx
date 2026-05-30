import AceTernityLogo from "@/components/logos/aceternity";
import SlideShow from "@/components/slide-show";
import { Button } from "@/components/ui/button";
import { TypographyH3, TypographyP } from "@/components/ui/typography";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { ReactNode } from "react";
import {
  SiDocker,
  SiFastapi,
  SiMlflow,
  SiPython,
  SiScikitlearn,
} from "react-icons/si";
import { TbBrandDocker } from "react-icons/tb";

const BASE_PATH = "/assets/projects-screenshots";

const ProjectsLinks = ({ live, repo }: { live: string; repo?: string }) => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-start gap-3 my-3 mb-8">
      <Link
        className="font-mono underline flex gap-2"
        rel="noopener"
        target="_new"
        href={live}
      >
        <Button variant={"default"} size={"sm"}>
          Visit Website
          <ArrowUpRight className="ml-3 w-5 h-5" />
        </Button>
      </Link>
      {repo && (
        <Link
          className="font-mono underline flex gap-2"
          rel="noopener"
          target="_new"
          href={repo}
        >
          <Button variant={"default"} size={"sm"}>
            Github
            <ArrowUpRight className="ml-3 w-5 h-5" />
          </Button>
        </Link>
      )}
    </div>
  );
};

export type Skill = {
  title: string;
  bg: string;
  fg: string;
  icon: ReactNode;
};

const PROJECT_SKILLS = {
  python: {
    title: "Python",
    bg: "black",
    fg: "white",
    icon: <SiPython />,
  },
  fastapi: {
    title: "FastAPI",
    bg: "black",
    fg: "white",
    icon: <SiFastapi />,
  },
  docker: {
    title: "Docker",
    bg: "black",
    fg: "white",
    icon: <SiDocker />,
  },
  sklearn: {
    title: "Scikit-learn",
    bg: "black",
    fg: "white",
    icon: <SiScikitlearn />,
  },
  mlflow: {
    title: "MLflow",
    bg: "black",
    fg: "white",
    icon: <SiMlflow />,
  },
  prefect: {
    title: "Prefect",
    bg: "black",
    fg: "white",
    icon: (
      <span style={{ fontWeight: "bold", fontSize: "0.75rem" }}>PF</span>
    ),
  },
  pandas: {
    title: "Pandas",
    bg: "black",
    fg: "white",
    icon: (
      <span style={{ fontWeight: "bold", fontSize: "0.75rem" }}>PD</span>
    ),
  },
  pytorch: {
    title: "PyTorch",
    bg: "black",
    fg: "white",
    icon: (
      <span style={{ fontWeight: "bold", fontSize: "0.75rem" }}>PT</span>
    ),
  },
  nlp: {
    title: "NLP",
    bg: "black",
    fg: "white",
    icon: (
      <span style={{ fontWeight: "bold", fontSize: "0.75rem" }}>NLP</span>
    ),
  },
  cicd: {
    title: "CI/CD",
    bg: "black",
    fg: "white",
    icon: (
      <span style={{ fontWeight: "bold", fontSize: "0.75rem" }}>CI</span>
    ),
  },
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
    title: "AirSense — Air Quality Intelligence",
    src: "/assets/projects-screenshots/portfolio/landing.png",
    screenshots: ["landing.png"],
    skills: {
      frontend: [
        PROJECT_SKILLS.python,
        PROJECT_SKILLS.fastapi,
        PROJECT_SKILLS.sklearn,
      ],
      backend: [
        PROJECT_SKILLS.mlflow,
        PROJECT_SKILLS.prefect,
        PROJECT_SKILLS.docker,
        PROJECT_SKILLS.cicd,
        PROJECT_SKILLS.pandas,
      ],
    },
    live: "https://github.com/marbo786",
    github: "https://github.com/marbo786",
    get content() {
      return (
        <div>
          <TypographyP className="font-mono text-2xl text-center">
            Production-grade Air Quality Intelligence System
          </TypographyP>
          <TypographyP className="font-mono">
            AirSense is a fully automated MLOps pipeline that processes 420K+
            air quality records, engineers 40+ features, and serves real-time
            predictions via a FastAPI backend. Built with reproducibility,
            scalability, and production deployment in mind.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />

          <TypographyH3 className="my-4 mt-8">ML Models</TypographyH3>
          <p className="font-mono mb-2">
            Developed and evaluated multiple ML models — achieving{" "}
            <strong>86.6% accuracy</strong> in AQI classification and an{" "}
            <strong>RMSE of 13.15</strong> in PM2.5 regression using
            Scikit-learn.
          </p>

          <TypographyH3 className="my-4 mt-8">
            FastAPI Backend
          </TypographyH3>
          <p className="font-mono mb-2">
            Designed and deployed a FastAPI-based REST API serving multiple
            trained ML models with real-time inference endpoints, handling
            classification and regression tasks simultaneously.
          </p>

          <TypographyH3 className="my-4 mt-8">
            MLOps Pipeline
          </TypographyH3>
          <p className="font-mono mb-2">
            Orchestrated a <strong>10-task end-to-end training pipeline</strong>{" "}
            using Prefect — from data ingestion and feature engineering to model
            training and deployment. MLflow tracks all experiments for full
            reproducibility.
          </p>

          <TypographyH3 className="my-4 mt-8">
            Docker & CI/CD
          </TypographyH3>
          <p className="font-mono mb-2">
            Containerized the entire system with Docker Compose and implemented
            CI/CD pipelines for automated testing, linting, and deployment on
            every push.
          </p>
        </div>
      );
    },
  },
  {
    id: "debate-ai",
    category: "NLP / Hackathon",
    title: "Debate AI — Argument Generator",
    src: "/assets/projects-screenshots/portfolio/landing.png",
    screenshots: ["landing.png"],
    skills: {
      frontend: [
        PROJECT_SKILLS.python,
        PROJECT_SKILLS.nlp,
      ],
      backend: [
        PROJECT_SKILLS.pytorch,
      ],
    },
    live: "https://github.com/marbo786",
    github: "https://github.com/marbo786",
    get content() {
      return (
        <div>
          <TypographyP className="font-mono text-2xl text-center">
            AI-Powered Debate Argument Generator
          </TypographyP>
          <TypographyP className="font-mono">
            Built during the{" "}
            <strong>Hack and Connect hackathon</strong> hosted by Netronix
            Society at GIKI. An NLP system that analyzes any debate topic,
            extracts semantic context, and auto-generates structured pro and con
            arguments — helping debaters rapidly explore multiple perspectives.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />

          <TypographyH3 className="my-4 mt-8">
            Semantic Analysis
          </TypographyH3>
          <p className="font-mono mb-2">
            The system uses NLP techniques to deeply parse debate topics,
            identifying key entities, stances, and contextual nuances before
            generating arguments.
          </p>

          <TypographyH3 className="my-4 mt-8">
            Argument Generation
          </TypographyH3>
          <p className="font-mono mb-2">
            Automatically produces balanced, structured{" "}
            <strong>pro and con arguments</strong> using ML-based text analysis,
            enabling multi-perspective reasoning in seconds.
          </p>

          <TypographyH3 className="my-4 mt-8">Hackathon</TypographyH3>
          <p className="font-mono mb-2">
            Delivered under time pressure at a competitive hackathon environment
            at GIKI. The tool proved practically useful for debaters who needed
            rapid, well-structured arguments across unfamiliar topics.
          </p>
        </div>
      );
    },
  },
];

export default projects;
