import React, { FC } from "react";
import { useCampCardContext } from "../../context/CampCardContext";
import Span from "@/components/atoms/span/Span";

interface CampCardRegionInterface {
  className: string;
}

const CampCardRegion: FC<CampCardRegionInterface> = (props) => {
  const camp = useCampCardContext();
  return (
    <>
      {camp.doNm && camp.sigunguNm && <Span className={`${props.className}`}>{`${camp.doNm} ${camp.sigunguNm}`}</Span>}
    </>
  );
};

export default CampCardRegion;
