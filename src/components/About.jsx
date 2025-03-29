import profileimage from "../assets/profileimage.jpg";
import { ABOUT_TEXT } from "../constants";
import {motion} from "framer-motion";

const About = () => {
  return (
    <div className="border-b border-neutral-900 pb-4">
        <motion.h1 
        whileInView={{opacity: 1,y:0 }}
        initial={{ opacity: 0, y:-100 }}
        transition={{duration:0.5}}
        className="my-20 text-center text-4xl">
          <span className="relative inline-block">
            <span className="absolute -bottom-2 left-0 h-0.5 w-full bg-gradient-to-r from-white via-neutral-400 to-neutral-600"></span>
            <span className="bg-gradient-to-r from-white via-neutral-200 to-neutral-400 bg-clip-text text-transparent">About Me</span>
          </span>
        </motion.h1>
        <div className="flex flex-wrap">
            <motion.div
            whileInView={{opacity:1 ,x:0 }}
            initial={{opacity:0 ,x: -100}}
            transition={{ duration: 0.5}}
            className="w-full lg:w-1/2 lg:p-8">
            <div className="flex items-center justify-center">
                <motion.img 
                  className="w-80 h-80 rounded-2xl object-cover border border-neutral-800 shadow-2xl"
                  src={profileimage}
                  alt="About"
                  
                />
            </div>
            </motion.div>

            <motion.div 
            whileInView={{opacity:1 ,x:0 }}
            initial={{opacity:0 ,x: 100}}
            transition={{ duration: 0.5}}
            className="w-full lg:w-1/2">
            <div className="flex justify-center lg:justify-start">
            <p className="my-2 max-w-xl py-10">{ABOUT_TEXT}</p>
            </div>
            </motion.div>
        </div>
    </div>
  )
};

export default About