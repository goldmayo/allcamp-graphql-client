import { FC } from "react";
import FlexBox from "../../atoms/flexbox/FlexBox";
import Span from "../../atoms/span/Span";
import { Category } from "../../../types/searchFormType";
import { useDetailedSearchState } from "../../../hooks/useDetailSearch/useDetailedSearch";

interface SelectedOptionProps {
  category: Category;
}

const SelectedOption: FC<SelectedOptionProps> = (props) => {
  const seletedOptions = useDetailedSearchState();
  const seletedOptionsCount =
    seletedOptions.campsite.length +
    seletedOptions.etcinfo.length +
    seletedOptions.facility.length +
    seletedOptions.floor.length +
    seletedOptions.location.length +
    seletedOptions.operation.length +
    seletedOptions.region.length +
    seletedOptions.theme.length;

  return (
    <FlexBox className={"p-4 flex-col rounded-lg border border-primary-bordergray bg-primary-commentgray text-title1"}>
      <Span className="mb-4">선택된 옵션{` (${seletedOptionsCount})`}</Span>
      <FlexBox className={"flex-col"}>
        <FlexBox className={"mb-8"}>
          <Span className="px-2 mb-2">{`${props.category["region"]} :`}</Span>
          <Span>{seletedOptions.region.length !== 0 ? `${seletedOptions.region.join(",")}` : "-"}</Span>
        </FlexBox>
        <FlexBox className={"mb-8"}>
          <Span className="px-2 mb-2">{`${props.category["campsite"]} :`}</Span>
          <Span>{seletedOptions.campsite.length !== 0 ? `${seletedOptions.campsite.join(",")}` : "-"}</Span>
        </FlexBox>
        <FlexBox className={"mb-8"}>
          <Span className="px-2 mb-2">{`${props.category["location"]} :`}</Span>
          <Span>{seletedOptions.location.length !== 0 ? `${seletedOptions.location.join(",")}` : "-"}</Span>
        </FlexBox>
        <FlexBox className={"mb-8"}>
          <Span className="px-2 mb-2">{`${props.category["theme"]} :`}</Span>
          <Span>{seletedOptions.theme.length !== 0 ? `${seletedOptions.theme.join(",")}` : "-"}</Span>
        </FlexBox>
        <FlexBox className={"mb-8"}>
          <Span className="px-2 mb-2">{`${props.category["facility"]} :`}</Span>
          <Span>{seletedOptions.facility.length !== 0 ? `${seletedOptions.facility.join(",")}` : "-"}</Span>
        </FlexBox>
        <FlexBox className={"mb-8"}>
          <Span className="px-2 mb-2">{`${props.category["floor"]} :`}</Span>
          <Span>{seletedOptions.floor.length !== 0 ? `${seletedOptions.floor.join(",")}` : "-"}</Span>
        </FlexBox>
        <FlexBox className={"mb-8"}>
          <Span className="px-2 mb-2">{`${props.category["operation"]} :`}</Span>
          <Span>{seletedOptions.operation.length !== 0 ? `${seletedOptions.operation.join(",")}` : "-"}</Span>
        </FlexBox>
        <FlexBox className={"mb-8"}>
          <Span className="px-2 mb-2">{`${props.category["etcinfo"]} :`}</Span>
          <Span>{seletedOptions.etcinfo.length !== 0 ? `${seletedOptions.etcinfo.join(",")}` : "-"}</Span>
        </FlexBox>
      </FlexBox>
    </FlexBox>
  );
};

export default SelectedOption;
