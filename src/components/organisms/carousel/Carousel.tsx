import React, { FC, useMemo } from "react";
import Slider, { Settings } from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

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
// 추가작업
const Carousel: FC<CarouselProps> = ({
  children,
  className = "",
  autoplay = false,
  autoplaySpeed = 2000,
  speed = 600,
  loop = false,
}) => {
  //  "ondemand" | "progressive" | "anticipated";
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
    }),
    [autoplay, loop, speed, autoplaySpeed]
  );
  return (
    <div className={className}>
      <Slider {...settings}>{children}</Slider>
    </div>
  );
};

export default Carousel;
