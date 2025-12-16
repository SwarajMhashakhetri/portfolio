"use client";

import { useState } from "react";
import LinuxLike from "./LinuxLike";

export default function MainScreen() {
  const [mode, setMode] = useState<"simple" | "linux">("linux");
  return (
    <div className="w-full h-full">
      {mode === "simple" ? "simple " : <LinuxLike />}
    </div>
  );
}
