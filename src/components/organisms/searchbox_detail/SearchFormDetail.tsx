import React, { FC } from "react";
import { DetailedSearchContextProvider } from "../../../context/DetailedSearchContext";
import { AdvancedSearchFormInterface, Category } from "../../../types/searchFormType";
import FlexBox from "../../atoms/flexbox/FlexBox";
import Tab from "../tab/Tab";
import SelectedOption from "../selected_option/SelectedOption";

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
      <Tab params={props.params} />
      <SelectedOption category={categoryList} />
    </DetailedSearchContextProvider>
  );
};

export default SearchBoxDetail;
