import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Folder, FolderOpen, FileText, ExternalLink, Github, ArrowLeft, X } from "lucide-react";
import Heading from "./Headings";
import StorageUsed from "./StorageUsed";

interface Project {
  name: string;
  liveDemo?: string;
  github?: string;
  readme: string;
}

export default function FileExplorer() {
  const [currentFolder, setCurrentFolder] = useState<string | null>(null);
  const [showReadme, setShowReadme] = useState(false);

  const projects: Project[] = [
    {
      name: "TaskFlow-AI",
      liveDemo: "https://email-assistant-vert.vercel.app/",
      github: "https://github.com/SwarajMhashakhetri/Email-assistant",
      readme: `# TaskFlow AI

An AI-powered email management application that automates task extraction and organization from emails.

## Overview
Built AI-powered email management application processing 1000+ emails with 90% task extraction accuracy using OpenAI GPT-4 and LangChain for natural language processing.

## Key Features
- Intelligent Task Extraction: Automatically extracts tasks from emails with 90% accuracy using GPT-4
- Priority Scoring System: Automated priority scoring (1-4 scale) with deadline validation
- Time Savings: Achieves 60 minutes daily time savings for users
- Gmail Integration: OAuth 2.0 authentication with real-time email synchronization
- Rate Limiting: Redis caching for efficient API rate limiting and background processing
- Interview Preparation: Automated interview preparation with 3x better success rate
- Responsive UI: Built with React 19 and Tailwind CSS with real-time progress tracking

## Tech Stack
- TypeScript
- Next.js
- React
- PostgreSQL
- OpenAI API
- LangChain
- Redis
- Docker

## Timeline
August 2025 - September 2025`,
    },
    {
      name: "Excali-Sketch",
      liveDemo: "https://excali-sketch-frontend-omni.vercel.app/",
      github: "https://github.com/SwarajMhashakhetri/ExcaliSketch",
      readme: `# Excali-Sketch

A real-time collaborative drawing application with custom graphics engine built from scratch.

## Overview
Built real-time collaborative drawing application supporting 10+ concurrent users per room with 50ms latency using WebSocket protocol and custom canvas engine implementation.

## Key Features
- Real-time Collaboration: Supports 10+ concurrent users per room with 50ms latency
- Custom Graphics Engine: Built from scratch with mathematical shape rendering
- Advanced Manipulation: Rotation, resizing, and bending features without external libraries
- Hit Detection Algorithms: Custom implementation for precise shape selection
- Secure Authentication: JWT authentication with WebSocket connections
- Optimized Performance: PostgreSQL persistence with <100ms response times
- Scalable Architecture: Efficient database queries and connection management

## Tech Stack
- Next.js
- React
- WebSocket
- PostgreSQL
- Express.js
- Prisma
- TypeScript

## Timeline
August 2025 - September 2025`,
    },
    {
      name: "P2P-Wallet",
      github: "https://github.com/SwarajMhashakhetri/P2PWallet",
      readme: `# P2P Wallet

A peer-to-peer wallet application for seamless money transfers and withdrawals.

## Overview
Engineered a peer-to-peer wallet application supporting seamless money transfers and withdrawals with modular and maintainable architecture.

## Key Features
- Peer-to-Peer Transfers: Seamless money transfers between users
- Withdrawal System: Secure and efficient withdrawal functionality
- Transaction Management: Comprehensive transaction tracking and history
- User Balance Tracking: Real-time balance updates with Prisma ORM
- Responsive UI: Consistent cross-device experience with Tailwind CSS
- Modular Architecture: Clean backend APIs using Next.js + Express
- Optimized Builds: Monorepo management with Turborepo for reduced dev overhead

## Tech Stack
- Next.js
- Express
- Turborepo
- PostgreSQL
- Prisma ORM
- Tailwind CSS

## Timeline
December 2024 - January 2025`,
    },
  ];

  const openFolder = (folderName: string) => {
    setCurrentFolder(folderName);
    setShowReadme(false);
  };

  const goBack = () => {
    setCurrentFolder(null);
    setShowReadme(false);
  };

  const currentProject = projects.find(p => p.name === currentFolder);

  return (
    <div className="flex flex-col mt-4 h-full pb-4">
      <Heading 
        title="FILESYSTEM" 
        subTitle={currentFolder ? `~/home/swaraj/projects/${currentFolder}` : "~/home/swaraj/projects"} 
      />
      
      <div className="px-2 h-full flex flex-col overflow-y-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="flex-1 relative"
        >
          <AnimatePresence mode="wait">
            {!currentFolder ? (
              // Grid View - Show all folders
              <motion.div
                key="grid"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className="grid grid-cols-3 gap-6"
              >
                {projects.map((project, index) => (
                  <motion.button
                    key={project.name}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 + index * 0.1 }}
                    onClick={() => openFolder(project.name)}
                    className="flex flex-col items-center gap-2 hover:opacity-80 transition-opacity"
                  >
                    <Folder size={48} className="text-primary" />
                    <span className="text-primary text-sm text-center">{project.name}</span>
                  </motion.button>
                ))}
              </motion.div>
            ) : (
              // Folder Contents View
              <motion.div
                key="folder"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                transition={{ duration: 0.3 }}
                className="h-full flex flex-col"
              >
                {/* Back Button */}
                <motion.button
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 }}
                  onClick={goBack}
                  className="flex items-center gap-2 text-primary hover:text-border transition-colors mb-6"
                >
                  <ArrowLeft size={20} className="text-border" />
                  <span className="text-sm">back</span>
                </motion.button>

                {/* Files - Horizontal List */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="flex gap-8 mb-6"
                >
                  {/* README.md */}
                  <motion.button
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.4 }}
                    onClick={() => setShowReadme(!showReadme)}
                    className="flex flex-col items-center gap-2 hover:opacity-80 transition-opacity"
                  >
                    <FileText size={40} className="text-border" />
                    <span className="text-primary text-sm">README.md</span>
                  </motion.button>

                  {/* Live Demo Link */}
                  {currentProject?.liveDemo && (
                    <motion.a
                      href={currentProject.liveDemo}
                      target="_blank"
                      rel="noopener noreferrer"
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.5 }}
                      className="flex flex-col items-center gap-2 hover:opacity-80 transition-opacity"
                    >
                      <ExternalLink size={40} className="text-border" />
                      <span className="text-primary text-sm">live-demo.link</span>
                    </motion.a>
                  )}

                  {/* GitHub Link */}
                  {currentProject?.github && (
                    <motion.a
                      href={currentProject.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.6 }}
                      className="flex flex-col items-center gap-2 hover:opacity-80 transition-opacity"
                    >
                      <Github size={40} className="text-border" />
                      <span className="text-primary text-sm">github.link</span>
                    </motion.a>
                  )}
                </motion.div>

                {/* README Content */}
                <AnimatePresence>
                  {showReadme && currentProject && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="border border-primary p-4 overflow-y-auto flex-1 mb-4"
                    >
                      <div className="flex justify-between items-start mb-4">
                        <h3 className="text-primary font-bold">README.md</h3>
                        <button
                          onClick={() => setShowReadme(false)}
                          className="text-border hover:text-primary transition-colors"
                        >
                          <X size={18} />
                        </button>
                      </div>
                      <div className="text-primary text-sm whitespace-pre-wrap font-mono">
                        {currentProject.readme}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Folder Info - Bottom Right */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.7 }}
                  className="mt-auto flex items-center gap-3 justify-end"
                >
                  <FolderOpen size={32} className="text-border" />
                  <span className="text-border text-sm">{currentFolder}</span>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4 }}
          className="mt-auto"
        >
          <StorageUsed />
        </motion.div>
      </div>
    </div>
  );
}