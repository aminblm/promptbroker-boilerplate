"use client"

import PromptCard from "@/components/PromptCard"
import { mockPrompts } from "@/mock/data"
import { iPrompt } from "@/types"
import { useEffect, useState } from "react"
import Sidebar from "@/components/marketplace/sidebar" 
import TopBar from "@/components/marketplace/topBar"
import CardProduct from "@/components/marketplace/cardProduct"

// export const metadata = {
//   title: "Marketplace"
// }

export default function Marketplace() {
  const [prompts, setPrompts] = useState<iPrompt[]>([]);

  const [sort, setSort] = useState('')
  const [time, setTime] = useState('')
  const [model, setModel] = useState('')
  const [categorys, setCategory] = useState('')

  function handleSelect(name: any, item: any){
    if (name == "Sort by"){
      setSort(item)
    }
    else if (name == "Time"){
      setTime(item)
    }
    else if (name == "Category"){
      setCategory(item)
    }
    else if (name == "Model"){
      setModel(item)
    }
  }

  function handleClearFilter() {
    setTime('')
    setModel('')
    setSort('')
    setCategory('')
  }

  useEffect(() => {
    setPrompts(mockPrompts);
    return () => {}
  })
  return (    
      <div className="flex max-[1000px]:flex-col gap-[2rem] justify-center w-full">
        <TopBar sort={sort} time={time} model={model} categorys={categorys} handleSelect={handleSelect} handleClearFilter={handleClearFilter}></TopBar>
        <Sidebar sort={sort} time={time} model={model} categorys={categorys} handleSelect={handleSelect} handleClearFilter={handleClearFilter}></Sidebar>
        <div className="w-full">
          <h1 className="text-[1.6rem] font-[500] border-b-2 py-[0.5rem]">Top Prompts of the Past Month</h1>
          <div className="grid grid-cols-4 gap-4 mt-[2rem] max-[1159px]:grid-cols-3 max-[1000px]:grid-cols-8 max-[959px]:grid-cols-7 max-[843px]:grid-cols-6 max-[727px]:grid-cols-5 max-[611px]:grid-cols-4 max-[479px]:grid-cols-3 max-[363px]:grid-cols-2 max-[247px]:grid-cols-1">
            {/* {
              prompts.map((prompt, idx) => (
                <PromptCard key={idx} prompt={prompt} />
              ))
            } */}
            <CardProduct img={'/marketplace/product1.jpg'} modelName={"⛵ Midjourney"} price={"$3.99"} rate={"5.0"} text={"Minimal Pastel Vectors For Kids"}/>
            <CardProduct img={'/marketplace/product1.jpg'} modelName={"⛵ Midjourney"} price={"$3.99"} rate={"5.0"} text={"Minimal Pastel Vectors For Kids"}/>
            <CardProduct img={'/marketplace/product1.jpg'} modelName={"⛵ Midjourney"} price={"$3.99"} rate={"5.0"} text={"Minimal Pastel Vectors For Kids"}/>
            <CardProduct img={'/marketplace/product1.jpg'} modelName={"⛵ Midjourney"} price={"$3.99"} rate={"5.0"} text={"Minimal Pastel Vectors For Kids"}/>
            <CardProduct img={'/marketplace/product1.jpg'} modelName={"⛵ Midjourney"} price={"$3.99"} rate={"5.0"} text={"Minimal Pastel Vectors For Kids"}/>
            <CardProduct img={'/marketplace/product1.jpg'} modelName={"⛵ Midjourney"} price={"$3.99"} rate={"5.0"} text={"Minimal Pastel Vectors For Kids"}/>
            <CardProduct img={'/marketplace/product1.jpg'} modelName={"⛵ Midjourney"} price={"$3.99"} rate={"5.0"} text={"Minimal Pastel Vectors For Kids"}/>
            <CardProduct img={'/marketplace/product1.jpg'} modelName={"⛵ Midjourney"} price={"$3.99"} rate={"5.0"} text={"Minimal Pastel Vectors For Kids"}/>
            <CardProduct img={'/marketplace/product1.jpg'} modelName={"⛵ Midjourney"} price={"$3.99"} rate={"5.0"} text={"Minimal Pastel Vectors For Kids"}/>
            <CardProduct img={'/marketplace/product1.jpg'} modelName={"⛵ Midjourney"} price={"$3.99"} rate={"5.0"} text={"Minimal Pastel Vectors For Kids"}/>
            <CardProduct img={'/marketplace/product1.jpg'} modelName={"⛵ Midjourney"} price={"$3.99"} rate={"5.0"} text={"Minimal Pastel Vectors For Kids"}/>
            <CardProduct img={'/marketplace/product1.jpg'} modelName={"⛵ Midjourney"} price={"$3.99"} rate={"5.0"} text={"Minimal Pastel Vectors For Kids"}/>
          </div>
        </div>
      </div> 
  )
}
