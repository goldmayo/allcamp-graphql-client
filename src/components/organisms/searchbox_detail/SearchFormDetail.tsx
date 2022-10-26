import React, { FC } from "react";
import { DetailedSearchContextProvider } from "../../../context/DetailedSearchContext";
import { AdvancedSearchFormInterface, Category } from "../../../types/searchFormType";
import FlexBox from "../../atoms/flexbox/FlexBox";
import Tab from "../tab/Tab";
import SelectedOption from "../selected_option/SelectedOption";
import Button from "../../atoms/button/Button";
import { useDetailedSearchDispatch } from "../../../hooks/useDetailSearch/useDetailedSearch";
import ButtonGroup from "../button_group/ButtonGroup";

interface SearchBoxDetailProps {
  params: AdvancedSearchFormInterface;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

// 여기 다 만들고 쪼개기
const SearchBoxDetail: FC<SearchBoxDetailProps> = (props) => {
  const category = Object.values(props.params).map((el) => {
    return [el.name, el.title];
  });
  const categoryList: Category = Object.fromEntries(category);

  return (
    <DetailedSearchContextProvider>
      <FlexBox className="w-full">
        <Tab className="w-3/5" params={props.params} />
        <FlexBox className="flex-col w-2/5">
          <SelectedOption category={categoryList} />
          <ButtonGroup className={"justify-center mt-4"} />
        </FlexBox>
      </FlexBox>
    </DetailedSearchContextProvider>
  );
};

export default SearchBoxDetail;
