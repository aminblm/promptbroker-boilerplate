import Sidebar from "@/components/home/sidebar" 
import CardProduct from "@/components/home/cardProduct"


export default function Home() {
  return (
    <div className="flex gap-[2rem]">
      <Sidebar></Sidebar>
      <div className="w-full">
        <h1 className="text-[1.6rem] font-[500] border-b-2 py-[0.5rem]">Top Prompts of the Past Month</h1>
        <div className="grid grid-cols-4 gap-4 mt-[2rem]">
          <CardProduct />
          <CardProduct />
          <CardProduct />
          <CardProduct />
          <CardProduct />
          <CardProduct />
        </div>
      </div>
    </div>
  )
}
