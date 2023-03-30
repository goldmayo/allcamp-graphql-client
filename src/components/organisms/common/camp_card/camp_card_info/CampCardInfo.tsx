import React, { FC, ReactNode } from "react";

interface CampCardInfoInterface {
  children: ReactNode;
  className: string;
}

const CampCardInfo: FC<CampCardInfoInterface> = (props) => {
  return <div className="">{props.children}</div>;
};

export default CampCardInfo;
