import { motion } from "framer-motion";
import Heading from "./Headings";
import Tabs from "./Tabs";
import { useState } from "react";
import { TabTitels } from "@/types";
import AboutMe from "./Aboutme";
import Skills from "./Skills";

export default function Terminal() {
  const [selectedTab, setSelectedTab] = useState<TabTitels>(TabTitels.ABOUT_ME);
  const [isInitalAnimationDone, setIsInitialAnimationDone] =
    useState<boolean>(false);
  const tabs = [
    {
      title: TabTitels.ABOUT_ME,
      content: (isInitalAnimationDone: boolean) => (
        <AboutMe isInitialAnimationDone={isInitalAnimationDone} />
      ),
    },
    {
      title: TabTitels.SKILLS,
      content: () => <Skills />,
    },
  ];
  return (
    <div className="flex flex-col gap-2 w-full h-full  overflow-y-hidden  ">
      <Heading title="TERMINAL" subTitle="SHELL" />
      <div className="px-2 h-full w-full flex flex-col">
        <motion.div
          className="border-primary rounded-sm border w-full max-h-full h-full flex flex-col "
          onAnimationComplete={() => {
            setIsInitialAnimationDone(true);
          }}
          transition={{
            duration: 1.2,
          }}
          initial={{
            scaleX: 0,
            scaleY: 0,
          }}
          animate={{
            scaleX: [0, 1, 1],
            scaleY: [null, 0.1, 1],
          }}
        >
          <Tabs
            tabs={tabs}
            selectedTab={selectedTab}
            setSelectedTab={setSelectedTab}
          />
          <motion.div
            className="h-full  flex-auto overflow-y-hidden "
            initial={{
              opacity: 0,
            }}
            transition={{
              delay: isInitalAnimationDone ? 0.2 : 1.2,
            }}
            animate={{
              opacity: 1,
            }}
          >
            {tabs
              .find((tab) => tab.title === selectedTab)
              ?.content(isInitalAnimationDone)}
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}