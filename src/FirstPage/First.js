import { Button, Link } from "@nextui-org/react";
import React from "react";
import { motion, useAnimation } from "framer-motion";
import Btn from "../Component/Btn";
import LayoutFirst from "./LayoutFirst";

const svgVariants = {
  hover: {
    x: 6.5,
    transition: {
      type: "spring",
      stiffness: 400,
      damping: 10,
    },
  },
};
const GitVariants = {
  hover: {
    y: -6.5,
    transition: {
      type: "spring",
      stiffness: 400,
      damping: 10,
    },
  },
};

const First = () => {
  const buttonControls = useAnimation();
  const svgControls = useAnimation();
  const buttonGitControls = useAnimation();
  const gitControls = useAnimation();

  const handleHover = async () => {
    await buttonControls.start("hover");
    await svgControls.start("hover");
  };

  const handleLeave = async () => {
    await buttonControls.start({ x: 0 });
    await svgControls.start({ x: 0 });
  };
  const handlGiteHover = async () => {
    await buttonGitControls.start("hover");
    await gitControls.start("hover");
  };

  const handleGitLeave = async () => {
    await buttonGitControls.start({ y: 0 });
    await gitControls.start({ y: 0 });
  };

  return (
    <div className="lg:px-24 px-12 h-screen  mt-10 ">
      <div className="">
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
          <div className="grid grid-cols-1 mt-5 place-content-center place-items-center">
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
              <motion.div
              data-testid="hover test"
                onMouseEnter={handleHover}
                onMouseLeave={handleLeave}
                className=""
              >
                <Btn to="about" className="shadow-2xl">
                  Get Started
                  <motion.svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-6 h-6"
                    variants={svgVariants}
                    initial={{ x: 0 }}
                    animate={svgControls}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                    />
                  </motion.svg>
                </Btn>
              </motion.div>
              <motion.div
              data-testid="githover"
                onMouseEnter={handlGiteHover}
                onMouseLeave={handleGitLeave}
                className=""
              >
                <Button
                  size="lg"
                  color="default"
                  variant="ghost"
                  as={Link}
                  href="mailto:mfahlevi740@mail.com"
                  target="__blank"
                >
                  <motion.svg
                    variants={GitVariants}
                    initial={{ y: 0 }}
                    animate={buttonGitControls}
                    xmlns="http://www.w3.org/2000/svg"
                    x="0px"
                    y="0px"
                    width="24"
                    height="24"
                    viewBox="0 0 48 48"
                  >
                    <path
                      fill="#4caf50"
                      d="M45,16.2l-5,2.75l-5,4.75L35,40h7c1.657,0,3-1.343,3-3V16.2z"
                    ></path>
                    <path
                      fill="#1e88e5"
                      d="M3,16.2l3.614,1.71L13,23.7V40H6c-1.657,0-3-1.343-3-3V16.2z"
                    ></path>
                    <polygon
                      fill="#e53935"
                      points="35,11.2 24,19.45 13,11.2 12,17 13,23.7 24,31.95 35,23.7 36,17"
                    ></polygon>
                    <path
                      fill="#c62828"
                      d="M3,12.298V16.2l10,7.5V11.2L9.876,8.859C9.132,8.301,8.228,8,7.298,8h0C4.924,8,3,9.924,3,12.298z"
                    ></path>
                    <path
                      fill="#fbc02d"
                      d="M45,12.298V16.2l-10,7.5V11.2l3.124-2.341C38.868,8.301,39.772,8,40.702,8h0 C43.076,8,45,9.924,45,12.298z"
                    ></path>
                  </motion.svg>
                  Contact
                </Button>
              </motion.div>
            </motion.div>
          </div>
          <LayoutFirst />
        </div>
      </div>
    </div>
  );
};

export default First;
