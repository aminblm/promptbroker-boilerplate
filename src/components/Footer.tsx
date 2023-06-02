import Link from "next/link";
import { BsInstagram } from "react-icons/bs";
import { BsTwitter } from "react-icons/bs";

export default function Footer() {

  return (
    <footer className="">
      <p className="copyright">
        <span>©</span>
        <span>PromptBroker</span>
        <span>{new Date().getFullYear()}</span>
      </p>
      <div className="flex w-64 justify-between otherpages">
        <Link className="hover:underline" href="">FAQ</Link>
        <Link className="hover:underline" href="">Conatct</Link>
        <Link className="hover:underline" href="">Blog</Link>
        <Link className="hover:underline" href="">Privacy</Link>
        <Link className="hover:underline" href="">Terms</Link>
      </div>
      <div className="flex w-12 justify-between my-4">
        <BsInstagram />
        <BsTwitter />
      </div>
      <div className="flex w-80 h-80 flex-wrap">
        <div className="mx-auto txt">
          <div><Link href=""><p className="text-center hover:underline text-l">Best AI Prompts</p></Link></div>
          <div><Link href=""><p className="text-center hover:underline text-l">Best Midjourney V5 Prompts</p></Link></div>
          <div><Link href=""><p className="text-center hover:underline text-l">Best Midjourney Prompts</p></Link></div>
          <div><Link href=""><p className="text-center hover:underline text-l">Best ChatGPT Promopts</p></Link></div>
          <div><Link href=""><p className="text-center hover:underline text-l">Best DALL-E Prompts</p></Link></div>
          <div><Link href=""><p className="text-center hover:underline text-l">Best Stable Diffusion Prompts</p></Link></div>
          <div><Link href=""><p className="text-center hover:underline text-l">Best GPT-4 Prompts</p></Link></div>
          <div><Link href=""><p className="text-center hover:underline text-l">Best GPT-3 Prompts</p></Link></div>
        </div>
      </div>
    </footer>
  )
}