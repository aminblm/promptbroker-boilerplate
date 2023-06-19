"use client";
import React from "react";
// import techCrunch from "../../public/assets/tc_logo2.png";
// import verge from "../../public/assets/verge_logo.svg";
// import wired from "../../public/assets/wired_logo.png";
// import fastCompany from "../../public/assets/fast_company_logo.png";
// import financialTimes from "../../public/assets/ft_logo.png";
// import atlantic from "../../public/assets/atlantic_logo.svg";
// import yahoo from "../../public/assets/yahoo_finance_logo.png";
// import wsj from "../../public/assets/wsj_logo.png";
import Image from "next/image";

const FeaturedCompany = () => {
  return (
    <div className="flex justify-end pr-40 w-full mt-4">
      <div className=" flex flex-col">
        <span className="flex items-center justify-center italic text-gray-500 whitespace-nowrap">
          Featured in
        </span>

        <div className="flex mt-2 items-center gap-3">
          <a href="">
            <Image src="" alt="" className="w-[100px] bg-cover h-6" />
          </a>
          <a href="">
            <Image src="" alt="" className="w-[100px] bg-cover" />
          </a>
          <a href="">
            <Image src="" alt="" className="w-[100px] bg-cover" />
          </a>
          <a href="">
            <Image src="" alt="" className="w-[100px] bg-cover" />
          </a>
        </div>

        <div className="flex items-center gap-3 mt-3">
          <a href="" className="">
            <Image
              src=""
              alt=""
              className="w-[100px] bg-cover brightness-200"
            />
          </a>
          <a href="" className="">
            <img src="" alt="" className="w-[100px] h-10 bg-cover" />
          </a>
          <a href="" className="h-10">
            <Image src="" alt="" className="w-[100px]  bg-cover" />
          </a>
          <a href="" className="">
            <Image src="" alt="" className="w-[100px] bg-cover h-4" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default FeaturedCompany;
