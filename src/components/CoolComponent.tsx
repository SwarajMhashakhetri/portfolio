import { motion } from "framer-motion";

export default function CoolComponent() {
  return (
    <motion.div
      transition={{
        duration: 0.8,
        delay: 1.2,
      }}
      initial={{
        scaleX: 0,
        scaleY: 0,
      }}
      animate={{
        scaleX: [0, 1, 1],
        scaleY: [null, 0.1, 1],
      }}
      className="w-full h-full "
    ></motion.div>
  );
}
