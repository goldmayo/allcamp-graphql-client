import React, { FC, useMemo } from "react";
import Slider, { Settings } from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import NextArrow from "@/components/molecules/carousel/NextArrow";
import PrevArrow from "@/components/molecules/carousel/PrevArrow";

interface CarouselProps {
  /** 슬라이더 아이템 요소 */
  children: React.ReactNode;
  /** 커스텀 클래스 */
  className?: string;
  /** 자동재생 (속도 설정시 number 타입으로) */
  autoplay?: boolean | number;
  /** 슬라이더 속도 */
  speed?: number;
  /** 반복 여부 */
  loop?: boolean;
  autoplaySpeed?: number;
}
const Carousel: FC<CarouselProps> = ({
  children,
  className = "",
  autoplay = false,
  autoplaySpeed = 2000,
  speed = 600,
  loop = false,
}) => {
  const settings = useMemo<Settings>(
    () => ({
      dots: true,
      infinite: loop,
      speed: speed,
      initialSlide: 0,
      slidesToShow: 4,
      slidesToScroll: 4,
      autoplay: Boolean(autoplay),
      autoplaySpeed: autoplaySpeed,
      nextArrow: <NextArrow />,
      prevArrow: <PrevArrow />,
    }),
    [autoplay, loop, speed, autoplaySpeed]
  );
  return (
    <Slider className={className} {...settings}>
      {children}
    </Slider>
  );
};

export default Carousel;
