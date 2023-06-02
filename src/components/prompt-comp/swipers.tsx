"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { useEffect, useState } from "react";
import { Navigation, Pagination, Scrollbar, A11y, Keyboard } from "swiper";
import { mockPrompts } from "@/mock/data";
import { iPrompt } from "@/types";
import "./swipers.css";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

export default function SwiperApp() {
  const [prompts, setPrompts] = useState<iPrompt[]>([]);

  useEffect(() => {
    setPrompts(mockPrompts);

    return () => {};
  });
    const [onHover, setOnHover] = useState(false)
    
  return (
    <div
      onMouseEnter={() => setOnHover(true)}
          onMouseLeave={() => setOnHover(false)}
          className="mb-5"
    >
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y, Keyboard]}
        spaceBetween={20}
        slidesPerView={"auto"}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
        navigation={onHover}
      >
        {prompts.map((prompt, idx) => (
          <SwiperSlide key={idx}>
            <div className="">
              <img src={prompt.image} alt="" />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
