"use client";
import { motion } from "framer-motion";
import Clock from "./Clock";
import CPUInfo from "./CPUInfo";
import GeneralInfo from "./GeneralInfo";
import Heading from "./Headings";
import Memory from "./Memory";
import Processes from "./Processes";
import Seperator from "./Seperator";

export default function System() {
  return (
    <div className="w-full flex flex-col  ">
      <Heading title="PANEL" subTitle="SYSTEM" />
      <div className="w-full h-full flex flex-col px-2 py-2">
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
          <Clock />
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
          <GeneralInfo />
        </motion.div>
        <motion.div
          animate={{
            opacity: 1,
          }}
          initial={{
            opacity: 0,
          }}
          transition={{
            delay: 1.8,
            duration: 0.5,
          }}
        >
          <Seperator />
          <CPUInfo />
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
          <Memory />
        </motion.div>

        <motion.div
          animate={{
            opacity: 1,
          }}
          initial={{
            opacity: 0,
          }}
          transition={{
            delay: 2.2,
            duration: 0.5,
          }}
        >
          <Seperator />
          <Processes />
        </motion.div>
      </div>
    </div>
  );
}
