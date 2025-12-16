"use client"

import { useEffect, useRef, useState } from "react"
import DottedSeperator from "./DottedSeperator"

export default function CPUInfo() {
  const [SmoothieComponent, setSmoothieComponent] = useState<any>(null)
  const ts1 = useRef<any>(null)
  const ts2 = useRef<any>(null)
  const ts3 = useRef<any>(null)
  const ts4 = useRef<any>(null)

  const getRandom = () => 0.5 + Math.random() * 0.2

  useEffect(() => {
    let interval: any

    import("react-smoothie").then(mod => {
      setSmoothieComponent(() => mod.default)

      ts1.current = new mod.TimeSeries({})
      ts2.current = new mod.TimeSeries({})
      ts3.current = new mod.TimeSeries({})
      ts4.current = new mod.TimeSeries({})

      interval = setInterval(() => {
        const time = Date.now()
        ts1.current.append(time, getRandom())
        ts2.current.append(time, getRandom())
        ts3.current.append(time, getRandom())
        ts4.current.append(time, getRandom())
      }, 500)
    })

    return () => {
      if (interval) clearInterval(interval)
    }
  }, [])

  if (!SmoothieComponent) return null

  return (
    <div className="flex flex-col text-primary px-2 -translate-y-1">
      <div className="flex justify-between items-center">
        <p>CPU Usage</p>
        <p className="text-border text-sm">AMD ryzen 9 9950x</p>
      </div>

      <div className="flex items-center">
        <div className="flex flex-col">
          <p># 1-8</p>
        </div>
        <div className="flex flex-col mt-1 w-full">
          <DottedSeperator />
          <SmoothieComponent
            responsive
            height={30}
            labels={{ disabled: true }}
            grid={{
              fillStyle: "transparent",
              strokeStyle: "transparent",
              verticalSections: 0,
              borderVisible: false,
            }}
            series={[
              { data: ts1.current, strokeStyle: "#aacfd1", lineWidth: 1 },
              { data: ts2.current, strokeStyle: "#aacfd1", lineWidth: 1 },
            ]}
          />
          <DottedSeperator />
        </div>
      </div>

      <div className="flex mt-3 items-center">
        <div className="flex flex-col">
          <p># 9-16</p>
        </div>
        <div className="flex flex-col mt-1 w-full">
          <DottedSeperator />
          <SmoothieComponent
            responsive
            height={50}
            labels={{ disabled: true }}
            grid={{
              fillStyle: "transparent",
              strokeStyle: "transparent",
              verticalSections: 0,
              borderVisible: false,
            }}
            series={[
              { data: ts3.current, strokeStyle: "#aacfd1", lineWidth: 1 },
              { data: ts4.current, strokeStyle: "#aacfd1", lineWidth: 1 },
            ]}
          />
          <DottedSeperator />
        </div>
      </div>
    </div>
  )
}
