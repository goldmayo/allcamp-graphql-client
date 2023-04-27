import Anchor from "@/components/atoms/anchor/Anchor";
import Icon from "@/components/atoms/icon/Icon";
import React, { FC } from "react";
import { useCampCardContext } from "../../context/CampCardContext";

interface CampCardImageAnchorInterface {
  className: string;
  width?: number;
  height?: number;
}

const CampCardImageAnchor: FC<CampCardImageAnchorInterface> = (props) => {
  const defaultCampImage = "/defaultCamp.svg";
  const camp = useCampCardContext();
  return (
    <Anchor href={`/about/${camp.contentId}`} className={`${props.className}`}>
      {Number.isInteger(props.width) && Number.isInteger(props.height) ? (
        <Icon
          src={camp.firstImageUrl ? `${camp.firstImageUrl}` : defaultCampImage}
          width={props.width}
          height={props.height}
          style={camp.firstImageUrl ? { height: props.height } : {}}
          alt={`${camp.facltNm}`}
          className={""}
          priority
        />
      ) : (
        <Icon
          src={camp.firstImageUrl ? `${camp.firstImageUrl}` : defaultCampImage}
          fill
          style={{ objectFit: "fill", objectPosition: "center" }}
          alt={`${camp.facltNm}`}
          className={""}
          priority
        />
      )}
    </Anchor>
  );
};

export default CampCardImageAnchor;
