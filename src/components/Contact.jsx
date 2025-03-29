import { CONTACT } from "../constants"
import {motion} from "framer-motion"

const container = (delay) => ({
  hidden: { x: -100, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.5, delay: delay },
  },
});

const Contact = () => {
  return (
    <div className="border-b border-neutral-900 pb-20">
        <motion.h1 
          variants={container(0)}
          initial="hidden"
          animate="visible"
          className="my-20 text-center text-4xl">
          <span className="relative inline-block">
            <span className="absolute -bottom-2 left-0 h-0.5 w-full bg-gradient-to-r from-white via-neutral-400 to-neutral-600"></span>
            <span className="bg-gradient-to-r from-white via-neutral-200 to-neutral-400 bg-clip-text text-transparent">Get in Touch</span>
          </span>
        </motion.h1>
        <div className="flex flex-wrap justify-center gap-8">
            <motion.div 
              variants={container(0.2)}
              initial="hidden"
              animate="visible"
              className="w-full max-w-xl rounded-lg border border-neutral-800 bg-neutral-900/50 p-6 transition-all hover:border-neutral-700 hover:bg-neutral-900/80">
              <div className="flex items-center gap-4">
                <div className="rounded-full bg-neutral-800 p-3">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-neutral-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <h6 className="text-lg font-semibold text-neutral-200">Address</h6>
                  <p className="text-neutral-400">{CONTACT.address}</p>
                </div>
              </div>
            </motion.div>

            <motion.div 
              variants={container(0.4)}
              initial="hidden"
              animate="visible"
              className="w-full max-w-xl rounded-lg border border-neutral-800 bg-neutral-900/50 p-6 transition-all hover:border-neutral-700 hover:bg-neutral-900/80">
              <div className="flex items-center gap-4">
                <div className="rounded-full bg-neutral-800 p-3">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-neutral-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <h6 className="text-lg font-semibold text-neutral-200">Phone</h6>
                  <p className="text-neutral-400">{CONTACT.phoneNo}</p>
                </div>
              </div>
            </motion.div>

            <motion.div 
              variants={container(0.6)}
              initial="hidden"
              animate="visible"
              className="w-full max-w-xl rounded-lg border border-neutral-800 bg-neutral-900/50 p-6 transition-all hover:border-neutral-700 hover:bg-neutral-900/80">
              <div className="flex items-center gap-4">
                <div className="rounded-full bg-neutral-800 p-3">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-neutral-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <h6 className="text-lg font-semibold text-neutral-200">Email</h6>
                  <a href="mailto:sakssha19@gmail.com" 
                     className="text-neutral-400 hover:text-neutral-300 transition-colors">
                    {CONTACT.email}
                  </a>
                </div>
              </div>
            </motion.div>
        </div>
        <motion.div 
          variants={container(0.8)}
          initial="hidden"
          animate="visible"
          className="mt-16 text-center">
          <div className="inline-flex items-center gap-2 text-neutral-400">
            <span className="text-lg">©</span>
            <span className="text-neutral-300 font-medium">{new Date().getFullYear()}</span>
            <span className="text-neutral-300 font-medium">Sakshi Sharan</span>
            <span className="text-neutral-500">•</span>
            <span>All rights reserved</span>
          </div>
        </motion.div>
    </div>
  )
}

export default Contact