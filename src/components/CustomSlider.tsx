"use client";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { featuredData } from "@/mock/data";
import Heading from "./Heading";

interface SampleArrowProps {
  className?: string;
  style?: React.CSSProperties;
  onClick?: React.MouseEventHandler<HTMLDivElement>;
}

const SampleArrow = (props: SampleArrowProps) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "" }}
      onClick={onClick}
    />
  );
};

const CustomSlider = () => {
  const settings = {
    infinite: false,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="mx-8">
      <Heading title="Newest DALL·E Prompts" />
      <Slider
        {...settings}
        nextArrow={<SampleArrow />}
        prevArrow={<SampleArrow />}
      >
        {featuredData.map((item, index) => (
          <div
            className="py-4  px-2 cursor-pointer overflow-hidden"
            key={index}
          >
            <div className="rounded bg-black text-white overflow-hidden shadow-md hover:-translate-y-1 transition-all duration-700 relative">
              <img
                src={item?.imageUrl}
                alt=""
                className="w-full object-cover h-32"
              />
              <div className="m-2 flex items-center justify-between">
                <span className="font-medium text-sm">{item?.title}</span>
                <span>$3.99</span>
              </div>
              <div className="bg-[#454566] text-white rounded font-medium p-1 text-sm m-2 absolute top-0">
                <span>{`${item?.icon} ${item?.type}`}</span>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default CustomSlider;
