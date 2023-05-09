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
        <Link href=""></Link>
      </div>
    </footer>
  )
}