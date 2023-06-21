import React from "react";
import { HiChevronRight } from "react-icons/hi";

interface HeadingProps {
    title?: string 
}

const Heading = ({ title }: HeadingProps) => {
  return (
    <div className="mb-2 px-2">
      <div className="group flex items-center">
        <h1 className="relative group text-xl font-medium py-2">
          {title}
          <a href="#">
            <span className="absolute translate-y-1/3 w-full  h-[1px] -translate-x-[2%] opacity-0 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500">
              <span className="pl-4 text-center text-xs"> Explore All</span>

              <HiChevronRight size={14} className="inline-block" />
            </span>
          </a>
        </h1>
      </div>
      <div className="w-full h-[1px] border"></div>
    </div>
  );
};

export default Heading;
