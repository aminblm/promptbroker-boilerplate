import Link from "next/link";
import Image from "next/image";
import product1 from '../../../public/marketplace/product1.jpg'
import star from '../../../public/marketplace/star.svg'

export default function CardProduct() {

  return (
    <Link href={''}>
        <div className="transition-all ease duration-[700ms] relative flex justify-center items-center rounded-[1.3rem] max-w-[400px] h-[200px] cursor-pointer mt-[8px] hover:mt-[0px]">
            <div className="w-full h-full">
                <Image
                    src={product1}
                    alt="product1"
                    className="rounded-tl-[0.6rem] rounded-tr-[0.6rem]"
                />
            </div>
            <div className="flex flex-col justify-between absolute w-full h-full rounded-[0.6rem]">
                <div className="flex justify-between">
                    <span className="p-[5px] bg-[#222236] text-[1rem] rounded-[8px] m-[2%]">⛵ Midjourney</span>
                    <div className="flex items-center justify-center gap-[0.1rem] p-[5px] px-[7px] bg-[#222236] rounded-[8px] m-[2%]">
                        <Image
                            src={star}
                            alt="rate"
                            className="w-[16px] h-[16px]"
                        />
                        <span className="text-[0.9rem]">5.0</span>
                    </div>
                </div>
                <div className="bg-[#000] flex justify-between p-[1rem] rounded-br-[0.6rem] rounded-bl-[0.6rem]">
                    <h4 className="text-[1rem]">Minimal Pastel Vectors For Kids</h4>
                    <div className="text-[1rem]">$3.99</div>
                </div>
            </div>
        </div> 
    </Link>
  )
}