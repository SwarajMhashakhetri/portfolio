import { motion } from "framer-motion";
import { useScramble } from "use-scramble";
import { useLottie } from "lottie-react";
import { Github, Linkedin, Mail } from "lucide-react";
import catGirlAnimation from "@/Animation - 1724042972468.json";
import GoAnimation from "./GoAnimation";

interface IProps {
  isInitialAnimationDone: boolean;
}

export default function AboutMe({ isInitialAnimationDone }: IProps) {
  const options = {
    animationData: catGirlAnimation,
    loop: true,
  };
  const { View } = useLottie(options);
  const { ref, replay } = useScramble({
    text: "SWARAJ_M",
    speed: 0.3,
    tick: 1,
    step: 1,
    scramble: 4,
    seed: 1,
  });

  const contacts = [
    {
      name: "GitHub",
      icon: Github,
      link: "https://github.com/SwarajMhashakhetri",
      delay: 0.3,
    },
    {
      name: "LinkedIn",
      icon: Linkedin,
      link: "https://www.linkedin.com/in/swaraj-mhashakhetri/",
      delay: 0.4,
    },
    {
      name: "Email",
      icon: Mail,
      link: "mailto:swarajmhashakhetri20@gmail.com",
      delay: 0.5,
    },
  ];

  return (
    <div className="flex flex-col pt-8 items-center px-8 relative h-full">
      {isInitialAnimationDone && (
        <h1
          ref={ref}
          onMouseOver={replay}
          className="text-3xl text-primary font-semibold cursor-pointer"
        ></h1>
      )}
      <motion.p
        className="text-primary text-xl mt-5 font-unitedSans"
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: 1,
        }}
      >
        👾 Yo! I&apos;m a self-taught programmer who codes like I&apos;m in a
        shonen anime—always leveling up! Proficient with the{" "}
        <span className="font-bold text-white font-sans">MERN stack </span>
        I&apos;m on a quest to create epic backends and cloud tools that even
        the best hackers in anime would envy. Linux is my daily summon, Neovim
        is my katana, and when I&apos;m not coding, I&apos;m probably lost in an
        anime marathon. I&apos;m constantly learning new skills and whipping up
        cool projects. Ready to join forces and build something legendary?{" "}
      </motion.p>

      {/* Contact Links - Bottom Left */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: isInitialAnimationDone ? 0.2 : 1.5 }}
        className="flex gap-6 absolute bottom-4 left-8"
      >
        {contacts.map((contact) => (
          <motion.a
            key={contact.name}
            href={contact.link}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: isInitialAnimationDone ? contact.delay : 1.5 + contact.delay }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-2 text-primary hover:text-border transition-colors border border-primary px-4 py-2 rounded"
          >
            <contact.icon size={20} />
            <span className="text-sm">{contact.name}</span>
          </motion.a>
        ))}
      </motion.div>

      <motion.div
        transition={{
          delay: isInitialAnimationDone ? 0.2 : 1.8,
        }}
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: 1,
        }}
        className="absolute right-0 bottom-0"
      >
        {View}
      </motion.div>
    </div>
  );
}