// @ts-ignore
import { EncomGlobe } from "encom-globe-react";
import "encom-globe-react/dist/index.css";
import React, { useEffect, useState } from "react";
import tiles from "../data.json";

export default function Globe() {
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const marker1 = { lat: 21.14, lon: 79.08, label: "Nagpur" };
  const marker2 = {
    lat: 35.6895,
    lon: 129.69171,
    label: "Tokyo",
    connected: false,
  };
  const demoMarkers = [marker1, marker2];
  const [markers, setMarkers] = React.useState<
    { lat: number; lon: number; label: string }[]
  >([]);
  const [constellations, setConstellations] = React.useState<
    {
      opts: {
        waveColor: string;
        coreColor: string;
        shieldColor: string;
        numWaves: number;
      };
      sats: any;
    }[]
  >([]);

  const demo = () => {
    // ADD MARKERS
    setTimeout(() => setMarkers(demoMarkers), 4000);

    //ADD SATELLITES
    setTimeout(() => {
      const constellation = [];
      const opts = {
        waveColor: "#FFF",
        coreColor: "#aacfd1",
        shieldColor: "#fff",
        numWaves: 8,
      };
      const alt = 1.3;

      for (let i = 0; i < 4; i++) {
        for (let j = 0; j < 4; j++) {
          constellation.push({
            lat: 50 * i - 30 + 15 * Math.random(),
            lon: 120 * j - 120 + 30 * i,
            altitude: alt,
          });
        }
      }

      setConstellations([
        {
          opts,
          sats: constellation,
        },
      ]);
    }, 6000);
  };
  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsVisible(true);
    }, 1900);
    return () => {
      clearTimeout(timeout);
    };
  }, []);

  return (
    <div className="flex flex-col text-primary">
      <div className="flex justify-between">
        <div className="flex flex-col">
          <p className="">WORLD VIEW</p>
          <p className="text-border -translate-y-1">ENDPOINT LAT/LON</p>
        </div>
        <div className="flex flex-col items-end">
          <p className="text-sm">GLOBAL NETWORK MAP</p>
          <p className="text-border -translate-y-1">42.8927,12.740</p>
        </div>
      </div>
      {isVisible && (
        <EncomGlobe
          width={400}
          height={300}
          markers={markers}
          constellations={constellations}
          globeConfig={{
            tiles: tiles.tiles,
            scale: 1.1,
            viewAngle: 0.63,
            dayLength: 1000 * 45,
            introLinesDuration: 2000,
            baseColor: "#000000",
            markerColor: "#aacfd1",
            satelliteColor: "#aacfd1",
          }}
          globeReadyCb={demo}
        />
      )}
    </div>
  );
}