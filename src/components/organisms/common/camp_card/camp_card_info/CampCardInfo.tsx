import FlexBox from "@/components/atoms/flexbox/FlexBox";
import React, { FC, ReactNode } from "react";

interface CampCardInfoInterface {
  children: ReactNode;
  className: string;
}

const CampCardInfo: FC<CampCardInfoInterface> = (props) => {
  return <FlexBox className={props.className}>{props.children}</FlexBox>;
};

export default CampCardInfo;
