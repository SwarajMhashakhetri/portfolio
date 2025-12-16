import { useEffect, useState } from "react";

export default function Clock() {
  const [time, setTime] = useState<Date>(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      setTime(now);
    }, 1000);
    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div className="py-3 items-center justify-center  text-6xl font-unitedSans text-primary flex gap-2">
      <p>{time.getHours()}</p>
      <p>:</p>
      <p>{time.getMinutes()}</p>
      <p>:</p>
      <p>{time.getSeconds()}</p>
    </div>
  );
}
