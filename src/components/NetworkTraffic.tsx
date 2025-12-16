import { useEffect } from "react";
import DottedSeperator from "./DottedSeperator";
import SmoothieComponent, { TimeSeries } from "react-smoothie";

export default function NetworkTraffic() {
  const getRandom = () => 0.5 + Math.random() * 0.2;
  const ts1 = new TimeSeries({});
  const ts2 = new TimeSeries({});
  useEffect(() => {
    const interval = setInterval(() => {
      var time = new Date().getTime();
      ts1.append(time, getRandom());
      ts2.append(time, getRandom());
    }, 500);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div className="flex flex-col px-2 text-primary -translate-y-1">
      <div className="flex justify-between mb-5">
        <div className="flex flex-col">
          <p>NETWORK TRAFFIC</p>
          <p className="text-border text-sm">TOTAL</p>
        </div>
        <div className="flex flex-col  items-end">
          <p className="text-border">UP/DOWN, MB/S</p>
          <p className="text-border text-sm">567MB OUT, 1.32GB IN</p>
        </div>
      </div>
      <DottedSeperator />
      <SmoothieComponent
        streamDelay={1000}
        containerStyle={{
          background: "transparent",
        }}
        responsive
        millisPerPixel={70}
        interpolation="linear"
        height={50}
        className="w-full bg-transparent"
        labels={{ disabled: true }}
        grid={{
          millisPerLine: 5000,
          fillStyle: "transparent",
          strokeStyle: `rgba(170,207,209,0.4)`,
          verticalSections: 3,
          borderVisible: false,
        }}
        series={[
          {
            data: ts1,
            strokeStyle: "#aacfd1",
            lineWidth: 1,
          },
        ]}
      />
      <SmoothieComponent
        streamDelay={1000}
        containerStyle={{
          background: "transparent",
        }}
        responsive
        millisPerPixel={70}
        interpolation="linear"
        height={50}
        className="w-full bg-transparent"
        labels={{ disabled: true }}
        grid={{
          millisPerLine: 5000,
          fillStyle: "transparent",
          strokeStyle: `rgba(170,207,209,0.4)`,
          verticalSections: 3,
          borderVisible: false,
        }}
        series={[
          {
            data: ts2,
            strokeStyle: "#aacfd1",
            lineWidth: 1,
          },
        ]}
      />

      <DottedSeperator />
    </div>
  );
}
