import React from "react";
import FlexBox from "../../atoms/flexbox/FlexBox";
import CheckBoxLabel from "../../molecules/checkbox_label/CheckBoxLabel";

interface SearchBoxDetailProps {}

const SearchBoxDetail = () => {
  return (
    <FlexBox className="">
      <CheckBoxLabel
        id={undefined}
        name={""}
        onChange={function (e: React.ChangeEvent<HTMLInputElement>): void {
          throw new Error("Function not implemented.");
        }}
        className={undefined}
      ></CheckBoxLabel>
    </FlexBox>
  );
};

export default SearchBoxDetail;
