import React, { FC, ReactNode } from "react";
import { useCampCardContext } from "../../context/CampCardContext";
import Span from "@/components/atoms/span/Span";

interface CampCardAdressInterface {
  icon: ReactNode;
  className: string;
}

const CampCardAdress: FC<CampCardAdressInterface> = (props) => {
  const camp = useCampCardContext();
  return (
    <>
      {camp.addr1 && (
        <Span className={props.className}>
          {props.icon}
          {camp.addr2 ? `${camp.addr1}${camp.addr2}` : `${camp.addr1}`}
        </Span>
      )}
    </>
  );
};

export default CampCardAdress;
