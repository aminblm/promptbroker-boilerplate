import Link from "next/link";
import Image from "next/image";
import times from '../../../public/marketplace/times.svg'
import React,{ useState } from "react";

const categoriesData = [
  {
    name: 'Sort by',
    data: ['hottest', 'top', 'newest'],
  },
  {
    name: 'Time',
    data: ['all time', 'past month', 'past week', 'past 24 hours'],
  },
  {
    name: 'Model',
    data: ['all', 'DALL·E', 'Midjourney', 'GPT', 'PromptBase Stable', 'Diffusion'],
  },
  {
    name: 'Category',
    data: [
      'All',
      '3D',
      'Accessory',
      'Ads',
      'Animal',
      'Anime',
      'Art',
      'Avatar',
      'Building',
      'Business',
      'Cartoon',
      'Chatbot',
      'Clothes',
      'Coach',
      'Code',
      'Conversion',
      'Copy',
      'Cute',
      'Drawing',
      'Email',
      'Fantasy',
      'Fashion',
      'Finance',
      'Fix',
      'Food',
      'Fun',
      'Funny',
      'Future',
      'Games',
      'Generation',
      'Graphic Design',
      'Health',
      'Icons',
      'Ideas',
      'Illustration',
      'Jewelry',
      'Landscape',
      'Language',
      'Logo',
      'Marketing',
      'Mockup',
      'Monogram',
      'Music',
      'Nature',
      'NSFW',
      'Painting',
      'Pattern',
      'People',
      'Photography',
      'Pixel Art',
      'Plan',
      'Product',
      'Prompts',
      'Psychedelic',
      'Scary',
      'SEO',
      'Social',
      'Space',
      'Sport',
      'Study',
      'Unique Style',
      'Summarise',
      'Synthwave',
      'Translate',
      'Travel',
      'Vehicle',
      'Wallpaper',
      'Writing'
    ],
  },
]

const MenuItem = ({ name, children, sort, time, model, category, handleSelect, ...rest }: { name: any, children: any, sort: any, time: any, model: any, category: any, handleSelect: any }) => {
  const shouldRenderSvg = [sort, time, model, category].includes(children);
  const handleSelectEvent = () => {
    handleSelect(name, children);
  };
  return (
    <div className="flex gap-[10px] items-center" {...rest}>
      <div className="relative w-[14px] h-[14px] cursor-pointer flex justify-center items-center" onClick={handleSelectEvent}>
        <span className="w-[100%] h-[100%] m-0 p-0 absolute bg-[#454566] left-0 top-0 rounded-[2px]"></span>
        { shouldRenderSvg && <span className="w-[100%] h-[100%] m-0 p-0 absolute left-0 top-0">
          <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 256 256"><rect x="0" y="0" width="100%" height="100%" fill="none" stroke="none" /><path fill="white" d="M216 40H40a16 16 0 0 0-16 16v144a16 16 0 0 0 16 16h176a16 16 0 0 0 16-16V56a16 16 0 0 0-16-16Zm-10.34 45.66l-96 96a8 8 0 0 1-11.32 0l-40-40a8 8 0 0 1 11.32-11.32L104 164.69l90.34-90.35a8 8 0 0 1 11.32 11.32Z" /></svg>
        </span>}
        {/* <input type="checkbox" name="sort" id={children} className="block" /> */}
      </div>
      <label htmlFor={children} className="capitalize whitespace-nowrap">{children}</label>
    </div>
  )
}

export default function Sidebar({sort, time, model, categorys, handleSelect, handleClearFilter} : {sort: any, time: any, model: any, categorys: any, handleSelect: any, handleClearFilter: any}) {

  return (
    <div className="w-[fit-content]">
      <div className="flex gap-[2] p-[0.2rem] items-center justify-center border-solid border-2 border-white rounded-[0.5rem] cursor-pointer" onClick={() => handleClearFilter()}>
        <span className="text-[1rem]">Clear Filter</span>
        <Image
          className=""
          src={times}
          alt="times"
        />
      </div>
      {categoriesData.map((category, idx) => {
        return (
          <div className="flex flex-col" key={`category-${idx}`}>
            <div className="text-[1.1rem] font-[700] py-[0.5rem]">{category.name}</div>
            <div className="">
              {category.data.map((item, idx) => {
                return (
                  <MenuItem name={category.name} sort={sort} time={time} model={model} category={categorys} handleSelect={handleSelect} key={`item-${idx}`}>{item}</MenuItem>
                )
              })}
            </div>
          </div>
        )
      })}
    </div>
  )
}