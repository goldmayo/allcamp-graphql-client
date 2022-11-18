import { FC } from "react";
import Span from "@/components/atoms/span/Span";

interface CampDetailSectionContainer {
  title: string;
  titleStyle: string;
  containerStyle: string;
  children: React.ReactNode;
}

const CampDetailSectionContainer: FC<CampDetailSectionContainer> = (props) => {
  return (
    <section className={`${props.containerStyle} flex flex-col`}>
      <Span className={`${props.titleStyle}`}>{props.title}</Span>
      {props.children}
    </section>
  );
};

export default CampDetailSectionContainer;
