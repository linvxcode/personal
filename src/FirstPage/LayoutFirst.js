import { Button, Link } from "@nextui-org/react";
import React, { useState } from "react";
import { motion} from "framer-motion";

const item = [
  {
    href: "https://www.linkedin.com/in/m-fahlevi-921a1b26a/",
    ovr: "overflow-hidden",
    backgroundColor: "#2654b98f",
    iconPath: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        x="0px"
        y="0px"
        width="100"
        height="100"
        viewBox="0 0 48 48"
      >
        <path
          fill="#0288D1"
          d="M42,37c0,2.762-2.238,5-5,5H11c-2.761,0-5-2.238-5-5V11c0-2.762,2.239-5,5-5h26c2.762,0,5,2.238,5,5V37z"
        ></path>
        <path
          fill="#FFF"
          d="M12 19H17V36H12zM14.485 17h-.028C12.965 17 12 15.888 12 14.499 12 13.08 12.995 12 14.514 12c1.521 0 2.458 1.08 2.486 2.499C17 15.887 16.035 17 14.485 17zM36 36h-5v-9.099c0-2.198-1.225-3.698-3.192-3.698-1.501 0-2.313 1.012-2.707 1.99C24.957 25.543 25 26.511 25 27v9h-5V19h5v2.616C25.721 20.5 26.85 19 29.738 19c3.578 0 6.261 2.25 6.261 7.274L36 36 36 36z"
        ></path>
      </svg>
    ),

    initial: {scale:1},
    animate: {scale:1.1},
    initialAnim : {translateY: -500, opacity: 0},
    whileInView: {translateY: 0, opacity: 1,transition: {
      type: "spring",
      stiffness: 300,
      duration: 3,
      delay: 0.7
    }}
  },
  {
    href: "https://github.com/linvxcode",
    backgroundColor: "#2654b98f",
    mt: "mt-20",
    iconPath: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        x="0px"
        y="0px"
        width="100"
        height="100"
        viewBox="0 0 50 50"
        className="bg-white rounded-full"
      >
        <path d="M17.791,46.836C18.502,46.53,19,45.823,19,45v-5.4c0-0.197,0.016-0.402,0.041-0.61C19.027,38.994,19.014,38.997,19,39 c0,0-3,0-3.6,0c-1.5,0-2.8-0.6-3.4-1.8c-0.7-1.3-1-3.5-2.8-4.7C8.9,32.3,9.1,32,9.7,32c0.6,0.1,1.9,0.9,2.7,2c0.9,1.1,1.8,2,3.4,2 c2.487,0,3.82-0.125,4.622-0.555C21.356,34.056,22.649,33,24,33v-0.025c-5.668-0.182-9.289-2.066-10.975-4.975 c-3.665,0.042-6.856,0.405-8.677,0.707c-0.058-0.327-0.108-0.656-0.151-0.987c1.797-0.296,4.843-0.647,8.345-0.714 c-0.112-0.276-0.209-0.559-0.291-0.849c-3.511-0.178-6.541-0.039-8.187,0.097c-0.02-0.332-0.047-0.663-0.051-0.999 c1.649-0.135,4.597-0.27,8.018-0.111c-0.079-0.5-0.13-1.011-0.13-1.543c0-1.7,0.6-3.5,1.7-5c-0.5-1.7-1.2-5.3,0.2-6.6 c2.7,0,4.6,1.3,5.5,2.1C21,13.4,22.9,13,25,13s4,0.4,5.6,1.1c0.9-0.8,2.8-2.1,5.5-2.1c1.5,1.4,0.7,5,0.2,6.6c1.1,1.5,1.7,3.2,1.6,5 c0,0.484-0.045,0.951-0.11,1.409c3.499-0.172,6.527-0.034,8.204,0.102c-0.002,0.337-0.033,0.666-0.051,0.999 c-1.671-0.138-4.775-0.28-8.359-0.089c-0.089,0.336-0.197,0.663-0.325,0.98c3.546,0.046,6.665,0.389,8.548,0.689 c-0.043,0.332-0.093,0.661-0.151,0.987c-1.912-0.306-5.171-0.664-8.879-0.682C35.112,30.873,31.557,32.75,26,32.969V33 c2.6,0,5,3.9,5,6.6V45c0,0.823,0.498,1.53,1.209,1.836C41.37,43.804,48,35.164,48,25C48,12.318,37.683,2,25,2S2,12.318,2,25 C2,35.164,8.63,43.804,17.791,46.836z"></path>
      </svg>
    ),
    initial: {rotate: 0},
    animate: {rotate: 20},
    initialAnim : {translateY: -520},
    whileInView: {translateY: 0, transition: {
      type: "spring",
      stiffness: 100,
      duration: 1,
      delay: 0.9
    }}
  },
  {
    href: "https://www.instagram.com/viii_999_/?igshid=MzMyNGUyNmU2YQ%3D%3D",
    backgroundColor: "#2654b98f",
    mt: "mt-20",
    iconPath: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        x="0px"
        y="0px"
        width="100"
        height="100"
        viewBox="0 0 48 48"
      >
        <radialGradient
          id="yOrnnhliCrdS2gy~4tD8ma_Xy10Jcu1L2Su_gr1"
          cx="19.38"
          cy="42.035"
          r="44.899"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0" stopColor="#fd5"></stop>
          <stop offset=".328" stopColor="#ff543f"></stop>
          <stop offset=".348" stopColor="#fc5245"></stop>
          <stop offset=".504" stopColor="#e64771"></stop>
          <stop offset=".643" stopColor="#d53e91"></stop>
          <stop offset=".761" stopColor="#cc39a4"></stop>
          <stop offset=".841" stopColor="#c837ab"></stop>
        </radialGradient>
        <path
          fill="url(#yOrnnhliCrdS2gy~4tD8ma_Xy10Jcu1L2Su_gr1)"
          d="M34.017,41.99l-20,0.019c-4.4,0.004-8.003-3.592-8.008-7.992l-0.019-20	c-0.004-4.4,3.592-8.003,7.992-8.008l20-0.019c4.4-0.004,8.003,3.592,8.008,7.992l0.019,20	C42.014,38.383,38.417,41.986,34.017,41.99z"
        ></path>
        <radialGradient
          id="yOrnnhliCrdS2gy~4tD8mb_Xy10Jcu1L2Su_gr2"
          cx="11.786"
          cy="5.54"
          r="29.813"
          gradientTransform="matrix(1 0 0 .6663 0 1.849)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0" stopColor="#4168c9"></stop>
          <stop offset=".999" stopColor="#4168c9" stopOpacity="0"></stop>
        </radialGradient>
        <path
          fill="url(#yOrnnhliCrdS2gy~4tD8mb_Xy10Jcu1L2Su_gr2)"
          d="M34.017,41.99l-20,0.019c-4.4,0.004-8.003-3.592-8.008-7.992l-0.019-20	c-0.004-4.4,3.592-8.003,7.992-8.008l20-0.019c4.4-0.004,8.003,3.592,8.008,7.992l0.019,20	C42.014,38.383,38.417,41.986,34.017,41.99z"
        ></path>
        <path
          fill="#fff"
          d="M24,31c-3.859,0-7-3.14-7-7s3.141-7,7-7s7,3.14,7,7S27.859,31,24,31z M24,19c-2.757,0-5,2.243-5,5	s2.243,5,5,5s5-2.243,5-5S26.757,19,24,19z"
        ></path>
        <circle cx="31.5" cy="16.5" r="1.5" fill="#fff"></circle>
        <path
          fill="#fff"
          d="M30,37H18c-3.859,0-7-3.14-7-7V18c0-3.86,3.141-7,7-7h12c3.859,0,7,3.14,7,7v12	C37,33.86,33.859,37,30,37z M18,13c-2.757,0-5,2.243-5,5v12c0,2.757,2.243,5,5,5h12c2.757,0,5-2.243,5-5V18c0-2.757-2.243-5-5-5H18z"
        ></path>
      </svg>
    ),
    initial: {scale:1},
    animate: {scale:1.1},
    initialAnim : {translateY: -660, opacity: 0},
    whileInView: {translateY: 0,opacity: 1, transition: {
      type: "spring",
      stiffness: 200,
      duration: 1,
      delay: 1
    }}
  },
  {
    href: "https://www.facebook.com/muhammad.fahlevi.37017",
    backgroundColor: "#2654b98f",
    iconPath: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        x="0px"
        y="0px"
        width="100"
        height="100"
        viewBox="0 0 48 48"
      >
        <path
          fill="#039be5"
          d="M24 5A19 19 0 1 0 24 43A19 19 0 1 0 24 5Z"
        ></path>
        <path
          fill="#fff"
          d="M26.572,29.036h4.917l0.772-4.995h-5.69v-2.73c0-2.075,0.678-3.915,2.619-3.915h3.119v-4.359c-0.548-0.074-1.707-0.236-3.897-0.236c-4.573,0-7.254,2.415-7.254,7.917v3.323h-4.701v4.995h4.701v13.729C22.089,42.905,23.032,43,24,43c0.875,0,1.729-0.08,2.572-0.194V29.036z"
        ></path>
      </svg>
    ),
    initial: {translateY: 0},
    animate: {translateY: -10},
    initialAnim : {translateY: -650, opacity: 0},
    whileInView: {translateY: 0, opacity: 1,transition: {
      type: "spring",
      stiffness: 300,
      duration: 1,
      delay: 0.7
    }}
  },
];

const LayoutFirst = () => {
  const [isHover, setIsHover] = useState(false);
  const handleHover = (index) => {
    setIsHover(index);
  };

  const handleHoverLeave = () => {
    setIsHover(null);
  };

  return (
    <div>
      <div className="grid grid-cols-4 relative z-[9] max-md:gap-3 place-content-center place-items-center  max-md:grid-cols-2 w-full max-sm:w-[100%] max-[390px]:grid-cols-1 mx-auto gap-10">
        {item.map((items, index) => (
          <motion.div
            key={index}
            className={`relative ${items.mt} max-md:mt-5 flex `}
            whileHover={() => handleHover(index)}
            onMouseLeave={handleHoverLeave}
            initial={items.initialAnim}
            whileInView={items.whileInView}
            viewport={{once: true}}
          >
            <Button
              className={`h-full group overflow-visible bg-transparent max-md:${items.ovr}`}
              variant="solid"
              as={Link}
              href={items.href}
              target="__blank"
              aria-label="button"
            >
              <motion.div
                initial={{ borderRadius: "100px" }}
                animate={
                  isHover === index
                    ? {
                        borderRadius: "40px",
                        scale: 1.1,
                        transition: {
                          type: "spring",
                        },
                      }
                    : {}
                }
                style={{ backgroundColor: "#2654b98f" }}
                className={`example-container w-[150px] h-[150px] flex  items-center`}
              >
              </motion.div>
              <motion.div className="absolute top-0 flex justify-center items-center p-5"
              initial={items.initial}
              animate={items.animate}
              transition={{
                type: "spring",
                repeat: Infinity,
                repeatType: "reverse",
              }}
              >
                {items.iconPath}
              </motion.div>
            </Button>
          </motion.div>
        ))}

       
      </div>
    </div>
  );
};

export default LayoutFirst;
