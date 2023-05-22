
"use client"

import PromptCard from "@/components/PromptCard"
import { mockPrompts } from "@/mock/data"
import { iPrompt } from "@/types"
import { useEffect, useState } from "react"
import Sidebar from "@/components/marketplace/sidebar" 
import CardProduct from "@/components/marketplace/cardProduct"


// export const metadata = {
//   title: "Marketplace"
// }

export default function Marketplace() {
  const [prompts, setPrompts] = useState<iPrompt[]>([])

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
    setPrompts(mockPrompts)

    return () => {}
  })
  return (
    <div className="marketplace">      
      <div className="flex gap-[2rem]">
        <Sidebar sort={sort} time={time} model={model} categorys={categorys} handleSelect={handleSelect} handleClearFilter={handleClearFilter}></Sidebar>
        <div className="w-full">
          <h1 className="text-[1.6rem] font-[500] border-b-2 py-[0.5rem]">Top Prompts of the Past Month</h1>
          <div className="grid grid-cols-4 gap-4 mt-[2rem]">
            {
              prompts.map((prompt, idx) => (
                <PromptCard key={idx} prompt={prompt} />
              ))
            }
            <CardProduct />
            <CardProduct />
            <CardProduct />
            <CardProduct />
            <CardProduct />
            <CardProduct />
          </div>
        </div>
      </div>
    </div>
      
  )
}
