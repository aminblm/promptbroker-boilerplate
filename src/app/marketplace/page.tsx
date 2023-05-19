
"use client"

import PromptCard from "@/components/PromptCard"
import { mockPrompts } from "@/mock/data"
import { iPrompt } from "@/types"
import { useEffect, useState } from "react"

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
      <div className="filters">

      </div>
      <div className="grid">
        {
          prompts.map((prompt, idx) => (
            <PromptCard key={idx} prompt={prompt} />
          ))
        }
      </div>
    </div>
  )
}
