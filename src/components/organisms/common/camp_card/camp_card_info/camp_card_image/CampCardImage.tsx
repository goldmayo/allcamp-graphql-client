import Icon from "@/components/atoms/icon/Icon";
import React, { FC } from "react";
import { useCampCardContext } from "../../context/CampCardContext";
import FlexBox from "@/components/atoms/flexbox/FlexBox";

interface CampCardImageInterface {
  className: string;
  width?: number;
  height?: number;
}

const CampCardImage: FC<CampCardImageInterface> = (props) => {
  const defaultCampImage = "/defaultCamp.svg";
  const camp = useCampCardContext();

  return (
    <FlexBox className={`${props.className}`}>
      {Number.isInteger(props.width) && Number.isInteger(props.height) ? (
        <Icon
          src={camp.firstImageUrl ? `${camp.firstImageUrl}` : defaultCampImage}
          width={props.width}
          height={props.height}
          style={camp.firstImageUrl ? { height: props.height } : {}}
          alt={`${camp.facltNm}`}
          className={``}
        />
      ) : (
        <Icon
          src={camp.firstImageUrl ? `${camp.firstImageUrl}` : defaultCampImage}
          fill
          style={{ objectFit: "cover", objectPosition: "center" }}
          alt={`${camp.facltNm}`}
          className={""}
        />
      )}
    </FlexBox>
  );
};

export default CampCardImage;
