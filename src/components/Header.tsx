"use client"
import Link from "next/link"; 

export default function Header() { 
  return (
    <header>
      <Link href="/" className="logo">
        <img className="rounded-full" src="/logo.png" alt={"PromptBase"} />
        <h1 className="logoname">PromptBroker</h1>
      </Link>
      <div className="search">
        <input type="text" name="searchPrompts" placeholder="Search Prompts" className="outline-none bg-pbr-purple flex-grow rounded-tl-md rounded-bl-md border-none px-4 py-1" />
        <button className="bg-white rounded-tr-md rounded-br-md h-full px-2">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 text-pbr-darkpurple">
            <path fillRule="evenodd" d="M10.5 3.75a6.75 6.75 0 100 13.5 6.75 6.75 0 000-13.5zM2.25 10.5a8.25 8.25 0 1114.59 5.28l4.69 4.69a.75.75 0 11-1.06 1.06l-4.69-4.69A8.25 8.25 0 012.25 10.5z" clipRule="evenodd" />
          </svg>
        </button>
      </div>
      <div className="navlinks">
        <Link href="/marketplace">Marketplace</Link>
        <Link href="/generate">Generate</Link>
        <Link href="/hire">Hire</Link>
        <Link href="/account">Account</Link>
        <Link href="/login">Login</Link>
        <Link href="/sell" className="flex gap-1 items-center group">
          <span className="group-[.active]:text-pbr-darkpurple">Sell</span>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 text-white group-[.active]:text-pbr-darkpurple">
            <path fillRule="evenodd" d="M3.75 12a.75.75 0 01.75-.75h13.19l-5.47-5.47a.75.75 0 011.06-1.06l6.75 6.75a.75.75 0 010 1.06l-6.75 6.75a.75.75 0 11-1.06-1.06l5.47-5.47H4.5a.75.75 0 01-.75-.75z" clipRule="evenodd" />
          </svg>
        </Link>
      </div>
      <button className="hamburger">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
          <path fillRule="evenodd" d="M3 6.75A.75.75 0 013.75 6h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 6.75zM3 12a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 12zm0 5.25a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75a.75.75 0 01-.75-.75z" clipRule="evenodd" />
        </svg>
      </button>
    </header>
  )
}