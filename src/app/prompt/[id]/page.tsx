"use client";
import { iPrompt } from "@/types";
import PromptMain from "@/components/prompt-comp/prompt-main";
import PromptBody from "@/components/prompt-comp/prompt-body";
import BrowseMarketBtn from "@/components/prompt-comp/browse-market-btn";

type Props = {
  params: iPrompt;
};

export default function PromptPage({ params }: Props) {
  const { id } = params;
  console.log(id);
  return (
    <>
      <div className="h-full">
        <div className=""><PromptMain /></div>
        <div className="">
          <PromptBody />
        </div>
        <div className="">
          <div className="flex justify-center mb-20 mt-20">
            <BrowseMarketBtn />
          </div>
        </div>
      </div>
    </>
  );
}
