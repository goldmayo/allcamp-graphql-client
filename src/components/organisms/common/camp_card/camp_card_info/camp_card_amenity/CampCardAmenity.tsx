import React, { FC, ReactNode } from "react";
import { useCampCardContext } from "../../context/CampCardContext";
import FlexBox from "@/components/atoms/flexbox/FlexBox";
import AmenityList from "@/components/molecules/amenity_list/AmenityList";

interface CampCardAmenityInterface {
  gap: string;
  className: string;
}

const CampCardAmenity: FC<CampCardAmenityInterface> = (props) => {
  const camp = useCampCardContext();
  return (
    <>
      {camp.sbrsCl && (
        <FlexBox className={props.className}>
          <AmenityList sbrsCl={camp.sbrsCl} gap={props.gap} contentId={`${camp.contentId}`} />
        </FlexBox>
      )}
    </>
  );
};

export default CampCardAmenity;
