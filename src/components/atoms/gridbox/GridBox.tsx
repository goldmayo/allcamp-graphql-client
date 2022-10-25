import { FC } from "react";

interface GridProps {
  className: string;
  children: React.ReactNode;
}

const GridBox: FC<GridProps> = (props) => {
  return <div className={`${props.className} grid`}>{props.children}</div>;
};

export default GridBox;
