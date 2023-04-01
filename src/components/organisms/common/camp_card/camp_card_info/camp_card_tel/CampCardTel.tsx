import React, { FC, ReactNode } from "react";
import { useCampCardContext } from "../../context/CampCardContext";
import Span from "@/components/atoms/span/Span";

interface CampCardTelInterface {
  icon: ReactNode;
  className: string;
}

const CampCardTel: FC<CampCardTelInterface> = (props) => {
  const camp = useCampCardContext();
  return (
    <>
      {camp.tel && (
        <Span className={props.className}>
          {props.icon}
          {camp.tel}
        </Span>
      )}
    </>
  );
};

export default CampCardTel;
