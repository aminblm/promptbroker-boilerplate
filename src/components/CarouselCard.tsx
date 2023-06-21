import React from "react";
import Heading from "./Heading";

interface CardProps {
  item: {
    imageUrl?: string;
    title?: string;
    type?: string;
    icon?: string;
  };
}


const CarouselCard = ({ item }: CardProps) => {
  const { imageUrl, title, type, icon } = item;
  console.log(item);
  

  return (
    <div className="py-4  px-2 cursor-pointer">
      <div className="rounded bg-black text-white overflow-hidden shadow-md hover:-translate-y-1 transition-all duration-700 relative">
        <img src={imageUrl} alt="" className="w-full object-cover h-32" />
        <div className="m-2 flex items-center justify-between">
          <span className=" font-medium text-sm">{title}</span>
          <span>$3.99</span>
        </div>
        <div className="bg-[#454566] text-white rounded font-medium p-1 text-sm m-2 absolute top-0">
          <span>{`${icon} ${type}`}</span>
        </div>
      </div>
    </div>
  );
};

export default CarouselCard;
