import { FC } from "react";
import FlexBox from "@/components/atoms/flexbox/FlexBox";
import Span from "@/components/atoms/span/Span";
import SpanListItem from "@/components/molecules/span_list_item/SpanListItem";
import { Category, CategoryName } from "@/types/searchFormType";
import { useAdvancedSearchParams } from "@/context/AdvancedSearchParamsContext";
import useStore from "store/store";

interface CategoryDisplayContainerProps {
  category: Category;
}

const CategoryDisplayContainer: FC<CategoryDisplayContainerProps> = (props) => {
  const [seletedOptions, _] = useAdvancedSearchParams((store) => store);
  const initialCount = 0;
  const selected = useStore((state) => state.AdvancedSearchParams);
  console.log(selected);
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
