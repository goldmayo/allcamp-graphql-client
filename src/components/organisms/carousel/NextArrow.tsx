import { FC } from "react";
import { MdChevronRight } from "react-icons/md";

interface NextArrowInterface {
  className?: any;
  style?: any;
  onClick?: React.MouseEventHandler<HTMLDivElement>;
}

const NextArrow: FC<NextArrowInterface> = ({ className, style, onClick }) => {
  return (
    <div onClick={onClick}>
      <MdChevronRight
        className={className}
        style={{ ...style, display: "block", background: "bg-mono-white" }}
        color={"#000000"}
      />
    </div>
  );
};

export default NextArrow;
