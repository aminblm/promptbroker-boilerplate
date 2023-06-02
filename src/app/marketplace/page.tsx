
"use client"

import PromptCard from "@/components/PromptCard"
import { mockPrompts } from "@/mock/data"
import { iPrompt } from "@/types"
import { useEffect, useState } from "react"
import Sidebar from "@/components/home/sidebar" 
import CardProduct from "@/components/home/cardProduct"

// export const metadata = {
//   title: "Marketplace"
// }

export default function Marketplace() {
  const [prompts, setPrompts] = useState<iPrompt[]>([])

  useEffect(() => {
    setPrompts(mockPrompts)

    return () => {}
  })
  
  return (
    <div className="marketplace">
      
      <div className="flex gap-[2rem]">
          <div className="filters">
            <Sidebar></Sidebar>
            </div>
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
