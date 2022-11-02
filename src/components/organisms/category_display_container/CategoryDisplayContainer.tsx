import { FC } from "react";
import FlexBox from "../../atoms/flexbox/FlexBox";
import Span from "../../atoms/span/Span";
import { Category, CategoryName } from "../../../types/searchFormType";
import { useAdvancedSearchParams } from "../../../context/AdvancedSearchParamsContext";
import SpanListItem from "../../molecules/span_list_item/SpanListItem";

interface CategoryDisplayContainerProps {
  category: Category;
}

const CategoryDisplayContainer: FC<CategoryDisplayContainerProps> = (props) => {
  const [seletedOptions, _] = useAdvancedSearchParams((store) => store);
  const initialCount = 0;
  const seletedOptionsCount = Object.values(seletedOptions)
    .map((categoryName) => {
      return categoryName.length;
    })
    .reduce((prev: number, curr: number) => {
      return prev + curr;
    }, initialCount);

  return (
    <FlexBox className={"p-4 flex-col rounded-lg border border-primary-bordergray bg-primary-commentgray text-title1"}>
      <Span className="mb-4">선택된 옵션{` (${seletedOptionsCount})`}</Span>
      <ul className={"flex flex-col"}>
        {Object.keys(props.category).map((categoryName) => {
          return (
            <SpanListItem
              key={`${categoryName}_display`}
              displayName={props.category[categoryName as CategoryName]}
              displayValue={seletedOptions[categoryName]}
            />
          );
        })}
      </ul>
    </FlexBox>
  );
};

export default CategoryDisplayContainer;
