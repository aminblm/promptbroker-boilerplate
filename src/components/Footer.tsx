import Link from "next/link";

export default function Footer() {

  return (
    <footer className="mt-[150px]">
      <p className="copyright">
        <span> &copy; PromptBroker</span>
        <span>{new Date().getFullYear()}</span>
      </p>

      <div className="otherpages">
        <Link href="/faq" className="mr-5 text-sm hover:underline">FAQ </Link>
        <Link href="/contact" className="mr-5 text-sm hover:underline">Contact </Link>
        <Link href="/changelog" className="mr-5 text-sm hover:underline">Changelog </Link>
        <Link href="/blog" className="mr-5 text-sm hover:underline">Blog </Link>
        <Link href="/privacy" className="mr-5 text-sm hover:underline">Privacy </Link>
        <Link href="/terms" className="text-sm hover:underline">Terms </Link>
      </div>

      <div className="social flex my-5">
      <a href="https://linktr.ee/promptbroker/" className="mr-4"><img src="/icons8-website-50.png" width={35} height={35}></img></a>
        <a href="https://www.linkedin.com/company/promptbroker/" className="mr-4"><img src="/icons8-linkedin-50.png" width={35} height={35}></img></a>
        <a href="https://twitter.com/PromptBroker?s=20/"><img src="/icons8-twitter-50.png" width={35} height={35}></img></a>
      </div>

      <div className="otherpages flex flex-col text-center">
        <Link href="/" className="text-md hover:underline">Best AI Prompts </Link>
        <Link href="/" className="text-md hover:underline">Best Midjourney V5 Prompts </Link>
        <Link href="/" className="text-md hover:underline">Best Midjourney Prompts </Link>
        <Link href="/" className="text-md hover:underline">Best ChatGPT Prompts </Link>
        <Link href="/" className="text-md hover:underline">Best DALL-E Prompts </Link>
        <Link href="/" className="text-md hover:underline">Best Diffusion Prompts </Link>
        <Link href="/" className="text-md hover:underline">Best GPT-4 Prompts </Link>
        <Link href="/" className="text-md hover:underline">Best GPT-3 Prompts </Link>
      </div>
    </footer>
  )
}