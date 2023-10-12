import React from 'react'
import { motion } from 'framer-motion'

const StartFirst = () => {
  return (
    <div>
      <motion.h1
            className="lg:text-[4.5rem] text-gray-700 leading-[100px]  max-sm:text-3xl text-[3rem] text-center font-bold antialiased tracking-wide font-mons "
            initial={{ translateY: 100, opacity: 0 }}
            viewport={{ once: true }}
            whileInView={{
              translateY: 0,
              opacity: 1,
              transition: {
                type: "spring",
                duration: 1,
              },
            }}
          >
            Frontend Developer
          </motion.h1>
          <motion.h1
            className=" text-gray-700 text-center font-bold lg:text-7xl max-sm:text-3xl text-5xl antialiased tracking-wide font-mons "
            initial={{ translateY: 100, opacity: 0 }}
            viewport={{ once: true }}
            whileInView={{
              translateY: 0,
              opacity: 1,
              transition: {
                type: "spring",
                duration: 1,
                delay: 0.5,
              },
            }}
          >
            <span className=" font-medium">Based in</span> Indonesia
          </motion.h1>
    </div>
  )
}

export default StartFirst
