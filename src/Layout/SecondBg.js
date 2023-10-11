import React from "react";
import LayoutSecond from "../Second Page/LayoutSecond";

const SecondBg = () => {
  return (
    <div className=" w-[100%] relative flex justify-center">
      <div className="absolute flex top-[-120px] rotate-[-13deg] rounded-2xl xl:left-[600px] 2xl:left-[1100px] lg:left-[600px] bg-[#4F709C] pt-3 px-3 pb-14 max-sm:pb-24 ">
        <LayoutSecond />
      </div>
      <div className="absolute top-[-36px] z-[-9] flex rounded-2xl mr-[319px] max-sm:mr-[224px] 2xl:left-[1073px] lg:left-[573px]">
        <svg
          width="57"
          height="55"
          viewBox="0 0 57 55"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M10.1919 43.5494C28.8951 38.3825 35.2491 28.4539 34.7992 11.0656C34.7709 9.97001 36.328 9.52542 36.8325 10.4983L47.5794 31.2245C47.9587 31.956 47.34 32.8067 46.5272 32.6712L37.1635 31.1106C36.7623 31.0437 36.3606 31.2265 36.1475 31.5729L32.6671 37.2285C32.5584 37.4051 32.3975 37.5436 32.2066 37.6247L12.7443 45.8962C12.5842 45.9642 12.4091 45.9893 12.2363 45.969L10.3091 45.7423C9.17707 45.6091 9.0932 43.8529 10.1919 43.5494Z"
            stroke="#18181B"
            strokeWidth="18"
          />
        </svg>
      </div>
      <div className="absolute top-[-76px] flex rounded-2xl z-[-9] max-lg:ml-[370px] max-sm:ml-[261px] 2xl:left-[1402px] lg:left-[903px] w-auto overflow-hidden">
        <svg
          width="87"
          height="95"
          viewBox="0 0 87 95"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M9 2C20.5 72 41 83.2133 85 86L15.8046 77.1034C15.3357 77.0432 14.973 76.6627 14.9353 76.1914L9 2Z"
            stroke="#18181B"
            strokeWidth="18"
          />
        </svg>
      </div>
    </div>
  );
};

export default SecondBg;
