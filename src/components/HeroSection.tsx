import React from "react";
import Card from "./Card";
import { data } from "../mock/data";
import FeaturedCompany from "./FeaturedCompany";


const HeroSection = () => {
  return (
    <div>
      <div className="flex gap-10 max-w-container mx-12 mt-16">
        <div className=" flex-1  w-full flex flex-col gap-8">
          <h1 className=" text-5xl  leading-tight font-medium">
            DALL·E, GPT, Midjourney, <br /> Stable Diffusion, ChatGPT <br />{" "}
            Prompt Marketplace
          </h1>
          <p className="text-2xl text-[#FFFFFF]">
            Find top prompts, produce better results, save on <br /> API costs,
            sell your own prompts.
          </p>

          <div className="flex gap-4">
            <button className="h-12 bg-white text-pbr-darkpurple w-48 rounded-md font-medium text-2xl">
              Find a prompt
            </button>
            <button className="h-12 bg-bodyColor text-white w-48 rounded-md border font-medium text-2xl">
              Sell a prompt
            </button>
          </div>
        </div>
        <div className="flex-1 w-full grid grid-cols-2 gap-4">
          {data.map((item, index) => (
            <Card key={index} item={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
