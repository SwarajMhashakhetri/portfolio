import { motion } from "framer-motion";
import Heading from "./Headings";
import Seperator from "./Seperator";
import NetworkStatus from "./NetworkStatus";
import NetworkTraffic from "./NetworkTraffic";
import dynamic from "next/dynamic";

const Globe = dynamic(() => import("./Globe"), {
  ssr: false,
});

export default function Network() {
  // const [isGlobeVisible, setIsGlobeVisible] = useState<boolean>(false);
  return (
    <div className="w-full h-full flex flex-col">
      <Heading title="PANEL" subTitle="NETWORK" />
      <div className="px-2 py-2">
        <motion.div
          animate={{
            opacity: 1,
          }}
          initial={{
            opacity: 0,
          }}
          transition={{
            delay: 1.4,
            duration: 0.5,
          }}
        >
          <Seperator />
          <NetworkStatus />
        </motion.div>
        <motion.div
          animate={{
            opacity: 1,
          }}
          initial={{
            opacity: 0,
          }}
          transition={{
            delay: 1.6,
            duration: 0.5,
          }}
        >
          <Seperator />
          <Globe />
        </motion.div>
        <motion.div
          animate={{
            opacity: 1,
          }}
          initial={{
            opacity: 0,
          }}
          transition={{
            delay: 2,
            duration: 0.5,
          }}
        >
          <Seperator />
          <NetworkTraffic />
        </motion.div>
      </div>
    </div>
  );
}
