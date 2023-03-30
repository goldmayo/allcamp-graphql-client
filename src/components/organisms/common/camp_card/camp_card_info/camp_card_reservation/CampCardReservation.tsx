import React, { FC, ReactNode } from "react";
import { useCampCardContext } from "../../context/CampCardContext";
import Span from "@/components/atoms/span/Span";
import Anchor from "@/components/atoms/anchor/Anchor";
import { FaRegCalendarCheck } from "react-icons/fa";
import { ImNewTab } from "react-icons/im";

interface CampCardReservationInterface {
  icon: ReactNode;
  urlicon: ReactNode;
  className: string;
}

const CampCardReservation: FC<CampCardReservationInterface> = (props) => {
  const camp = useCampCardContext();
  return (
    <>
      {camp.resveCl && camp.resveUrl && (
        <Span className={`${props.className}`}>
          {props.icon}
          {camp.resveCl}
          <Anchor href={camp.resveUrl} className={""}>
            (바로가기)
          </Anchor>
          {props.urlicon}
        </Span>
      )}
    </>
  );
};

export default CampCardReservation;
