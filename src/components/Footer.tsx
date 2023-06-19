import Link from "next/link";

export default function Footer() {

  return (
    <footer>
      <p className="copyright">
        <span>©</span>
        <span>PromptBroker</span>
        <span>{new Date().getFullYear()}</span>
      </p>
      <div className="otherpages">
        <a href="">FAQ</a>
        <a href="">Contact</a>
        <a href="">Changelog</a>
        <a href="">Blog</a>
        <a href="">Privacy</a>
        <a href="">Terms</a>
      </div>
      <div className="image">
        <img src="" alt="" />
        <img src="" alt="" />
      </div>
      <div className="best-prompts">
        <a href="">Best AI Prompts</a>
        <a href="">Best Midjourney V5 Prompts</a>
        <a href="">Best Midjourney Prompts</a>
        <a href="">Best ChatGPT Prompts</a>
        <a href="">Best DALL-E Prompts</a>
        <a href="">Best Stable Diffusion Prompts</a>
        <a href="">Best GPT-4 Prompts</a>
        <a href="">Best GPT-3 Prompts</a>
      </div>
    </footer>
  )
}