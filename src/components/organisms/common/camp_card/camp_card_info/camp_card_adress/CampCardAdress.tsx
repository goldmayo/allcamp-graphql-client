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
      {(camp.addr1 || camp.addr2) && (
        <Span className={`${props.className}`}>
          {props.icon}
          {`${camp.addr1}${camp.addr2}`}
        </Span>
      )}
    </>
  );
};

export default CampCardAdress;
