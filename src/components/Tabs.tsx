import { TabTitels } from "@/types";
import { motion } from "framer-motion";
import React, { Dispatch, SetStateAction } from "react";
interface IProp {
  tabs: {
    title: TabTitels;
    content: (isInitialAnimationDone: boolean) => React.ReactNode;
  }[];
  selectedTab: TabTitels;
  setSelectedTab: Dispatch<SetStateAction<TabTitels>>;
}
export default function Tabs({ tabs, selectedTab, setSelectedTab }: IProp) {
  return (
    <motion.div
      className="w-full border-b border-border flex"
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
      }}
      transition={{
        delay: 1.3,
      }}
    >
      {tabs.map((tab, index) => {
        return (
          <motion.div
            key={index}
            className={`flex border-r border-border cursor-pointer relative `}
            initial={{
              translateX: "-100%",
              opacity: 0,
            }}
            animate={{
              translateX: "0",
              opacity: 1,
            }}
            transition={{
              delay: 1.3 + index * 0.3,
              duration: 0.6,
            }}
            onClick={() => {
              setSelectedTab(tab.title);
            }}
          >
            {tab.title === selectedTab && (
              <motion.div
                layoutId="background"
                className="absolute inset-0 bg-selected z-10"
              />
            )}
            <p
              className={`py-2 px-12 text-primary ${tab.title === selectedTab && " text-white z-20 "}  transition-colors`}
            >
              {tab.title}
            </p>
          </motion.div>
        );
      })}
    </motion.div>
  );
}
