import React from "react";
import { motion } from "framer-motion";

const texts = [
  {
    t: "A",
    whileInVIew: {
      translateX: "0px",
      translateY: "0px",
      translateZ: "0px",
      opacity: 1,
      transition: {
        type: "spring",
        duration: 1,
      },
    },
  },
  {
    t: "b",
    whileInVIew: {
      translateX: "0px",
      translateY: "0px",
      translateZ: "0px",
      opacity: 1,
      transition: {
        type: "spring",
        duration: 1,
        delay: 0.1,
      },
    },
  },
  {
    t: "o",
    whileInVIew: {
      translateX: "0px",
      translateY: "0px",
      translateZ: "0px",
      opacity: 1,
      transition: {
        type: "spring",
        duration: 1,
        delay: 0.2,
      },
    },
  },
  {
    t: "u",
    whileInVIew: {
      translateX: "0px",
      translateY: "0px",
      translateZ: "0px",
      opacity: 1,
      transition: {
        type: "spring",
        duration: 1,
        delay: 0.3,
      },
    },
  },
  {
    t: "t",
    whileInVIew: {
      translateX: "0px",
      translateY: "0px",
      translateZ: "0px",
      opacity: 1,
      transition: {
        type: "spring",
        duration: 1,
        delay: 0.4,
      },
    },
  },
  {
    t: "I",
    class: "invicible",
  },
  {
    t: "M",
    whileInVIew: {
      translateX: "0px",
      translateY: "0px",
      translateZ: "0px",
      opacity: 1,
      transition: {
        type: "spring",
        duration: 1,
        delay: 0.5,
      },
    },
  },
  {
    t: "e",
    whileInVIew: {
      translateX: "0px",
      translateY: "0px",
      translateZ: "0px",
      opacity: 1,
      transition: {
        type: "spring",
        duration: 1,
        delay: 0.6,
      },
    },
  },
];

const SecondPage = () => {
  return (
    <div className="flex  mt-[100px] pb-10">
      <motion.div
      >
        <div>
          <h1 className="text-4xl   lg:text-6xl font-semibold tracking-tight font-mons">
            {texts.map((item, index) => (
              <motion.span
                className="hoverText dark:text-white text-black"
                key={index}
                initial={{
                  translateX: "-20px",
                  translateY: "10px",
                  translateZ: "0px",
                  opacity: 0,
                }}
                viewport={{ once: true }}
                whileInView={item.whileInVIew}
              >
                {item.t}
              </motion.span>
            ))}
          </h1>
        </div>
        <div>
          <motion.h2
            className="lg:text-2xl text-xl font-pop mt-5 dark:text-white text-black"
            initial={{
              opacity: 0,
              translateY: 100,
            }}
            viewport={{ once: true }}
            whileInView={{
              opacity: 1,
              translateY: 0,
              transition: {
                type: "spring",
                duration: 1,
                stiffness: 100,
                delay: 0.3,
              },
            }}
          >
            Hi, my name is Fahlevi I am a front-end web developer, i’m 23 years
            old. I got a bachelor of Informatics Engineering at Universitas
            Islam Kebangsaan Indonesia(2018-2023),
            <br /> My journey in the world of web development has led me to
            specialize in cutting-edge technologies, with a strong foundation in
            Next.js and React on the frontend and Laravel on the backend. <br />
            In the realm of frontend development, I have honed my skills in
            creating dynamic and user-friendly interfaces using Next.js and
            React. I thrive on turning ideas into interactive experiences,
            whether it's building responsive web applications, optimizing
            website performance, or creating seamless user interfaces. I believe
            in staying up-to-date with the latest industry trends and best
            practices to ensure that the digital solutions I craft are not only
            visually stunning but also highly efficient and user-focused
          </motion.h2>
        </div>
      </motion.div>
    </div>
  );
};

export default SecondPage;
