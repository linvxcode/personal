import React, { lazy, Suspense } from 'react';
import { motion } from "framer-motion";
import StartFirst from "./Partial/StartFirst";
import WelcomeText from "./Partial/WelcomeText";
import ButtonGetStart from "./Partial/ButtonGetStart";
import ButtonContact from "./Partial/ButtonContact";

const First = () => {
  const LazyLayoutFirst = lazy(() => import('./LayoutFirst'));
  
  return (
    <div className="lg:px-24 px-12 h-screen  mt-10 ">
      <div className="">
        <div>
          <StartFirst/>
          <div className="grid grid-cols-1 mt-5 place-content-center place-items-center">
           <WelcomeText/>
            <motion.div
              className="mt-10 flex justify-start gap-3 md:gap-10 bg-[#f9fafb] p-5  rounded-2xl  max-[390px]:p-2 dark:bg-[#27272a]"
              initial={{ translateY: 100, opacity: 0, scaleY: 0.1 }}
              whileInView={{
                translateY: 0,
                opacity: 1,
                scaleY: 1,
                transition: {
                  type: "spring",
                  duration: 1,
                  delay: 0.6,
                },
              }}
              viewport={{ once: true }}
            >
             <ButtonGetStart/>
              <ButtonContact/>
            </motion.div>
          </div>
          <Suspense fallback={<div>Loading...</div>}>
            <LazyLayoutFirst />
          </Suspense>
        </div>
      </div>
    </div>
  );
};

export default First;
