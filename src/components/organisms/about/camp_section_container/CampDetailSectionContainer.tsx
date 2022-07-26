import { FC } from "react";
import Span from "@/components/atoms/span/Span";
import FlexBox from "@/components/atoms/flexbox/FlexBox";

interface CampDetailSectionContainer {
  title: string;
  titleStyle: string;
  containerStyle: string;
  children: React.ReactNode;
}

const CampDetailSectionContainer: FC<CampDetailSectionContainer> = (props) => {
  return (
    <FlexBox className={`flex flex-col ${props.containerStyle}`}>
      <Span className={`${props.titleStyle}`}>{props.title}</Span>
      {props.children}
    </FlexBox>
  );
};

export default CampDetailSectionContainer;
