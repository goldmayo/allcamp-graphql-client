import React, { FC, ReactNode } from "react";
import { useCampCardContext } from "../../context/CampCardContext";
import Span from "@/components/atoms/span/Span";
import Anchor from "@/components/atoms/anchor/Anchor";

interface CampCardHomepageInterface {
  icon: ReactNode;
  className: string;
}

const CampCardHomepage: FC<CampCardHomepageInterface> = (props) => {
  const camp = useCampCardContext();
  return (
    <>
      {camp.homepage && (
        <Span className={props.className}>
          {props.icon}
          <Anchor href={camp.homepage} className={""}>
            홈페이지
          </Anchor>
        </Span>
      )}
    </>
  );
};

export default CampCardHomepage;
