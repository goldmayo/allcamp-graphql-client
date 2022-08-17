import React, { FC, useState } from "react";
import FlexBox from "../../atoms/flexbox/FlexBox";
import Form from "../../atoms/form/Form";
import SelectBox from "../../atoms/selectbox/SelectBox";
import { campThemeSelectData, doSelectData, sigunguNmOptionsData } from "../../../core/formdata/SearchBoxData";
import { DONAME_VALUE } from "../../../types/administrativeDivision";
import InputLabel from "../../molecules/inputlabel/InputLabel";
import SelectBoxLabel from "../../molecules/selectboxlabel/SelectBoxLabel";
import Button from "../../atoms/button/Button";

interface SearchBoxProps {
  formRef: React.MutableRefObject<HTMLFormElement | null>;
  onSubmit: (e: React.MouseEvent<HTMLFormElement, MouseEvent>) => void;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}

const SearchBox: FC<SearchBoxProps> = (props) => {
  const [selectedDoNm, setSelectedDoNm] = useState<DONAME_VALUE>();
  const doNameData = doSelectData;
  const campThemeData = campThemeSelectData;
  return (
    <FlexBox className="">
      <Form formRef={props.formRef} method={"get"} className={""} onSubmit={props.onSubmit}>
        <InputLabel
          id={"keyword"}
          name={"keyword"}
          type={"text"}
          placeholder={"캠핑장명을 입력해주세요"}
          onChange={function (e: React.ChangeEvent<HTMLInputElement>): void {
            e.preventDefault();
          }}
          required={false}
          labelTag={"키워드 검색"}
          className={undefined}
        />
        <FlexBox className="">
          <SelectBoxLabel
            id={doNameData.id}
            options={doNameData.options}
            name={doNameData.name}
            placeholder={"전체/도"}
            onChange={function (e: React.ChangeEvent<HTMLSelectElement>) {
              e.preventDefault();
              setSelectedDoNm(e.currentTarget.value as DONAME_VALUE);
            }}
            className={undefined}
            labelTag={doNameData.labelText}
          />
          <SelectBox
            id={doNameData.id}
            options={selectedDoNm ? sigunguNmOptionsData(selectedDoNm) : []}
            name={"sigunguName"}
            className={undefined}
            placeholder={"전체/시/군"}
            onChange={function (e: React.ChangeEvent<HTMLSelectElement>): void {
              e.preventDefault();
            }}
          />
        </FlexBox>
        <SelectBoxLabel
          id={campThemeData.id}
          options={campThemeData.options}
          name={campThemeData.name}
          placeholder={"전체/테마"}
          onChange={function (e: React.ChangeEvent<HTMLSelectElement>): void {
            e.preventDefault();
          }}
          className={undefined}
          labelTag={campThemeData.labelText}
        />
        <Button type="submit" size="lg" className="border border-black">
          검색
        </Button>
      </Form>
    </FlexBox>
  );
};

export default SearchBox;

{
  /* <Label htmlFor={undefined} className={undefined}>
            지역
          </Label>
          <SelectBox
            id={doNameData.id}
            options={doNameData.options}
            name={"doName"}
            className={undefined}
            // onChange={props.onChange}
            placeholder={"전체/도"}
            onChange={function (e: React.ChangeEvent<HTMLSelectElement>) {
              e.preventDefault();
              setSelectedDoNm(e.currentTarget.value as DONAME_VALUE);
            }}
          /> */
}
