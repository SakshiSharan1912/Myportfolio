import {EDUCATION } from "../constants"
import { motion } from "framer-motion";

const container = (delay) => ({
  hidden: { x: -100, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.5, delay: delay },
  },
});

const Education = () => {
  return (
    <div className="border-b border-neutral-900 pb-4">
        <motion.h1 
          variants={container(0)}
          initial="hidden"
          animate="visible"
          className="my-20 text-center text-4xl">
          <span className="relative inline-block">
            <span className="absolute -bottom-2 left-0 h-0.5 w-full bg-gradient-to-r from-white via-neutral-400 to-neutral-600"></span>
            <span className="bg-gradient-to-r from-white via-neutral-200 to-neutral-400 bg-clip-text text-transparent">Education</span>
          </span>
        </motion.h1>
        <div>
            {EDUCATION.map((education, index) => ( 
                <motion.div 
                  key={index} 
                  variants={container(0.2 * (index + 1))}
                  initial="hidden"
                  animate="visible"
                  className="mb-8 flex flex-wrap lg:justify-center">
                    <div className="w-full lg:w-1/4">
                      <div className="relative">
                        <div className="absolute -left-3 top-0 h-full w-0.5 bg-gradient-to-b from-pink-300 via-slate-500 to-purple-500"></div>
                        <p className="mb-2 text-sm font-medium text-neutral-400">{education.year}</p>
                      </div>
                    </div>
                    <div className="w-full max-w-xl lg:w-3/4">
                      <div className="rounded-lg border border-neutral-800 bg-neutral-900/50 p-6 transition-all hover:border-neutral-700 hover:bg-neutral-900/80">
                        <h6 className="mb-2 text-lg font-semibold text-neutral-200">
                          {education.description}
                        </h6>
                        <p className={`text-sm ${education.year === "2022 - Present" ? "text-purple-300" : "text-neutral-400"}`}>
                          {education.year === "2022 - Present" ? (
                            <span className="flex items-center gap-2">
                              <span className="rounded-full bg-purple-500/20 px-3 py-1">Percentage: {education.percentage}</span>
                              <span className="rounded-full bg-purple-500/20 px-3 py-1">CGPA: {education.cgpa}</span>
                            </span>
                          ) : (
                            <span className="rounded-full bg-neutral-800 px-3 py-1">{education.percentage}</span>
                          )}
                        </p>
                      </div>
                    </div>
                </motion.div>     
            ))}
        </div>
    </div>
  )
};

export default Education