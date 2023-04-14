import React, { FC } from "react";
import { useCampCardContext } from "../../context/CampCardContext";
import Span from "@/components/atoms/span/Span";
import Anchor from "@/components/atoms/anchor/Anchor";

interface CampCardNameInterface {
  link?: boolean;
  className: string;
}

const CampCardName: FC<CampCardNameInterface> = ({ link = false, ...props }) => {
  const camp = useCampCardContext();
  return (
    <>
      {!link ? (
        <>{camp.facltNm && <Span className={props.className}>{camp.facltNm}</Span>}</>
      ) : (
        <>
          {camp.facltNm && (
            <Anchor href={`/about/${camp.contentId}`} className={props.className}>
              <Span className={""}>{camp.facltNm}</Span>
            </Anchor>
          )}
        </>
      )}
    </>
  );
};

export default CampCardName;
