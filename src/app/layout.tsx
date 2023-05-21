import Header from '@/components/Header'
import './globals.css' 
import Footer from '@/components/Footer' 
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: {
    default: 'PromptBroker',
    template: '%s | PromptBroker',
  },
  description: 'Prompts Marketplace for DALL·E, Midjourney, ChatGPT and Stable Diffusion 🤖',
  openGraph: {
    title: "PromptBroker",
    images: [
      'https://d1fdloi71mui9q.cloudfront.net/NYunLrOMQI2fRRwWKtHO_2R946bn7B42UnljJ'
    ],
    description: "Prompts Marketplace for DALL·E, Midjourney, ChatGPT and Stable Diffusion 🤖",
    url: "https://promptbroker.web.app/",
    type: "website"
  },
  viewport: "width=device-width, initial-scale=1", 
  keywords: "DALL·E, Midjourney, ChatGPT, Stable Diffusion",
  robots: "index,follow",
  manifest: '/manifest.json'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      
      <body className="center">
        {/* <Header /> */}
        <main>
          {children}
        </main>
        {/* <Footer /> */}
      </body>
    </html>
  )
}
