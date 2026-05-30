"use client";

import React, { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "motion/react";
import { SKILLS, Skill, SkillNames } from "@/data/constants";
import { useSounds } from "@/components/realtime/hooks/use-sounds";
import { cn } from "@/lib/utils";
import { 
  Terminal, 
  Cpu, 
  Database, 
  Globe, 
  Wrench, 
  ArrowDown, 
  MousePointerClick, 
  Keyboard as KeyboardIcon 
} from "lucide-react";

// Categorized Skills for Visual Filtering & Legend
const CATEGORIES = [
  {
    id: "programming",
    label: "Programming & Core CS",
    icon: <Terminal className="w-5 h-5" />,
    color: "#3776ab",
    skills: [
      SkillNames.PYTHON,
      SkillNames.CPP,
      SkillNames.SQL,
      SkillNames.DSA,
      SkillNames.OOP,
      SkillNames.GIT,
    ],
  },
  {
    id: "ml_ai",
    label: "Machine Learning / AI",
    icon: <Cpu className="w-5 h-5" />,
    color: "#ee4c2c",
    skills: [
      SkillNames.ML,
      SkillNames.DEEP_LEARNING,
      SkillNames.NEURAL_NETWORKS,
      SkillNames.TENSORFLOW,
      SkillNames.PYTORCH,
      SkillNames.NLP,
    ],
  },
  {
    id: "data_science",
    label: "Data Science & Analytics",
    icon: <Database className="w-5 h-5" />,
    color: "#7b2ff7",
    skills: [
      SkillNames.PANDAS,
      SkillNames.NUMPY,
      SkillNames.MATPLOTLIB,
      SkillNames.PREPROCESSING,
      SkillNames.STATS,
    ],
  },
  {
    id: "web_dev",
    label: "Web / App Development",
    icon: <Globe className="w-5 h-5" />,
    color: "#009688",
    skills: [
      SkillNames.STREAMLIT,
      SkillNames.FASTAPI,
      SkillNames.DASH,
    ],
  },
  {
    id: "tools",
    label: "Tools & Deployment",
    icon: <Wrench className="w-5 h-5" />,
    color: "#2496ed",
    skills: [
      SkillNames.LINUX,
      SkillNames.DOCKER,
      SkillNames.REST_APIS,
      SkillNames.DEPLOYMENT,
    ],
  },
];

// QWERTY Keyboard layout mapping
type KeyDefinition = {
  key: string;
  skill: SkillNames | null;
  label?: string;
  span?: string; // CSS grid col-span or custom widths
};

const KEYBOARD_ROWS: KeyDefinition[][] = [
  [
    { key: "q", skill: SkillNames.REST_APIS },
    { key: "w", skill: SkillNames.DASH },
    { key: "e", skill: SkillNames.PREPROCESSING },
    { key: "r", skill: SkillNames.STREAMLIT },
    { key: "t", skill: SkillNames.TENSORFLOW },
    { key: "y", skill: SkillNames.PYTORCH },
    { key: "u", skill: SkillNames.NUMPY },
    { key: "i", skill: SkillNames.STATS },
    { key: "o", skill: SkillNames.OOP },
    { key: "p", skill: SkillNames.PYTHON },
  ],
  [
    { key: "a", skill: SkillNames.PANDAS },
    { key: "s", skill: SkillNames.SQL },
    { key: "d", skill: SkillNames.DSA },
    { key: "f", skill: SkillNames.FASTAPI },
    { key: "g", skill: SkillNames.GIT },
    { key: "h", skill: SkillNames.NLP },
    { key: "j", skill: null, label: "J" },
    { key: "k", skill: SkillNames.DOCKER },
    { key: "l", skill: SkillNames.DEEP_LEARNING },
  ],
  [
    { key: "z", skill: SkillNames.DEPLOYMENT },
    { key: "x", skill: SkillNames.LINUX },
    { key: "c", skill: SkillNames.CPP },
    { key: "v", skill: SkillNames.MATPLOTLIB },
    { key: "b", skill: null, label: "B" },
    { key: "n", skill: SkillNames.NEURAL_NETWORKS },
    { key: "m", skill: SkillNames.ML },
  ]
];

export default function SkillsInteractiveGrid() {
  const [selectedSkill, setSelectedSkill] = useState<Skill | null>(SKILLS[SkillNames.PYTHON]);
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const [pressedKey, setPressedKey] = useState<string | null>(null);
  
  const { playPressSound, playReleaseSound } = useSounds();

  // Handle skill selection and trigger 3D background sync
  const selectSkill = useCallback((skill: Skill) => {
    setSelectedSkill(skill);
    playPressSound();
    
    // Dispatch custom event to notify AnimatedBackground 3D scene
    const event = new CustomEvent("select-skill", {
      detail: {
        skillName: skill.name,
        threeDKey: skill.threeDKey,
      }
    });
    window.dispatchEvent(event);

    setTimeout(() => {
      playReleaseSound();
    }, 150);
  }, [playPressSound, playReleaseSound]);

  // Map physical keyboard keys to skills
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      const activeElement = document.activeElement;
      const isInputFocused = activeElement && (
        activeElement.tagName === "INPUT" || 
        activeElement.tagName === "TEXTAREA" || 
        (activeElement as HTMLElement).isContentEditable
      );
      if (isInputFocused) return;

      const char = e.key.toLowerCase();
      setPressedKey(char);

      // Find the key in keyboard layout
      for (const row of KEYBOARD_ROWS) {
        const match = row.find(k => k.key === char);
        if (match && match.skill) {
          e.preventDefault();
          const skill = SKILLS[match.skill];
          selectSkill(skill);
          break;
        }
      }
    };

    const handleKeyUp = () => {
      setPressedKey(null);
    };

    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("keyup", handleKeyUp);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("keyup", handleKeyUp);
    };
  }, [selectSkill]);

  // Find a skill's category for styling
  const getSkillCategory = (skillName: SkillNames) => {
    return CATEGORIES.find(c => c.skills.includes(skillName));
  };

  return (
    <div className="w-full max-w-6xl mx-auto px-4 mt-8 flex flex-col gap-8 pb-16 pointer-events-auto relative z-10">
      
      {/* Visual Keyboard & Sidebar Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Left Side: Cyber Mechanical Keyboard & Categories */}
        <div className="lg:col-span-7 flex flex-col gap-6 w-full">
          
          {/* Cyber Keyboard Frame */}
          <div className="bg-slate-900/80 dark:bg-black/70 backdrop-blur-md rounded-2xl p-6 border border-slate-700/50 shadow-2xl relative overflow-hidden">
            
            {/* Keyboard Status Bar */}
            <div className="flex justify-between items-center mb-6 pb-4 border-b border-slate-800/80">
              <div className="flex items-center gap-2 text-slate-400 font-mono text-xs">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
                SYSTEM ACTIVE // CYBER-KEYBOARD v1.0
              </div>
              <div className="flex items-center gap-2 text-slate-400 font-mono text-xs">
                <KeyboardIcon className="w-4 h-4 text-slate-500" />
                TYPE ON YOUR PHYSICAL KEYBOARD!
              </div>
            </div>

            {/* Keyboard Rows */}
            <div className="flex flex-col gap-2.5 md:gap-3.5 w-full items-center">
              {KEYBOARD_ROWS.map((row, rowIdx) => (
                <div 
                  key={rowIdx} 
                  className={cn(
                    "flex gap-2.5 md:gap-3.5 w-full justify-center",
                    rowIdx === 1 && "pl-[3%]",
                    rowIdx === 2 && "pl-[6%]"
                  )}
                >
                  {row.map((keyInfo) => {
                    const skill = keyInfo.skill ? SKILLS[keyInfo.skill] : null;
                    const cat = keyInfo.skill ? getSkillCategory(keyInfo.skill) : null;
                    const isSelected = selectedSkill && skill && selectedSkill.name === skill.name;
                    const isPressed = pressedKey === keyInfo.key;
                    const isDimmed = activeCategory && cat && cat.id !== activeCategory;

                    return (
                      <button
                        key={keyInfo.key}
                        onClick={() => skill && selectSkill(skill)}
                        disabled={!skill}
                        className={cn(
                          "relative rounded-md font-mono font-bold text-base md:text-lg flex flex-col items-center justify-between transition-all duration-150 uppercase shadow-md select-none",
                          // Row key shapes and spacing
                          "w-10 h-11 md:w-12 md:h-13",
                          !skill 
                            ? "bg-slate-800/20 text-slate-600 border border-slate-800/40 cursor-default" 
                            : "cursor-pointer bg-slate-800/80 hover:bg-slate-700/80 text-slate-300 border border-slate-700/80",
                          // Active Category Highlighter
                          isDimmed && "opacity-20 scale-95",
                          // Selection Glowing States
                          isSelected && "bg-slate-700/80 text-white border-2 scale-105",
                          // Depressed Key Physics Simulation
                          isPressed && "translate-y-1 scale-95 shadow-inner"
                        )}
                        style={{
                          borderBottomWidth: isPressed ? '1px' : '4px',
                          borderColor: isSelected && cat ? cat.color : undefined,
                          boxShadow: isSelected && cat 
                            ? `0 0 15px ${cat.color}40, inset 0 -4px 0 ${cat.color}`
                            : undefined
                        }}
                      >
                        {/* Legend text */}
                        <span className="text-[10px] md:text-xs text-slate-500 self-start pl-1 pt-0.5">
                          {keyInfo.key}
                        </span>

                        {/* Technology Logo/Symbol inside the keycap */}
                        {skill ? (
                          <div className="flex-1 flex items-center justify-center pb-1.5">
                            <img 
                              src={skill.icon} 
                              alt={skill.label} 
                              className="w-5 h-5 md:w-6 md:h-6 object-contain pointer-events-none filter brightness-90 contrast-125" 
                            />
                          </div>
                        ) : (
                          <span className="flex-1 flex items-center justify-center text-slate-700 pb-1.5 text-xs">
                            {keyInfo.label}
                          </span>
                        )}
                      </button>
                    );
                  })}
                </div>
              ))}
            </div>

            {/* Custom Legend instructions */}
            <div className="mt-6 flex justify-between items-center text-slate-500 font-mono text-[10px] md:text-xs">
              <span className="flex items-center gap-1">
                <MousePointerClick className="w-3.5 h-3.5 text-slate-400" /> Hover / Click a key
              </span>
              <span>
                (Active: <strong className="text-slate-300">{selectedSkill ? selectedSkill.label : "None"}</strong>)
              </span>
            </div>

          </div>

          {/* Foreground Category Legends */}
          <div className="flex flex-wrap gap-2 justify-center lg:justify-start">
            {CATEGORIES.map((cat) => {
              const isActive = activeCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(isActive ? null : cat.id)}
                  className={cn(
                    "flex items-center gap-2 px-3 py-1.5 rounded-full font-mono text-xs border transition-all duration-200",
                    isActive
                      ? "bg-slate-900 border-slate-600 text-white shadow-md scale-105"
                      : "bg-slate-900/30 dark:bg-black/20 border-slate-800 text-slate-400 hover:text-slate-200 hover:border-slate-700"
                  )}
                  style={{
                    borderColor: isActive ? cat.color : undefined,
                    boxShadow: isActive ? `0 0 10px ${cat.color}20` : undefined,
                  }}
                >
                  <span style={{ color: cat.color }}>{cat.icon}</span>
                  {cat.label}
                </button>
              );
            })}
          </div>

        </div>

        {/* Right Side: High-Impact Glassmorphic Detail Panel */}
        <div className="lg:col-span-5 h-full">
          <AnimatePresence mode="wait">
            {selectedSkill ? (
              <motion.div
                key={selectedSkill.name}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.2 }}
                className="bg-slate-900/80 dark:bg-black/60 backdrop-blur-lg rounded-2xl p-6 border border-slate-700/40 shadow-2xl relative overflow-hidden flex flex-col gap-6 md:min-h-[350px] justify-between"
              >
                {/* Glowing corner flare */}
                <div 
                  className="absolute -top-24 -right-24 w-48 h-48 rounded-full blur-[80px] opacity-30 pointer-events-none"
                  style={{ backgroundColor: selectedSkill.color }}
                />

                <div className="flex flex-col gap-4">
                  {/* Skill Card Header */}
                  <div className="flex items-center justify-between border-b border-slate-800 pb-4">
                    <div className="flex items-center gap-3">
                      <div 
                        className="w-12 h-12 rounded-xl flex items-center justify-center p-2.5 bg-slate-950/80 border border-slate-800"
                        style={{ boxShadow: `0 0 15px ${selectedSkill.color}20` }}
                      >
                        <img 
                          src={selectedSkill.icon} 
                          alt={selectedSkill.label} 
                          className="w-full h-full object-contain filter brightness-110 contrast-125" 
                        />
                      </div>
                      <div>
                        <h3 className="font-mono font-bold text-xl text-white tracking-wide">
                          {selectedSkill.label}
                        </h3>
                        <span className="font-mono text-[10px] text-slate-500 tracking-widest uppercase">
                          Skill Registry #{selectedSkill.id}
                        </span>
                      </div>
                    </div>
                    
                    {/* Category Label */}
                    <div className="flex items-center gap-1.5 px-2 py-0.5 rounded bg-slate-950/60 border border-slate-800 font-mono text-[10px] text-slate-400">
                      <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: selectedSkill.color }} />
                      {getSkillCategory(selectedSkill.name as SkillNames)?.label.split(" ")[0]}
                    </div>
                  </div>

                  {/* Skill Short Description */}
                  <div className="bg-slate-950/40 border border-slate-850 p-4 rounded-xl font-mono text-sm leading-relaxed text-slate-300">
                    <p className="indent-2">{selectedSkill.shortDescription}</p>
                  </div>
                </div>

                {/* 3D Sync Panel */}
                <div className="mt-4 pt-4 border-t border-slate-800/80 flex flex-col gap-3">
                  <div className="flex justify-between items-center text-slate-400 font-mono text-xs">
                    <span>3D CANVAS INTERACTIVE BINDING:</span>
                    <span 
                      className="px-2 py-0.5 rounded bg-slate-950/60 font-bold uppercase border border-slate-800 tracking-wider text-[10px]"
                      style={{ color: selectedSkill.color }}
                    >
                      {selectedSkill.threeDKey}
                    </span>
                  </div>

                  <div className="bg-slate-950/80 rounded-lg p-3 border border-slate-800/80 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="w-2.5 h-2.5 rounded-full bg-blue-500 animate-ping" />
                      <span className="font-mono text-[10px] text-slate-400 uppercase">
                        Dynamic 3D Matrix Synced
                      </span>
                    </div>
                    <div className="flex items-center gap-1 text-[10px] text-slate-500 font-mono">
                      <span>KEY DEPRESSED</span>
                      <ArrowDown className="w-3.5 h-3.5 text-blue-500 animate-bounce" />
                    </div>
                  </div>
                </div>

              </motion.div>
            ) : (
              <div className="bg-slate-900/60 rounded-2xl p-6 border border-slate-800 shadow-2xl flex flex-col items-center justify-center text-center font-mono min-h-[350px] text-slate-500">
                <KeyboardIcon className="w-12 h-12 text-slate-700 mb-3 animate-pulse" />
                <span>Hover a keycap or press any letter key to analyze skill parameters...</span>
              </div>
            )}
          </AnimatePresence>
        </div>

      </div>

    </div>
  );
}
