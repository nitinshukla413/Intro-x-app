import React, { Component, ReactNode } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import PrevArrow from "public/assets/images/icons/prev-arrow.svg";
import Image from "next/image";
import NextArrow from "public/assets/images/icons/next-arrow.svg";

function SamplePrevArrow(props: any) {
  const { onClick } = props;
  return (
    <button
      onClick={onClick}
      type="button"
      className="blog-slider-button-prev absolute -left-20 top-1/2 flex h-10 w-10 items-center justify-center rounded-full bg-black/5 transition hover:bg-secondary dark:bg-white/5 dark:hover:bg-secondary max-sm:hidden"
    >
      <Image src={PrevArrow} alt="<" />
    </button>
  );
}
function SampleNextArrow(props: any) {
  const { className, style, onClick } = props;
  return (
    <button
      onClick={onClick}
      type="button"
      className="blog-slider-button-next text-p absolute -right-20 top-1/2 flex h-10 w-10 items-center justify-center rounded-full bg-black/5 transition hover:bg-secondary dark:bg-white/5 dark:hover:bg-secondary max-sm:hidden"
    >
      <Image src={NextArrow} alt=">" />
    </button>
  );
}
interface SimpleSliderProps {
  children: ReactNode;
  slidesToShow?: number;
  autoplay?: boolean;
  dots?: boolean;
  showArrow?: boolean;
  slidesToScroll?: number;
  responsive?: any[];
  speed?: any;
}

const SimpleSlider: React.FC<SimpleSliderProps> = ({
  children,
  slidesToShow = 1,
  autoplay = false,
  responsive = [],
  slidesToScroll = 1,
  dots = true,
  showArrow = true,
  speed = 3000,
}) => {
  let settings = {
    dots,
    infinite: true,
    speed: speed,
    autoplay,
    responsive,
    autoplaySpeed: 4000,
    slidesToShow: slidesToShow,
    centerPadding: "630px",
    slidesToScroll: slidesToScroll,
    nextArrow: showArrow ? <SampleNextArrow /> : <></>,
    prevArrow: showArrow ? <SamplePrevArrow /> : <></>,
    appendDots: (dots: any) => {
      return <h3>Dots</h3>;
    },
  };
  return <Slider {...settings}>{children}</Slider>;
};
export default SimpleSlider;
