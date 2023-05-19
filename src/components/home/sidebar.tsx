import Link from "next/link";
import Image from "next/image";
import times from '../../../public/home/times.svg'

export default function Sidebar() {

  return (
    <div className="w-[fit-content]">
        <div className="flex gap-[2] p-[0.2rem] items-center justify-center border-solid border-2 border-white rounded-[0.5rem]">
            <span className="text-[1rem]">Clear Filter</span>
            <Image
                className=""
                src={times}
                alt="times"
            />
        </div>
        <div className="flex flex-col">
          <div className="text-[1.1rem] font-[700] py-[0.5rem]">Sort by</div>
          <div id="sortGroup" className="">
            <p className="flex gap-[10px]">
              <input type="checkbox" name="sort" id="hottest" className="" />
              <label htmlFor="hottest" className="">Hottest</label>
            </p>
            <p className="flex gap-[10px]">
              <input type="checkbox" name="sort" id="top" className="" />
              <label htmlFor="top" className="">Top</label>
            </p>
            <p className="flex gap-[10px]">
              <input type="checkbox" name="sort" id="newest" className="" />
              <label htmlFor="newest" className="">Newest</label>
            </p>
          </div>
        </div>
        <div className="flex flex-col">
          <div className="text-[1.1rem] font-[700] py-[0.5rem]">Time</div>
          <div id="timeGroup" className="">
            <p className="flex gap-[10px]">
              <input type="checkbox" name="time" id="allTime" className="" />
              <label htmlFor="allTime" className="">All time</label>
            </p>
            <p className="flex gap-[10px]">
              <input type="checkbox" name="time" id="pastMonth" className="" />
              <label htmlFor="pastMonth" className="">Past Month</label>
            </p>
            <p className="flex gap-[10px]">
              <input type="checkbox" name="time" id="pastWeek" className="" />
              <label htmlFor="pastWeek" className="">Past Week</label>
            </p>
            <p className="flex gap-[10px]">
              <input type="checkbox" name="time" id="pastHour" className="" />
              <label htmlFor="pastHour" className="">Past 24 hours</label>
            </p>
          </div>
        </div>
        <div className="flex flex-col">
          <div className="text-[1.1rem] font-[700] py-[0.5rem]">Model</div>
          <div id="modelGroup" className="">
            <p className="flex gap-[10px]">
              <input type="checkbox" name="model" id="all" className="" />
              <label htmlFor="all" className="">All</label>
            </p>
            <p className="flex gap-[10px]">
              <input type="checkbox" name="model" id="dall" className="" />
              <label htmlFor="dall" className="">DALL·E</label>
            </p>
            <p className="flex gap-[10px]">
              <input type="checkbox" name="model" id="midjourney" className="" />
              <label htmlFor="midjourney" className="">Midjourney</label>
            </p>
            <p className="flex gap-[10px]">
              <input type="checkbox" name="model" id="gpt" className="" />
              <label htmlFor="gpt" className="">GPT</label>
            </p>
            <p className="flex gap-[10px]">
              <input type="checkbox" name="model" id="promptBase" className="" />
              <label htmlFor="promptBase" className="">PromptBase</label>
            </p>
            <p className="flex gap-[10px]">
              <input type="checkbox" name="model" id="stableDiffusion" className="" />
              <label htmlFor="stableDiffusion" className="">Stable Diffusion</label>
            </p>
          </div>
        </div>
        <div className="flex flex-col">
          <div className="text-[1.1rem] font-[700] py-[0.5rem]">Category</div>
          <div id="categoryGroup" className="">
            <p className="flex gap-[10px]">
              <input type="checkbox" name="category" id="allCategory" className="" />
              <label htmlFor="allCategory" className="">All</label>
            </p>
            <p className="flex gap-[10px]">
              <input type="checkbox" name="category" id="3dCategory" className="" />
              <label htmlFor="3dCategory" className="">3D</label>
            </p>
            <p className="flex gap-[10px]">
              <input type="checkbox" name="category" id="accessory" className="" />
              <label htmlFor="accessory" className="">Accessory</label>
            </p>
            <p className="flex gap-[10px]">
              <input type="checkbox" name="category" id="adsCategory" className="" />
              <label htmlFor="adsCategory" className="">Ads</label>
            </p>
            <p className="flex gap-[10px]">
              <input type="checkbox" name="category" id="animal" className="" />
              <label htmlFor="animal" className="">Animal</label>
            </p>
            <p className="flex gap-[10px]">
              <input type="checkbox" name="category" id="anime" className="" />
              <label htmlFor="anime" className="">Anime</label>
            </p>
            <p className="flex gap-[10px]">
              <input type="checkbox" name="category" id="art" className="" />
              <label htmlFor="art" className="">Art</label>
            </p>
            <p className="flex gap-[10px]">
              <input type="checkbox" name="category" id="avatar" className="" />
              <label htmlFor="avatar" className="">Avatar</label>
            </p>
          </div>
        </div>
    </div>
  )
}