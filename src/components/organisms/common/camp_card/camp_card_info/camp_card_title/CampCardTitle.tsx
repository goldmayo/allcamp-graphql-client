import React, { FC } from "react";
import Span from "@/components/atoms/span/Span";

interface CampCardTitleInterface {
  className: string;
  title: string;
}

const CampCardTitle: FC<CampCardTitleInterface> = (props) => {
  return <Span className={`${props.className}`}>{props.title}</Span>;
};

export default CampCardTitle;
