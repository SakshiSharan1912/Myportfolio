import {HERO_CONTENT} from "../constants";
import profsvg from "../assets/profsvg.png";
import { motion } from "framer-motion";
 
const container =(delay) => ({
  hidden: {x:-100, opacity:0},
  visible: {
    x:0,
    opacity:1,
    transition: {duration: 0.5,delay: delay},
  },
})

const floatingAnimation = {
  y: [0, -10, 0],
  transition: {
    duration: 2,
    repeat: Infinity,
    ease: "easeInOut"
  }
}

const Hero = () => {
  return (
    <div className="border-b border-neutral-900 pb-4 lg:mb-35">
      <div className="flex flex-wrap">
        <div className="w-full lg:w-1/2">
          <div className="flex flex-col items-center lg:items-start">
            <motion.h1 
              variants={container(0)}
              initial="hidden"
              animate="visible"
              className="pb-16 text-6xl font-thin tracking-tight lg:mt-16 lg:text-6xl">
              <span className="text-neutral-500">A mind full of ideas and a heart full of dreams –</span>
              <span className="ml-2 bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-7xl font-medium text-transparent"> Hey, I'm Sakshi Sharan</span>
            </motion.h1>
            <motion.span 
              variants={container(0.5)}
              initial="hidden"
              animate="visible"
              className="bg-gradient-to-r from-cyan-300 via-blue-500 to-indigo-500 bg-clip-text text-3xl tracking-tight text-transparent">
              Full-Stack Developer | AI&ML Enthusiast 
            </motion.span>
            <motion.p 
              variants={container(1)}
              initial="hidden"
              animate="visible"
              className="my-2 max-w-xl py-6 font-light tracking-tighter">{HERO_CONTENT}</motion.p>
          </div>
        </div>
        <div className="w-full lg:w-1/2 lg:p-8">
          <div className="flex justify-center items-center">
            <motion.img
              initial={{ x: 100, opacity: 0}}
              animate={{ 
                x: 0, 
                opacity: 1,
                y: [0, -10, 0]
              }}
              transition={{
                duration: 1, 
                delay: 1.2,
                y: {
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }
              }}
             className="w-[32rem] h-[32rem] object-contain" src={profsvg} alt="Sakshi Profile" />


          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero;