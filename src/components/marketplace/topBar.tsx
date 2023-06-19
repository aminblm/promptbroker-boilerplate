import Link from "next/link";
import Image from "next/image";
import times from '../../../public/marketplace/times.svg'
import downArrow from '../../../public/marketplace/downArrow.svg'
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

const OptionItem = ({ name, children, sort, time, model, category, handleSelect, ...rest }: { name: any, children: any, sort: any, time: any, model: any, category: any, handleSelect: any }) => {
  const addSelectAttribute = [sort, time, model, category].includes(children);
  return (
    <option value={children} className="" {...rest} >{children}</option>
  )
}

export default function TopBar({sort, time, model, categorys, handleSelect, handleClearFilter} : {sort: any, time: any, model: any, categorys: any, handleSelect: any, handleClearFilter: any}) {
  
  return (
    <div className="w-full flex gap-[1rem] overflow-x-auto pb-[1rem] min-[1000px]:hidden">
      <div className="flex gap-[2] p-[0.2rem] px-[2rem] items-center justify-center border-solid border-2 border-white rounded-[0.5rem] cursor-pointer whitespace-nowrap w-[fit-content]" onClick={() => handleClearFilter()}>
        <span className="text-[1rem] whitespace-nowrap">Clear Filter</span>
        <Image 
          className=""
          src={times}
          alt="times"
        />
      </div>
      {categoriesData.map((category, idx) => {
        return (
          <select 
            key={`category-${idx}`} 
            onChange={(event) => {
              const selectedValue = event.target.options[event.target.selectedIndex].value;
              handleSelect(category.name, selectedValue);
            }} 
            className="bg-[#454566] text-[#ccc] px-[1rem] capitalize whitespace-nowrap font-[500] leading-[20px] align-middle py-[4px] px-[5px] min-h-[28px] cursor-pointer rounded-[4px] m-[0] border-none font-[inherit] outline-none"
          >
            <option className="">{category.name}</option>
            {category.data.map((item, idx) => {
                return (
                  <OptionItem name={category.name} sort={sort} time={time} model={model} category={categorys} handleSelect={handleSelect} key={`item-${idx}`}>{item}</OptionItem>
                )
              })}
          </select>
        )
      })}
    </div>
  )
}