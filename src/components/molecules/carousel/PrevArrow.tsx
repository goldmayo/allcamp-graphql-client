import { FC } from "react";
import { MdChevronLeft } from "react-icons/md";

interface PrevArrowInterface {
  className?: any;
  style?: any;
  onClick?: React.MouseEventHandler<HTMLDivElement>;
}

const PrevArrow: FC<PrevArrowInterface> = ({ className, style, onClick }) => {
  return (
    <div onClick={onClick}>
      <MdChevronLeft
        className={className}
        style={{ ...style, display: "block", background: "bg-mono-white" }}
        color={"#000000"}
      />
    </div>
  );
};

export default PrevArrow;
