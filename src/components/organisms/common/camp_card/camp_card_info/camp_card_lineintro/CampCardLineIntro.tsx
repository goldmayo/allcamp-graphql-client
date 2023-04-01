import React, { FC } from "react";
import { useCampCardContext } from "../../context/CampCardContext";
import Span from "@/components/atoms/span/Span";

interface CampCardLineIntroInterface {
  className: string;
}

const CampCardLineIntro: FC<CampCardLineIntroInterface> = (props) => {
  const camp = useCampCardContext();
  return <>{camp.lineIntro && <Span className={props.className}>{camp.lineIntro}</Span>}</>;
};

export default CampCardLineIntro;
