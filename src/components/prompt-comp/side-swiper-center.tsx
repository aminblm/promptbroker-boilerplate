import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import '@/components/prompt-comp/side-swiper-center.css'

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";


// import required modules
import { Pagination } from "swiper";

export default function SideSwiperCenter() {
    return (
        <>
            <Swiper
                slidesPerView={"auto"}
                spaceBetween={30}
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination]}
                className="mySwiper-cemnter"
            >
                <SwiperSlide className="bg-slate-400"><div className="w-52 h-52">Slide 1</div></SwiperSlide>
                <SwiperSlide className="bg-slate-400"><div className="w-52 h-52">Slide 2</div></SwiperSlide>
                <SwiperSlide className="bg-slate-400"><div className="w-52 h-52">Slide 3</div></SwiperSlide>
                <SwiperSlide className="bg-slate-400"><div className="w-52 h-52">Slide 4</div></SwiperSlide>
                <SwiperSlide className="bg-slate-400"><div className="w-52 h-52">Slide 5</div></SwiperSlide>
                <SwiperSlide className="bg-slate-400"><div className="w-52 h-52">Slide 6</div></SwiperSlide>
                <SwiperSlide className="bg-slate-400"><div className="w-52 h-52">Slide 7</div></SwiperSlide>
                <SwiperSlide className="bg-slate-400"><div className="w-52 h-52">Slide 8</div></SwiperSlide>
                <SwiperSlide className="bg-slate-400"><div className="w-52 h-52">Slide 9</div></SwiperSlide>
            </Swiper>
        </>
    );
}