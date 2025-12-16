import { addSeconds, format } from "date-fns";
import Seperator from "./Seperator";
import { useEffect, useState } from "react";

export default function GeneralInfo() {
  const [uptime, setUptime] = useState<number>(0);
  function formatTime(seconds: number): string {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;

    return `${String(hours).padStart(2, "0")}:${String(minutes).padStart(2, "0")}:${String(secs).padStart(2, "0")}`;
  }
  useEffect(() => {
    const interval = setInterval(() => {
      setUptime((pre) => pre + 1);
    }, 1000);
    return () => {
      clearInterval(interval);
    };
  }, []);
  return (
    <div className="flex flex-col     text-xl ">
      <div className="flex items-center justify-center">
        <div className="flex flex-col ">
          <p className="text-border">{new Date().getFullYear()}</p>
          <p className=" text-primary">{format(new Date(), "MMM d")}</p>
        </div>
        <div className="flex flex-col px-2 items-center">
          <p className="text-border">UPTIME</p>
          <p className=" text-primary">{formatTime(uptime)}</p>
        </div>
        <div className="flex flex-col px-2 items-center">
          <p className="text-border">TYPE</p>
          <p className=" text-primary">LINUX</p>
        </div>
        <div className="flex flex-col px-2 items-center">
          <p className="text-border">POWER</p>
          <p className=" text-primary">CHARGE</p>
        </div>
      </div>
      <Seperator />
      <div className="flex items-center justify-center text-base">
        <div className="flex flex-col px-2 items-center">
          <p className="text-primary">MANUFACTURER</p>
          <p className=" text-border text-sm">DELL COMPUTERS</p>
        </div>
        <div className="flex flex-col px-2 items-center">
          <p className="text-primary">MODEL</p>
          <p className=" text-border">yt69z</p>
        </div>
        <div className="flex flex-col px-2 items-center">
          <p className="text-primary">CHASSIS</p>
          <p className=" text-border">Notebook</p>
        </div>
      </div>
    </div>
  );
}
