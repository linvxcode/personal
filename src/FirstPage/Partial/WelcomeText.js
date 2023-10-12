import React from 'react'
import { motion } from 'framer-motion'

const WelcomeText = () => {
  return (
    <div>
       <motion.div
              initial={{ translateY: 100, opacity: 0, scale: 0.1 }}
              whileInView={{
                translateY: 0,
                opacity: 1,
                scale: 1,
                transition: {
                  type: "spring",
                  duration: 1,
                  delay: 0.5,
                },
              }}
              viewport={{ once: true }}
            >
              <h1 className=" text-3xl max-md:text-2xl text-center text-default-500 dark:text-default-50">
                Welcome to My Portofolio
              </h1>
            </motion.div>
    </div>
  )
}

export default WelcomeText
