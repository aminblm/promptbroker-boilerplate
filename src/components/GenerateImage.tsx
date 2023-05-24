import React from "react";

const GenerateImage = () => {
  return (
    <div>
      <div className="flex gap-10 max-w-container mx-12 mt-16 mb-8">
        <div className=" flex-1  w-full flex flex-col gap-8">
          <h1 className=" text-5xl  leading-tight font-medium">
            Earn from your Prompt <br />
            Engineering skills
          </h1>
          <p className=" text-[#FFFFFF] leading-normal font-normal">
            <span className="block text-[16px] leading-normal">
              PromptBase is an early marketplace for DALL·E, Midjourney, Stable
              Diffusion & GPT prompts.
            </span>

            <span className="block leading-normal text-[16px]">
              {" "}
              Sell your prompts on PromptBase and earn from your prompt crafting
              skills.
            </span>
            <span className="block leading-normal text-[16px]">
              {" "}
              Upload your prompt, connect with Stripe, and become a seller in
              just 2 minutes.
            </span>
          </p>

          <div className="">
            <button className="h-12 bg-white text-bodyColor w-52 rounded-md font-medium text-2xl">
              Generate images
            </button>
          </div>
        </div>
        <div className="flex-1 w-full">
          <img
            src="https://i.gyazo.com/c58d6b7349191f2feb476c29a0b485ae.jpg"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default GenerateImage;
