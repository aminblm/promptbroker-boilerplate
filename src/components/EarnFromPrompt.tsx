import React from "react";


const EarnFromPrompt = () => {
  return (
    <div>
      <div className="flex gap-10 max-w-container mx-12 mt-16 mb-8">
        <div className=" flex-1  w-full flex flex-col gap-8">
          <h1 className=" text-5xl  leading-tight font-medium">
            Generate images directly <br /> in PromptBase
          </h1>
          <p className=" text-[#FFFFFF] leading-normal font-normal">
            <span className="block text-[16px] leading-normal">
              Start prompt engineering instantly within PromptBase using Stable
              Diffusion.
            </span>

            <span className="block leading-normal text-[16px]">
              {" "}
              Craft prompts and sell them on the marketplace.
            </span>
            <span className="block leading-normal text-[16px]">
              {" "}
              Get 5 free generation credits every day.
            </span>
          </p>

          <div className="">
            <button className="h-12 bg-white text-bodyColor w-48 rounded-md font-medium text-2xl">
              Sell a prompt
            </button>
          </div>
        </div>
        <div className="flex-1 w-full">
          {/* <ReactPlayer controls url="https://youtu.be/QORw7FJ5lho" /> */}
        </div>
      </div>
    </div>
  );
};

export default EarnFromPrompt;
