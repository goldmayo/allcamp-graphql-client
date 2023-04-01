import React, { FC } from "react";
import Span from "@/components/atoms/span/Span";

interface CampCardSubtitleInterface {
  className: string;
  subtitle: string;
}

const CampCardSubtitle: FC<CampCardSubtitleInterface> = (props) => {
  return <Span className={props.className}>{props.subtitle}</Span>;
};

export default CampCardSubtitle;
