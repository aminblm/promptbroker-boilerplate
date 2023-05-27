"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";

type ButtonsProps = {
  currentTab: string | null;
  children: React.ReactNode;
};

export default function Buttons({ currentTab, children }: ButtonsProps) {
  const pathName = usePathname();

  return (
    <div className="flex flex-col-reverse sm:flex-row justify-between mx-2 sm:mx-12">
      <div className="sm:pl-0 pl-4">
        <button
          className={`rounded-full bg-[#393954] text-xs font-semibold py-2 px-3 ml-3 ${
            currentTab === "dashboards" && "bg-white text-black"
          }`}
        >
          Dashboards
        </button>
        <button
          className={`rounded-full bg-[#393954] text-xs font-semibold py-2 px-3 ml-3 ${
            currentTab === "prompts" && "bg-white text-black"
          }`}
        >
          Prompts
        </button>
        <button
          className={`rounded-full bg-[#393954] text-xs font-semibold py-2 px-3 ml-3 ${
            currentTab === "bundles" && "bg-white text-black"
          }`}
        >
          Bundles
        </button>
        <button
          className={`rounded-full bg-[#393954] text-xs font-semibold py-2 px-3 ml-3 ${
            currentTab === "sales" && "bg-white text-black"
          }`}
        >
          Sales
        </button>
        <button
          className={`rounded-full bg-[#393954] text-xs font-semibold py-2 px-3 ml-3 ${
            currentTab === "perks" && "bg-white text-black"
          }`}
        >
          Perks
        </button>
        <button
          className={`rounded-full bg-[#393954] text-xs font-semibold py-2 px-3 ml-3 ${
            currentTab === "payouts" && "bg-white text-black"
          }`}
        >
          Payouts
        </button>
        <Link href="/account/favorites">
          <button
            className={`rounded-full ${
              pathName === "/account/favorites"
                ? "bg-white text-black"
                : "bg-[#393954] text-white"
            } text-xs font-semibold py-2 px-3 ml-3`}
          >
            Favorites
          </button>
        </Link>
        <Link href="/account/settings">
          <button
            className={`rounded-full ${
              pathName === "/account/settings"
                ? "bg-white text-black"
                : "bg-[#393954] text-white"
            } text-xs font-semibold py-2 px-3 ml-3`}
          >
            Settings
          </button>
        </Link>
      </div>
      <div className="flex mb-7 sm:mb-0">
        <button className="bg-white text-gray-700 rounded-md text-sm font-semibold py-1 px-2 ml-3">
          Stripe Dashboard
        </button>
        <div className="inline-flex relative">
          <button className="bg-white w-full text-gray-700 rounded-md text-sm font-semibold py-1 px-2 ml-3">
            Public Profile
          </button>
          <Image
            className="absolute inset-y-0 right-0 h-4 filter invert-12 sepia-28 saturate-806 hue-rotate-201 brightness-90 contrast-93 ml-1"
            src="/home/open_new_window.svg"
            alt="open new window"
            width={16}
            height={16}
          />
        </div>
      </div>
    </div>
  );
}
