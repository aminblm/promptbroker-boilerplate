import Link from "next/link"

export const metadata = {
  title: "Generate"
}

export default function Generate() {
  return (
    <div className="flex flex-col py-12 items-center text-center gap-4">
      <h2 className="text-5xl leading-tight">Create an account to <br/> <span className="gradient-text">generate images</span></h2>
      <p className="leading-loose -translate-y-4">
        Start prompt engineering instantly within PromptBase using Stable Diffusion. 
        <br/>
        Craft prompts and sell them on the marketplace.
        <br/>
        Get 5 free generation credits every day.
      </p>
      <Link href="/login" className="block font-semibold px-6 py-3 rounded-xl -translate-y-4 text-xl bg-white text-pbr-black self-center hover:drop-shadow-[0_0px_10px_rgba(0,0,0,0.25)]">
        Create Account
      </Link>

      <div className="max-w-xl border-2 rounded-md border-white overflow-hidden">
        <img className="object-contain" src="https://i.gyazo.com/c58d6b7349191f2feb476c29a0b485ae.jpg" alt="Start prompt engineering instantly within PromptBase using Stable Diffusion." />
      </div>
    </div>
  )
}
