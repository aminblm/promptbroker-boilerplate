import React from "react";

const About = () => {
  return (
    <div className="mb-10">
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-5xl  leading-tight font-medium pt-20 pb-8">
          What is PromptBase?
        </h1>

        <div className=" text-center text-[#FFFFFF] leading-8">
          <span className="block">
            Prompts are becoming a powerful new way of programming AI models
            like DALL·E, Midjourney & GPT.
          </span>
          <span className="block">
            However, it's hard to find good quality prompts online.
          </span>
          <span className="block">
            If you're good at prompt engineering, there's also no clear way to
            make a living from your skills.
          </span>
          <span className="block">
            PromptBase is a marketplace for buying and selling quality prompts
            that produce the best results, and save you money on API costs.
          </span>
        </div>
      </div>
    </div>
  );
};

export default About;
