import { useEffect, useState } from "react";
import DottedSeperator from "./DottedSeperator";
import SmoothieComponent, { TimeSeries } from "react-smoothie";

export default function CPUInfo() {
  const getRandom = () => 0.5 + Math.random() * 0.2;
  const [coreGroupOneAVG, setGroupOneAvg] = useState<number>(55);
  const [coreGroupTwoAVG, setGroupTwoAvg] = useState<number>(55);
  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setGroupTwoAvg(Math.floor(getRandomInRange(40, 70)));
  //     setGroupOneAvg(Math.floor(getRandomInRange(40, 70)));
  //   }, 5000);
  //   return () => {
  //     clearInterval(interval);
  //   };
  // }, []);
  const ts1 = new TimeSeries({});
  const ts2 = new TimeSeries({});
  const ts3 = new TimeSeries({});
  const ts4 = new TimeSeries({});

  useEffect(() => {
    const interval = setInterval(() => {
      var time = new Date().getTime();
      ts1.append(time, getRandom());
      ts2.append(time, getRandom());
      ts3.append(time, getRandom());
      ts4.append(time, getRandom());
    }, 500);

    return () => {
      clearInterval(interval);
    };
  }, []);
  return (
    <div className="flex flex-col text-primary  px-2 -translate-y-1">
      <div className="flex justify-between items-center">
        <p>CPU Usage</p>
        <p className="text-border text-sm">AMD ryzen 9 9950x</p>
      </div>
      <div className="flex items-center ">
        <div className="flex flex-col">
          <p># 1-8</p>
          <p className="text-border text-xs">Avg. {coreGroupOneAVG}%</p>
        </div>
        <div className="flex flex-col mt-1">
          <DottedSeperator />
          <SmoothieComponent
            streamDelay={1000}
            containerStyle={{
              background: "transparent",
            }}
            responsive
            height={30}
            className="w-full bg-transparent"
            labels={{ disabled: true }}
            grid={{
              fillStyle: "transparent",
              strokeStyle: "transparent",
              verticalSections: 0,
              borderVisible: false,
            }}
            series={[
              {
                data: ts1,
                strokeStyle: "#aacfd1",
                lineWidth: 1,
              },
              {
                data: ts2,
                strokeStyle: "#aacfd1",
                lineWidth: 1,
              },
            ]}
          />

          <DottedSeperator />
        </div>
      </div>

      <div className="flex mt-3  gap-2 items-center">
        <div className="flex flex-col">
          <p># 9-16</p>
          <p className="text-border text-xs">Avg. {coreGroupTwoAVG}%</p>
        </div>
        <div className="flex flex-col mt-1">
          <DottedSeperator />
          <SmoothieComponent
            streamDelay={1000}
            containerStyle={{
              background: "transparent",
            }}
            responsive
            height={50}
            className="w-full bg-transparent"
            labels={{ disabled: true }}
            grid={{
              fillStyle: "transparent",
              strokeStyle: "transparent",
              verticalSections: 0,
              borderVisible: false,
            }}
            series={[
              {
                data: ts3,
                strokeStyle: "#aacfd1",
                lineWidth: 1,
              },
              {
                data: ts4,
                strokeStyle: "#aacfd1",
                lineWidth: 1,
              },
            ]}
          />
          <DottedSeperator />
        </div>
      </div>
      <div className="mt-3" />
      <DottedSeperator />
      <div className="flex items-center justify-between gap-2 mt-1 px-4">
        <div className="flex flex-col items-center  ">
          <p>TEMP</p>
          <p className="text-border">71°C</p>
        </div>
        <div className="flex flex-col  items-center ">
          <p>MIN</p>
          <p className="text-border">3.4GHz</p>
        </div>
        <div className="flex flex-col items-center ">
          <p>MAX</p>
          <p className="text-border">5.0GHz</p>
        </div>
        <div className="flex flex-col items-center ">
          <p>TASKS</p>
          <p className="text-border">69</p>
        </div>
      </div>
    </div>
  );
}
