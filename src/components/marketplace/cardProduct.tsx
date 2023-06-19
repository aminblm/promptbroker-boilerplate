import Link from "next/link";
import Image from "next/image";
import star from '../../../public/marketplace/star.svg'
import { slugify } from '@/lib'

export default function CardProduct({img, modelName, rate, text, price} : {img: any, modelName: any, rate: any, text: any, price: any}) {
  return (
    <Link href={`/prompt/${slugify(text as string)}`}>
        <div className="transition-all ease duration-[700ms] relative flex justify-center items-center rounded-[1.3rem] max-w-[400px] h-[200px] cursor-pointer mt-[8px] hover:mt-[0px]">
            <div
                className={`rounded-[0.6rem] h-full w-full bg-no-repeat bg-center bg-cover`}
                style={{ backgroundImage: `url(${img})` }}
            />
            {/* <div className="w-full h-full ">
                <Image
                    src={product1}
                    alt="product1"
                    className="rounded-[0.6rem] h-[100%] max-[1000px]:w-[auto]"
                />
            </div> */}
            <div className="flex flex-col justify-between absolute w-full h-full rounded-[0.6rem]">
                <div className="flex justify-between max-[1000px]:justify-center">
                    <span className="p-[5px] bg-[#222236] whitespace-nowrap text-center text-[1rem] max-[1000px]:w-[100%] max-[1000px]:text-[85%] max-[990px]:text-[80%] rounded-[8px] m-[2%] max-[1000px]:m-[5%]">{modelName}</span>
                    <div className="flex items-center justify-center gap-[0.1rem] p-[5px] px-[7px] bg-[#222236] rounded-[8px] m-[2%] max-[1000px]:hidden">
                        <Image
                            src={star}
                            alt="rate"
                            className="w-[16px] h-[16px]"
                        />
                        <span className="text-[0.9rem]">{rate}</span>
                    </div>
                </div>
                <div className="bg-[#000] flex justify-between p-[0.5rem] rounded-br-[0.6rem] rounded-bl-[0.6rem]">
                    <h4 className="text-[1rem] whitespace-nowrap truncate">{text}</h4>
                    <div className="text-[1rem] max-[1000px]:hidden">{price}</div>
                </div>
            </div>
        </div> 
    </Link>
  )
}