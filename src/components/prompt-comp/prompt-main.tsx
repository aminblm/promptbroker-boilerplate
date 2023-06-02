import { MdVerified } from "react-icons/md";
import { HiTag } from "react-icons/hi";
import { AiFillEye, AiOutlineHeart } from "react-icons/ai";
import SideSwiperCenter from "./side-swiper-center";
import '@/components/prompt-comp/prompt-main.css'

export default function PromptMain() {
    return (
        <>
            <div>
                <div className="flex flex-row mx-10 prompt-main-container">
                    <div className="mr-4 w-full">
                        <div>
                            <span className="bg-indigo-950 text-slate-100 w-max absolute ml-2 mt-2 rounded p-0.5 midjourney-tag">
                                ⛵ Midjourney
                            </span>
                            <img
                                className="object-cover object-center w-full"
                                src="https://firebasestorage.googleapis.com/v0/b/promptbase.appspot.com/o/DALLE_IMAGES%2FKSTFLW9XKN6XT9v3qDJp%2Fresized%2F1684016089725_1000x1000.webp?alt=media&token=67f64759-4ed4-4211-bc3a-15690e36a552"
                                alt=""
                            />
                        </div>
                        <div className="my-2 prompt-header">
                            <h1 className="text-5xl font-medium my-2 ">Super Cute Art</h1>
                            <div className="flex justify-between w-26 w-6/12 text-slate-300 prompt-badg">
                                <p className="text-sm flex items-center">48 Word</p>
                                <p className="text-sm flex items-center">
                                    Tested{" "}
                                    <span className="ml-1">
                                        <MdVerified />
                                    </span>
                                </p>
                                <p className="text-sm flex items-center">
                                    Tips{" "}
                                    <span className="ml-1">
                                        <MdVerified />
                                    </span>
                                </p>
                                <p className="text-sm flex items-center">
                                    HQ Images{" "}
                                    <span className="ml-1">
                                        <MdVerified />
                                    </span>
                                </p>
                                <p className="text-sm flex items-center"></p>
                                <div className="flex items-center bg-slate-100 text-slate-950 px-1 h-5 rounded">
                                    <p className="text-xs">V5</p>
                                </div>
                            </div>

                            {/* Before the holizontal section */}
                            <div className="flex justify-between users-tag">
                                <div className="flex basis-2/7 items-center my-3 user-tag-cont-1">
                                    <p className="flex items-center">
                                        <span className="mr-1">
                                            <HiTag />
                                        </span>
                                        4
                                    </p>
                                    <div className="flex ml-5">
                                        <img
                                            className="object-cover object-center w-full h-5 rounded-full"
                                            src="https://firebasestorage.googleapis.com/v0/b/promptbase.appspot.com/o/DALLE_IMAGES%2FBbY1bmb1F0Sqjb4HYtm3l8jyO7n1%2Fresized%2F1682762322993_50x50.webp?alt=media&token=1df342dd-6d3a-4ecd-91a7-7298edbaee3d"
                                            alt=""
                                        />
                                        <div className="flex items-center bg-slate-200 text-slate-950 px-2 h-5 ml-1 rounded">
                                            <p className="text-sm">@majicalprompter</p>
                                        </div>
                                    </div>
                                </div>

                                {/* Center space of this section */}

                                <div className="flex justify-between basis-2/7 ml-auto w-52 user-tag-cont-2">
                                    <p className="flex items-center">No reviews yet</p>
                                    <p className="flex items-center">
                                        <span className=" mr-1">
                                            <AiFillEye />
                                        </span>
                                        36
                                    </p>
                                    <p className="flex items-center">
                                        <span className=" mr-1">
                                            <AiOutlineHeart />
                                        </span>
                                        2
                                    </p>
                                </div>
                            </div>
                            {/* After holizontal line */}
                            <hr />
                            <div>
                                <hr className="invisible holi-line"/>
                                <div className="flex flex-col justify-evenly h-48 text-l text-slate-200">
                                    <p>You need Super Cute Art, you are at the good place :</p>
                                    <p>Introducing the ultimate solution for person want Super Cute Art  - the MidJourney Prompt! This unique tool allows you to take any of your imagination and turn them into a fully-realized. The possibilities are endless. </p>
                                    <p>Perfect for stickers and small prints</p>
                                </div>
                                <div className="prompt-price">
                                    <p className="text-4xl" ><span className="text-base dollar-sign">$</span>3.99</p>
                                </div>
                                <button className="border border-slate-200 bg-slate-200 text-slate-950 text-3xl font-semibold px-7 py-2 my-2 rounded-xl"> Get Prompt</button>
                                <div className="text-slate-300">
                                    <p className="text-xs italic pb-2">After purchasing, you will gain access to the prompt file, which you can use with Midjourney. You must already have access to Midjourney to use this prompt.</p>
                                    <p className="text-xs italic pb-4">By purchasing this prompt, you agree to our <span className="underline">terms of service</span>.</p>
                                    <p className="italic text-xs font-bold text-slate-400">1 week ago</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="w-full h-[990px] mb-16 side-prompt bg-slate-400">
                        <div className=""></div>
                    </div>
                    <div className="center-prompt absolute invisible">
                        <SideSwiperCenter />
                    </div>
                </div>
            </div>
        </>
    );
}
