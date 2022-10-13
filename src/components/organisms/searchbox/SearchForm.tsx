import React, { FC, useState, useRef } from "react";
import FlexBox from "../../atoms/flexbox/FlexBox";
import Form from "../../atoms/form/Form";
import SelectBox from "../../atoms/selectbox/SelectBox";
import Button from "../../atoms/button/Button";
import Input from "../../atoms/input/Input";
import { DONAME_VALUE } from "../../../types/administrativeDivision";
import { sigunguNmOptionsData } from "../../../core/formdata/SearchFormData";
import { SelectBoxData } from "../../../types/selectBoxData";

interface SearchFormProps {
  doSelectData: SelectBoxData;
  campThemeSelectData: SelectBoxData;
  onSubmit: (e: React.UIEvent<HTMLFormElement>) => void;
}
/**
 * use className per each element!
 * 
 * SearchForm per page
 * Landing page[
 * input style {
 *  bg-mono-white
 *  text-mono-black
//  *  text-headline3  
 * }
 * 
 * form style {
 *  flex-col
 *  bg-primary-lightgray
 *  dropshadow-md
 *  text-headline3
 * }
 * 
 * button style {
 *  bg-primary-blue
 *  text-mono-white
//  *  text-headline3
 * }]
 **********************
 * else page[
 * input style {
 *  bg-mono-white
 *  text-mono-black
//  *  text-body1  
 * }
 * 
 * form style {
 *  flex-row
 *  bg-primary-navy
 *  text-body1
 * }
 * 
 * button style {
 *  bg-primary-blue
 *  text-mono-white
//  *  text-body1
 * }]
 * 
 */
const SearchForm: FC<SearchFormProps> = ({ doSelectData, campThemeSelectData }) => {
  const keywordRef = useRef<HTMLInputElement>(null);
  const doNameRef = useRef<HTMLSelectElement>(null);
  const sigunguNameRef = useRef<HTMLSelectElement>(null);
  const campThemeRef = useRef<HTMLSelectElement>(null);
  const [selected, setSelected] = useState<DONAME_VALUE | "">("");

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    e.preventDefault();
    setSelected(e.currentTarget.value as DONAME_VALUE);
  };

  const handleSubmit = (e: React.UIEvent<HTMLFormElement>) => {
    e.preventDefault();

    const searchQuery = {
      keyword: keywordRef.current === null ? "" : keywordRef.current.value,
      doName: doNameRef.current === null ? "" : doNameRef.current.value,
      sigunguName: sigunguNameRef.current === null ? "" : sigunguNameRef.current.value,
      campTheme: campThemeRef.current === null ? "" : campThemeRef.current.value,
    };
    console.log(searchQuery);
  };

  return (
    <FlexBox className="">
      <Form method={"get"} className={""} onSubmit={handleSubmit}>
        <FlexBox className="flex-col">
          <Input
            id={"keyword"}
            ref={keywordRef}
            name={"keyword"}
            type={"text"}
            placeholder={"캠핑장명을 입력해주세요"}
            className={"border border-primary-bordergray"}
            required={false}
            // pattern={}
          />
          <FlexBox className="">
            <SelectBox
              id={doSelectData.id}
              ref={doNameRef}
              options={doSelectData.options}
              name={doSelectData.name}
              className={undefined}
              placeholder={"전체/도"}
              onChange={handleChange}
            />
            <SelectBox
              id={doSelectData.id}
              ref={sigunguNameRef}
              options={sigunguNmOptionsData(selected as DONAME_VALUE)}
              name={"sigunguName"}
              className={undefined}
              placeholder={"전체/시/군"}
            />
          </FlexBox>
          <SelectBox
            id={campThemeSelectData.id}
            ref={campThemeRef}
            options={campThemeSelectData.options}
            name={campThemeSelectData.name}
            className={undefined}
            placeholder={"전체/테마"}
          />
          <FlexBox className={""}>
            <Button type="button" size="lg" className="border border-black">
              상세검색
            </Button>
            <Button type="submit" size="lg" className="border border-black">
              검색
            </Button>
          </FlexBox>
        </FlexBox>
      </Form>
    </FlexBox>
  );
};

export default SearchForm;
