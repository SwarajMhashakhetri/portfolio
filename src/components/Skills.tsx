import SyntaxHighlighter from "react-syntax-highlighter";
import { dracula } from "react-syntax-highlighter/dist/esm/styles/hljs";
import Seperator from "./Seperator";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Play } from "lucide-react";
import { skillList } from "@/Skilllist";
export default function Skills() {
  const [run, setRun] = useState<boolean>(false);
  const [compiled, setCompiled] = useState<boolean>(false);
  const [skills, setSkills] = useState<boolean>(false);
  const [compilingLogs, setCompilingLogs] = useState<string[]>([
    "Compiling...",
  ]);
  const codeString = `
  import axios from "axios";
  import {useState} from "react"
  const [skills,setSkills] = useState<string>();
  const getSkills = async()=>{
    try{
      const result = await axios.get("https://gettejesskills.com/api/v1",{
        headers:{
          "Authorization":"Bearer 2GPj5zLsMl97cUXcY677Eb+5ySq6p7t+yrXHzRwl8uo="
          }
        });
      }catch(error){
        alert("Failed to fetch skills")}
     }
    return <div>
          <button onClick={getSkills} className="button-main">
          See skills
          </button>
          <div className="skill-container">
          {loading?loading:skills.map(skill=><p className="skill-div">{skill}</p>)}
          </div></div>

  `;
  const handleRun = () => {
    if (!run) {
      setRun(true);
      setTimeout(() => {
        setCompilingLogs((previous) => [...previous, "Ready in 2.1S"]);
        setTimeout(() => {
          setCompilingLogs((previous) => [
            ...previous,
            "Serving on localhost:6969",
          ]);
          setTimeout(() => {
            setCompiled(true);
          }, 1000);
        }, 400);
      }, 2000);
    }
  };
  return (
    <div className="w-full h-full max-h-full    flex flex-col">
      <p className="ml-5 text-border ">../src/components/Skills.tsx</p>
      <div className=" overflow-y-scroll relative -translate-y-5 h-[300px] ">
        <SyntaxHighlighter
          language="typescript"
          style={{
            ...dracula,
            hljs: {
              overflowX: "auto",
              background: "transparent",
              color: "#bababa",
            },
          }}
        >
          {codeString}
        </SyntaxHighlighter>
        <button
          className="flex gap-3 py-2 px-3 border-border hover:bg-selected border-2 absolute right-3 top-3 group transition-colors"
          onClick={handleRun}
        >
          Run{" "}
          <Play className="text-primary group-hover:text-white transition-colors" />
        </button>
      </div>
      <div className="-translate-y-5">
        <Seperator />
      </div>
      {run && (
        <motion.div
          initial={{
            translateY: "50%",
            opacity: 0,
          }}
          transition={{
            duration: 0.4,
          }}
          animate={{
            translateY: "0",
            opacity: 1,
          }}
        >
          {compiled ? (
            <div className="flex flex-col items-center w-full relative">
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-sm text-border left-2 absolute"
              >
                http://localhost:6969
              </motion.p>

              <motion.button
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="border-border border py-2 w-36 hover:bg-selected"
                onClick={() => {
                  setSkills(true);
                }}
              >
                See skills
              </motion.button>
              {skills && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="mt-4 max-w-[80%] w-full  grid grid-cols-4 grid-row-4  border-border "
                >
                  {skillList.map((skill, index) => {
                    return (
                      <div
                        className="col-span-1 row-span-1 p-3 text-primary cursor-pointer"
                        key={index}
                      >
                        {skill}
                      </div>
                    );
                  })}
                </motion.div>
              )}
            </div>
          ) : (
            <div className="flex flex-col ">
              {compilingLogs.map((log, index) => {
                return (
                  <p className="text-primary " key={index}>
                    {log}
                  </p>
                );
              })}
            </div>
          )}
        </motion.div>
      )}
    </div>
  );
}
