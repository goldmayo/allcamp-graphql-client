import React, { FC, useState, useRef } from "react";
import FlexBox from "../../atoms/flexbox/FlexBox";
import Form from "../../atoms/form/Form";
import SelectBox from "../../atoms/selectbox/SelectBox";
import Button from "../../atoms/button/Button";
import Input from "../../atoms/input/Input";
import { DONAME_VALUE } from "../../../types/administrativeDivision";
import { sigunguNmOptionsData } from "../../../core/formdata/SearchFormData";
import { SelectBoxData } from "../../../types/selectBoxData";
import { MdMap, MdSearch } from "react-icons/md";
import { FaTags } from "react-icons/fa";

interface SearchFormProps {
  doSelectData: SelectBoxData;
  campThemeSelectData: SelectBoxData;
  onSubmit: (e: React.UIEvent<HTMLFormElement>) => void;
  type: "landing" | "default";
}

const SearchForm: FC<SearchFormProps> = ({ doSelectData, campThemeSelectData, type }) => {
  const keywordRef = useRef<HTMLInputElement>(null);
  const doNameRef = useRef<HTMLSelectElement>(null);
  const sigunguNameRef = useRef<HTMLSelectElement>(null);
  const campThemeRef = useRef<HTMLSelectElement>(null);
  const [selected, setSelected] = useState<DONAME_VALUE | "">("");

  const SHAPE = {
    flexDirection: type === "landing" ? "col" : "row",
    fontSize: type === "landing" ? "text-headline3" : "text-body1",
    space: type === "landing" ? "mb-4" : "mx-1",
    width: {
      keywordInput: type === "landing" ? "w-full" : " w-3/12",
      dosiSelect: type === "landing" ? "w-full" : "w-4/12",
      themeSelect: type === "landing" ? "w-full" : "w-2/12",
      button: type === "landing" ? "w-full" : "w-3/12",
    },
    buttonSize: type === "landing" ? "lg" : "sm",
  };

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
    <Form
      method={"get"}
      className={`flex flex-${SHAPE.flexDirection} items-center justify-around w-full`}
      onSubmit={handleSubmit}
    >
      <FlexBox className={`items-center justify-around ${SHAPE.width.keywordInput} h-12 ${SHAPE.space} graybox`}>
        <MdSearch className="px-1" size={"32px"} />
        <Input
          id={"keyword"}
          ref={keywordRef}
          name={"keyword"}
          type={"text"}
          placeholder={"캠핑장명을 입력해주세요"}
          className={`${SHAPE.fontSize}`}
          required={false}
          // pattern={}
        />
      </FlexBox>

      <FlexBox className={`items-center justify-center w-full ${SHAPE.width.dosiSelect} ${SHAPE.space} graybox`}>
        <FlexBox className="items-center w-6/12 h-12 ">
          <MdMap className="px-1" size={"32px"} />
          <SelectBox
            id={doSelectData.id}
            ref={doNameRef}
            options={doSelectData.options}
            name={doSelectData.name}
            className={`${SHAPE.fontSize}`}
            placeholder={"전체/도"}
            onChange={handleChange}
          />
        </FlexBox>
        <FlexBox className="items-center w-6/12 h-12 border-l border-monoscale-1">
          <MdMap className="px-1" size={"32px"} />
          <SelectBox
            id={doSelectData.id}
            ref={sigunguNameRef}
            options={sigunguNmOptionsData(selected as DONAME_VALUE)}
            name={"sigunguName"}
            className={`${SHAPE.fontSize}`}
            placeholder={"전체/시/군"}
          />
        </FlexBox>
      </FlexBox>

      <FlexBox className={`items-center justify-around ${SHAPE.width.themeSelect} h-12 ${SHAPE.space} graybox`}>
        <FaTags className="px-1" size={"32px"} />
        <SelectBox
          id={campThemeSelectData.id}
          ref={campThemeRef}
          options={campThemeSelectData.options}
          name={campThemeSelectData.name}
          className={`${SHAPE.fontSize}`}
          placeholder={"전체/테마"}
        />
      </FlexBox>

      <FlexBox className={`justify-center ${SHAPE.width.button} h-12`}>
        <Button type="button" size={`${SHAPE.buttonSize as "lg" | "sm"}`} className="btn-primary">
          상세검색
        </Button>
        <Button type="submit" size={`${SHAPE.buttonSize as "lg" | "sm"}`} className="btn-primary">
          검색하기
        </Button>
      </FlexBox>
    </Form>
  );
};

export default SearchForm;
