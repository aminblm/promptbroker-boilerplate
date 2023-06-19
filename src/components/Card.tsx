import React from "react";

interface CardProps {
  item: {
    imageUrl?: string;
    title?: string;
    type?: string;
    icon?: string;
  };
}



const Card = ({ item }: CardProps) => {
  const { imageUrl, title, type, icon } = item;

  return (
    <div>
      <div className="rounded bg-black text-white overflow-hidden shadow-md hover:-translate-y-1 transition-all duration-700 relative">
        <img src={imageUrl} alt="" className="w-full object-cover h-32" />
        <div className="m-2 ">
          <span className=" font-medium text-sm">{title}</span>
        </div>
        <div className="bg-[#454566] text-white rounded font-medium p-1 text-sm m-2 absolute top-0">
          <span>{`${icon} ${type}`}</span>
        </div>
      </div>
    </div>
  );
};

export default Card;
