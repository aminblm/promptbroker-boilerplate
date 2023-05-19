export const metadata = {
  title: "Sell",
};

import Slider from "@/components/Slider";
import Link from "next/link";

export default function Sell() {
  return (
    <div className="max-w-full mx-auto">
      <div className="pt-2 items-center flex justify-center ">
        <Slider />
      </div>
      <div className="max-w-[1200px] p-2 flex justify-between mx-auto">
        <div>
          <h1 className="text-5xl">Start selling your prompts</h1>
          <p className="mt-12 w-[550px]">
            PromptBase is a marketplace for DALL·E, Midjourney, Stable Diffusion
            and GPT Prompts.
          </p>
          <p className="pt-5 w-[600px]">
            You can sell your own prompts on PromptBase and start earning from
            your Prompt Engineering skills.
          </p>
          <p className="pt-5 w-[600px]">
            If your prompt is approved, you'll keep 80% of revenue from every
            sale of your prompt.
          </p>
          <p className="pt-5">Get selling in just 2 minutes.</p>

          <button className="mt-6 text-2xl font-medium bg-white text-pbr-darkpurple py-2 rounded-md px-7">
            Sell a prompt
          </button>

          <p className="mt-6 w-[600px]">
            Please read our{" "}
            <span>
              <Link href={"../privacy"}>prompt submission guidlines</Link>
            </span>{" "}
            before submitting your prompt so you understand what prompts can be
            sold on PromptBase.
          </p>
        </div>
        <div>Video</div>
      </div>
    </div>
  );
}
