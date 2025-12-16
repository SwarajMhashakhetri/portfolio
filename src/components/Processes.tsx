import { getRandomInRange } from "@/utils/randomNumber";
import { useEffect, useState } from "react";

interface Processes {
  pid: number;
  name: string;
  cpu: number;
  memory: number;
}
export default function Processes() {
  const [processes, setProcesses] = useState<Processes[]>([
    {
      pid: 6969,
      name: "Terminal",
      memory: 15,
      cpu: 2,
    },
    {
      pid: 4200,
      name: "Neovim",
      memory: 24,
      cpu: 14,
    },
    {
      pid: 2701,
      name: "Fiefox",
      memory: 8,
      cpu: 3,
    },
    {
      pid: 2208,
      name: "Docker",
      memory: 30,
      cpu: 20,
    },
    {
      pid: 2378,
      name: "Firefox tab:github",
      memory: 6.9,
      cpu: 6.9,
    },
  ]);
  useEffect(() => {
    const interval = setInterval(() => {
      setProcesses((processes) => {
        const updatedProcess = processes.map((pr) => {
          return { ...pr, cpu: Math.floor(getRandomInRange(5, 35)) };
        });
        return updatedProcess;
      });

      return () => {
        clearInterval(interval);
      };
    }, 1000);
  }, []);

  return (
    <div className="flex flex-col gap-3 -translate-y-1">
      <div className="flex justify-between items-center text-primary">
        <p>TOP PROCESSES</p>
        <p className="text-sm text-border">PID | NAME | CPU | MEM</p>
      </div>
      <div className="flex flex-col ">
        {processes
          .sort((a, b) => b.cpu - a.cpu)
          .map((proc, index) => {
            return (
              <div key={index} className="flex justify-between text-sm">
                <div className="flex gap-2 items-center">
                  <p className="text-border">{proc.pid}</p>
                  <p className="text-primary">{proc.name}</p>
                </div>
                <div className="flex text-border gap-3">
                  <p>{proc.cpu}%</p>
                  <p>{proc.memory}%</p>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
}
