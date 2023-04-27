"use client";
import React, { FC, useState, useRef } from "react";
import { useRouter } from "next/navigation";
import { MdMap, MdSearch } from "react-icons/md";
import FlexBox from "@/components/atoms/flexbox/FlexBox";
import Form from "@/components/atoms/form/Form";
import SelectBox from "@/components/atoms/selectbox/SelectBox";
import Button from "@/components/atoms/button/Button";
import Input from "@/components/atoms/input/Input";
import Modal from "@/components/atoms/modal/Modal";
import AdvancedSearchForm from "@/components/organisms/common/advanced_searchbox/AdvancedSearchForm";
import { doSelectData, sigunguNmOptionsData } from "@/core/formdata/SearchFormData";
import { DONAME_VALUE } from "@/types/administrativeDivision";

interface SearchFormProps {
  type: "landing" | "default";
  flexDirection: string;
  fontSize: string;
  space: string;
  formWidth: string;
  width: {
    keywordInput: string;
    dosiSelect: string;
    button: string;
  };
  buttonSize: string;
}

const SearchForm: FC<SearchFormProps> = ({ type, ...props }) => {
  const router = useRouter();
  const DoData = doSelectData;

  const modalRef = useRef<HTMLDialogElement>(null);
  const keywordRef = useRef<HTMLInputElement>(null);
  const doNameRef = useRef<HTMLSelectElement>(null);
  const sigunguNameRef = useRef<HTMLSelectElement>(null);

  const [selected, setSelected] = useState<DONAME_VALUE | "">("");

  const openModal = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    modalRef.current?.showModal();
  };

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    e.preventDefault();
    setSelected(e.currentTarget.value as DONAME_VALUE);
  };

  const handleSubmit = (e: React.UIEvent<HTMLFormElement>) => {
    e.preventDefault();

    const params = {
      facltNm: keywordRef.current?.value === "" ? null : keywordRef.current?.value,
      doNm: doNameRef.current?.value === "" ? null : doNameRef.current?.value,
      sigunguNm: sigunguNameRef.current?.value === "" ? null : sigunguNameRef.current?.value,
    };

    const query = encodeURIComponent(JSON.stringify(params));
    router.push(encodeURI("/search?query=" + query));
  };
  return (
    <>
      <Form
        method={"get"}
        className={`flex flex-${props.flexDirection} items-center justify-center ${props.formWidth}`}
        onSubmit={handleSubmit}
      >
        <FlexBox className={`items-center justify-around ${props.width.keywordInput} h-12 ${props.space} graybox`}>
          <MdSearch className="px-1" size={"32px"} />
          <Input
            id={"keyword"}
            ref={keywordRef}
            name={"keyword"}
            type={"text"}
            placeholder={"캠핑장명을 입력해주세요"}
            className={`${props.fontSize}`}
            required={false}
          />
        </FlexBox>

        <FlexBox className={`items-center justify-center w-full ${props.width.dosiSelect} ${props.space} graybox`}>
          <FlexBox className="items-center w-6/12 h-12 ">
            <MdMap className="px-1" size={"32px"} />
            <SelectBox
              id={DoData.id}
              ref={doNameRef}
              options={DoData.options}
              name={DoData.name}
              className={`${props.fontSize}`}
              placeholder={"전체/도"}
              onChange={handleChange}
            />
          </FlexBox>
          <FlexBox className="items-center w-6/12 h-12 border-l border-monoscale-1">
            <MdMap className="px-1" size={"32px"} />
            <SelectBox
              id={DoData.id}
              ref={sigunguNameRef}
              options={sigunguNmOptionsData(selected as DONAME_VALUE)}
              name={"sigunguName"}
              className={`${props.fontSize}`}
              placeholder={"전체/시/군"}
            />
          </FlexBox>
        </FlexBox>
        <FlexBox className={`justify-center ${props.width.button} h-12`}>
          <Button
            type="submit"
            size={`${props.buttonSize as "lg" | "base"}`}
            className="font-semibold btn-primary"
            onClick={openModal}
          >
            상세검색
          </Button>
          <Button type="submit" size={`${props.buttonSize as "lg" | "base"}`} className="font-semibold btn-primary">
            검색하기
          </Button>
        </FlexBox>
      </Form>

      <Modal ref={modalRef} className={""} title={"상세검색"}>
        <FlexBox className="flex flex-col items-center justify-center p-6 border border-primary-bordergray">
          <AdvancedSearchForm />
        </FlexBox>
      </Modal>
    </>
  );
};

export default SearchForm;
