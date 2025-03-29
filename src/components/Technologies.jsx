import { RiReactjsLine } from "react-icons/ri";
import { TbBrandNextjs } from "react-icons/tb";
import { SiMongodb} from "react-icons/si";
import { FaNodeJs} from "react-icons/fa";
import { BiLogoPostgresql} from "react-icons/bi";
import { SiScikitlearn } from "react-icons/si";
import { SiJupyter } from "react-icons/si";

import {motion} from "framer-motion";

const iconVariants =(duration) => ({
    initial: {y: 0, scale: 1 },
    animate: {
        y: [0, -10, 0],
        scale: [1, 1.05, 1],
        transition: {
            duration: duration,
            ease: "easeInOut",
            repeat: Infinity,
        },
    },
    hover: {
        scale: 1.1,
        transition: {
            duration: 0.2,
            ease: "easeInOut"
        }
    }
});

const Technologies = () => {
  return (
    <div className="border-b border-neutral-800 pb-24">
        <motion.h1
        whileInView={{opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{duration: 0.8}}
         className="my-20 text-center text-4xl">
          <span className="relative inline-block">
            <span className="absolute -bottom-2 left-0 h-0.5 w-full bg-gradient-to-r from-white via-neutral-400 to-neutral-600"></span>
            <span className="bg-gradient-to-r from-white via-neutral-200 to-neutral-400 bg-clip-text text-transparent">Technologies</span>
          </span>
        </motion.h1>
        <motion.div 
        whileInView={{opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: -100 }}
        transition={{duration: 0.8}}
        className="flex flex-wrap items-center justify-center gap-8">
            {/* Web Development */}
            <motion.div
                variants={iconVariants(2)}
                initial="initial"
                animate="animate"
                whileHover="hover"
                className="rounded-2xl border-4 border-neutral-800 p-6 hover:border-cyan-400/50 transition-colors">
                <RiReactjsLine className="text-7xl text-cyan-400"/>
            </motion.div>
            <motion.div 
                variants={iconVariants(2.2)}
                initial="initial"
                animate="animate"
                whileHover="hover"
                className="rounded-2xl border-4 border-neutral-800 p-6 hover:border-white/50 transition-colors">
                <TbBrandNextjs className="text-7xl"/>
            </motion.div>
            <motion.div
                variants={iconVariants(2.4)}
                initial="initial"
                animate="animate"
                whileHover="hover"
                className="rounded-2xl border-4 border-neutral-800 p-6 hover:border-green-500/50 transition-colors">
                <SiMongodb className="text-7xl text-green-500"/>
            </motion.div>
            <motion.div 
                variants={iconVariants(2.6)}
                initial="initial"
                animate="animate"
                whileHover="hover"
                className="rounded-2xl border-4 border-neutral-800 p-6 hover:border-green-500/50 transition-colors">
                <FaNodeJs className="text-7xl text-green-500"/>
            </motion.div>
            <motion.div 
                variants={iconVariants(2.8)}
                initial="initial"
                animate="animate"
                whileHover="hover"
                className="rounded-2xl border-4 border-neutral-800 p-6 hover:border-sky-700/50 transition-colors">
                <BiLogoPostgresql className="text-7xl text-sky-700"/>
            </motion.div>

            {/* AI/ML Technologies */}
    
            <motion.div
                variants={iconVariants(3.4)}
                initial="initial"
                animate="animate"
                whileHover="hover"
                className="rounded-2xl border-4 border-neutral-800 p-6 hover:border-blue-500/50 transition-colors">
                <SiScikitlearn className="text-7xl text-blue-500"/>
            </motion.div>
            <motion.div
                variants={iconVariants(4)}
                initial="initial"
                animate="animate"
                whileHover="hover"
                className="rounded-2xl border-4 border-neutral-800 p-6 hover:border-orange-400/50 transition-colors">
                <SiJupyter className="text-7xl text-orange-400"/>
            </motion.div>
        </motion.div>
    </div>
  );
};

export default Technologies