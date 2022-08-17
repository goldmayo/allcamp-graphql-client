import React, { FC, useState } from "react";
import FlexBox from "../../atoms/flexbox/FlexBox";
import Form from "../../atoms/form/Form";
import Label from "../../atoms/label/Label";
import SelectBox from "../../atoms/selectbox/SelectBox";
import { doSelectData, sigunguNmOptionsData } from "../../../core/formdata/SearchBoxData";
import { DONAME, DONAME_VALUE } from "../../../types/administrativeDivision";
import { SelectBoxData } from "../../../types/SelectBoxData";

interface SearchBoxProps {
  data: SelectBoxData;
  formRef: React.MutableRefObject<HTMLFormElement | null>;
  onSubmit: (e: React.MouseEvent<HTMLFormElement, MouseEvent>) => void;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}

const SearchBox: FC<SearchBoxProps> = (props) => {
  const [selectedDoNm, setSelectedDoNm] = useState<DONAME_VALUE>();
  return (
    <FlexBox className="">
      <Form formRef={props.formRef} method={"get"} className={""} onSubmit={props.onSubmit}>
        <FlexBox className="">
          <Label htmlFor={undefined} className={undefined}>
            지역
          </Label>
          <SelectBox
            id={props.data.id}
            options={props.data.options}
            name={"doName"}
            className={undefined}
            // onChange={props.onChange}
            placeholder={"전체"}
            onChange={function (e: React.ChangeEvent<HTMLSelectElement>) {
              e.preventDefault();
              setSelectedDoNm(e.currentTarget.value as DONAME_VALUE);
            }}
          />
          <SelectBox
            id={props.data.id}
            options={selectedDoNm ? sigunguNmOptionsData(selectedDoNm) : []}
            name={"sigunguName"}
            className={undefined}
            placeholder={"전체"}
            onChange={function (e: React.ChangeEvent<HTMLSelectElement>): void {
              e.preventDefault();
            }}
          />
        </FlexBox>
      </Form>
    </FlexBox>
  );
};

export default SearchBox;
