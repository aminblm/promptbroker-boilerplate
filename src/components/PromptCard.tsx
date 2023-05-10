"use client"
import React from 'react'
import { iPrompt } from '@/types'
import { modelIcons } from '@/icons'
import Link from 'next/link'
import { slugify } from '@/lib'

interface Props {
  prompt: iPrompt
}

export default function PromptCard({ prompt }: Props) {
  return (
    <Link href={`/prompt/${slugify(prompt.name as string)}`} className="promptcard">
      <p className="model bg-pbr-darkpurple">{modelIcons().get(prompt.name as string)}</p>
      <div className="details">
        <p className="name">{prompt.name}</p>
        <p className="price">${prompt.price}</p>
      </div>
      <img className='object-cover' src={prompt.image} alt={prompt.name} aria-label={prompt.name} />
    </Link>
  )
}
