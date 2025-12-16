"use client";
import BootScreen from "@/components/BootScreen";
import MainScreen from "@/components/MainScreen";
import { useState } from "react";

export default function Home() {
  const [bootDone, setBoot] = useState<boolean>(false);

  return (
    <main className="flex flex-col text-white gap-1 px-3 py-4 max-h-screen h-screen overflow-hidden">
      {bootDone ? <MainScreen /> : <BootScreen setBoot={setBoot} />}
    </main>
  );
}
