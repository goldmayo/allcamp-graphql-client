import { FC, RefObject, useEffect, useState } from "react";
import Button from "@/components/atoms/button/Button";

interface ScrollButtonProps {
  target: RefObject<HTMLElement>;
  //   target: HTMLElement;
  children: React.ReactNode;
  className: string;
}

const ScrollButton: FC<ScrollButtonProps> = (props) => {
  const [showScrollButton, setShowScrollButton] = useState<boolean>(false);
  useEffect(() => {
    const targetHeight = props.target?.current?.getBoundingClientRect().height;
    document.addEventListener("scroll", () => {
      if (targetHeight && window.scrollY > targetHeight / 2) {
        setShowScrollButton(true);
      } else {
        setShowScrollButton(false);
      }
    });
  }, [props.target]);

  const handleScrollTop = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  };
  return (
    <Button
      type="button"
      size="custom"
      className={`${props.className} ${showScrollButton ? "visible" : "invisible"}`}
      onClick={handleScrollTop}
    >
      {props.children}
    </Button>
  );
};

export default ScrollButton;
