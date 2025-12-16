"use client"

import dynamic from "next/dynamic"
import { useState } from "react"

const BootScreen = dynamic(() => import("@/components/BootScreen"), {
  ssr: false
})

const MainScreen = dynamic(() => import("@/components/MainScreen"), {
  ssr: false
})

export default function Home() {
  const [bootDone, setBoot] = useState(false)

  return (
    <main className="flex flex-col text-white gap-1 px-3 py-4 max-h-screen h-screen overflow-hidden">
      {bootDone ? <MainScreen /> : <BootScreen setBoot={setBoot} />}
    </main>
  )
}
