"use client"

import { Dispatch, SetStateAction, useEffect, useState } from "react"
import { betterBootMessages } from "@/bootMesssages"

interface IProp {
  setBoot: Dispatch<SetStateAction<boolean>>
}

export default function BootScreen({ setBoot }: IProp) {
  const [messages, setMessages] = useState<string[]>([])

  useEffect(() => {
    const list = betterBootMessages.split("\n")
    let index = 0

    const interval = setInterval(() => {
      setMessages(prev => [...prev, list[index]])

      const div = document.getElementById("scrollend")
      div?.scrollIntoView()

      index++

      if (index === list.length - 1) {
        clearInterval(interval)
        setTimeout(() => {
          setBoot(true)
        }, 300)
      }
    }, 50)

    return () => clearInterval(interval)
  }, [setBoot])

  return (
    <>
      {messages.map((msg, index) => (
        <div
          key={index}
          className={`flex ${index === 0 ? "mt-auto" : ""} text-sm text-[#aacfd1]`}
        >
          <p>{msg}</p>
        </div>
      ))}
      <div id="scrollend" className="mb-4" />
    </>
  )
}
