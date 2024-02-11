"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation, Pagination, A11y } from "swiper";
import SlideNavButtons from "./side-buttons";

const CustomSlider1 = ({components}:{components:any}) => {
  return (
    <Swiper
      modules={[Navigation, Pagination, A11y]}
      slidesPerView={1}
      spaceBetween={15}
      breakpoints={{
        480: { slidesPerView: 1 },
        740: { slidesPerView: 1 },
        1275: { slidesPerView: 1
        // 4  
        },
      }}
    >
      {components.map((item:any, i:number) => (
        <SwiperSlide
          key={i}
          className="bg-red-200 !flex justify-center items-center"
        >
          {item}
        </SwiperSlide>
      ))}

      <SlideNavButtons />
    </Swiper>
  );
};

export default CustomSlider1;
