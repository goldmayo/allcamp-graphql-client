import { FC } from "react";
import FlexBox from "@/components/atoms/flexbox/FlexBox";
import Span from "@/components/atoms/span/Span";
import SpanListItem from "@/components/molecules/span_list_item/SpanListItem";
import { Category, CategoryName } from "@/types/searchFormType";

import useStore from "store/store";

interface CategoryDisplayContainerProps {
  category: Category;
}

const CategoryDisplayContainer: FC<CategoryDisplayContainerProps> = (props) => {
  const initialCount = 0;
  const AdvancedSearchParams = useStore((state) => state.AdvancedSearchParams);

  const seletedOptionsCount = Object.values(AdvancedSearchParams)
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
              displayValue={AdvancedSearchParams[categoryName]}
            />
          );
        })}
      </ul>
    </FlexBox>
  );
};

export default CategoryDisplayContainer;
