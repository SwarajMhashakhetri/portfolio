import { motion } from "framer-motion";
import Seperator from "./Seperator";
interface IProp {
  title: string;
  subTitle: string;
}
export default function Heading({ title, subTitle }: IProp) {
  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      transition={{
        delay: 1.2,
      }}
      animate={{
        opacity: 1,
      }}
      className="flex flex-col"
    >
      <div className="flex items-center justify-between text-primary text-sm px-2">
        <p>{title}</p>
        <p>{subTitle}</p>
      </div>
      <Seperator />
    </motion.div>
  );
}
